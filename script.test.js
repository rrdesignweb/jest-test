const googleSearch = require("./script");

dbMock = ["dog.com", "cheesepuff.com", "dogpics.com", "disney.com"];

describe("googleSearch", () => {
  it("It is a silly test", () => {
    expect("hello").toBe("hello");
  });

  it("It is searching google", () => {
    expect(googleSearch("efvd", dbMock)).toEqual([]);
    expect(googleSearch("dog", dbMock)).toEqual(["dog.com", "dogpics.com"]);
  });

  it("Work with undefined and null input", () => {
    expect(googleSearch(undefined, dbMock)).toEqual([]);
    expect(googleSearch(null, dbMock)).toEqual([]);
  });

  it("Does not return more than 3 matches", () => {
    expect(googleSearch(".com", dbMock).length).toEqual(3);
  });
});
