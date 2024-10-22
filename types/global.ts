import { ObjectId } from "mongodb"

export interface ReportInputs {
    report: string;
    gradeLevel: string;
    section: string;
    academicYear: string;
}

export interface User {
    email: string,
    fullname: string,
    gradeLevel: string,
    section: string,
    role: string
}

export interface Subjects {
    subjectName: string,
    time: string,
    day: string,
    room: string,
}

export interface SectionDetails {
    name: string,
    gradeLevel: string,
    academicYear: string,
    subjects?: Subjects[],
    students?: any[]
}

export interface StudentSection {
    section: string,
    sectionDetails: SectionDetails
}

export interface StudentClasses {
    classes: StudentSection[]
}

export interface Student {
    _id?: ObjectId,
    personalDetails: PersonalDetails,
    enrollmentDetails: EnrollmentDetails,
    contactDetails: ContactDetails,
    kayquitAccount: KayquitAccount,
    classes?: Classes[],
    createdAt?: string,
    updatedAt?: string
}

export interface Teacher {
    personalDetails: PersonalDetails,
    sectionHandle: SectionHandle,
    contactDetails: ContactDetails,
    kayquitAccount: KayquitAccount
}

export interface PersonalDetails {
    fullname: string,
    birthdate: string,
    sex: string,
    religion: string,
}

export interface SectionHandle {
    currentGradeLevel: string,
    currentSection: string,
    academicYear: string,
}

export interface EnrollmentDetails {
    currentGradeLevel: string,
    currentSection: string,
    lrn: string,
    academicYear: string,
}

export interface ContactDetails {
    address: string,
    guardian: string,
    contactNumber: string,
}

export interface KayquitAccount {
    email: string,
    defaultPassword: string,
    password: string,
}

export interface Classes {
    section: ObjectId,
    grades: Grade[],
    sectionDetails?: any
}

export interface ClassDetails {
    _id: string,
    gradeLevel: string,
    name: string,
    academicYear: string,
    subjects: Subject[],
    createdAt?: string,
    updatedAt?: string
}

export interface ClassAnnouncement {
    gradeLevel?: string,
    section?: string,
    academicYear?: string,
    announcements?: Announcements[]
}

export interface Announcements {
    title: string,
    description: string,
    createdAt?: string,
    updatedAt?: string
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

export interface Password {
    fullname: string,
    defaultPassword: string,
    gradeLevel: string,
    section: string,
    password: string;
}

export interface AuthResult {
    status: number,
    isAuthorized: boolean,
    data?: {
        email: string,
        fullname: string,
        gradeLevel: string,
        section: string,
        role: string,
    },
    message: string
}

export interface Response {
    status: number,
    isSuccess: boolean,
    message?: string
}

export interface GradeResponse extends Response {
    data: { sectionDetails?: SectionDetails, grades?: Grade[] },
}

export interface ProfileResponse extends Response {
    data?: Student,
}

export interface TeacherProfileResponse extends Response {
    data?: Teacher,
}

export interface SectionDetailsResponse extends Response {
    data?: Section,
}

export interface AnnouncementResponse extends Response {
    data: ClassAnnouncement,
}

export interface SubjectResponse extends Response {
    data?: Section[],
}

export interface SectionCreationResponse extends Response {
    data?: {
        acknowledged: boolean,
        insertedId: ObjectId
    }
}

export interface PasswordResponse extends Response {
    data?: KayquitAccount,
}

export interface Subject {
    subjectName: string,
    time: string,
    day: string,
    room: string,
}

export interface Section {
    _id?: string,
    gradeLevel: string,
    name: string,
    academicYear: string,
    subjects: Subject[],
    students: ObjectId[],
    createdAt?: string,
    updatedAt?: string,
}

export interface StudentResponse extends Response {
    data?: InsertOneResult,
}

export interface TeacherResponse extends Response {
    data?: InsertOneResult,
}

export interface InsertOneResult {
    acknowledged: boolean,
    insertedId: ObjectId,
}