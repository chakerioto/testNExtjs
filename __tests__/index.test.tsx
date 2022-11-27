import { render, screen } from "@testing-library/react";
import Home from "../pages/index";
import "@testing-library/jest-dom";
import ProductList from "../components/itemlist";

import fakeData from "../data.js";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: /welcome to next\.js!/i,
    });

    expect(heading).toBeInTheDocument();
  });
});

describe("Product", () => {
  it("renders nodata message", () => {
    render(<ProductList products={[]} listStock={[]} />);
    const nodata = screen.getByRole("nodata");
    expect(nodata).toBeInTheDocument();
  });

  it("renders list of products demo", () => {
    render(<ProductList products={fakeData} listStock={[]} />);
    const data = screen.getByRole("product-data");
    expect(data).toBeInTheDocument();
  });
});
