db.createCollection("announcements",
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
                    "announcements",
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
                    announcements: {
                        bsonType: "array",
                        description: "Announcements array is required.",
                        items: {
                            bsonType: "objectId",
                            description: "Each item in 'announcement' array must be a valid ObjectId."
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