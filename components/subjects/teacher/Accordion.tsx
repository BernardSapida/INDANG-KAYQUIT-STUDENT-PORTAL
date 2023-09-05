// React
import { Dispatch, SetStateAction, useState } from 'react';

// React Bootstrap Components
import Accordion from 'react-bootstrap/Accordion';
import Button from "react-bootstrap/Button";
import Table from 'react-bootstrap/Table';

// React-Icons
import { FaEdit } from 'react-icons/fa';

// CSS
import style from "@/public/css/teacher-accordion.module.css";
import { Section, Subject } from '@/types/global';

function AccordionDropdown({
    sectionInfo,
    setSectionInfo,
    setModalShow,
    uniqueKey
}: {
    sectionInfo: Section,
    setSectionInfo: Dispatch<SetStateAction<Section | Record<string, any>>>;
    setModalShow: Dispatch<SetStateAction<boolean>>;
    uniqueKey: string
}) {
    const { academicYear, gradeLevel, name, subjects } = sectionInfo;

    const showModal = () => {
        setSectionInfo(sectionInfo);
        setModalShow(true);
    }

    return (
        <>
            <Accordion className='mb-3'>
                <Accordion.Item eventKey={uniqueKey}>
                    <Accordion.Header>
                        <strong>Academic Year: {academicYear} | {gradeLevel} - {name}</strong>
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
                                    sectionInfo.subjects.map((d: Subject, key: number) => (
                                        <tr key={key}>
                                            <td>{d.subjectName}</td>
                                            <td>{d.time}</td>
                                            <td>{d.day}</td>
                                            <td>{d.room}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </Table>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    );
}

export default AccordionDropdown;