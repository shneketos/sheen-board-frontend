export const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en", {
        day: "numeric",
        month: "short",
    }).format(date);
};
