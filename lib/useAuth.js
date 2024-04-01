import { useState } from 'react';

// Define el estado global

const initial = false;

// Exporta una función para actualizar el estado
export const useAuth = () => {
    const [auth, setAuth] = useState(initial);

    return [auth, setAuth];
};
