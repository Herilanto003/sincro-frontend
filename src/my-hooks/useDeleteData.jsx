import axios from "axios";

const useDeleteData = (url) => {
  const deleteData = (data) => {
    return axios.delete(url, data);
  };

  return { deleteData };
};

export default useDeleteData;
