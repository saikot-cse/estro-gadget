import { useEffect, useState } from "react";
import fetcher from "../api/privateAxios";

export const useReviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await fetcher.get("/reviews");
      setReviews(res.data);
    })();
  }, []);
  return[reviews,setReviews];
};
