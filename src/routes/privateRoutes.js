import { Payment } from "../pages/Dashboard/Payment";
import { Purchase } from "../pages/Purchase/Purchase";

export const privateRoutes = [{ path: "/purchase/:_id", name: "Purchase", Component: Purchase },{ path: "/payment/:id", name: "Payment", Component: Payment }];
