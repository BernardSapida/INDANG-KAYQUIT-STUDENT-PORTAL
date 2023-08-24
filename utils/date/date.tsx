export const getAcademicYear = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();

    return `${year} - ${year + 1}`;
}

export const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const formattedDate = date.toLocaleString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    });

    const [monthDate, year, time] = formattedDate.split(', ');

    return {
        date: monthDate,
        year: year,
        time: time
    };
}