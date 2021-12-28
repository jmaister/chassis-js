
import { parseVIN } from "./vin";

test("Get basic VIN info", () => {
    // https://www.clearvin.com/en/sample-report
    // 2012 BMW 5-Series 535i
    const result = parseVIN("WBAFR7C57CC811956");
    expect(result.vin).toBe("WBAFR7C57CC811956");
    expect(result.ok).toBe(true);
    expect(result.info.region).toBe("Europe");
    expect(result.info.country).toBe("Germany");
    expect(result.info.years.length).toBe(2);
    expect(result.info.years).toContain(1982);
    expect(result.info.years).toContain(2012);
    expect(result.info.manufacturer).toBe("BMW");
});
