db.createCollection("sections",
    {
        validator: {
            $jsonSchema: {
                bsonType: "object",
                required: ["gradeLevel", "name", "academicYear", "subjects"],
                properties: {
                    gradeLevel: { bsonType: "string" },
                    name: { bsonType: "string" },
                    academicYear: { bsonType: "string", pattern: "^[0-9]{4}-[0-9]{4}$" },
                    subjects: {
                        bsonType: "array",
                        items: {
                            bsonType: "object",
                            required: ["subjectName", "time", "day", "room"],
                            properties: {
                                subjectName: { bsonType: "string" },
                                time: { bsonType: "string" },
                                day: { bsonType: "string" },
                                room: { bsonType: "string" }
                            }
                        }
                    },
                    createdAt: { bsonType: "date" },
                    updatedAt: { bsonType: "date" }
                }
            }
        }
    });