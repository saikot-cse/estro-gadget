import { useQuery } from "react-query";
import Loading from "../../components/Loading";
import { UserRows } from "./UserRows";
export const MakeAdmin = () => {
  const { data: users, isLoading, refetch } = useQuery("users", () =>
    fetch("http://localhost:6060/user", {
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
    <div class="overflow-x-auto text-black">
      <table class="table table-zebra w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserRows key={user._id} user={user} refetch={refetch}/>
          ))}
        </tbody>
      </table>
    </div>
  );
};
