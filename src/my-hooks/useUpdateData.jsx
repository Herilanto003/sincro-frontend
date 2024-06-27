import axios from "axios";

const useUpdateData = (url) => {
  const putData = (data) => {
    return axios.put(url, data);
  };

  return { putData };
};

export default useUpdateData;
