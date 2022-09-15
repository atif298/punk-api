import { getByRole, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BeerCard from "../../components/BeerCard/BeerCard";

it("Should render Beer cards on screen") = () => {
    render(<BeerCard/>)
    const cardShown = screen.getAllBy
    expect(cardShown).toBeInTheDocument();
}