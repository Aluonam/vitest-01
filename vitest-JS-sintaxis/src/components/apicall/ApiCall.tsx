import React, { useEffect, useState } from 'react';

interface DataItem {
  id: number;
  name: string;
}

const DataFetcher: React.FC = () => {
  const [data, setData] = useState<DataItem[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/'); 
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        setData(data);
      } catch (err) {
        setError('Error al obtener los datos');
        console.error('Error al obtener los datos:', err);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {data.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
};

export default DataFetcher;
