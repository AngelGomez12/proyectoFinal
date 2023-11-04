export const getHomeProductsList = async () => {
    try {
        const url = "http://localhost:8081/productos"
        
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Error al obtener datos desde la API');
      }
      const data = await response.json();
      return data
    } catch (error) {
      console.error(error);
    }
  };

