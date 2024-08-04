import React from "react";
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import Counter from "./Counter";

test('Incrementa cuando pulsas', ()=>{
    render(<Counter></Counter>)

    const buttonAdd = screen.getByRole('button', {name:'+'});
    const countDisplay = screen.getByText('0');

    expect(countDisplay).toBeInTheDocument();

    userEvent.click(buttonAdd);

    expect(screen.getByRole('countState')).toBeInTheDocument()
})