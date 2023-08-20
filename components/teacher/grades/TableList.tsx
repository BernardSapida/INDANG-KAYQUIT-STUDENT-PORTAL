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
            selector: (row: Record<any, any>) => row.gradeAndSection,
            sortable: true,
        },
        {
            name: "Student LRN",
            selector: (row: Record<any, any>) => row.lrn,
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
            fullname: "Agatha Sapida",
            gradeAndSection: "6 - Peace",
            lrn: "12345678910",
            studentNumber: "202302168",
            grades: [
                {
                    subjectName: "English",
                    firstQuarter: 99,
                    secondQuarter: 99,
                    thirdQuarter: 99,
                    fourthQuarter: 99
                },
                {
                    subjectName: "Math",
                    firstQuarter: 99,
                    secondQuarter: 99,
                    thirdQuarter: 99,
                    fourthQuarter: 99
                },
                {
                    subjectName: "Science",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Physical Education (PE)",
                    firstQuarter: 78,
                    secondQuarter: 90,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Music",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Social Studies",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Computer Science",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Library",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                }
            ]
        },
        {
            fullname: "Bernard Sapida",
            gradeAndSection: "6 - Peace",
            lrn: "12345678910",
            studentNumber: "202302168",
            grades: [
                {
                    subjectName: "English",
                    firstQuarter: 85,
                    secondQuarter: 88,
                    thirdQuarter: 90,
                    fourthQuarter: 92
                },
                {
                    subjectName: "Math",
                    firstQuarter: 90,
                    secondQuarter: 88,
                    thirdQuarter: 85,
                    fourthQuarter: 88
                },
                {
                    subjectName: "Science",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Physical Education (PE)",
                    firstQuarter: 78,
                    secondQuarter: 90,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Music",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Social Studies",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Computer Science",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Library",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                }
            ]
        },
        {
            fullname: "Bernard Sapida",
            gradeAndSection: "6 - Peace",
            lrn: "12345678910",
            studentNumber: "202302168",
            grades: [
                {
                    subjectName: "English",
                    firstQuarter: 85,
                    secondQuarter: 88,
                    thirdQuarter: 90,
                    fourthQuarter: 92
                },
                {
                    subjectName: "Math",
                    firstQuarter: 90,
                    secondQuarter: 88,
                    thirdQuarter: 85,
                    fourthQuarter: 88
                },
                {
                    subjectName: "Science",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Physical Education (PE)",
                    firstQuarter: 78,
                    secondQuarter: 90,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Music",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Social Studies",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Computer Science",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Library",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                }
            ]
        },
        {
            fullname: "Bernard Sapida",
            gradeAndSection: "6 - Peace",
            lrn: "12345678910",
            studentNumber: "202302168",
            grades: [
                {
                    subjectName: "English",
                    firstQuarter: 85,
                    secondQuarter: 88,
                    thirdQuarter: 90,
                    fourthQuarter: 92
                },
                {
                    subjectName: "Math",
                    firstQuarter: 90,
                    secondQuarter: 88,
                    thirdQuarter: 85,
                    fourthQuarter: 88
                },
                {
                    subjectName: "Science",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Physical Education (PE)",
                    firstQuarter: 78,
                    secondQuarter: 90,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Music",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Social Studies",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Computer Science",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Library",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                }
            ]
        },
        {
            fullname: "Bernard Sapida",
            gradeAndSection: "6 - Peace",
            lrn: "12345678910",
            studentNumber: "202302168",
            grades: [
                {
                    subjectName: "English",
                    firstQuarter: 85,
                    secondQuarter: 88,
                    thirdQuarter: 90,
                    fourthQuarter: 92
                },
                {
                    subjectName: "Math",
                    firstQuarter: 90,
                    secondQuarter: 88,
                    thirdQuarter: 85,
                    fourthQuarter: 88
                },
                {
                    subjectName: "Science",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Physical Education (PE)",
                    firstQuarter: 78,
                    secondQuarter: 90,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Music",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Social Studies",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Computer Science",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Library",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                }
            ]
        },
        {
            fullname: "Bernard Sapida",
            gradeAndSection: "6 - Peace",
            lrn: "12345678910",
            studentNumber: "202302168",
            grades: [
                {
                    subjectName: "English",
                    firstQuarter: 85,
                    secondQuarter: 88,
                    thirdQuarter: 90,
                    fourthQuarter: 92
                },
                {
                    subjectName: "Math",
                    firstQuarter: 90,
                    secondQuarter: 88,
                    thirdQuarter: 85,
                    fourthQuarter: 88
                },
                {
                    subjectName: "Science",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Physical Education (PE)",
                    firstQuarter: 78,
                    secondQuarter: 90,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Music",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Social Studies",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Computer Science",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Library",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                }
            ]
        },
        {
            fullname: "Bernard Sapida",
            gradeAndSection: "6 - Peace",
            lrn: "12345678910",
            studentNumber: "202302168",
            grades: [
                {
                    subjectName: "English",
                    firstQuarter: 85,
                    secondQuarter: 88,
                    thirdQuarter: 90,
                    fourthQuarter: 92
                },
                {
                    subjectName: "Math",
                    firstQuarter: 90,
                    secondQuarter: 88,
                    thirdQuarter: 85,
                    fourthQuarter: 88
                },
                {
                    subjectName: "Science",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Physical Education (PE)",
                    firstQuarter: 78,
                    secondQuarter: 90,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Music",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Social Studies",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Computer Science",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Library",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                }
            ]
        },
        {
            fullname: "Bernard Sapida",
            gradeAndSection: "6 - Peace",
            lrn: "12345678910",
            studentNumber: "202302168",
            grades: [
                {
                    subjectName: "English",
                    firstQuarter: 85,
                    secondQuarter: 88,
                    thirdQuarter: 90,
                    fourthQuarter: 92
                },
                {
                    subjectName: "Math",
                    firstQuarter: 90,
                    secondQuarter: 88,
                    thirdQuarter: 85,
                    fourthQuarter: 88
                },
                {
                    subjectName: "Science",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Physical Education (PE)",
                    firstQuarter: 78,
                    secondQuarter: 90,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Music",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Social Studies",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Computer Science",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Library",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                }
            ]
        },
        {
            fullname: "Bernard Sapida",
            gradeAndSection: "6 - Peace",
            lrn: "12345678910",
            studentNumber: "202302168",
            grades: [
                {
                    subjectName: "English",
                    firstQuarter: 85,
                    secondQuarter: 88,
                    thirdQuarter: 90,
                    fourthQuarter: 92
                },
                {
                    subjectName: "Math",
                    firstQuarter: 90,
                    secondQuarter: 88,
                    thirdQuarter: 85,
                    fourthQuarter: 88
                },
                {
                    subjectName: "Science",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Physical Education (PE)",
                    firstQuarter: 78,
                    secondQuarter: 90,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Music",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Social Studies",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Computer Science",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Library",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                }
            ]
        },
        {
            fullname: "Bernard Sapida",
            gradeAndSection: "6 - Peace",
            lrn: "12345678910",
            studentNumber: "202302168",
            grades: [
                {
                    subjectName: "English",
                    firstQuarter: 85,
                    secondQuarter: 88,
                    thirdQuarter: 90,
                    fourthQuarter: 92
                },
                {
                    subjectName: "Math",
                    firstQuarter: 90,
                    secondQuarter: 88,
                    thirdQuarter: 85,
                    fourthQuarter: 88
                },
                {
                    subjectName: "Science",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Physical Education (PE)",
                    firstQuarter: 78,
                    secondQuarter: 90,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Music",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Social Studies",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Computer Science",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Library",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                }
            ]
        },
        {
            fullname: "Bernard Sapida",
            gradeAndSection: "6 - Peace",
            lrn: "12345678910",
            studentNumber: "202302168",
            grades: [
                {
                    subjectName: "English",
                    firstQuarter: 85,
                    secondQuarter: 88,
                    thirdQuarter: 90,
                    fourthQuarter: 92
                },
                {
                    subjectName: "Math",
                    firstQuarter: 90,
                    secondQuarter: 88,
                    thirdQuarter: 85,
                    fourthQuarter: 88
                },
                {
                    subjectName: "Science",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Physical Education (PE)",
                    firstQuarter: 78,
                    secondQuarter: 90,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Music",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Social Studies",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Computer Science",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Library",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                }
            ]
        },
        {
            fullname: "Bernard Sapida",
            gradeAndSection: "6 - Peace",
            lrn: "12345678910",
            studentNumber: "202302168",
            grades: [
                {
                    subjectName: "English",
                    firstQuarter: 85,
                    secondQuarter: 88,
                    thirdQuarter: 90,
                    fourthQuarter: 92
                },
                {
                    subjectName: "Math",
                    firstQuarter: 90,
                    secondQuarter: 88,
                    thirdQuarter: 85,
                    fourthQuarter: 88
                },
                {
                    subjectName: "Science",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Physical Education (PE)",
                    firstQuarter: 78,
                    secondQuarter: 90,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Music",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Social Studies",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Computer Science",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Library",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                }
            ]
        },
        {
            fullname: "Bernard Sapida",
            gradeAndSection: "6 - Peace",
            lrn: "12345678910",
            studentNumber: "202302168",
            grades: [
                {
                    subjectName: "English",
                    firstQuarter: 85,
                    secondQuarter: 88,
                    thirdQuarter: 90,
                    fourthQuarter: 92
                },
                {
                    subjectName: "Math",
                    firstQuarter: 90,
                    secondQuarter: 88,
                    thirdQuarter: 85,
                    fourthQuarter: 88
                },
                {
                    subjectName: "Science",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Physical Education (PE)",
                    firstQuarter: 78,
                    secondQuarter: 90,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Music",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Social Studies",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Computer Science",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Library",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                }
            ]
        },
        {
            fullname: "Bernard Sapida",
            gradeAndSection: "6 - Peace",
            lrn: "12345678910",
            studentNumber: "202302168",
            grades: [
                {
                    subjectName: "English",
                    firstQuarter: 85,
                    secondQuarter: 88,
                    thirdQuarter: 90,
                    fourthQuarter: 92
                },
                {
                    subjectName: "Math",
                    firstQuarter: 90,
                    secondQuarter: 88,
                    thirdQuarter: 85,
                    fourthQuarter: 88
                },
                {
                    subjectName: "Science",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Physical Education (PE)",
                    firstQuarter: 78,
                    secondQuarter: 90,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Music",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Social Studies",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Computer Science",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Library",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                }
            ]
        },
        {
            fullname: "Bernard Sapida",
            gradeAndSection: "6 - Peace",
            lrn: "12345678910",
            studentNumber: "202302168",
            grades: [
                {
                    subjectName: "English",
                    firstQuarter: 85,
                    secondQuarter: 88,
                    thirdQuarter: 90,
                    fourthQuarter: 92
                },
                {
                    subjectName: "Math",
                    firstQuarter: 90,
                    secondQuarter: 88,
                    thirdQuarter: 85,
                    fourthQuarter: 88
                },
                {
                    subjectName: "Science",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Physical Education (PE)",
                    firstQuarter: 78,
                    secondQuarter: 90,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Music",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Social Studies",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Computer Science",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Library",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                }
            ]
        },
        {
            fullname: "Bernard Sapida",
            gradeAndSection: "6 - Peace",
            lrn: "12345678910",
            studentNumber: "202302168",
            grades: [
                {
                    subjectName: "English",
                    firstQuarter: 85,
                    secondQuarter: 88,
                    thirdQuarter: 90,
                    fourthQuarter: 92
                },
                {
                    subjectName: "Math",
                    firstQuarter: 90,
                    secondQuarter: 88,
                    thirdQuarter: 85,
                    fourthQuarter: 88
                },
                {
                    subjectName: "Science",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Physical Education (PE)",
                    firstQuarter: 78,
                    secondQuarter: 90,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Music",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Social Studies",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Computer Science",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Library",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                }
            ]
        },
        {
            fullname: "Bernard Sapida",
            gradeAndSection: "6 - Peace",
            lrn: "12345678910",
            studentNumber: "202302168",
            grades: [
                {
                    subjectName: "English",
                    firstQuarter: 85,
                    secondQuarter: 88,
                    thirdQuarter: 90,
                    fourthQuarter: 92
                },
                {
                    subjectName: "Math",
                    firstQuarter: 90,
                    secondQuarter: 88,
                    thirdQuarter: 85,
                    fourthQuarter: 88
                },
                {
                    subjectName: "Science",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Physical Education (PE)",
                    firstQuarter: 78,
                    secondQuarter: 90,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Music",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Social Studies",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Computer Science",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Library",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                }
            ]
        },
        {
            fullname: "Bernard Sapida",
            gradeAndSection: "6 - Peace",
            lrn: "12345678910",
            studentNumber: "202302168",
            grades: [
                {
                    subjectName: "English",
                    firstQuarter: 85,
                    secondQuarter: 88,
                    thirdQuarter: 90,
                    fourthQuarter: 92
                },
                {
                    subjectName: "Math",
                    firstQuarter: 90,
                    secondQuarter: 88,
                    thirdQuarter: 85,
                    fourthQuarter: 88
                },
                {
                    subjectName: "Science",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Physical Education (PE)",
                    firstQuarter: 78,
                    secondQuarter: 90,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Music",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Social Studies",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Computer Science",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Library",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                }
            ]
        },
        {
            fullname: "Bernard Sapida",
            gradeAndSection: "6 - Peace",
            lrn: "12345678910",
            studentNumber: "202302168",
            grades: [
                {
                    subjectName: "English",
                    firstQuarter: 85,
                    secondQuarter: 88,
                    thirdQuarter: 90,
                    fourthQuarter: 92
                },
                {
                    subjectName: "Math",
                    firstQuarter: 90,
                    secondQuarter: 88,
                    thirdQuarter: 85,
                    fourthQuarter: 88
                },
                {
                    subjectName: "Science",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Physical Education (PE)",
                    firstQuarter: 78,
                    secondQuarter: 90,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Music",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Social Studies",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Computer Science",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Library",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                }
            ]
        },
        {
            fullname: "Bernard Sapida",
            gradeAndSection: "6 - Peace",
            lrn: "12345678910",
            studentNumber: "202302168",
            grades: [
                {
                    subjectName: "English",
                    firstQuarter: 85,
                    secondQuarter: 88,
                    thirdQuarter: 90,
                    fourthQuarter: 92
                },
                {
                    subjectName: "Math",
                    firstQuarter: 90,
                    secondQuarter: 88,
                    thirdQuarter: 85,
                    fourthQuarter: 88
                },
                {
                    subjectName: "Science",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Physical Education (PE)",
                    firstQuarter: 78,
                    secondQuarter: 90,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Music",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Social Studies",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Computer Science",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Library",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                }
            ]
        },
        {
            fullname: "Bernard Sapida",
            gradeAndSection: "6 - Peace",
            lrn: "12345678910",
            studentNumber: "202302168",
            grades: [
                {
                    subjectName: "English",
                    firstQuarter: 85,
                    secondQuarter: 88,
                    thirdQuarter: 90,
                    fourthQuarter: 92
                },
                {
                    subjectName: "Math",
                    firstQuarter: 90,
                    secondQuarter: 88,
                    thirdQuarter: 85,
                    fourthQuarter: 88
                },
                {
                    subjectName: "Science",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Physical Education (PE)",
                    firstQuarter: 78,
                    secondQuarter: 90,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Music",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Social Studies",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Computer Science",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Library",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                }
            ]
        },
        {
            fullname: "Bernard Sapida",
            gradeAndSection: "6 - Peace",
            lrn: "12345678910",
            studentNumber: "202302168",
            grades: [
                {
                    subjectName: "English",
                    firstQuarter: 85,
                    secondQuarter: 88,
                    thirdQuarter: 90,
                    fourthQuarter: 92
                },
                {
                    subjectName: "Math",
                    firstQuarter: 90,
                    secondQuarter: 88,
                    thirdQuarter: 85,
                    fourthQuarter: 88
                },
                {
                    subjectName: "Science",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Physical Education (PE)",
                    firstQuarter: 78,
                    secondQuarter: 90,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Music",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Social Studies",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Computer Science",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Library",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                }
            ]
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
            data={data}
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