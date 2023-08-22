// Next Modules
import dynamic from "next/dynamic";

// React
import { Dispatch, SetStateAction, useState } from 'react';

// React Bootstrap Components
import Accordion from 'react-bootstrap/Accordion';
import Button from "react-bootstrap/Button";
import Table from 'react-bootstrap/Table';

// React-Icons
import { FaEdit } from 'react-icons/fa';

// Components
const EditModalForm = dynamic(() => import("@/components/teacher/subjects/EditModalForm"), {
    ssr: false,
});

// CSS
import style from "@/public/css/teacher-accordion.module.css";

function AccordionDropdown({
    sectionInfo,
    setSectionInfo,
    setModalShow,
    uniqueKey
}: {
    sectionInfo: Record<string, any>,
    setSectionInfo: Dispatch<SetStateAction<{}>>;
    setModalShow: Dispatch<SetStateAction<boolean>>;
    uniqueKey: string
}) {
    const { academicYear, gradeLevel, section, subjects } = sectionInfo;

    const showModal = () => {
        setSectionInfo(sectionInfo);
        setModalShow(true);
    }

    return (
        <>
            <Accordion className='mb-3'>
                <Accordion.Item eventKey={uniqueKey}>
                    <Accordion.Header>
                        <strong>Academic Year: {academicYear} | {gradeLevel} - {section}</strong>
                    </Accordion.Header>
                    <Accordion.Body>
                        <Button type="button" className={`d-block ms-auto mb-2 ${style.btn_add}`} onClick={showModal}>
                            <FaEdit /> Edit Table
                        </Button>
                        <Table className='text-center' bordered striped responsive>
                            <thead>
                                <tr>
                                    <th className="bg-dark text-light">Subject Name</th>
                                    <th className="bg-dark text-light">Time</th>
                                    <th className="bg-dark text-light">Day</th>
                                    <th className="bg-dark text-light">Room</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    sectionInfo.subjects.map((d: Record<string, any>, key: number) => (
                                        <tr key={key}>
                                            <td>{d.subjectName}</td>
                                            <td>{d.time}</td>
                                            <td>{d.day}</td>
                                            <td>{d.room}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </Table >
                    </Accordion.Body >
                </Accordion.Item >
            </Accordion >
        </>
    );
}

export default AccordionDropdown;