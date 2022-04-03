
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../Button";


describe('Button', () => {
    it('should return a button', () => {
        render(<Button type='button' title='button-text' className='className' svg='svg' />)
        const buttonElement = screen.getByRole('button', {title: 'button-text', svg: 'svg', type: 'button'})
        fireEvent.click(buttonElement)
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).toHaveClass('className');
    })
    it('should return a button with a span and maybe svg', () => {
        render(<Button type='button' title='button-text' className='className' svg='svg' />)
        const spanElement = screen.getByText(/button-text/i)
        expect(spanElement).toBeInTheDocument();
    })
});
