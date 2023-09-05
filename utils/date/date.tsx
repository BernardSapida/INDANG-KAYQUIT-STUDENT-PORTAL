export const getAcademicYear = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();

    return `${year}-${year + 1}`;
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

export const getCurrentQuarter = (): string => {
    const now = new Date();
    const month = now.getMonth() + 1;

    if ((month >= 8 && month <= 10) || (month === 11 && now.getDate() <= 29)) {
        return "First";
    } else if ((month >= 10 && month <= 12) || (month === 1 && now.getDate() === 29) || (month === 2 && now.getDate() < 29)) {
        return "Second";
    } else if ((month >= 12 && month <= 2) || (month === 3 && now.getDate() <= 29)) {
        return "Third";
    } else if ((month >= 2 && month <= 4) || (month === 4 && now.getDate() === 29) || (month === 5 && now.getDate() < 29)) {
        return "Fourth";
    }

    return "Summer Vacation";
}