import { useEffect, useState } from "react";
import fetcher from "../api/privateAxios";

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await fetcher.get("/products");
      setProducts(res.data);
    })();
  }, []);
  return[products,setProducts];
};
