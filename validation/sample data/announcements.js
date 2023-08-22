db.announcements.insertOne({
    gradeLevel: 10,
    section: "A",
    academicYear: 2023,
    announcements: [
        {
            title: "Announcement Title",
            description: "Announcement Description",
            createdAt: new Date()
        }
    ],
    createdAt: new Date(),
    updatedAt: new Date()
});
