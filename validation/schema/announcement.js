db.createCollection("announcements", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["gradeLevel", "section", "academicYear", "announcements", "createdAt", "updatedAt"],
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
                announcements: {
                    bsonType: "array",
                    description: "Announcements array is required.",
                    items: {
                        bsonType: "objectId",
                        description: "Announcement object IDs are required."
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
                    gradeLevel: "Grade level is required.",
                    section: "Section is required.",
                    academicYear: "Academic year is required.",
                    announcements: "Announcements are required.",
                    createdAt: "Creation date is required.",
                    updatedAt: "Update date is required."
                }
            }
        }
    }
});
