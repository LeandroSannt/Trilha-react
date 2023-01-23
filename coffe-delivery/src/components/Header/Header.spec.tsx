import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import useEvent from "@testing-library/user-event";
import { Header } from "./index";

describe("App Componente", () => {
  it("should render header", () => {
    const { getByText } = render(<Header />);
  });

  it("should be get location of user", async () => {});

  it("should be able to redirect to confirmation window", async () => {});
});
