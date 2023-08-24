// React Bootstrap Components
import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';

function AccordionDropdown(
    {
        sectionDetails,
        grades,
        uniqueKey
    }: {
        sectionDetails: Record<string, any>,
        grades: any[],
        uniqueKey: string
    }
) {
    let finalGWA = 0;
    const rows = grades.map((d, key) => {
        finalGWA += (d.firstQuarter + d.secondQuarter + d.thirdQuarter + d.fourthQuarter) / 4;
        return (
            <tr key={key}>
                <td>{d.subjectName}</td>
                <td>{d.firstQuarter}</td>
                <td>{d.secondQuarter}</td>
                <td>{d.thirdQuarter}</td>
                <td>{d.fourthQuarter}</td>
                <td>{((d.firstQuarter + d.secondQuarter + d.thirdQuarter + d.fourthQuarter) / 4).toFixed(2)}</td>
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
                                <td>{(finalGWA / grades.length).toFixed(2)}</td>
                            </tr>
                        </tbody>
                    </Table >
                </Accordion.Body >
            </Accordion.Item >
        </Accordion >
    );
}

export default AccordionDropdown;