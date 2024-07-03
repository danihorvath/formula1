import { expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import * as matchers from "@testing-library/jest-dom/matchers";
import "@testing-library/jest-dom/vitest";
import DriverCard from "./DriverCard";

expect.extend(matchers);

const mock = {
  driver: {
    id: 23,
    code: "HAM",
    firstname: "Lewis",
    lastname: "Hamilton",
    country: "United Kingdom",
    team: "Mercedes",
    place: 2,
    imgUrl: "/images/hamilton.jpg",
  },
  overtake: vi.fn(),
};

test("Snapshot Test", () => {
  const { container } = render(
    <DriverCard driver={mock.driver} overtake={mock.overtake} />
  );
  expect(container).toMatchSnapshot();
});

test("Displays the name of the driver", () => {
  render(<DriverCard driver={mock.driver} overtake={mock.overtake} />);
  expect(screen.getByTestId("header")).toHaveTextContent(
    `${mock.driver.firstname} ${mock.driver.lastname}`
  );
});

test("Displays the team", () => {
  render(<DriverCard driver={mock.driver} overtake={mock.overtake} />);
  expect(screen.getByTestId("header")).toHaveTextContent(mock.driver.team);
});

test("Displays the current place", () => {
  render(<DriverCard driver={mock.driver} overtake={mock.overtake} />);
  expect(screen.getByTestId("header")).toHaveTextContent(
    mock.driver.place.toString()
  );
});

test("Displays the code", () => {
  render(<DriverCard driver={mock.driver} overtake={mock.overtake} />);
  expect(screen.getByTestId("header")).toHaveTextContent(mock.driver.code);
});

test("Displays the photo", () => {
  render(<DriverCard driver={mock.driver} overtake={mock.overtake} />);
  expect(screen.getByRole("img")).toHaveAttribute(
    "src",
    `${import.meta.env.VITE_API_URL}${mock.driver.imgUrl}`
  );
});

test("Overtake method not called for first driver", () => {
  const spy = vi.spyOn(mock, "overtake");
  render(
    <DriverCard
      driver={{ ...mock.driver, place: 1 }}
      overtake={mock.overtake}
    />
  );
  screen.getByRole("button").click();
  expect(spy).toHaveBeenCalledTimes(0);
});

test("Calls overtake method with the driver id", () => {
  const spy = vi.spyOn(mock, "overtake");
  render(<DriverCard driver={mock.driver} overtake={mock.overtake} />);

  screen.getByTestId("button").click();

  expect(spy).toHaveBeenCalledWith(mock.driver.id);
});
