import { Navigate, Outlet, useLocation } from 'react-router-dom';
export const RequireAuth = ({children}) => {
  const location = useLocation();
  const user = false;
  if(!user){
    return <Navigate to='/login' state={{from: location}} replace/>
  };
  return <Outlet/>;
}
