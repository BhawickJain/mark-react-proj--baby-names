import BabyName from "../types/BabyNames";

const isPicked = (baby: BabyName, pickedBabies: BabyName[]): boolean => {
    return pickedBabies.some((b) => b.name === baby.name)
}

export default isPicked