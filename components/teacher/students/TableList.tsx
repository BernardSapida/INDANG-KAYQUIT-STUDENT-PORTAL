// React Modules
import { useState, useEffect } from "react";

// React Bootstrap Components
import Spinner from "react-bootstrap/Spinner";

// React Data Table Component
import DataTable from "react-data-table-component";

function TableList() {
    const [tableLoading, setLoadingTable] = useState<boolean>(false);
    const table_columns = [
        {
            name: "Full Name",
            selector: (row: Record<any, any>) => row.fullname,
            sortable: true,
        },
        {
            name: "Grade & Section",
            selector: (row: Record<any, any>) => row.gradeAndSection,
            sortable: true,
        },
        {
            name: "Student LRN",
            selector: (row: Record<any, any>) => row.studentLRN,
        },
        {
            name: "Student Number",
            selector: (row: Record<any, any>) => row.studentNumber,
        }
    ];
    const data = [
        {
            fullname: "Agatha Sapida",
            gradeAndSection: "6 - Peace",
            studentLRN: "12345678910",
            studentNumber: "202302168"
        },
        {
            fullname: "Bernard Sapida",
            gradeAndSection: "6 - Peace",
            studentLRN: "12345678910",
            studentNumber: "202302168"
        },
        {
            fullname: "Bernard Sapida",
            gradeAndSection: "6 - Peace",
            studentLRN: "12345678910",
            studentNumber: "202302168"
        },
        {
            fullname: "Bernard Sapida",
            gradeAndSection: "6 - Peace",
            studentLRN: "12345678910",
            studentNumber: "202302168"
        },
        {
            fullname: "Bernard Sapida",
            gradeAndSection: "6 - Peace",
            studentLRN: "12345678910",
            studentNumber: "202302168"
        },
        {
            fullname: "Bernard Sapida",
            gradeAndSection: "6 - Peace",
            studentLRN: "12345678910",
            studentNumber: "202302168"
        },
        {
            fullname: "Bernard Sapida",
            gradeAndSection: "6 - Peace",
            studentLRN: "12345678910",
            studentNumber: "202302168"
        },
        {
            fullname: "Bernard Sapida",
            gradeAndSection: "6 - Peace",
            studentLRN: "12345678910",
            studentNumber: "202302168"
        },
        {
            fullname: "Bernard Sapida",
            gradeAndSection: "6 - Peace",
            studentLRN: "12345678910",
            studentNumber: "202302168"
        },
        {
            fullname: "Bernard Sapida",
            gradeAndSection: "6 - Peace",
            studentLRN: "12345678910",
            studentNumber: "202302168"
        },
        {
            fullname: "Bernard Sapida",
            gradeAndSection: "6 - Peace",
            studentLRN: "12345678910",
            studentNumber: "202302168"
        },
        {
            fullname: "Bernard Sapida",
            gradeAndSection: "6 - Peace",
            studentLRN: "12345678910",
            studentNumber: "202302168"
        },
        {
            fullname: "Bernard Sapida",
            gradeAndSection: "6 - Peace",
            studentLRN: "12345678910",
            studentNumber: "202302168"
        },
        {
            fullname: "Bernard Sapida",
            gradeAndSection: "6 - Peace",
            studentLRN: "12345678910",
            studentNumber: "202302168"
        },
        {
            fullname: "Bernard Sapida",
            gradeAndSection: "6 - Peace",
            studentLRN: "12345678910",
            studentNumber: "202302168"
        },
        {
            fullname: "Bernard Sapida",
            gradeAndSection: "6 - Peace",
            studentLRN: "12345678910",
            studentNumber: "202302168"
        },
        {
            fullname: "Bernard Sapida",
            gradeAndSection: "6 - Peace",
            studentLRN: "12345678910",
            studentNumber: "202302168"
        },
        {
            fullname: "Bernard Sapida",
            gradeAndSection: "6 - Peace",
            studentLRN: "12345678910",
            studentNumber: "202302168"
        },
        {
            fullname: "Bernard Sapida",
            gradeAndSection: "6 - Peace",
            studentLRN: "12345678910",
            studentNumber: "202302168"
        },
        {
            fullname: "Bernard Sapida",
            gradeAndSection: "6 - Peace",
            studentLRN: "12345678910",
            studentNumber: "202302168"
        },
        {
            fullname: "Bernard Sapida",
            gradeAndSection: "6 - Peace",
            studentLRN: "12345678910",
            studentNumber: "202302168"
        },
        {
            fullname: "Bernard Sapida",
            gradeAndSection: "6 - Peace",
            studentLRN: "12345678910",
            studentNumber: "202302168"
        }
    ];

    return (
        <DataTable
            customStyles={{
                headCells: {
                    style: {
                        backgroundColor: "#212529",
                        color: "white",
                        fontSize: "16px",
                        fontFamily: "system-ui, -apple-system",
                    },
                },
                rows: {
                    style: {
                        fontSize: "16px",
                        fontFamily: "system-ui, -apple-system",
                    },
                },
            }}
            columns={table_columns}
            data={data}
            pagination
            persistTableHead
            responsive={true}
            striped={true}
            highlightOnHover={true}
            progressPending={tableLoading}
            progressComponent={
                <span className="d-flex align-items-center">
                    <Spinner animation="grow" className="my-3" size="sm" /> &nbsp;
                    Loading...
                </span>
            }
        />
        // <Table className='text-center' bordered striped responsive>
        //     <thead>
        //         <tr>
        //             <th className="bg-dark text-light">Full Name</th>
        //             <th className="bg-dark text-light">Grade & Section</th>
        //             <th className="bg-dark text-light">Student LRN</th>
        //             <th className="bg-dark text-light">Student Number</th>
        //         </tr>
        //     </thead>
        //     <tbody>
        //         {
        //             data.map((d, key) => (
        //                 <tr>
        //                     <td>{d.fullname}</td>
        //                     <td>{d.gradeAndSection}</td>
        //                     <td>{d.studentLRN}</td>
        //                     <td>{d.studentNumber}</td>
        //                 </tr>
        //             ))
        //         }
        //     </tbody>
        // </Table >
    );
}

export default TableList;