import { useEffect, useState } from "react";

const useApi = (url, options) => {
  const [data, setData] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    if (!url) return;
    try {
      const response = await fetch(url, options);
      if (!response.ok) throw new Error("Error en la petición fetch");
      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url, JSON.stringify(options)]);

  return { data, loading, error, fetchData }; // Exponer fetchData como parte del resultado
};

export default useApi;
