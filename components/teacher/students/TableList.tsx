// React Modules
import { Dispatch, SetStateAction, useState, useEffect } from "react";

// React Bootstrap Components
import Spinner from "react-bootstrap/Spinner";
import { Button } from "react-bootstrap";

// React Data Table Component
import DataTable from "react-data-table-component";

// React-Ripples
import Ripples from 'react-ripples'

// React-Icons
import { FaEdit } from 'react-icons/fa';

function TableList({
    setStudent,
    setModalShow
}: {
    setStudent: Dispatch<SetStateAction<{}>>;
    setModalShow: Dispatch<SetStateAction<boolean>>;
}) {
    const [tableLoading, setLoadingTable] = useState<boolean>(false);
    const table_columns = [
        {
            name: "Full Name",
            selector: (row: Record<any, any>) => row.fullname,
            sortable: true,
        },
        {
            name: "Grade & Section",
            selector: (row: Record<any, any>) => `${row.gradeLevel} - ${row.section}`,
            sortable: true,
        },
        {
            name: "Student LRN",
            selector: (row: Record<any, any>) => row.studentLRN,
        },
        {
            name: "Student Number",
            selector: (row: Record<any, any>) => row.studentNumber,
        },
        {
            name: "Actions",
            button: true,
            cell: (row: Record<any, any>) => (
                <Ripples color="rgba(255, 255, 255, 0.3)" during={2000} className="d-grid rounded">
                    <Button
                        size="sm"
                        variant="dark"
                        onClick={() => {
                            setStudent(row);
                            setModalShow(true);
                        }}
                    >
                        <FaEdit className="mb-1" /> Edit
                    </Button>
                </Ripples>

            ),
        }
    ];
    const data = [
        {
            fullname: "Bernard Sapida",
            sex: "male",
            birthdate: "2002-12-17",
            religion: "roman_catholicism",
            civilStatus: "single",
            gradeLevel: "6",
            section: "Peace",
            studentLRN: "12345678910",
            studentNumber: "202308493",
            academicYear: "2023",
            address: "Imus, Cavite",
            contactNumber: "09472126029",
            guardian: "Shyvana R. Dragonite",
            kayquitEmailAccount: "bernard.sapida@kayquit.edu.ph",
            temporaryPassword: "K1xa041ke"
        },
        {
            fullname: "Charlie Sapida",
            sex: "male",
            birthdate: "2002-12-17",
            religion: "roman_catholicism",
            civilStatus: "single",
            gradeLevel: "6",
            section: "Peace",
            studentLRN: "12345678910",
            studentNumber: "202308493",
            academicYear: "2023",
            address: "Imus, Cavite",
            contactNumber: "09472126029",
            guardian: "Shyvana R. Dragonite",
            kayquitEmailAccount: "bernard.sapida@kayquit.edu.ph",
            temporaryPassword: "K1xa041ke"
        },
        {
            fullname: "Coby Sapida",
            sex: "male",
            birthdate: "2002-12-17",
            religion: "roman_catholicism",
            civilStatus: "single",
            gradeLevel: "6",
            section: "Peace",
            studentLRN: "12345678910",
            studentNumber: "202308493",
            academicYear: "2023",
            address: "Imus, Cavite",
            contactNumber: "09472126029",
            guardian: "Shyvana R. Dragonite",
            kayquitEmailAccount: "bernard.sapida@kayquit.edu.ph",
            temporaryPassword: "K1xa041ke"
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