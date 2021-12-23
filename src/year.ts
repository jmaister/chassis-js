import { START_YEAR, YEAR_CHARS_INDEX, YEAR_CHARS_LENGTH } from "./constants";

export const getYears = (yearCode: string): number[] => {
    const index = YEAR_CHARS_INDEX[yearCode];
    const currentYear = new Date().getFullYear();

    let candidate = START_YEAR + index;
    const years = [];
    do {
        years.push(candidate);
        candidate = candidate + YEAR_CHARS_LENGTH;
    } while (candidate <= currentYear);

    return years;
}
