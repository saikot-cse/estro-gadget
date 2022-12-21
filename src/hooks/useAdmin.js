import { useEffect, useState } from "react";

export const useAdmin = (user) => {
  const [admin, setAdmin] = useState(true);
  const [adminLoading, setAdminLoading] = useState(false);
  useEffect(() => {
    const email = user?.email;
    if (email) {
      fetch(`https://estro-gadget-server.vercel.app/admin/${email}`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setAdmin(data.admin);
          setAdminLoading(false);
        });
    }
  }, [user]);

  return [admin, adminLoading];
};
