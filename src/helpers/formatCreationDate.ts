export default function formatCreationDate(creationDate: string): string {
    const [month, day, year] = creationDate.split("/");
    return `${day.padStart(2, "0")}.${month.padStart(2, "0")}.${year}`
}