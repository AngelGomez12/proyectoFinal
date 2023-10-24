import { useEffect, useState } from "react";

const useApi = (url, method) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, { method });
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
  }, [url, method]);

  return { data, loading, error };
};

export default useApi;
