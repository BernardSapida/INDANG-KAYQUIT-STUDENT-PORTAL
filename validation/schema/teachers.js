db.createCollection("teachers", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: [
                "personalDetails",
                "sectionHandle",
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
                    }
                },
                sectionHandle: {
                    bsonType: "object",
                    required: [
                        "currentGradeLevel",
                        "currentSection",
                        "academicYear"
                    ],
                    properties: {
                        currentGradeLevel: {
                            bsonType: "int",
                            description: "Grade level is required."
                        },
                        currentSection: {
                            bsonType: "string",
                            description: "Section is required."
                        },
                        academicYear: {
                            bsonType: "int",
                            description: "Academic year is required."
                        }
                    }
                },
                contactDetails: {
                    bsonType: "object",
                    required: [
                        "address",
                        "contactNumber"
                    ],
                    properties: {
                        address: {
                            bsonType: "string",
                            description: "Address is required."
                        },
                        contactNumber: {
                            bsonType: "string",
                            description: "Contact number is required."
                        }
                    }
                },
                kayquitAccount: {
                    bsonType: "object",
                    required: [
                        "email",
                        "defaultPassword",
                        "password"
                    ],
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
                    description: "Created at is required."
                },
                updatedAt: {
                    bsonType: "date",
                    description: "Updated at is required."
                }
            }
        }
    }
});