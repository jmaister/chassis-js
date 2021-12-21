// https://standards.iso.org/iso/3780/
// https://standards.iso.org/iso/3780/Current%20WMI%20World%20Codes%20chart_Sept%202015.pdf
// https://standards.iso.org/iso/3780/ed-4/en/Current%20WMI%20World%20Codes%20chart%204.13.21.pdf

import { ALPHABET_CHARS, ALPHABET_INDEX } from "./constants";


const regions = [
    "A-C", "Africa",
    "J-R", "Asia",
    "S-Z", "Europe",
    "1-5", "North America",
    "6-7", "Oceania",
    "8-9", "South America"
];

const countries = [
    "AA-AH", "South Africa",
    "AJ-AK", "Ivory Coast",
    "AL-AM", "Lesotho",
    "AN-AP", "Botswana",
    "AR-AS", "Namibia",
    "AT-AU", "Madagascar",
    "AV-AW", "Mauritius",
    "AX-AY", "Tunisia",
    "AZ-A1", "Cyprus",
    "A2-A3", "Zimbabwe",
    "A4-A5", "Mozambique",
    
    "BA-BB", "Angola",
    "BC-BC", "Ethiopia",
    "BF-BG", "Kenya",
    "BH-BH", "Rwanda",
    "BL-BL", "Nigeria",
    "BR-BR", "Algeria",
    "BT-BT", "Swaziland",
    "BU-BU", "Uganda",
    "B3-B4", "Libya",

    "CA-CB", "Egypt",
    "CF-CG", "Morocco",
    "CL-CM", "Zambia",

    "EA-E0", "Russia",

    "HA-H0", "China",

    "JA-J0", "Japan",

    "KF-KH", "Israel",
    "KL-KR", "South Korea",
    "KS-KT", "Jordan",
    "K1-K3", "South Korea",
    "K5", "Kyrgyzstan",

    "LA-L0", "China",

    "MA-ME", "India",
    "MF-MK", "Indonesia",
    "ML-MR", "Thailand",
    "MS-MS", "Myanmar",
    "MU-MU", "Mongolia",
    "MX-MX", "Kazakhstan",
    "M1-M0", "India",

    "NA-NE", "Iran",
    "NF-NG", "Pakistan",
    "NJ-NJ", "Iraq",
    "NL-NR", "Turkey",
    "NS-NT", "Uzbekistan",
    "NV-NV", "Azerbaijan",
    "NX-NX", "Tajikistan",
    "NY-NY", "Armenia",
    "N1-N5", "Iran",
    "N7-N8", "Turkey",

    "PA-PC", "Philippines",
    "PF-PG", "Singapore",
    "PL-PR", "Malaysia",
    "PS-PT", "Bangladesh",
    "P5-P0", "India",

    "RA-RB", "United Arab Emirates",
    "RF-RK", "Taiwan",
    "RL-RM", "Vietnam",
    "RP-RP", "Laos",
    "RS-RT", "Saudi Arabia",
    "RU-RW", "Russia",
    "R1-R7", "Hong Kong",

    "SA-SM", "United Kingdom",
    "SN-ST", "Germany",
    "SU-SZ", "Poland",
    "S1-S2", "Latvia",
    "S3-S3", "Georgia",
    "S4-S4", "Iceland",
    
    "TA-TH", "Switzerland",
    "TJ-TP", "Czech Republic",
    "TR-TV", "Hungary",
    "TW-T1", "Portugal",
    "T3-T5", "Republic of Serbia",
    "T6-T6", "Andorra",
    "T7-T8", "Netherlands",

    "UA-UC", "Spain",
    "UH-UM", "Denmark",
    "UN-UR", "Ireland",
    "UU-UX", "Romania",
    "U1-U2", "Macedonia",
    "U5-U7", "Slovakia",
    "U8-U0", "Bosnia & Herzegovina",

    "VA-VE", "Austria",
    "VF-VR", "France",
    "VS-VW", "Spain",
    "VX-V2", "France",
    "V3-V5", "Croatia",
    "V6-V8", "Estonia",

    "WA-W0", "Germany",

    "XA-XC", "Bulgaria",
    "XD-XE", "Russia",
    "XF-XH", "Greece",
    "XJ-XK", "Russia",
    "XL-XR", "Netherlands",
    "XS-XW", "Russia",
    "XX-XY", "Luxembourg",
    "XZ-X0", "Russia",

    "YA-YE", "Belgium",
    "YF-YK", "Finland",
    "YN-YN", "Malta",
    "YS-YW", "Sweden",
    "YX-Y2", "Norway",
    "Y3-Y5", "Belarus",
    "Y6-Y8", "Ukraine",

    "ZA-ZU", "Italy",
    "ZX-ZZ", "Slovenia",
    "Z1-Z1", "San Marino",
    "Z3-Z5", "Lithuania",
    "Z6-Z0", "Russia",

    "1A-10", "United States",
    "2A-25", "Canada",

    "3A-3X", "Mexico",
    "34-34", "Nicaragua",
    "35-35", "Dominican Republic",
    "36-36", "Honduras",
    "37-37", "Panama",
    "38-39", "Puerto Rico",
    
    "4A-40", "United States",
    "5A-50", "United States",

    "6A-6X", "Australia",
    "6Y-61", "New Zealand",

    "7A-70", "United States",

    "8A-8E", "Argentina",
    "8F-8G", "Chile",
    "8L-8N", "Ecuador",
    "8S-8T", "Peru",
    "8X-8Z", "Venezuela",
    "82-82", "Bolivia",
    "84-84", "Costa Rica",

    "9A-9E", "Brazil",
    "9F-9G", "Colombia",
    "9S-9V", "Uruguay",
    "91-90", "Brazil"
];


const getCountries = () => {
    const theMap = {};

    for (let i = 0; i < countries.length; i = i + 2) {
        const rangeStr = countries[i];
        const country = countries[i + 1];
        const rangeStart = rangeStr.substring(1, 2);
        const rangeEnd = rangeStr.substring(4, 5);

        const startIndex = ALPHABET_INDEX[rangeStart];
        const endIndex = ALPHABET_INDEX[rangeEnd];

        for (let j = startIndex; j <= endIndex; j++) {
            const code = rangeStr.charAt(0) + ALPHABET_CHARS[j];
            theMap[code] = country;
        }
    }
    return theMap;
};

const getRegions = () => {
    const theMap = {};

    for (let i = 0; i < regions.length; i = i + 2) {
        const rangeStr = regions[i];
        const region = regions[i + 1];

        const rangeStart = rangeStr.substring(0, 1);
        const rangeEnd = rangeStr.substring(2, 3);

        const startIndex = ALPHABET_INDEX[rangeStart];
        const endIndex = ALPHABET_INDEX[rangeEnd];

        for (let j = startIndex; j <= endIndex; j++) {
            const code = ALPHABET_CHARS[j];
            theMap[code] = region;
        }
    }
    return theMap;
};

export const countriesMap = getCountries();
export const regionMap = getRegions();