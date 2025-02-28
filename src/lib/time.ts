
export const compareByCTime = (preTime: string | number | Date): string => {
    const createdAtDate = new Date(preTime);
    const differenceInMinutes = Math.floor((Date.now() - createdAtDate.getTime()) / 60000);

    if (differenceInMinutes < 1) return "Just Now";
    if (differenceInMinutes < 60) return `${differenceInMinutes} min ago`;
    if (differenceInMinutes < 1440) return `${Math.floor(differenceInMinutes / 60)} hour ago`;
    if (differenceInMinutes < 10080)
        return `${createdAtDate.toLocaleDateString("en-US", { weekday: "long" })}, ${createdAtDate.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })}`;
    if (differenceInMinutes < 43800) return `${Math.floor(differenceInMinutes / 10080)} week ago`;
    if (differenceInMinutes < 525600) return `${Math.floor(differenceInMinutes / 43800)} month ago`;
    return `${Math.floor(differenceInMinutes / 525600)} year ago`;
};
