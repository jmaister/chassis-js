
import {getManufacturers, getManufacturer} from "./manufacturer";

test("Manufacturers are loaded correctly.", () => {
    const manufacturers = getManufacturers();

    expect(manufacturers["JAA"]).toBe("Isuzu");
    expect(manufacturers["JAB"]).toBe("Isuzu");
    expect(manufacturers["JA9"]).toBe("Isuzu");
    expect(manufacturers["JA0"]).toBe("Isuzu");
});

test("Test manufacturer.", () => {
    expect(getManufacturer("JAA")).toBe("Isuzu");
    expect(getManufacturer("JAB")).toBe("Isuzu");
    expect(getManufacturer("JA9")).toBe("Isuzu");
    expect(getManufacturer("JA0")).toBe("Isuzu");
});
