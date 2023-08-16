db.students.insertOne({
    personalDetails: {
        fullname: "John Doe",
        birthdate: "1995-01-15",
        sex: "Male",
        religion: "Christianity",
        civilStatus: "Single",
        nationality: "American",
        ethnicity: "Caucasian",
        citizenship: "USA"
    },
    enrollmentDetails: {
        currentGradeLevel: 10,
        currentSection: "A",
        lrn: "123456789012",
        studentNumber: 12345
    },
    grades: {
        academicYear: {
            "2021-2022": {
                English: {
                    firstQuarter: 85,
                    secondQuarter: 88,
                    thirdQuarter: 90,
                    fourthQuarter: 92
                },
                Math: {
                    firstQuarter: 90,
                    secondQuarter: 88,
                    thirdQuarter: 85,
                    fourthQuarter: 88
                },
                Science: {
                    firstQuarter: 78,
                    secondQuarter: 80,
                    thirdQuarter: 82,
                    fourthQuarter: 85
                }
            }
        }
    },
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
