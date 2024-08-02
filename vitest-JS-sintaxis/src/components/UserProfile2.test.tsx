import React from 'react';
import { render } from "@testing-library/react"
import UserProfile from "./UserProfile"

describe('Comprobar componente', ()=>{
    test('renderiza el ombre y la edad', ()=>{
        render(<UserProfile name='Manolo' age={25}></UserProfile>)
    })
})