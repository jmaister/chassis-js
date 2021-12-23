// Based on https://github.com/aramk/vin-decoder

export const ALPHABET_CHARS = [
    "A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "R",
    "S", "T", "U", "V", "W", "X", "Y", "Z", "1", "2", "3", "4", "5", "6", "7",
    "8", "9", "0"
];
export const ALPHABET_INDEX = ALPHABET_CHARS
    .map((v, i) => [v, i])
    .reduce((acc, [v, i]) => ({ ...acc, [v]: i }), {});


export const START_YEAR = 1980;
export const YEAR_CHARS = "ABCDEFGHJKLMNPRSTVWXY123456789".split("");
export const YEAR_CHARS_INDEX = YEAR_CHARS
    .map((v, i) => [v, i])
    .reduce((acc, [v, i]) => ({ ...acc, [v]: i }), {});
export const YEAR_CHARS_LENGTH = YEAR_CHARS.length;

