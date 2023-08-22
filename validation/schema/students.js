db.createCollection("students", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: [
                "personalDetails",
                "enrollmentDetails",
                "schoolSchedule",
                "contactDetails",
                "kayquitGoogleAccount",
                "createdAt",
                "updatedAt"
            ],
            properties: {
                personalDetails: {
                    bsonType: "object",
                    required: ["fullname", "birthdate", "sex", "religion", "civilStatus"],
                    properties: {
                        fullname: {
                            bsonType: "string",
                            description: "Full name is required."
                        },
                        birthdate: {
                            bsonType: "date",
                            description: "Birthdate is required."
                        },
                        sex: {
                            bsonType: "string",
                            description: "Sex is required."
                        },
                        religion: {
                            bsonType: "string",
                            description: "Religion is required."
                        },
                        civilStatus: {
                            bsonType: "string",
                            description: "Civil status is required."
                        }
                    }
                },
                enrollmentDetails: {
                    bsonType: "object",
                    required: [
                        "currentGradeLevel",
                        "currentSection",
                        "lrn",
                        "studentNumber"
                    ],
                    properties: {
                        currentGradeLevel: {
                            bsonType: "int",
                            description: "Current grade level is required."
                        },
                        currentSection: {
                            bsonType: "string",
                            description: "Current section is required."
                        },
                        lrn: {
                            bsonType: "string",
                            description: "LRN is required."
                        },
                        studentNumber: {
                            bsonType: "int",
                            description: "Student number is required."
                        }
                    }
                },
                schoolSchedule: {
                    bsonType: "object",
                    required: ["academicYear", "section", "subject", "grades"],
                    properties: {
                        academicYear: {
                            bsonType: "string",
                            description: "Academic year is required."
                        },
                        section: {
                            bsonType: "string",
                            description: "Section is required."
                        },
                        subject: {
                            bsonType: "array",
                            items: {
                                bsonType: "object",
                                required: ["subjectName", "time", "day", "room"],
                                properties: {
                                    subjectName: {
                                        bsonType: "string",
                                        description: "Subject name is required."
                                    },
                                    time: {
                                        bsonType: "string",
                                        description: "Time is required."
                                    },
                                    day: {
                                        bsonType: "string",
                                        description: "Day is required."
                                    },
                                    room: {
                                        bsonType: "string",
                                        description: "Room is required."
                                    }
                                }
                            }
                        },
                        grades: {
                            bsonType: "array",
                            items: {
                                bsonType: "object",
                                required: [
                                    "subjectName",
                                    "firstQuarter",
                                    "secondQuarter",
                                    "thirdQuarter",
                                    "fourthQuarter"
                                ],
                                properties: {
                                    subjectName: {
                                        bsonType: "string",
                                        description: "Subject name is required."
                                    },
                                    firstQuarter: {
                                        bsonType: "number",
                                        description: "First quarter grade is required."
                                    },
                                    secondQuarter: {
                                        bsonType: "number",
                                        description: "Second quarter grade is required."
                                    },
                                    thirdQuarter: {
                                        bsonType: "number",
                                        description: "Third quarter grade is required."
                                    },
                                    fourthQuarter: {
                                        bsonType: "number",
                                        description: "Fourth quarter grade is required."
                                    }
                                }
                            }
                        }
                    }
                },
                contactDetails: {
                    bsonType: "object",
                    required: ["address", "guardian", "contactNumber"],
                    properties: {
                        address: {
                            bsonType: "string",
                            description: "Address is required."
                        },
                        guardian: {
                            bsonType: "string",
                            description: "Guardian is required."
                        },
                        contactNumber: {
                            bsonType: "string",
                            description: "Contact number is required."
                        }
                    }
                },
                kayquitGoogleAccount: {
                    bsonType: "object",
                    required: ["kayquitAccount", "defaultPassword", "password"],
                    properties: {
                        kayquitAccount: {
                            bsonType: "string",
                            description: "Kayquit account is required."
                        },
                        defaultPassword: {
                            bsonType: "string",
                            description: "Default password is required."
                        },
                        password: {
                            bsonType: "string",
                            description: "Password is required."
                        }
                    }
                },
                createdAt: {
                    bsonType: "date",
                    description: "Creation date is required."
                },
                updatedAt: {
                    bsonType: "date",
                    description: "Update date is required."
                }
            },
            errorMessage: {
                required: {
                    personalDetails: "Personal details are required.",
                    enrollmentDetails: "Enrollment details are required.",
                    schoolSchedule: "School schedule is required.",
                    contactDetails: "Contact details are required.",
                    kayquitGoogleAccount: "Kayquit Google account details are required.",
                    createdAt: "Creation date is required.",
                    updatedAt: "Update date is required."
                }
            }
        }
    }
});
