import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';

import { Grade, SectionDetails } from '@/types/global';

function AccordionDropdown(
    {
        subjectDetails,
        grades,
        uniqueKey
    }: {
        subjectDetails: SectionDetails,
        grades: Grade[],
        uniqueKey: string
    }
) {
    const { gradeLevel, name, academicYear } = subjectDetails;
    let studentGWA = 0;

    const rows = grades.map((grade: Grade, key: number) => {
        const { subjectName, firstQuarter, secondQuarter, thirdQuarter, fourthQuarter } = grade;
        studentGWA += (firstQuarter + secondQuarter + thirdQuarter + fourthQuarter) / 4;

        return (
            <tr key={key}>
                <td>{subjectName}</td>
                <td>{firstQuarter}</td>
                <td>{secondQuarter}</td>
                <td>{thirdQuarter}</td>
                <td>{fourthQuarter}</td>
                <td>{((firstQuarter + secondQuarter + thirdQuarter + fourthQuarter) / 4).toFixed(2)}</td>
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
                                <th className="bg-dark text-light align-middle" rowSpan={2}>Subject Name</th>
                                <th className="bg-dark text-light" colSpan={4}>Quarter</th>
                                <th className="bg-dark text-light  align-middle" rowSpan={2}>Final Grade</th>
                            </tr>
                            <tr>
                                <th className="bg-dark text-light">1st</th>
                                <th className="bg-dark text-light">2nd</th>
                                <th className="bg-dark text-light">3rd</th>
                                <th className="bg-dark text-light">4th</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows}
                            <tr>
                                <td className='text-end' colSpan={5}>Final GWA</td>
                                <td>{(studentGWA / grades.length).toFixed(2)}</td>
                            </tr>
                        </tbody>
                    </Table>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default AccordionDropdown;