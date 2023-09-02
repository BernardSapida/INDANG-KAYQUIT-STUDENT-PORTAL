// React Bootstrap Components
import { Student, Section, SectionDetails } from '@/types/global';
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
    let finalGWA = 0;
    const rows = students.map((student, key) => {
        return (
            <tr key={key}>
                <td>{key + 1}</td>
                <td>{student.fullname}</td>
                <td>{student.sex}</td>
                <td>{student.studentNumber}</td>
                <td>{student.email}</td>
            </tr>
        )
    });

    return (
        <Accordion className='mb-3'>
            <Accordion.Item eventKey={uniqueKey}>
                <Accordion.Header>
                    <strong>Academic Year: {sectionDetails.academicYear} | {sectionDetails.gradeLevel} - {sectionDetails.name}</strong>
                </Accordion.Header>
                <Accordion.Body>
                    <Table className='text-center' bordered striped responsive>
                        <thead>
                            <tr>
                                <th className="bg-dark text-light">No.</th>
                                <th className="bg-dark text-light">Student Fullname</th>
                                <th className="bg-dark text-light ">Email</th>
                                <th className="bg-dark text-light">Student Number</th>
                                <th className="bg-dark text-light">Sex</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows}
                        </tbody>
                    </Table >
                </Accordion.Body >
            </Accordion.Item >
        </Accordion >
    );
}

export default AccordionDropdown;