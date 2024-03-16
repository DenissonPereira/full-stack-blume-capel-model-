'use client'

import React, { useState, useEffect } from 'react';

interface ApiData {
    id: number;
    temperatura: number;
    m_a: number;
    m_b: number;
    mag_staggered: number;
    mag_total: number;
}

const Mag = () => {
    const [data, setData] = useState<ApiData[]>([]); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8080/spin1');
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error('Erro ao obter dados da API:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h2>Dados da API</h2>
            <ul>
                {data.map(item => (
                    <li key={item.id}>
                        ID: {item.id}, Temperatura: {item.temperatura}, M_A: {item.m_a}, M_B: {item.m_b}, Mag Staggered: {item.mag_staggered}, Mag Total: {item.mag_total}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Mag;
