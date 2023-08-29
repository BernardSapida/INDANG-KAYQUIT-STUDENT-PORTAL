db.teachers.insertOne({
    personalDetails: {
        fullname: "Bernard Sapida",
        birthdate: "2002-12-17",
        sex: "Male",
        religion: "Christianity",
        civilStatus: "Single",
    },
    sectionHandle: {
        currentGradeLevel: "6",
        currentSection: "Narra",
        academicYear: "2023-2024"
    },
    contactDetails: {
        address: "123 Main St, City",
        contactNumber: "09472126029"
    },
    kayquitAccount: {
        email: "bernard.sapida@teacher.kayquit.edu.ph",
        defaultPassword: "password123",
        password: "$2b$10$t1q6HnTmeyAH2PA3fqx/7unhUe.mrJhXXcWkPtW6/uTgDeqRA7Hzm"
    },
    createdAt: new Date(),
    updatedAt: new Date()
});
