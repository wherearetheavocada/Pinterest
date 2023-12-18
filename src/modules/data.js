export const createDate = () => {
    const dataCard = `${new Date().getDate()} ${month[new Date().getMonth()]} ${new Date().getHours()}:${new Date().getMinutes()}`;

    return dataCard
}