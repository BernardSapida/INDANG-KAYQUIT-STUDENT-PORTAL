// React Bootstrap Components
import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';

import { Section } from '@/types/global';

function AccordionDropdown({
    section,
    uniqueKey
}: {
    section: Section,
    uniqueKey: string
}) {
    return (
        <Accordion className='mb-3'>
            <Accordion.Item eventKey={uniqueKey}>
                <Accordion.Header>
                    <strong>Academic Year: {section.sectionDetails.academicYear} | {section.sectionDetails.gradeLevel} - {section.sectionDetails.name}</strong>
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
                                section.sectionDetails.subjects?.map((d: Record<string, any>, key: number) => (
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
    );
}

export default AccordionDropdown;