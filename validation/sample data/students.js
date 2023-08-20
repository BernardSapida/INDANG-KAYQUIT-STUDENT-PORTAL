db.students.insertOne({
    personalDetails: {
        fullname: "John Doe",
        birthdate: "1995-01-15",
        sex: "Male",
        religion: "Christianity",
        civilStatus: "Single",
    },
    enrollmentDetails: {
        currentGradeLevel: 10,
        currentSection: "A",
        lrn: "123456789012",
        studentNumber: 12345
    },
    schoolSchedule: [
        {
            academicYear: "2021-2022",
            section: "6 - Peace",
            subjects: [
                {
                    subjectName: "english",
                    time: "8:00 AM - 8:45 AM",
                    day: "Monday",
                    room: "Classroom 1A"
                },
                {
                    subjectName: "math",
                    time: "9:00 AM - 9:45 AM",
                    day: "Monday",
                    room: "Classroom 1A"
                },
                {
                    subjectName: "science",
                    time: "10:00 AM - 10:45 AM",
                    day: "Tuesday",
                    room: "Science Lab"
                },
                {
                    subjectName: "Physical Education (PE)",
                    time: "11:00 AM - 11:45 AM",
                    day: "Tuesday",
                    room: "Gymnasium"
                },
                {
                    subjectName: "Music",
                    time: "9:00 AM - 9:45 AM",
                    day: "Wednesday",
                    room: "Music Room"
                },
                {
                    subjectName: "Social Studies",
                    time: " 11:00 AM - 11:45 AM",
                    day: "Wednesday",
                    room: "Classroom 1A"
                },
                {
                    subjectName: "Computer Science",
                    time: " 11:00 AM - 11:45 AM",
                    day: "Thursday",
                    room: "Computer Lab"
                },
                {
                    subjectName: "Library",
                    time: "8:00 AM - 8:45 AM",
                    day: "Friday",
                    room: "Library"
                }
            ],
            grades: [
                {
                    subjectName: "english",
                    firstQuarter: 85,
                    secondQuarter: 88,
                    thirdQuarter: 90,
                    fourthQuarter: 92
                },
                {
                    subjectName: "math",
                    firstQuarter: 90,
                    secondQuarter: 88,
                    thirdQuarter: 85,
                    fourthQuarter: 88
                },
                {
                    subjectName: "science",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "physical education (PE)",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "music",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "social studies",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Computer Science",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                },
                {
                    subjectName: "Library",
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                }
            ]
        }
    ],
    contactDetails: {
        address: "123 Main St, City",
        guardian: "Jane Doe",
        contactNumber: "555-123-4567"
    },
    kayquitGoogleAccount: {
        kayquitAccount: "johndoe@example.com",
        defaultPassword: "password123",
        password: "securePassword"
    },
    createdAt: new Date(),
    updatedAt: new Date()
});
