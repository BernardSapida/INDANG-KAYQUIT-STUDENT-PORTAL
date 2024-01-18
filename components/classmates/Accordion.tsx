import { SectionDetails } from '@/types/global';
import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';

function AccordionDropdown(
    {
        sectionDetails,
        students,
        uniqueKey
    }: {
        sectionDetails: SectionDetails,
        students: any[],
        uniqueKey: string
    }
) {
    const { gradeLevel, name, academicYear } = sectionDetails;
    const rows = students.map((student, key) => {
        return (
            <tr key={key}>
                <td>{key + 1}</td>
                <td>{student.fullname}</td>
                <td>{student.sex}</td>
                <td>{student.lrn}</td>
                <td>{student.email}</td>
            </tr>
        )
    });

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
                                <th className="bg-dark text-light">No.</th>
                                <th className="bg-dark text-light">Student Fullname</th>
                                <th className="bg-dark text-light ">Email</th>
                                <th className="bg-dark text-light">LRN</th>
                                <th className="bg-dark text-light">Sex</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows}
                        </tbody>
                    </Table>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default AccordionDropdown;