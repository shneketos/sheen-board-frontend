export const formatDate = (dateString: string) => {
    const months = [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN",
        "JUL",
        "AUG",
        "SEP",
        "OCT",
        "NOV",
        "DEC",
    ];

    const date = new Date(dateString);

    const day = date.getDate();
    const month = months[date.getMonth()];

    const formattedDate = `${day} ${month}`;

    return formattedDate;
};
