// React Bootstrap Components
import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';

function AccordionDropdown(
    {
        academicYear,
        section,
        grades,
        uniqueKey
    }: {
        academicYear: string,
        section: string,
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
                    <strong>Academic Year: {academicYear} | {section}</strong>
                </Accordion.Header>
                <Accordion.Body>
                    <Table className='text-center' bordered striped responsive>
                        <thead>
                            <tr>
                                <th className="bg-dark text-light">Subject Name</th>
                                <th className="bg-dark text-light">1st Quarter</th>
                                <th className="bg-dark text-light">2nd Quarter</th>
                                <th className="bg-dark text-light">3rd Quarter</th>
                                <th className="bg-dark text-light">4th Quarter</th>
                                <th className="bg-dark text-light">Final Grade</th>
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