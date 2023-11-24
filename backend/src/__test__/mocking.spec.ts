import { v4 } from "uuid";

jest.mock("uuid", () => ({
  v4: jest.fn(),
}));

describe("this mocks the uuid", () => {
  it("generates a unique id", () => {
    // const id = v4()

    const mockedV4 = jest.requireMock("uuid").v4;
    mockedV4.mockImplementation(() => "uniqueid_ccgcuucvucv");
    console.log(v4());
  });
});
