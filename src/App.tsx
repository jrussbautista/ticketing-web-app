import { useAppSelector } from 'app/hooks';
import { Routes, Route, Navigate } from 'react-router-dom';

import NotFound from 'components/NotFound';
import LoginPage from 'features/auth/pages/LoginPage';
import TicketPage from 'features/tickets/pages/TicketPage';
import TicketsPage from 'features/tickets/pages/TicketsPage';
import PublicLayout from 'layouts/PublicLayout';
import PrivateLayout from 'layouts/PrivateLayout';
import routes from 'routes';

const App = () => {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <Routes>
      {user ? (
        <Route element={<PrivateLayout />}>
          <Route path="/" element={<Navigate to={routes.tickets} />} />
          <Route path={routes.tickets} element={<TicketsPage />} />
          <Route path={`${routes.tickets}/:id`} element={<TicketPage />} />
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
