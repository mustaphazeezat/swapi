import { render, screen } from "@testing-library/react";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";

const MockHeader = ()=>{
    return(
        <BrowserRouter>
            <Header/>
        </BrowserRouter>
    )
}
describe('Header', () => {
   it('should render A link and Star wars logo', ()=>{
        render(<MockHeader />);
        const linkElement = screen.getByTestId(/star-wars-logo/)
        expect(linkElement).toBeInTheDocument();
   }) 
});
