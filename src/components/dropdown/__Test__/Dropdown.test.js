import { render, screen, fireEvent } from "@testing-library/react";
import Dropdown from "../Dropdown";


describe('Dropdown', () => {
    it('should show button', () => {
        render(<Dropdown selected={{}} setSelected={()=>{}} data={[]} allowAll={{}} />)
        const buttonElement = screen.getByRole('button')
        fireEvent.click(buttonElement)
        expect(buttonElement).toBeInTheDocument();
    });
    
});
