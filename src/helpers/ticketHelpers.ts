import colors from 'theme/colors';

import { TicketStatus, TypeStatus } from 'types/Ticket';

export const getTicketStatusColor = (status: TicketStatus) => {
  switch (status) {
    case 'solved':
      return colors.success;
    case 'cancelled':
      return colors.warning;
    case 'closed':
      return colors.danger;
    case 'open':
      return colors.info;
    default:
      return colors.normal;
  }
};

export const getTypeStatusColor = (status: TypeStatus) => {
  if (status === 'active') {
    return colors.success;
  }
  return colors.danger;
};
