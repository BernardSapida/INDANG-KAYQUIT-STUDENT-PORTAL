db.createCollection("students", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["personalDetails", "enrollmentDetails", "classes", "contactDetails", "kayquitAccount", "createdAt", "updatedAt"],
            properties: {
                personalDetails: {
                    bsonType: "object",
                    properties: {
                        fullname: { bsonType: "string" },
                        birthdate: { bsonType: "string" },
                        sex: { bsonType: "string" },
                        religion: { bsonType: "string" },
                        civilStatus: { bsonType: "string" }
                    }
                },
                enrollmentDetails: {
                    bsonType: "object",
                    required: ["currentGradeLevel", "currentSection", "lrn", "academicYear", "studentNumber"],
                    properties: {
                        currentGradeLevel: { bsonType: "string" },
                        currentSection: { bsonType: "string" },
                        lrn: { bsonType: "string" },
                        academicYear: { bsonType: "string" },
                        studentNumber: { bsonType: "string" }
                    }
                },
                classes: {
                    bsonType: "array",
                    items: {
                        bsonType: "object",
                        required: ["section", "grades"],
                        properties: {
                            section: { bsonType: "objectId" },
                            grades: {
                                bsonType: "array",
                                items: {
                                    bsonType: "object",
                                    required: ["subjectName", "firstQuarter", "secondQuarter", "thirdQuarter", "fourthQuarter"],
                                    properties: {
                                        subjectName: { bsonType: "string" },
                                        firstQuarter: { bsonType: "number" },
                                        secondQuarter: { bsonType: "number" },
                                        thirdQuarter: { bsonType: "number" },
                                        fourthQuarter: { bsonType: "number" }
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
                        address: { bsonType: "string" },
                        guardian: { bsonType: "string" },
                        contactNumber: { bsonType: "string" }
                    }
                },
                kayquitAccount: {
                    bsonType: "object",
                    required: ["email", "defaultPassword", "password"],
                    properties: {
                        email: { bsonType: "string" },
                        defaultPassword: { bsonType: "string" },
                        password: { bsonType: "string" }
                    }
                },
                createdAt: { bsonType: "date" },
                updatedAt: { bsonType: "date" }
            }
        }
    }

});
