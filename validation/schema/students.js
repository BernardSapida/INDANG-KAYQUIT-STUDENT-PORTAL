db.createCollection("students", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: [
                "personalDetails",
                "enrollmentDetails",
                "grades",
                "contactDetails",
                "kayquitGoogleAccount",
                "createdAt",
                "updatedAt"
            ],
            properties: {
                personalDetails: {
                    bsonType: "object",
                    required: [
                        "fullname",
                        "birthdate",
                        "sex",
                        "religion",
                        "civilStatus",
                        "nationality",
                        "ethnicity",
                        "citizenship"
                    ],
                    properties: {
                        fullname: {
                            bsonType: "string",
                            description: "Full name is required."
                        },
                        birthdate: {
                            bsonType: "string",
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
                        },
                        nationality: {
                            bsonType: "string",
                            description: "Nationality is required."
                        },
                        ethnicity: {
                            bsonType: "string",
                            description: "Ethnicity is required."
                        },
                        citizenship: {
                            bsonType: "string",
                            description: "Citizenship is required."
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
                grades: {
                    bsonType: "object",
                    required: ["academicYear"],
                    properties: {
                        academicYear: {
                            bsonType: "object",
                            additionalProperties: {
                                bsonType: "object",
                                properties: {
                                    firstQuarter: {
                                        bsonType: "int",
                                        description: "First quarter grade is required."
                                    },
                                    secondQuarter: {
                                        bsonType: "int",
                                        description: "Second quarter grade is required."
                                    },
                                    thirdQuarter: {
                                        bsonType: "int",
                                        description: "Third quarter grade is required."
                                    },
                                    fourthQuarter: {
                                        bsonType: "int",
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
            }
        }
    }
});
