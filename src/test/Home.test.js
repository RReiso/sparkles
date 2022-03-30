import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Home from "../components/Home";

test("should render image of a woman on the home page", () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );
  const image = screen.getByAltText("woman");
  expect(image).toHaveAttribute("src", "img2.jpg");
});

test("should render six links", async () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );
  const links = screen.getAllByRole("link");
  expect(links.length).toEqual(6);
});

test("'Shop now' button should redirect to /all", async () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );
  const shopNowbtn = screen.getByRole("link", { name: "Shop now" });
  expect(shopNowbtn).toHaveAttribute("href", "/all");
});
