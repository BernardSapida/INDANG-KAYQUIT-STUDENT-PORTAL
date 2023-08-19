// React Modules
import React from "react";
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
                }
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
    );
}

export default TableList;