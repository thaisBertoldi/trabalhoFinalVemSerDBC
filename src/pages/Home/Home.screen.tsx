import { useEffect } from "react";

import api from "../../service/api";

const Home = () => {

  const setup = async () => {
    try {
      const {data} = await api.get('user/get-hello');
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect( () => {
    setup()
  },[] )

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

export default Home;