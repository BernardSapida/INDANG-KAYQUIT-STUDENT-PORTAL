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

function TableList({
    studentList,
    setStudent,
    setModalShow
}: {
    studentList: any[],
    setStudent: Dispatch<SetStateAction<{}>>;
    setModalShow: Dispatch<SetStateAction<boolean>>;
}) {
    const [tableLoading, setLoadingTable] = useState<boolean>(false);
    const table_columns = [
        {
            name: "Full Name",
            selector: (row: Record<any, any>) => row.personalDetails.fullname,
            sortable: true,
        },
        {
            name: "Student LRN",
            selector: (row: Record<any, any>) => row.enrollmentDetails.lrn,
        },
        {
            name: "Student Number",
            selector: (row: Record<any, any>) => row.enrollmentDetails.studentNumber,
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
            personalDetails: {
                fullname: 'Bernard Sapida',
                birthdate: '2013-05-09',
                sex: 'Male',
                religion: 'Christianity',
                civilStatus: 'Single'
            },
            enrollmentDetails: {
                currentGradeLevel: 5,
                currentSection: 'Akasya',
                lrn: '202102231',
                academicYear: '2019-2020',
                studentNumber: '202309942000'
            },
            class: [
                {
                    section: {
                        gradeLevel: 1,
                        name: "Akasya",
                        academicYear: "2018-2019",
                        subjects: [
                            {
                                subjectName: "English",
                                time: "8:00 AM - 8:45 AM",
                                day: "Monday",
                                room: "Room A"
                            },
                            {
                                subjectName: "Math",
                                time: "9:00 AM - 9:45 AM",
                                day: "Monday",
                                room: "Room A"
                            },
                            {
                                subjectName: "Filipino",
                                time: "10:00 AM - 10:45 AM",
                                day: "Tuesday",
                                room: "Room A"
                            },
                            {
                                subjectName: "MTB",
                                time: "11:00 AM - 11:45 AM",
                                day: "Tuesday",
                                room: "Room A"
                            },
                            {
                                subjectName: "Araling Panlipunan",
                                time: "9:00 AM - 9:45 AM",
                                day: "Wednesday",
                                room: "Room A"
                            },
                            {
                                subjectName: "ESP",
                                time: " 11:00 AM - 11:45 AM",
                                day: "Wednesday",
                                room: "Room A"
                            },
                            {
                                subjectName: "Science",
                                time: " 11:00 AM - 11:45 AM",
                                day: "Thursday",
                                room: "Room A"
                            },
                            {
                                subjectName: "MAPEH",
                                time: "8:00 AM - 8:45 AM",
                                day: "Friday",
                                room: "Room A"
                            }
                        ],
                    },
                    grades: [
                        {
                            subjectName: 'English',
                            firstQuarter: 99,
                            secondQuarter: 85,
                            thirdQuarter: 82,
                            fourthQuarter: 96
                        },
                        {
                            subjectName: 'Math',
                            firstQuarter: 78,
                            secondQuarter: 89,
                            thirdQuarter: 76,
                            fourthQuarter: 86
                        },
                        {
                            subjectName: 'Filipino',
                            firstQuarter: 83,
                            secondQuarter: 94,
                            thirdQuarter: 96,
                            fourthQuarter: 88
                        },
                        {
                            subjectName: 'MTB',
                            firstQuarter: 86,
                            secondQuarter: 96,
                            thirdQuarter: 79,
                            fourthQuarter: 84
                        },
                        {
                            subjectName: 'Araling Panlipunan',
                            firstQuarter: 82,
                            secondQuarter: 86,
                            thirdQuarter: 96,
                            fourthQuarter: 96
                        },
                        {
                            subjectName: 'ESP',
                            firstQuarter: 94,
                            secondQuarter: 87,
                            thirdQuarter: 92,
                            fourthQuarter: 77
                        },
                        {
                            subjectName: 'Science',
                            firstQuarter: 85,
                            secondQuarter: 96,
                            thirdQuarter: 95,
                            fourthQuarter: 94
                        },
                        {
                            subjectName: 'MAPEH',
                            firstQuarter: 78,
                            secondQuarter: 97,
                            thirdQuarter: 86,
                            fourthQuarter: 96
                        },
                        {
                            subjectName: 'Intermediate',
                            firstQuarter: 79,
                            secondQuarter: 86,
                            thirdQuarter: 81,
                            fourthQuarter: 86
                        }
                    ]
                },
                {
                    section: {
                        gradeLevel: 2,
                        name: "Narra",
                        academicYear: "2019-2020",
                        subjects: [
                            {
                                subjectName: "English",
                                time: "8:00 AM - 8:45 AM",
                                day: "Monday",
                                room: "Room A"
                            },
                            {
                                subjectName: "Math",
                                time: "9:00 AM - 9:45 AM",
                                day: "Monday",
                                room: "Room A"
                            },
                            {
                                subjectName: "Filipino",
                                time: "10:00 AM - 10:45 AM",
                                day: "Tuesday",
                                room: "Room A"
                            },
                            {
                                subjectName: "MTB",
                                time: "11:00 AM - 11:45 AM",
                                day: "Tuesday",
                                room: "Room A"
                            },
                            {
                                subjectName: "Araling Panlipunan",
                                time: "9:00 AM - 9:45 AM",
                                day: "Wednesday",
                                room: "Room A"
                            },
                            {
                                subjectName: "ESP",
                                time: " 11:00 AM - 11:45 AM",
                                day: "Wednesday",
                                room: "Room A"
                            },
                            {
                                subjectName: "Science",
                                time: " 11:00 AM - 11:45 AM",
                                day: "Thursday",
                                room: "Room A"
                            },
                            {
                                subjectName: "MAPEH",
                                time: "8:00 AM - 8:45 AM",
                                day: "Friday",
                                room: "Room A"
                            }
                        ],
                    },
                    grades: [
                        {
                            subjectName: 'English',
                            firstQuarter: 88,
                            secondQuarter: 85,
                            thirdQuarter: 82,
                            fourthQuarter: 96
                        },
                        {
                            subjectName: 'Math',
                            firstQuarter: 78,
                            secondQuarter: 89,
                            thirdQuarter: 76,
                            fourthQuarter: 86
                        },
                        {
                            subjectName: 'Filipino',
                            firstQuarter: 83,
                            secondQuarter: 94,
                            thirdQuarter: 96,
                            fourthQuarter: 88
                        },
                        {
                            subjectName: 'MTB',
                            firstQuarter: 86,
                            secondQuarter: 96,
                            thirdQuarter: 79,
                            fourthQuarter: 84
                        },
                        {
                            subjectName: 'Araling Panlipunan',
                            firstQuarter: 82,
                            secondQuarter: 86,
                            thirdQuarter: 96,
                            fourthQuarter: 96
                        },
                        {
                            subjectName: 'ESP',
                            firstQuarter: 94,
                            secondQuarter: 87,
                            thirdQuarter: 92,
                            fourthQuarter: 77
                        },
                        {
                            subjectName: 'Science',
                            firstQuarter: 85,
                            secondQuarter: 96,
                            thirdQuarter: 95,
                            fourthQuarter: 94
                        },
                        {
                            subjectName: 'MAPEH',
                            firstQuarter: 78,
                            secondQuarter: 97,
                            thirdQuarter: 86,
                            fourthQuarter: 96
                        },
                        {
                            subjectName: 'Intermediate',
                            firstQuarter: 79,
                            secondQuarter: 86,
                            thirdQuarter: 81,
                            fourthQuarter: 86
                        }
                    ]
                },
                {
                    section: {
                        gradeLevel: 3,
                        name: "Akasya",
                        academicYear: "2020-2021",
                        subjects: [
                            {
                                subjectName: "English",
                                time: "8:00 AM - 8:45 AM",
                                day: "Monday",
                                room: "Room A"
                            },
                            {
                                subjectName: "Math",
                                time: "9:00 AM - 9:45 AM",
                                day: "Monday",
                                room: "Room A"
                            },
                            {
                                subjectName: "Filipino",
                                time: "10:00 AM - 10:45 AM",
                                day: "Tuesday",
                                room: "Room A"
                            },
                            {
                                subjectName: "MTB",
                                time: "11:00 AM - 11:45 AM",
                                day: "Tuesday",
                                room: "Room A"
                            },
                            {
                                subjectName: "Araling Panlipunan",
                                time: "9:00 AM - 9:45 AM",
                                day: "Wednesday",
                                room: "Room A"
                            },
                            {
                                subjectName: "ESP",
                                time: " 11:00 AM - 11:45 AM",
                                day: "Wednesday",
                                room: "Room A"
                            },
                            {
                                subjectName: "Science",
                                time: " 11:00 AM - 11:45 AM",
                                day: "Thursday",
                                room: "Room A"
                            },
                            {
                                subjectName: "MAPEH",
                                time: "8:00 AM - 8:45 AM",
                                day: "Friday",
                                room: "Room A"
                            }
                        ],
                    },
                    grades: [
                        {
                            subjectName: 'English',
                            firstQuarter: 77,
                            secondQuarter: 85,
                            thirdQuarter: 82,
                            fourthQuarter: 96
                        },
                        {
                            subjectName: 'Math',
                            firstQuarter: 78,
                            secondQuarter: 89,
                            thirdQuarter: 76,
                            fourthQuarter: 86
                        },
                        {
                            subjectName: 'Filipino',
                            firstQuarter: 83,
                            secondQuarter: 94,
                            thirdQuarter: 96,
                            fourthQuarter: 88
                        },
                        {
                            subjectName: 'MTB',
                            firstQuarter: 86,
                            secondQuarter: 96,
                            thirdQuarter: 79,
                            fourthQuarter: 84
                        },
                        {
                            subjectName: 'Araling Panlipunan',
                            firstQuarter: 82,
                            secondQuarter: 86,
                            thirdQuarter: 96,
                            fourthQuarter: 96
                        },
                        {
                            subjectName: 'ESP',
                            firstQuarter: 94,
                            secondQuarter: 87,
                            thirdQuarter: 92,
                            fourthQuarter: 77
                        },
                        {
                            subjectName: 'Science',
                            firstQuarter: 85,
                            secondQuarter: 96,
                            thirdQuarter: 95,
                            fourthQuarter: 94
                        },
                        {
                            subjectName: 'MAPEH',
                            firstQuarter: 78,
                            secondQuarter: 97,
                            thirdQuarter: 86,
                            fourthQuarter: 96
                        },
                        {
                            subjectName: 'Intermediate',
                            firstQuarter: 79,
                            secondQuarter: 86,
                            thirdQuarter: 81,
                            fourthQuarter: 86
                        }
                    ]
                },
                {
                    section: {
                        gradeLevel: 4,
                        name: "Narra",
                        academicYear: "2021-2022",
                        subjects: [
                            {
                                subjectName: "English",
                                time: "8:00 AM - 8:45 AM",
                                day: "Monday",
                                room: "Room A"
                            },
                            {
                                subjectName: "Math",
                                time: "9:00 AM - 9:45 AM",
                                day: "Monday",
                                room: "Room A"
                            },
                            {
                                subjectName: "Filipino",
                                time: "10:00 AM - 10:45 AM",
                                day: "Tuesday",
                                room: "Room A"
                            },
                            {
                                subjectName: "MTB",
                                time: "11:00 AM - 11:45 AM",
                                day: "Tuesday",
                                room: "Room A"
                            },
                            {
                                subjectName: "Araling Panlipunan",
                                time: "9:00 AM - 9:45 AM",
                                day: "Wednesday",
                                room: "Room A"
                            },
                            {
                                subjectName: "ESP",
                                time: " 11:00 AM - 11:45 AM",
                                day: "Wednesday",
                                room: "Room A"
                            },
                            {
                                subjectName: "Science",
                                time: " 11:00 AM - 11:45 AM",
                                day: "Thursday",
                                room: "Room A"
                            },
                            {
                                subjectName: "MAPEH",
                                time: "8:00 AM - 8:45 AM",
                                day: "Friday",
                                room: "Room A"
                            }
                        ],
                    },
                    grades: [
                        {
                            subjectName: 'English',
                            firstQuarter: 76,
                            secondQuarter: 85,
                            thirdQuarter: 82,
                            fourthQuarter: 96
                        },
                        {
                            subjectName: 'Math',
                            firstQuarter: 78,
                            secondQuarter: 89,
                            thirdQuarter: 76,
                            fourthQuarter: 86
                        },
                        {
                            subjectName: 'Filipino',
                            firstQuarter: 83,
                            secondQuarter: 94,
                            thirdQuarter: 96,
                            fourthQuarter: 88
                        },
                        {
                            subjectName: 'MTB',
                            firstQuarter: 86,
                            secondQuarter: 96,
                            thirdQuarter: 79,
                            fourthQuarter: 84
                        },
                        {
                            subjectName: 'Araling Panlipunan',
                            firstQuarter: 82,
                            secondQuarter: 86,
                            thirdQuarter: 96,
                            fourthQuarter: 96
                        },
                        {
                            subjectName: 'ESP',
                            firstQuarter: 94,
                            secondQuarter: 87,
                            thirdQuarter: 92,
                            fourthQuarter: 77
                        },
                        {
                            subjectName: 'Science',
                            firstQuarter: 85,
                            secondQuarter: 96,
                            thirdQuarter: 95,
                            fourthQuarter: 94
                        },
                        {
                            subjectName: 'MAPEH',
                            firstQuarter: 78,
                            secondQuarter: 97,
                            thirdQuarter: 86,
                            fourthQuarter: 96
                        },
                        {
                            subjectName: 'Intermediate',
                            firstQuarter: 79,
                            secondQuarter: 86,
                            thirdQuarter: 81,
                            fourthQuarter: 86
                        }
                    ]
                },
                {
                    section: {
                        gradeLevel: 5,
                        name: "Akasya",
                        academicYear: "2022-2023",
                        subjects: [
                            {
                                subjectName: "English",
                                time: "8:00 AM - 8:45 AM",
                                day: "Monday",
                                room: "Room A"
                            },
                            {
                                subjectName: "Math",
                                time: "9:00 AM - 9:45 AM",
                                day: "Monday",
                                room: "Room A"
                            },
                            {
                                subjectName: "Filipino",
                                time: "10:00 AM - 10:45 AM",
                                day: "Tuesday",
                                room: "Room A"
                            },
                            {
                                subjectName: "MTB",
                                time: "11:00 AM - 11:45 AM",
                                day: "Tuesday",
                                room: "Room A"
                            },
                            {
                                subjectName: "Araling Panlipunan",
                                time: "9:00 AM - 9:45 AM",
                                day: "Wednesday",
                                room: "Room A"
                            },
                            {
                                subjectName: "ESP",
                                time: " 11:00 AM - 11:45 AM",
                                day: "Wednesday",
                                room: "Room A"
                            },
                            {
                                subjectName: "Science",
                                time: " 11:00 AM - 11:45 AM",
                                day: "Thursday",
                                room: "Room A"
                            },
                            {
                                subjectName: "MAPEH",
                                time: "8:00 AM - 8:45 AM",
                                day: "Friday",
                                room: "Room A"
                            }
                        ],
                    },
                    grades: [
                        {
                            subjectName: 'English',
                            firstQuarter: 95,
                            secondQuarter: 85,
                            thirdQuarter: 82,
                            fourthQuarter: 96
                        },
                        {
                            subjectName: 'Math',
                            firstQuarter: 78,
                            secondQuarter: 89,
                            thirdQuarter: 76,
                            fourthQuarter: 86
                        },
                        {
                            subjectName: 'Filipino',
                            firstQuarter: 83,
                            secondQuarter: 94,
                            thirdQuarter: 96,
                            fourthQuarter: 88
                        },
                        {
                            subjectName: 'MTB',
                            firstQuarter: 86,
                            secondQuarter: 96,
                            thirdQuarter: 79,
                            fourthQuarter: 84
                        },
                        {
                            subjectName: 'Araling Panlipunan',
                            firstQuarter: 82,
                            secondQuarter: 86,
                            thirdQuarter: 96,
                            fourthQuarter: 96
                        },
                        {
                            subjectName: 'ESP',
                            firstQuarter: 94,
                            secondQuarter: 87,
                            thirdQuarter: 92,
                            fourthQuarter: 77
                        },
                        {
                            subjectName: 'Science',
                            firstQuarter: 85,
                            secondQuarter: 96,
                            thirdQuarter: 95,
                            fourthQuarter: 94
                        },
                        {
                            subjectName: 'MAPEH',
                            firstQuarter: 78,
                            secondQuarter: 97,
                            thirdQuarter: 86,
                            fourthQuarter: 96
                        },
                        {
                            subjectName: 'Intermediate',
                            firstQuarter: 79,
                            secondQuarter: 86,
                            thirdQuarter: 81,
                            fourthQuarter: 86
                        }
                    ]
                },
                {
                    section: {
                        gradeLevel: 6,
                        name: "Narra",
                        academicYear: "2023-2024",
                        subjects: [
                            {
                                subjectName: "English",
                                time: "8:00 AM - 8:45 AM",
                                day: "Monday",
                                room: "Room A"
                            },
                            {
                                subjectName: "Math",
                                time: "9:00 AM - 9:45 AM",
                                day: "Monday",
                                room: "Room A"
                            },
                            {
                                subjectName: "Filipino",
                                time: "10:00 AM - 10:45 AM",
                                day: "Tuesday",
                                room: "Room A"
                            },
                            {
                                subjectName: "MTB",
                                time: "11:00 AM - 11:45 AM",
                                day: "Tuesday",
                                room: "Room A"
                            },
                            {
                                subjectName: "Araling Panlipunan",
                                time: "9:00 AM - 9:45 AM",
                                day: "Wednesday",
                                room: "Room A"
                            },
                            {
                                subjectName: "ESP",
                                time: " 11:00 AM - 11:45 AM",
                                day: "Wednesday",
                                room: "Room A"
                            },
                            {
                                subjectName: "Science",
                                time: " 11:00 AM - 11:45 AM",
                                day: "Thursday",
                                room: "Room A"
                            },
                            {
                                subjectName: "MAPEH",
                                time: "8:00 AM - 8:45 AM",
                                day: "Friday",
                                room: "Room A"
                            }
                        ],
                    },
                    grades: [
                        {
                            subjectName: 'English',
                            firstQuarter: 85,
                            secondQuarter: 85,
                            thirdQuarter: 82,
                            fourthQuarter: 96
                        },
                        {
                            subjectName: 'Math',
                            firstQuarter: 78,
                            secondQuarter: 89,
                            thirdQuarter: 76,
                            fourthQuarter: 86
                        },
                        {
                            subjectName: 'Filipino',
                            firstQuarter: 83,
                            secondQuarter: 94,
                            thirdQuarter: 96,
                            fourthQuarter: 88
                        },
                        {
                            subjectName: 'MTB',
                            firstQuarter: 86,
                            secondQuarter: 96,
                            thirdQuarter: 79,
                            fourthQuarter: 84
                        },
                        {
                            subjectName: 'Araling Panlipunan',
                            firstQuarter: 82,
                            secondQuarter: 86,
                            thirdQuarter: 96,
                            fourthQuarter: 96
                        },
                        {
                            subjectName: 'ESP',
                            firstQuarter: 94,
                            secondQuarter: 87,
                            thirdQuarter: 92,
                            fourthQuarter: 77
                        },
                        {
                            subjectName: 'Science',
                            firstQuarter: 85,
                            secondQuarter: 96,
                            thirdQuarter: 95,
                            fourthQuarter: 94
                        },
                        {
                            subjectName: 'MAPEH',
                            firstQuarter: 78,
                            secondQuarter: 97,
                            thirdQuarter: 86,
                            fourthQuarter: 96
                        },
                        {
                            subjectName: 'Intermediate',
                            firstQuarter: 79,
                            secondQuarter: 86,
                            thirdQuarter: 81,
                            fourthQuarter: 86
                        }
                    ]
                }
            ],
            contactDetails: {
                address: 'Imus, Cavite',
                guardian: 'Christian R. Sapida',
                contactNumber: '09474556173'
            },
            kayquitAccount: {
                email: 'bernard.sapida@kayquit.edu.ph',
                defaultPassword: '@Password123',
                password: '@Password123'
            },
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