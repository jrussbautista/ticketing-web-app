import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './features/auth/pages/LoginPage';
import TicketsPage from './features/tickets/pages/TicketsPage';
import routes from './routes';

const App = () => (
  <Routes>
    <Route path="/" element={<Navigate to={routes.login} />} />
    <Route path={routes.login} element={<LoginPage />} />
    <Route path={routes.viewTickets} element={<TicketsPage />} />
  </Routes>
);

export default App;
