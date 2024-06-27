import React from "react";
import axios from "axios";

const usePostData = (url) => {
  const postData = (data) => {
    return axios.post(url, data);
  };

  return { postData };
};

export default usePostData;
