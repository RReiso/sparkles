import { cleanup, render, screen } from "@testing-library/react";
import CartItem from "../components/CartItem";
import Context, { ShopContext } from "../context/Context";
import images from "../products/images";

const cartItemProps = {
  id: 1,
  name: "Lorem Ipsum Dolor",
  image: images[0],
  price: 3000,
  quantity: 4,
};

const renderWithContext = (component) => {
  return {
    ...render(<Context value={ShopContext}>{component}</Context>),
  };
};

afterEach(cleanup);

describe("SingleItem component", () => {
  const setup = () => {
    renderWithContext(<CartItem {...cartItemProps} />);
  };

  test("should show item card", () => {
    setup();
    expect(screen.getByRole("article")).toBeInTheDocument();
  });

  test("should show item name", () => {
    setup();
    expect(screen.getByText(cartItemProps.name)).toBeInTheDocument();
  });

  test("should show item image", () => {
    setup();
    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  test("should show item quantity", () => {
    setup();
    expect(screen.getByTestId("quantity")).toHaveTextContent(
      cartItemProps.quantity
    );
  });

  test("should show increase and decrease buttons", async () => {
    setup();
    expect(screen.getByRole("button", { name: "−" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "+" })).toBeInTheDocument();
  });
});
