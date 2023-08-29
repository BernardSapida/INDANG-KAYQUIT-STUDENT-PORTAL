db.createCollection("teachers", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["personalDetails", "sectionHandle", "contactDetails", "kayquitAccount", "createdAt", "updatedAt"],
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
                sectionHandle: {
                    bsonType: "object",
                    required: ["currentGradeLevel", "currentSection", "academicYear"],
                    properties: {
                        currentGradeLevel: { bsonType: "string" },
                        currentSection: { bsonType: "string" },
                        academicYear: { bsonType: "string" },
                    }
                },
                contactDetails: {
                    bsonType: "object",
                    required: ["address", "contactNumber"],
                    properties: {
                        address: { bsonType: "string" },
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
