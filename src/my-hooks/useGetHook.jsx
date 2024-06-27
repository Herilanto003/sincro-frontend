import React from "react";
import axios from "axios";
import { RefreshDataContext } from "../my-context/RefreshDataContext";

const useGetData = (url) => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const { refreshData } = React.useContext(RefreshDataContext);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      setData(response.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, [refreshData]);

  return { data, loading, error };
};

export default useGetData;
