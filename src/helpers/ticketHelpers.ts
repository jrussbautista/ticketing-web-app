import colors from 'theme/colors';

import { Status } from 'types/Ticket';

export const getStatusColor = (status: Status) => {
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
