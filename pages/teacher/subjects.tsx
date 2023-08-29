// Axios
import axios from "axios";

// Next Modules
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import dynamic from "next/dynamic";

// Next-Auth Modules
import { getSession } from "next-auth/react";

// React Modules
import { useEffect, useState } from "react";

// React Bootstrap Components
import Button from "react-bootstrap/Button";

// React-Icons
import { MdSubject } from 'react-icons/md';
import { AiOutlinePlus } from 'react-icons/ai';

import { Section } from "@/types/global";

// Components
import AccordionDropdown from "@/components/subjects/teacher/Accordion";
const AddModalForm = dynamic(() => import("@/components/subjects/teacher/AddModalForm"), {
    ssr: false,
});
const EditModalForm = dynamic(() => import("@/components/subjects/teacher/EditModalForm"), {
    ssr: false,
});

// CSS
import style from "@/public/css/teacher-subjects.module.css";


export const getServerSideProps: GetServerSideProps = async (
    context: GetServerSidePropsContext
) => {
    try {
        const { req } = context;
        const session = await getSession({ req: req });

        if (!session || session.user.role != "teacher") {
            return { notFound: true }
        }

        const sectionsList = await axios.get(
            `${process.env.NEXTAUTH_URL}/api/v1/teacher/get/section-list`
        );

        return {
            props: {
                user: session.user,
                sectionsList: sectionsList.data
            },
        };
    } catch (error) {
        return {
            props: { error: "Error" },
        };
    }
};

function Subjects({
    user,
    sectionsList
}: {
    user: string
    sectionsList: Section[]
}) {
    const [addmodalShow, setAddModalShow] = useState(false);
    const [editModalShow, setEditModalShow] = useState(false);
    const [sectionInfo, setSectionInfo] = useState<Section | Record<string, any>>({});
    const [sections, setSections] = useState<Section[]>([]);

    useEffect(() => {
        setSections(sectionsList);
    }, [sectionsList])

    return (
        <div className="mb-5">
            <div className={`${style.title}`}>
                <h1><MdSubject /> Subjects</h1>
            </div>
            <div className={`${style.container}`}>
                <Button type="button" className={`d-block ms-auto mb-3 ${style.btn_add}`} onClick={() => setAddModalShow(true)}>
                    <AiOutlinePlus /> Add subject
                </Button>
                {
                    sections.map((d, key) => (
                        <AccordionDropdown
                            key={key}
                            sectionInfo={d}
                            setSectionInfo={setSectionInfo}
                            setModalShow={setEditModalShow}
                            uniqueKey={key.toString()}
                        />
                    ))
                }
            </div>
            <AddModalForm modalShow={addmodalShow} setModalShow={setAddModalShow} setSections={setSections} />
            <EditModalForm
                sectionInfo={sectionInfo}
                modalShow={editModalShow}
                setModalShow={setEditModalShow}
                sections={sections}
                setSections={setSections}
            />
        </div>
    );
}

export default Subjects;