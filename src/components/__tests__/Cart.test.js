import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it(" Should load Restaurant Menu", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordionHeader = screen.getByText("Recommended (20)");
  fireEvent.click(accordionHeader);
  expect(screen.getAllByTestId("foodItems").length).toBe(20);

  const addBtn = screen.getAllByRole("button", { name: "ADD" });
  fireEvent.click(addBtn[0]);
  expect(screen.getByText("Cart (1)")).toBeInTheDocument();
  expect(screen.getAllByTestId("cartItems").length).toBe(1);

  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

  expect(screen.getAllByTestId("cartItems").length).toBe(1);
  console.log("cartItems");
  expect(
    screen.getByText("Cart is empty. Add items to the cart.")
  ).toBeInTheDocument();
});
