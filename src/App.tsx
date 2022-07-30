import { useAppSelector } from 'app/hooks';
import { Routes, Route, Navigate } from 'react-router-dom';

import NotFound from 'components/NotFound';
import LoginPage from 'features/auth/pages/LoginPage';
import TicketsPage from 'features/tickets/pages/TicketsPage';
import routes from 'routes';

const App = () => {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <Routes>
      {user ? (
        <>
          <Route path="/" element={<Navigate to={routes.tickets} />} />
          <Route path={routes.tickets} element={<TicketsPage />} />
        </>
      ) : (
        <>
          <Route path="/" element={<Navigate to={routes.login} />} />
          <Route path={routes.login} element={<LoginPage />} />
        </>
      )}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
