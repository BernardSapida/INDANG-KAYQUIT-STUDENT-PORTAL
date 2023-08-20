db.sections.insertOne({
    gradeLevel: 10,
    section: "A",
    academicYear: 2023,
    adviserName: "Jane Smith",
    adviserEmail: "jane.smith@example.com",
    students: [
        ObjectId("64daf5091b26561da8aaf7fb"),
        ObjectId("64daf5091b26561da8aaf7f1"),
        ObjectId("64daf5091b26561da8aaf7f2"),
        ObjectId("64daf5091b26561da8aaf7f3"),
        ObjectId("64daf5091b26561da8aaf7f4"),
        ObjectId("64daf5091b26561da8aaf7f5"),
        ObjectId("64daf5091b26561da8aaf7f6")
    ],
    createdAt: new Date(),
    updatedAt: new Date()
});
