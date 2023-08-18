export const getAcademicYear = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();

    return `${year} - ${year + 1}`;
}