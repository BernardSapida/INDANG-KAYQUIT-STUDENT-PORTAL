db.students.insertOne({
    _id: ObjectId("64e451168a6ca6fdbb363de1"),
    personalDetails: {
        fullname: 'Bernard Sapida',
        birthdate: '2013-05-09',
        sex: 'Male',
        religion: 'Christianity',
        civilStatus: 'Single'
    },
    enrollmentDetails: {
        currentGradeLevel: 5,
        currentSection: 'Akasya',
        lrn: '202102231',
        academicYear: '2019-2020',
        studentNumber: '202309942000'
    },
    classes: [
        {
            section: ObjectId("64e4ae628a6ca6fdbb363fa7"),
            grades: [
                {
                    subjectName: 'English',
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: 'Math',
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: 'Filipino',
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: 'MTB',
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: 'Araling Panlipunan',
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: 'ESP',
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: 'Science',
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: 'MAPEH',
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: 'Intermediate',
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                }
            ]
        },
        {
            section: ObjectId("64e4ae628a6ca6fdbb363fb6"),
            grades: [
                {
                    subjectName: 'English',
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: 'Math',
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: 'Filipino',
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: 'MTB',
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: 'Araling Panlipunan',
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: 'ESP',
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: 'Science',
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: 'MAPEH',
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: 'Intermediate',
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                }
            ]
        },
        {
            section: ObjectId("64e4ae628a6ca6fdbb363fc7"),
            grades: [
                {
                    subjectName: 'English',
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: 'Math',
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: 'Filipino',
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: 'MTB',
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: 'Araling Panlipunan',
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: 'ESP',
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: 'Science',
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: 'MAPEH',
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: 'Intermediate',
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                }
            ]
        },
        {
            section: ObjectId("64e4ae628a6ca6fdbb363fd6"),
            grades: [
                {
                    subjectName: 'English',
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: 'Math',
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: 'Filipino',
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: 'MTB',
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: 'Araling Panlipunan',
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: 'ESP',
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: 'Science',
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: 'MAPEH',
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: 'Intermediate',
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                }
            ]
        },
        {
            section: ObjectId("64e4ae628a6ca6fdbb363fe7"),
            grades: [
                {
                    subjectName: 'English',
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: 'Math',
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: 'Filipino',
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: 'MTB',
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: 'Araling Panlipunan',
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: 'ESP',
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: 'Science',
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: 'MAPEH',
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: 'Intermediate',
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                }
            ]
        },
        {
            section: ObjectId("64e4ae628a6ca6fdbb363ff6"),
            grades: [
                {
                    subjectName: 'English',
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: 'Math',
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: 'Filipino',
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: 'MTB',
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: 'Araling Panlipunan',
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: 'ESP',
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: 'Science',
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: 'MAPEH',
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: 'Intermediate',
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                }
            ]
        },
        {
            section: ObjectId("64e4ae628a6ca6fdbb364007"),
            grades: [
                {
                    subjectName: 'English',
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: 'Math',
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: 'Filipino',
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: 'MTB',
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: 'Araling Panlipunan',
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: 'ESP',
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: 'Science',
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: 'MAPEH',
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                },
                {
                    subjectName: 'Intermediate',
                    firstQuarter: Math.floor(Math.random() * 25) + 75,
                    secondQuarter: Math.floor(Math.random() * 25) + 75,
                    thirdQuarter: Math.floor(Math.random() * 25) + 75,
                    fourthQuarter: Math.floor(Math.random() * 25) + 75
                }
            ]
        }
    ],
    contactDetails: {
        address: 'Imus, Cavite',
        guardian: 'Christian R. Sapida',
        contactNumber: '09474556173'
    },
    kayquitAccount: {
        email: 'bernard.sapida@kayquit.edu.ph',
        defaultPassword: '@Password123',
        password: '@Password123'
    },
    createdAt: new Date(),
    updatedAt: new Date(),
});