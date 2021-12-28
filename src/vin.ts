import { getManufacturer } from "./manufacturer";
import { getCountry, getRegion } from "./region";
import { getYears } from "./year";

export interface ParseResult {
    vin: string;
    ok: boolean;
    message: string;

    // Info is null if ok is false
    info?: VINInfo;
}

export interface VINInfo {
    region: string;
    country: string;
    years: number[];
    manufacturer: string;
}

export function parseVIN(vin: string): ParseResult {
    vin = vin.toUpperCase();

    const validationResult = validateVIN(vin);
    if (!validationResult.ok) {
        return {
            vin,
            ok: false,
            message: validationResult.error,
        };
    }

    const split = splitVIN(vin);
    const region = getRegion(split.wmi);
    const country = getCountry(split.wmi);
    const years = getYears(split.yearCode);
    const manufacturer = getManufacturer(split.wmi);

    return {
        vin,
        ok: true,
        message: "OK",
        info: {
            region,
            country,
            years,
            manufacturer,
        },
    } as ParseResult;
}

interface ValidationResult {
    ok: boolean;
    error: string;
}

function validateVIN(vin: string): ValidationResult {
    if (vin.length !== 17) {
        return {
            ok: false,
            error: "VIN must be 17 characters long",
        };
    }

    if (!vin.match(/^[A-HJ-NPR-Z0-9]{17}$/)) {
        return {
            ok: false,
            error: "VIN must be 17 characters long and contain only letters and numbers",
        };
    }

    return {
        ok: true,
        error: "",
    };
}

export interface Split {
    // ISO-3779
    // European Union >500v/year
    wmi: string;
    vds: string;
    vis: string;

    yearCode: string;

    manufacturer: string;

    /*
    // European Union <=500v/year
    euroLessThan500: boolean
    wmi2: string
    nine: string

    // North America >2000v/year
    vehicleAttributes: string
    checkDigit: string
    modelYear: string
    plantCode: string
    sequentialNumber: string

    // North America <=2000v/year
    manufacturerIdentifier: string
    // sequentialNumber: string
    */
}

export function splitVIN(vin: string): Split {
    return {
        wmi: vin.substring(0, 3),
        vds: vin.substring(3, 9),
        vis: vin.substring(9, 17),
        yearCode: vin.substring(9, 10),
    } as Split;
}
