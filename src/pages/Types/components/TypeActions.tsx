import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { SxProps } from '@mui/material';
import { useSnackbar } from 'notistack';

import { TypeStatus } from 'app/constants';
import { useDeactivateType, useActivateType } from 'services/typesService';
import { Type } from 'types/Ticket';

type TypeActionsProps = {
  type: Type;
};

const TypeActions = ({ type }: TypeActionsProps) => {
  const { enqueueSnackbar } = useSnackbar();
  const deactivateType = useDeactivateType();
  const activateType = useActivateType();

  const handleDeactivate = async () => {
    try {
      await deactivateType.mutateAsync(type.id);
      enqueueSnackbar('Successfully deactivated', { variant: 'success' });
    } catch (error) {
      enqueueSnackbar('There is an error. Please try again soon.', { variant: 'error' });
    }
  };

  const handleActivate = async () => {
    try {
      await activateType.mutateAsync(type.id);
      enqueueSnackbar('Successfully activated', { variant: 'success' });
    } catch (error) {
      enqueueSnackbar('There is an error. Please try again soon.', { variant: 'error' });
    }
  };

  const btnStyle: SxProps = { width: 120 };

  return (
    <Box>
      {type.status === TypeStatus.ACTIVE ? (
        <Button
          sx={btnStyle}
          color="error"
          variant="contained"
          disableElevation
          onClick={handleDeactivate}
          disabled={deactivateType.isLoading}
        >
          Deactivate
        </Button>
      ) : (
        <Button
          sx={btnStyle}
          variant="contained"
          color="success"
          disableElevation
          onClick={handleActivate}
          disabled={activateType.isLoading}
        >
          Activate
        </Button>
      )}
    </Box>
  );
};

export default TypeActions;
