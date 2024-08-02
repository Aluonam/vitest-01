import React from 'react';
import { render, screen } from '@testing-library/react';
import { test, describe, it, expect } from 'vitest';
import UserProfile from './UserProfile';

describe('UserProfile Component', () => {
  // Usando `test`
  test('renders user name and age correctly', () => {
    render(<UserProfile name="Alice" age={30} />);
    expect(screen.getByText(/Name: Alice/i)).toBeInTheDocument();
    expect(screen.getByText(/Age: 30/i)).toBeInTheDocument();
  });

  // Usando `it`
  it('renders a different user', () => {
    render(<UserProfile name="Bob" age={25} />);
    expect(screen.getByText(/Name: Bob/i)).toBeInTheDocument();
    expect(screen.getByText(/Age: 25/i)).toBeInTheDocument();
  });
});

// Ejemplo de aserciones con toBe y toEqual
describe('Aserciones Básicas', () => {
  test('number addition', () => {
    const result = 2 + 3;
    expect(result).toBe(5); // Usando `toBe` para comparar números
  });

  test('object comparison', () => {
    const user = { name: 'Alice', age: 30 };
    expect(user).toEqual({ name: 'Alice', age: 30 }); // Usando `toEqual` para comparar objetos
  });
});
