import { sleep } from "../index";

describe("sleep", () => {
  it("should resolve the promise", () => {
    jest.useRealTimers();
    expect.assertions(1);
    return expect(sleep(1)).resolves.toBeUndefined();
  });

  it("should do things", () => {
    jest.useFakeTimers();
    const sut = sleep(1000);

    jest.advanceTimersByTime(1000);

    expect.assertions(1);
    return expect(sut).resolves.toBeUndefined();
  });
});
