import React from "react";
import Swal from "sweetalert2";

export const UserRows = ({user, refetch, index}) => {
  const { email, role } = user;
  const makeAdmin = () => {
    fetch(`http://localhost:6060/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          Swal.fire({
            icon: 'error',
            title: 'Warning..!!',
            text: 'You are not authorized.',
          })
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          Swal.fire(
            'Success!',
            'Successfully made an admin!',
            'success'
          );
        }
      });
  };
  return (
    <tr>
      <th>{index+1}</th>
      <td>{user.email}</td>
      <td>{role !== "admin" && <button onClick={makeAdmin} className="btn btn-sm btn-primary">Make Admin</button>}</td>
      <td><button className="btn btn-sm btn-primary">Remove User</button></td>
    </tr>
  );
};
