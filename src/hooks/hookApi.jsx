import { useEffect, useState } from "react";

const useApi = (url, options = {}, reGet) => {
  const [data, setData] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!url) return;
      try {
        const response = await fetch(url, options );
        if (!response.ok) throw new Error("Error en la petición fetch");
        const data = await response.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [url, JSON.stringify(options), reGet]);


  return { data, loading, error };
};

export default useApi;
