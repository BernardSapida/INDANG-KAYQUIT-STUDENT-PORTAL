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

// Components
import AccordionDropdown from "@/components/teacher/subjects/Accordion";
const AddModalForm = dynamic(() => import("@/components/teacher/subjects/AddModalForm"), {
    ssr: false,
});
const EditModalForm = dynamic(() => import("@/components/teacher/subjects/EditModalForm"), {
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
    sectionsList: any[]
}) {
    const [addmodalShow, setAddModalShow] = useState(false);
    const [editModalShow, setEditModalShow] = useState(false);
    const [sectionInfo, setSectionInfo] = useState({});
    const [sections, setSections] = useState<any[]>([]);
    const data = [
        {
            academicYear: "2021-2022",
            gradeLevel: 5,
            section: "Faith",
            subjects: [
                {
                    subjectName: "English",
                    time: "8:00 AM - 8:45 AM",
                    day: "Monday",
                    room: "Classroom 1A"
                },
                {
                    subjectName: "Math",
                    time: "9:00 AM - 9:45 AM",
                    day: "Monday",
                    room: "Classroom 1A"
                },
                {
                    subjectName: "Science",
                    time: "10:00 AM - 10:45 AM",
                    day: "Tuesday",
                    room: "Science Lab"
                },
                {
                    subjectName: "Physical Education (PE)",
                    time: "11:00 AM - 11:45 AM",
                    day: "Tuesday",
                    room: "Gymnasium"
                },
                {
                    subjectName: "Music",
                    time: "9:00 AM - 9:45 AM",
                    day: "Wednesday",
                    room: "Music Room"
                },
                {
                    subjectName: "Social Studies",
                    time: " 11:00 AM - 11:45 AM",
                    day: "Wednesday",
                    room: "Classroom 1A"
                },
                {
                    subjectName: "Computer Science",
                    time: " 11:00 AM - 11:45 AM",
                    day: "Thursday",
                    room: "Computer Lab"
                },
                {
                    subjectName: "Library",
                    time: "8:00 AM - 8:45 AM",
                    day: "Friday",
                    room: "Library"
                }
            ],
            grades: [
                {
                    subjectName: "english",
                    firstQuarter: 85,
                    secondQuarter: 88,
                    thirdQuarter: 90,
                    fourthQuarter: 92
                },
                {
                    subjectName: "math",
                    firstQuarter: 90,
                    secondQuarter: 88,
                    thirdQuarter: 85,
                    fourthQuarter: 88
                },
                {
                    subjectName: "science",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "physical education (PE)",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "music",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "social studies",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Computer Science",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Library",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                }
            ]
        },
        {
            academicYear: "2022-2023",
            gradeLevel: 6,
            section: "Peace",
            subjects: [
                {
                    subjectName: "english",
                    time: "8:00 AM - 8:45 AM",
                    day: "Monday",
                    room: "Classroom 1A"
                },
                {
                    subjectName: "math",
                    time: "9:00 AM - 9:45 AM",
                    day: "Monday",
                    room: "Classroom 1A"
                },
                {
                    subjectName: "science",
                    time: "10:00 AM - 10:45 AM",
                    day: "Tuesday",
                    room: "Science Lab"
                },
                {
                    subjectName: "Physical Education (PE)",
                    time: "11:00 AM - 11:45 AM",
                    day: "Tuesday",
                    room: "Gymnasium"
                },
                {
                    subjectName: "Music",
                    time: "9:00 AM - 9:45 AM",
                    day: "Wednesday",
                    room: "Music Room"
                },
                {
                    subjectName: "Social Studies",
                    time: " 11:00 AM - 11:45 AM",
                    day: "Wednesday",
                    room: "Classroom 1A"
                },
                {
                    subjectName: "Computer Science",
                    time: " 11:00 AM - 11:45 AM",
                    day: "Thursday",
                    room: "Computer Lab"
                },
                {
                    subjectName: "Library",
                    time: "8:00 AM - 8:45 AM",
                    day: "Friday",
                    room: "Library"
                }
            ],
            grades: [
                {
                    subjectName: "english",
                    firstQuarter: 85,
                    secondQuarter: 88,
                    thirdQuarter: 90,
                    fourthQuarter: 92
                },
                {
                    subjectName: "math",
                    firstQuarter: 90,
                    secondQuarter: 88,
                    thirdQuarter: 85,
                    fourthQuarter: 88
                },
                {
                    subjectName: "science",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "physical education (PE)",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "music",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "social studies",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Computer Science",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Library",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                }
            ]
        }
    ];

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