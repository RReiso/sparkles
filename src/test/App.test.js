import { render, screen } from "@testing-library/react";
import { Link, MemoryRouter, BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";
import App from "../App";
import Context, { ShopContext } from "../context/Context";
import { cleanup, fireEvent } from "@testing-library/react";
afterEach(cleanup);
const renderWithContext = (component) => {
  return render(<Context value={ShopContext}>{component}</Context>);
};
test("should redirect and update history", async () => {
  window.scrollTo = jest.fn();

  const history = createMemoryHistory();

  renderWithContext(
    <BrowserRouter history={history}>
      <App />
    </BrowserRouter>
  );

  await userEvent.click(screen.getByText(/Shop now/));
  console.log("history.location", history);
  expect(history.location.pathname).toEqual("/all");
});

test("should redirect to /all after clicking on 'Shop now' button on Home page", () => {
  // Simulate browser's 'scroll to top' behaviour
  window.scrollTo = jest.fn();

  //render component with the surrounding context
  renderWithContext(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  userEvent.click(screen.getByText(/Shop now/));
  expect(screen.getByText(/- all -/)).toBeInTheDocument();
});
