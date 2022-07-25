import BabyName from "../types/BabyNames"

const sortAlphabetically = (babyData: BabyName[]): BabyName[] => {
    const sortedbabyData = babyData.sort((a: BabyName, b: BabyName) => a.name > b.name ? 1 : -1)
    return sortedbabyData
}

export default sortAlphabetically