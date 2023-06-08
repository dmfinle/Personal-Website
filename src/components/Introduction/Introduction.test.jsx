import { render, screen } from "@testing-library/react";
import Introduction from "./Introduction";
import { ThemeContext } from "context/ThemeContext";

beforeEach(() => {
  const setTheme = jest.fn();
  render(
    <ThemeContext.Provider value={["light", setTheme]}>
      <Introduction></Introduction>
    </ThemeContext.Provider>
  );
});
describe("Introduction Test", () => {
  test("Verify Words", () => {
    screen.getByText("Hey,");
    screen.getByText("My name is Daniel Finley");
  });
});
