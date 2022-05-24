import { useEffect, useState } from "react";
import fetcher from "../api/privateAxios";

export const useBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await fetcher.get("/blogs");
      setBlogs(res.data);
      console.log(res.data);
    })();
  }, []);
  return[blogs,setBlogs];
};
