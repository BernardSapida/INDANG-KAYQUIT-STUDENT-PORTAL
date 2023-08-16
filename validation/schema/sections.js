db.createCollection("sections",
{
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: [
                "gradeLevel",
                "section",
                "academicYear",
                "adviserName",
                "adviserEmail",
                "students",
                "createdAt",
                "updatedAt"
            ],
            properties: {
                gradeLevel: {
                    bsonType: "int",
                    description: "Grade level is required."
                },
                section: {
                    bsonType: "string",
                    description: "Section is required."
                },
                academicYear: {
                    bsonType: "int",
                    description: "Academic year is required."
                },
                adviserName: {
                    bsonType: "string",
                    description: "Adviser name is required."
                },
                adviserEmail: {
                    bsonType: "string",
                    description: "Adviser email is required."
                },
                students: {
                    bsonType: "array",
                    description: "Students array is required.",
                    items: {
                        bsonType: "objectId",
                        description: "Each item in 'students' array must be a valid ObjectId."
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