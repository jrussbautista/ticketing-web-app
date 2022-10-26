const routes = {
  index: '/',
  unauthorize: '/unauthorize',
  notFound: '*',
  login: '/login',
  dashboard: '/dashboard',
  teams: '/teams',
  // Tickets
  tickets: '/tickets',
  ticketDetail: '/tickets/:id',
  createTicket: '/tickets/create',
  // Types
  types: '/types',
  createTypes: '/types/create',
};

export default routes;
