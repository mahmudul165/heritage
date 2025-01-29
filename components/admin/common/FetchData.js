import axios from "axios";

const FetchData = async (id, apiULR, passData) => {
  const response = await axios.get(`${apiULR}/${id}`);
  passData(response.data);
};

export default FetchData;
