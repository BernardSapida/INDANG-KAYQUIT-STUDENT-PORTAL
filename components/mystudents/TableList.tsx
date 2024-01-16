import { Dispatch, SetStateAction, useState, useEffect } from "react";

import Spinner from "react-bootstrap/Spinner";

import DataTable from "react-data-table-component";

function TableList({ studentList }: { studentList: Record<string, any>[] }) {
    const [tableLoading, setLoadingTable] = useState<boolean>(false);
    const table_columns = [
        {
            name: "Full Name",
            selector: (student: Record<string, any>) => student.Fullname,
            sortable: true,
        },
        {
            name: "Grade & Section",
            selector: (student: Record<string, any>) => student.Section,
            sortable: true,
        },
        {
            name: "Student Number",
            selector: (student: Record<string, any>) => student["Student Number"],
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
            data={studentList}
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