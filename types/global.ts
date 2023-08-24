export interface User {
    email: string,
    role: string
}

export interface Subjects {
    subjectName: string,
    time: string,
    day: string,
    room: string,
}

export interface SubjectDetails {
    name: string,
    gradeLevel: string,
    academicYear: string,
    subjects?: Subjects[]
}

export interface Section {
    sectionDetails: SubjectDetails
}

export interface StudentClasses {
    classes: Section[]
}

export interface Student {
    personalDetails: PersonalDetails,
    enrollmentDetails: EnrollmentDetails,
    contactDetails: contactDetails,
    kayquitAccount: KayquitAccount
}

export interface Teacher {
    personalDetails: PersonalDetails,
    sectionHandle: SectionHandle,
    contactDetails: contactDetails,
    kayquitAccount: KayquitAccount
}

export interface PersonalDetails {
    fullname: string,
    birthdate: string,
    sex: string,
    religion: string,
    civilStatus: string,
}

export interface SectionHandle {
    gradeLevel: string,
    section: string,
    academicYear: string,
}

export interface EnrollmentDetails {
    currentGradeLevel: string,
    currentSection: string,
    lrn: string,
    studentNumber: string,
    academicYear: string,
}

export interface contactDetails {
    address: string,
    guardian: string,
    contactNumber: string,
}

export interface KayquitAccount {
    email: string,
    defaultPassword: string,
    password: string,
}

export interface ClassAnnouncement {
    gradeLevel: string,
    section: string,
    academicYear: string,
    announcements: Announcements[]
}

export interface Announcements {
    title: string,
    description: string,
    createdAt: string,
}

export interface Grades {
    grade: Grade[]
}

export interface Grade {
    subjectName: String,
    firstQuarter: number,
    secondQuarter: number,
    thirdQuarter: number,
    fourthQuarter: number,
}