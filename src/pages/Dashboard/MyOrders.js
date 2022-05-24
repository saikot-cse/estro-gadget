import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";
import auth from "../../firebase.init";


export const MyOrders = () => {
    const [orders, setOrders] = useState([])
    const [user, loading] = useAuthState(auth)
    const email = user.email
    console.log(email)

useEffect(() => {
    fetch(`http://localhost:6060/order?email=${email}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setOrders(data)
        })
}, [email])

    if (loading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <h2 className='text-2xl font-serif font-bold p-4 '>Your Orders:{orders.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr className="text-black">
                            <th>SL</th>

                            <th>Product</th>
                            <th>Ordered Quantity</th>
                            <th>Cancel Order</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody className="text-black">
                        {orders.map((order, index) => <tr key={order._id} >

                            <th>{index + 1}</th>
                            <td>{order.name}</td>
                            <td>{order.quantity}</td>
                            <td><button className="btn text-semibold btn-error btn-xs">Cancel</button></td>
                            <td>{(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className="btn text-semibold  btn-success  btn-xs">Pay</button></Link>}</td>
                            <td>{(order.price && order.paid) && <span className="btn text-semibold  btn-success  btn-xs">Paid</span>}</td>

                        </tr>)}



                    </tbody>
                </table>
            </div>
        </div>
    );
};