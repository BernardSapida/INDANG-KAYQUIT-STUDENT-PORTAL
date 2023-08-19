// React Bootstrap Components
import Accordion from 'react-bootstrap/Accordion';
import Button from "react-bootstrap/Button";
import Table from 'react-bootstrap/Table';

// React-Icons
import { FaEdit } from 'react-icons/fa';

// CSS
import style from "@/public/css/teacher-accordion.module.css";

function AccordionDropdown({ academicYear, section, subjects, uniqueKey }: { academicYear: string, section: string, subjects: any[], uniqueKey: string }) {
    return (
        <Accordion className='mb-3'>
            <Accordion.Item eventKey={uniqueKey}>
                <Accordion.Header>
                    <strong>Academic Year: {academicYear} | {section}</strong>
                </Accordion.Header>
                <Accordion.Body>
                    <Button type="button" className={`d-block ms-auto mb-2 ${style.btn_add}`}>
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
                                subjects.map((d, key) => (
                                    <tr>
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
    );
}

export default AccordionDropdown;