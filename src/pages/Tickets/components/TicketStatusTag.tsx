import React from 'react';
import Chip from '@mui/material/Chip';

import { upperCaseFirstLetter } from 'utils/text';
import colors from 'theme/colors';

import { Status } from 'types/Ticket';
import { getStatusColor } from 'helpers/ticketHelpers';

type TicketStatusProps = {
  status: Status;
};

const TicketStatus = ({ status }: TicketStatusProps) => {
  const color = getStatusColor(status);
  const statusText = upperCaseFirstLetter(status);
  return (
    <Chip label={statusText} sx={{ backgroundColor: color, color: colors.white, width: 90 }} />
  );
};

export default TicketStatus;
