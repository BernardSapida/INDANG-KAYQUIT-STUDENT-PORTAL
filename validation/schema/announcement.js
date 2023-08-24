db.createCollection("announcements", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["gradeLevel", "section", "academicYear", "announcements", "createdAt", "updatedAt"],
            properties: {
                gradeLevel: {
                    bsonType: "string",
                    description: "Grade level of the class"
                },
                section: {
                    bsonType: "string",
                    description: "Section of the class"
                },
                academicYear: {
                    bsonType: "string",
                    description: "Academic year of the class"
                },
                announcements: {
                    bsonType: "array",
                    description: "Array of announcements",
                    items: {
                        bsonType: "object",
                        required: ["title", "description", "createdAt"],
                        properties: {
                            title: {
                                bsonType: "string",
                                description: "Announcement title"
                            },
                            description: {
                                bsonType: "string",
                                description: "Announcement description"
                            },
                            createdAt: {
                                bsonType: "date",
                                description: "Creation date of the announcement"
                            }
                        }
                    }
                },
                createdAt: {
                    bsonType: "date",
                    description: "Creation date of the document"
                },
                updatedAt: {
                    bsonType: "date",
                    description: "Last update date of the document"
                }
            }
        }
    }

});
