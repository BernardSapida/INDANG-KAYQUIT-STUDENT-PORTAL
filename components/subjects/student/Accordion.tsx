import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';

import { StudentSection } from '@/types/global';

function AccordionDropdown({
    section,
    uniqueKey
}: {
    section: StudentSection,
    uniqueKey: string
}) {
    const { sectionDetails: { gradeLevel, name, academicYear, subjects } } = section;

    return (
        <Accordion className='mb-3'>
            <Accordion.Item eventKey={uniqueKey}>
                <Accordion.Header>
                    <strong>Academic Year: {academicYear} | {gradeLevel} - {name}</strong>
                </Accordion.Header>
                <Accordion.Body>
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
                                subjects?.map((d: Record<string, any>, key: number) => (
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
    );
}

export default AccordionDropdown;