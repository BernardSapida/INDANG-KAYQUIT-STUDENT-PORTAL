db.teachers.insertOne({
    personalDetails: {
        fullname: "John Doe",
        birthdate: "1995-01-15",
        sex: "Male",
        religion: "Christianity",
        civilStatus: "Single",
    },
    sectionHandle: {
        currentGradeLevel: 10,
        currentSection: "A",
        academicYear: 2023
    },
    contactDetails: {
        address: "123 Main St, City",
        contactNumber: "555-123-4567"
    },
    kayquitGoogleAccount: {
        kayquitAccount: "johndoe@example.com",
        defaultPassword: "password123",
        password: "password123"
    },
    createdAt: new Date(),
    updatedAt: new Date()
});
