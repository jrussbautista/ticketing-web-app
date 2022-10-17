import colors from 'theme/colors';

import { Status } from 'types/Ticket';

export const getStatusColor = (status: Status) => {
  switch (status) {
    case 'resolved':
      return colors.success;
    case 'rejected':
    case 'closed':
      return colors.warning;
    case 'pending':
      return colors.info;
    default:
      return colors.normal;
  }
};
