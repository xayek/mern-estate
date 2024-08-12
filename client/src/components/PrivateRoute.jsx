import { useSelector } from 'react-redux';  // Redux store'dan state'e erişim sağlar.
import { Outlet, Navigate } from 'react-router-dom';  // React Router bileşenlerini import eder.

export default function PrivateRoute() {
  // Redux store'dan 'user' slice'ındaki 'currentUser' bilgilerini alır.
  const { currentUser } = useSelector((state) => state.user);
  
  // Eğer currentUser mevcutsa, <Outlet /> bileşeni render edilir.
  // Bu, iç içe geçmiş rotaların render edilmesini sağlar.
  // Eğer currentUser mevcut değilse, kullanıcıyı '/sign-in' yoluna yönlendirir.
  return currentUser ? <Outlet /> : <Navigate to='/sign-in' />;
}
