import { Grade, Subject } from "@/types/global";

export const getGrades = (subjects: Subject[]) => {
    let grades: Grade[] = [];

    subjects.filter(subject => {
        let gradeCollection = {
            subjectName: subject.subjectName,
            firstQuarter: 0,
            secondQuarter: 0,
            thirdQuarter: 0,
            fourthQuarter: 0,
        }

        grades.push(gradeCollection);
    })

    return grades;
}