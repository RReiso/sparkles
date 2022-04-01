import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Home from "../components/Home";

describe("Home component", () => {
  const setup = () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
  };

  beforeEach(() => {
    setup();
    expect(screen.getByText(/moment/i)).toBeInTheDocument();
  });

  test("should render image of a woman on the home page", () => {
    expect(screen.getByAltText("woman")).toHaveAttribute("src", "img2.jpg");
  });

  test("should render six links", async () => {
    expect(screen.getAllByRole("link").length).toEqual(6);
  });

  test("'Shop now' button should link to /all", async () => {
    expect(screen.getByRole("link", { name: "Shop now" })).toHaveAttribute(
      "href",
      "/all"
    );
  });
});