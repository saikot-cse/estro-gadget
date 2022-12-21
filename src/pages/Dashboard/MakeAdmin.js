import { useQuery } from "react-query";
import Loading from "../../components/Loading";
import { UserRows } from "./UserRows";
export const MakeAdmin = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("https://estro-gadget-server.vercel.app/user", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="overflow-x-auto text-black">
      <table className="table table-zebra w-full">
        <thead>
          <tr>
            <th>SL</th>
            <th>Email</th>
            <th>Make Admin</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <UserRows key={user._id} user={user} refetch={refetch} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
