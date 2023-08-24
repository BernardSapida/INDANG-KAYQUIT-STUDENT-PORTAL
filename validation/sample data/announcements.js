db.announcements.insertOne({
    gradeLevel: "6",
    section: "Narra",
    academicYear: "2023-2024",
    announcements: [
        {
            title: "Join Us for Back-to-School Night!",
            description: "We invite all parents and guardians to attend our Back-to-School Night on September 5th at 6:00 PM. Get to know your child's teachers, learn about the curriculum, and get a glimpse of the exciting year ahead.",
            createdAt: new Date()
        },
        {
            title: "Fall Sports Tryouts Announcement",
            description: "Calling all athletes! Fall sports tryouts will take place from September 10th to 12th. Whether you're interested in soccer, volleyball, or cross country, come showcase your skills and be part of our winning teams!",
            createdAt: new Date()
        },
        {
            title: "Calling All Young Scientists!",
            description: "The annual Science Fair is just around the corner. Students from all grades are encouraged to register their innovative projects by September 15th. Show off your passion for science and compete for exciting prizes!",
            createdAt: new Date()
        },
        {
            title: "Spotlight on Talent - Drama Club Auditions",
            description: "Are you a budding actor or actress? Join us for Drama Club auditions on September 8th and 9th. This year, we're bringing a classic Shakespearean play to life. Break a leg as you audition for a chance to shine on stage!",
            createdAt: new Date()
        },
        {
            title: "Community Service Opportunity",
            description: "We believe in giving back! Students interested in volunteering can join our community service event on September 20th. Help us clean up the local park and contribute to a cleaner, greener environment for everyone.",
            createdAt: new Date()
        }
    ],
    createdAt: new Date(),
    updatedAt: new Date()
});
