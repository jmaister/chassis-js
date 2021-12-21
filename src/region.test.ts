import { countriesMap, regionMap } from "./region";

test("Countries are loaded correctly", () => {
    const map = countriesMap;

    expect(map["AA"]).toBe("South Africa");
    expect(map["AJ"]).toBe("Ivory Coast");
    expect(map["AL"]).toBe("Lesotho");
    expect(map["AM"]).toBe("Lesotho");
    
    expect(map["BH"]).toBe("Rwanda");

    expect(map["JA"]).toBe("Japan");

    expect(map["1A"]).toBe("United States");

    expect(map["BD"]).toBeUndefined();

});

test("Regions are loaded correctly", () => {
    const map = regionMap;

    expect(map["A"]).toBe("Africa");
    expect(map["J"]).toBe("Asia");
    expect(map["S"]).toBe("Europe");
    expect(map["1"]).toBe("North America");

    expect(map["D"]).toBeUndefined();
});
