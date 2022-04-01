import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import App from "../App";
import Context, { ShopContext } from "../context/Context";

describe("App navigation testing", () => {
  const renderWithContext = (component) => {
    return { ...render(<Context value={ShopContext}>{component}</Context>) };
  };

  test("full app rendering/navigating", () => {
    // Simulate browser's 'scroll to top' behaviour
    window.scrollTo = jest.fn();

    //render component with the surrounding context
    renderWithContext(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    userEvent.click(screen.getByRole("link", { name: "Shop now" }));
    expect(screen.getByText(/- all -/)).toBeInTheDocument();

    userEvent.click(screen.getByRole("link", { name: "New" }));
    expect(screen.getByText(/- new -/)).toBeInTheDocument();

    userEvent.click(screen.getByRole("link", { name: "Luxury" }));
    expect(screen.getByText(/- luxury -/)).toBeInTheDocument();

    userEvent.click(screen.getByRole("link", { name: "Gifts" }));
    expect(screen.getByText(/- gifts -/)).toBeInTheDocument();

    userEvent.click(screen.getByRole("link", { name: "Sale" }));
    expect(screen.getByText(/- sale -/)).toBeInTheDocument();

    const bagIcons = screen.getAllByRole("link", { name: "Cart" });
    userEvent.click(bagIcons[0]);
    expect(screen.getByText(/your order/i)).toBeInTheDocument();

    userEvent.click(screen.getByRole("link", { name: "Start shopping" }));
    expect(screen.getByText(/- all -/)).toBeInTheDocument();

    const logo = screen.getAllByRole("link", { name: "Sparkles" });
    userEvent.click(logo[0]);
    expect(screen.getByText(/moment/i)).toBeInTheDocument();
  });
});
