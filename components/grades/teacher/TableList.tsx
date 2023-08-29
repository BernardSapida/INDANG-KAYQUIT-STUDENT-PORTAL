// React Modules
import { Dispatch, SetStateAction, useState, useEffect } from "react";

// React Bootstrap Components
import Spinner from "react-bootstrap/Spinner";
import { Button } from "react-bootstrap";

// React Data Table Component
import DataTable, { Direction } from "react-data-table-component";

// React-Ripples
import Ripples from 'react-ripples'

// React-Icons
import { FaEdit } from 'react-icons/fa';

// CSS
import style from "@/public/css/teacher-grades.module.css";
import { Student } from "@/types/global";

function TableList({
    studentList,
    setStudent,
    setModalShow
}: {
    studentList: Student[],
    setStudent: Dispatch<SetStateAction<Student | Record<string, any>>>;
    setModalShow: Dispatch<SetStateAction<boolean>>;
}) {
    const [tableLoading, setLoadingTable] = useState<boolean>(false);
    const table_columns = [
        {
            name: "Full Name",
            selector: (student: Student) => student.personalDetails.fullname,
            sortable: true,
        },
        {
            name: "Student LRN",
            selector: (student: Student) => student.enrollmentDetails.lrn,
        },
        {
            name: "Student Number",
            selector: (student: Student) => student.enrollmentDetails.studentNumber,
        },
        {
            name: "Actions",
            button: true,
            cell: (student: Student) => (
                <Ripples color="rgba(255, 255, 255, 0.3)" during={2000} className="d-grid rounded">
                    <Button
                        size="sm"
                        variant="dark"
                        onClick={() => {
                            setStudent(student);
                            setModalShow(true);
                        }}
                    >
                        <FaEdit className="mb-1" /> Edit
                    </Button>
                </Ripples>

            ),
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
                        width: "100px"
                    },
                },
                rows: {
                    style: {
                        fontSize: "16px",
                        fontFamily: "system-ui, -apple-system",
                    },
                },
                cells: {
                    style: {
                        maxWidth: '20px',
                        paddingRight: '8px',
                    },
                },
            }}
            columns={table_columns}
            data={studentList}
            pagination
            persistTableHead
            responsive={true}
            striped={true}
            highlightOnHover={true}
            progressPending={tableLoading}
            direction={Direction.AUTO}
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