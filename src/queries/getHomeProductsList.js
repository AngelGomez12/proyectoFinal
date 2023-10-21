export const getHomeProductsList = async () => {
    try {
        const url = "https://api.myjson.online/v1/records/8e9c6af0-87d8-4eb4-b89c-e73ca46534d7"
        
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

