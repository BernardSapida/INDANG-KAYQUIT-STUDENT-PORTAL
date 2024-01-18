import { Dispatch, SetStateAction, useState, useEffect } from "react";

import Spinner from "react-bootstrap/Spinner";
import { Button } from "react-bootstrap";

import DataTable from "react-data-table-component";

import Ripples from 'react-ripples'

import { FaEdit } from 'react-icons/fa';
import { Student } from "@/types/global";

function TableList({
    studentList,
    setStudent,
    setModalShow
}: {
    studentList: Student[];
    setStudent: Dispatch<SetStateAction<Student>>;
    setModalShow: Dispatch<SetStateAction<boolean>>;
}) {
    const [tableLoading, setLoadingTable] = useState<boolean>(false);
    const table_columns = [
        {
            name: "Full Name",
            selector: (student: Student) => student.personalDetails?.fullname,
            sortable: true,
        },
        {
            name: "Grade & Section",
            selector: (student: Student) => `${student.enrollmentDetails.currentGradeLevel} - ${student.enrollmentDetails.currentSection}`,
            sortable: true,
        },
        {
            name: "LRN",
            selector: (student: Student) => student.enrollmentDetails.lrn,
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