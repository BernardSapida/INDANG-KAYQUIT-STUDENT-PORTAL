import axios from "axios";

import { GetServerSideProps, GetServerSidePropsContext } from "next";
import dynamic from "next/dynamic";

import { getSession } from "next-auth/react";

import { useEffect, useState } from "react";

import Ripples from 'react-ripples'

import Button from "react-bootstrap/Button";

import { MdSubject } from 'react-icons/md';
import { AiOutlinePlus } from 'react-icons/ai';

import { Section } from "@/types/global";

import AccordionDropdown from "@/components/subjects/teacher/Accordion";
const AddModalForm = dynamic(() => import("@/components/subjects/teacher/AddModalForm"), {
    ssr: false,
});
const EditModalForm = dynamic(() => import("@/components/subjects/teacher/EditModalForm"), {
    ssr: false,
});

import headerStyle from "@/public/css/section-header.module.css";
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
                sectionsList: sectionsList.data
            },
        };
    } catch (error) {
        return {
            props: { error: "Error" },
        };
    }
};

function Subjects({ sectionsList }: { sectionsList: Section[] }) {
    const [addmodalShow, setAddModalShow] = useState(false);
    const [editModalShow, setEditModalShow] = useState(false);
    const [sectionInfo, setSectionInfo] = useState<Section | Record<string, any>>({});
    const [sections, setSections] = useState<Section[]>([]);

    useEffect(() => setSections(sectionsList), [sectionsList]);

    return (
        <section className={`mb-5 ${headerStyle.header_section}`}>
            <div className={`${headerStyle.title_container}`}>
                <h1><MdSubject /> Subjects</h1>
            </div>
            <Ripples color="rgba(255, 255, 255, 0.3)" during={2000} className="d-grid rounded">
                <Button type="button" className={`d-block ms-auto mb-3 ${style.btn_add}`} onClick={() => setAddModalShow(true)}>
                    <AiOutlinePlus /> Add subject
                </Button>
            </Ripples>
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
            <AddModalForm modalShow={addmodalShow} setModalShow={setAddModalShow} setSections={setSections} />
            <EditModalForm
                sectionInfo={sectionInfo}
                modalShow={editModalShow}
                setModalShow={setEditModalShow}
                setSections={setSections}
            />
        </section>
    );
}

export default Subjects;