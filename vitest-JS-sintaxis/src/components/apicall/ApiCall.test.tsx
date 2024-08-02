
import React from "react";
import { render, screen, waitFor } from '@testing-library/react';
import { vi } from "vitest";
import ApiCall from "./ApiCall";


//Mock de la funcion global
global.fetch = vi.fn()

//Limpiar mocks antes de cada prueba
beforeEach(()=>{
    (fetch as jest.Mock).mockClear(); 
    //  jest.Mock es una clase que representa una función mock, permitiendo que simulemos, inspeccionemos y controlamos cómo es llamada una función.
    // .mockClear(): método q se utiliza para restablecer el estado de un mock.
})

test('Muestra los datos del API', async ()=>{ // Función asíncrona
    (fetch as jest.Mock).mockResolvedValueOnce({ // Mockeo de fetch con Typescript;  mockResolvedValueOnce: método que configura el mock para devolver un valor específico solo una vez. 
        // Devuelve objeto con respusta existosa + json (json con array de objetos)
        ok: true, // La respuesta simulada es exitosa 
        json: async ()=> [{ id: 1, name:'item 1'}, { id: 2, name:'item 2'}]
        // Simula el método json() de la respuesta, devolviendo una promesa que resuelve a un array de objetos, imitando el formato de datos que la API real 
    })

    render(<ApiCall></ApiCall>)

    await waitFor(()=>{ // Espera a que la condición especificada en la función de callback sea verdadera. Manejo asíncrono.
        expect(screen.getByText(/item 1/i)).toBeInTheDocument(); // Busca un elemento en el DOM que contenga el texto "Item 1". El modificador /i indica que la búsqueda es insensible a mayúsculas y minúsculas.
        expect(screen.getByText(/item 2/i)).toBeInTheDocument();
    })
})

test('Mensaje de error si falla', async ()=>{
    (fetch as jest.Mock).mockResolvedValueOnce({
        // fetch: La función global que estamos mockeando para simular llamadas a la API.
        // as jest.Mock: Aserción de tipo en TypeScript que le dice al compilador que fetch es un mock.
        // mockResolvedValueOnce: Configura el mock para que la llamada a fetch devuelva una promesa con un objeto que simula la respuesta de la API.
        ok: false,
        status: 500
    })

    render(<ApiCall></ApiCall>)

    await waitFor(()=>{
        expect(screen.getByText(/error al obtener datos/i)).toBeInTheDocument();
    })
})
