

export default function getDate(dateProvided){
    const months = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December" ]
    const date = new Date(dateProvided)
    const day = date.getDate()
    const index=  date.getMonth()
    const nameOfMonth = months[index]
    const month = nameOfMonth

    const textDate = `${month}, ${day}`
    return textDate
}