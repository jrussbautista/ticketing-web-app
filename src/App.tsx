import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from 'app/hooks';
import NotFound from 'components/NotFound';
import { getAccessTokenLocalStorage } from 'helpers/authHelpers';
import LoginPage from 'pages/Login/LoginPage';
import TicketsPage from 'pages/Tickets/TicketsPage';
import TicketDetailPage from 'pages/Tickets/TicketDetailPage';
import TicketCreatePage from 'pages/Tickets/TicketCreatePage';
import PublicLayout from 'layouts/PublicLayout';
import PrivateLayout from 'layouts/PrivateLayout';
import routes from 'routes';
import { getMe } from 'slices/auth/authSlice';

const App = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);

  useEffect(() => {
    // get current user details
    // if accessToken is exist from localStorage
    const accessToken = getAccessTokenLocalStorage();
    if (accessToken) {
      dispatch(getMe());
    }
  }, []);

  return (
    <Routes>
      {user ? (
        <Route element={<PrivateLayout />}>
          <Route path="/" element={<Navigate to={routes.tickets} />} />
          <Route path={routes.tickets} element={<TicketsPage />} />
          <Route path={`${routes.tickets}/:id`} element={<TicketDetailPage />} />
          <Route path={routes.createTicket} element={<TicketCreatePage />} />
        </Route>
      ) : (
        <Route path="/" element={<PublicLayout />}>
          <Route path="/" element={<Navigate to={routes.login} />} />
          <Route path={routes.login} element={<LoginPage />} />
        </Route>
      )}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
