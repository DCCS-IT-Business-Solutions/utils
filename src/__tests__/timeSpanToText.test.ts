import { timeSpanToText } from "../timespanToText";

describe("timeSpanToText", () => {
  it("should be same hour", () => {
    const start = new Date(1919, 10, 10, 10, 10, 10, 10);
    const end = new Date(1919, 10, 10, 10, 15, 15, 15);
    const result = timeSpanToText({ start, end });
    expect(result).toBe("10:10 - 15 10.Nov.1919");
  });

  it("should be same day", () => {
    const start = new Date(2020, 10, 10, 10, 10, 10, 10);
    const end = new Date(2020, 10, 10, 15, 15, 15, 15);
    const result = timeSpanToText({ start, end });
    expect(result).toBe("10:10 - 15:15 10.Nov.20");
  });

  it("should be same month", () => {
    const start = new Date(2020, 10, 10, 10, 10, 10, 10);
    const end = new Date(2020, 10, 15, 15, 15, 15, 15);
    const result = timeSpanToText({ start, end });
    expect(result).toBe("10 - 15.Nov.20");
  });

  it("should be same year", () => {
    const start = new Date(2020, 10, 10, 10, 10, 10, 10);
    const end = new Date(2020, 11, 15, 15, 15, 15, 15);
    const result = timeSpanToText({ start, end });
    expect(result).toBe("10.Nov - 15.Dec.20");
  });

  it("should be different year", () => {
    const start = new Date(2020, 10, 10, 10, 10, 10, 10);
    const end = new Date(2021, 11, 5, 5, 5, 5, 5);
    const result = timeSpanToText({ start, end });
    expect(result).toBe("10.Nov.20 - 5.Dec.21");
  });
});
