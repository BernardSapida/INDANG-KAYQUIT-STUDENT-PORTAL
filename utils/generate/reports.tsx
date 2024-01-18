import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { ReportInputs } from "@/types/global";

export const generateExcel = (
    student: Array<Record<string, any>>,
    Filename: string,
    Report: string,
    inputs: ReportInputs
) => {
    // Create a new workbook and worksheet
    const workbook = XLSX.utils.book_new();

    if (Report === "Student Report Card") {
        createStudentsGradeCollection(workbook, XLSX, student, inputs);
    } else {
        createStudentList(workbook, XLSX, student);
    }

    // Convert the workbook to a binary Excel file
    const excelBuffer = XLSX.write(workbook, {
        bookType: "xlsx",
        type: "array",
    });

    // Create a Blob from the buffer
    const excelBlob = new Blob([excelBuffer], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });

    // Save the Blob as a file
    saveAs(excelBlob, `${Filename}.xlsx`);
};

const createStudentsGradeCollection = (
    workbook: XLSX.WorkBook,
    XLSX: any,
    student: Array<Record<string, any>>,
    inputs: ReportInputs
) => {
    const result = student.map(s => {
        const excelSheetData = [
            {
                "Fullname": s["Fullname"],
                "Section": `${inputs.gradeLevel} - ${inputs.section}`,
                "LRN": s["lrn"],
                "Email": s["Email"],
                "": ""
            },
            {
                "Fullname": "",
                "Section": "",
                "LRN": "",
                "Email": "",
                "": "",
            },
            {
                "Fullname": "Subject Name",
                "Section": "1st Quarter",
                "LRN": "2nd Quarter",
                "Email": "3rd Quarter",
                ".": "4th Quarter",
                "": "Final Grade",
            }
        ];

        for (let grade of s.grades) {
            for (let item of grade) {
                excelSheetData.push({
                    "Fullname": item.subjectName,
                    "Section": item.firstQuarter,
                    "LRN": item.secondQuarter,
                    "Email": item.thirdQuarter,
                    ".": item.fourthQuarter,
                    "": ((item.firstQuarter + item.secondQuarter + item.thirdQuarter + item.fourthQuarter) / 4).toFixed(2),
                })
            }
        }

        return excelSheetData;
    });

    result.filter(r => createGradeSheet(workbook, XLSX, r))
};

const createGradeSheet = (workbook: XLSX.WorkBook, XLSX: any, student: Record<string, any>[]) => {
    const worksheet = XLSX.utils.json_to_sheet(student);

    XLSX.utils.book_append_sheet(
        workbook,
        worksheet,
        `${student[0].Fullname} - Grades`
    );
}

const createStudentList = (
    workbook: XLSX.WorkBook,
    XLSX: any,
    studentList: Array<Record<string, any>>
) => {
    const worksheet = XLSX.utils.json_to_sheet(studentList);
    XLSX.utils.book_append_sheet(
        workbook,
        worksheet,
        "Student List"
    );
};