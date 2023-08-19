// Next Modules
import dynamic from "next/dynamic";

// React Modules
import { useState } from "react";

// React Bootstrap Components
import Button from "react-bootstrap/Button";

// React-Icons
import { MdSubject } from 'react-icons/md';
import { AiOutlinePlus } from 'react-icons/ai';

// Components
import AccordionDropdown from "@/components/teacher/subjects/Accordion";
const ModalForm = dynamic(() => import("@/components/teacher/subjects/ModalForm"), {
    ssr: false,
});

// CSS
import style from "@/public/css/teacher-subjects.module.css";

function Subjects() {
    const [modalShow, setModalShow] = useState(true);
    const data = [
        {
            academicYear: "2021-2022",
            section: "5 - Faith",
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
            section: "6 - Peace",
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

    return (
        <div className="mb-5">
            <div className={`${style.title}`}>
                <h1><MdSubject /> Sections & Subjects</h1>

            </div>
            <div className={`${style.container}`}>
                <Button type="button" className={`d-block ms-auto mb-3 ${style.btn_add}`} onClick={() => setModalShow(true)}>
                    <AiOutlinePlus /> Add subject
                </Button>
                {
                    data.map((d, key) => (
                        <AccordionDropdown
                            key={key}
                            academicYear={d.academicYear}
                            section={d.section}
                            subjects={d.subjects}
                            uniqueKey={key.toString()}
                        />
                    ))
                }
            </div>
            <ModalForm modalShow={modalShow} setModalShow={setModalShow} />
        </div>
    );
}

export default Subjects;