db.sections.insertOne({
    gradeLevel: 6,
    name: "Akasya",
    academicYear: "2021-2022",
    subjects: [
        {
            subjectName: "English",
            time: "8:00 AM - 8:45 AM",
            day: "Monday",
            room: "Room A"
        },
        {
            subjectName: "Math",
            time: "9:00 AM - 9:45 AM",
            day: "Monday",
            room: "Room A"
        },
        {
            subjectName: "Filipino",
            time: "10:00 AM - 10:45 AM",
            day: "Tuesday",
            room: "Room A"
        },
        {
            subjectName: "MTB",
            time: "11:00 AM - 11:45 AM",
            day: "Tuesday",
            room: "Room A"
        },
        {
            subjectName: "Araling Panlipunan",
            time: "9:00 AM - 9:45 AM",
            day: "Wednesday",
            room: "Room A"
        },
        {
            subjectName: "ESP",
            time: " 11:00 AM - 11:45 AM",
            day: "Wednesday",
            room: "Room A"
        },
        {
            subjectName: "Science",
            time: " 11:00 AM - 11:45 AM",
            day: "Thursday",
            room: "Room A"
        },
        {
            subjectName: "MAPEH",
            time: "8:00 AM - 8:45 AM",
            day: "Friday",
            room: "Room A"
        }
    ],
    createdAt: new Date(),
    updatedAt: new Date()
});
