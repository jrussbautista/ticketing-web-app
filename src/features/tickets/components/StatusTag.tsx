import React from 'react';
import Chip from '@mui/material/Chip';

import { upperCaseFirstLetter } from 'utils/text';
import colors from 'theme/colors';

import { Status } from '../types';
import { getStatusColor } from '../utils';

type StatusTagProps = {
  status: Status;
};

const StatusTag = ({ status }: StatusTagProps) => {
  const color = getStatusColor(status);
  const statusText = upperCaseFirstLetter(status);
  return <Chip label={statusText} sx={{ backgroundColor: color, color: colors.white }} />;
};

export default StatusTag;
