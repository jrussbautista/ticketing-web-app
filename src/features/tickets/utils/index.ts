import colors from 'theme/colors';

import { Status } from '../types';

export const getStatusColor = (status: Status) => {
  switch (status) {
    case 'solved':
      return colors.success;
    case 'closed':
    case 'cancelled':
      return colors.warning;
    case 'pending':
      return colors.info;
    default:
      return colors.normal;
  }
};
