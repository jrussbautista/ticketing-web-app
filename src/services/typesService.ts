import { useMutation, useQuery } from '@tanstack/react-query';

import { deactivateType, activateType, getTypes } from 'api/typesApi';
import { queryKeys } from 'app/constants';
import queryClient from 'lib/queryClient';

export const useTypes = (params: Record<string, any> = {}) => {
  return useQuery([queryKeys.TYPES, params], () => getTypes(params));
};

export const useDeactivateType = () => {
  return useMutation({
    mutationFn: deactivateType,
    onSuccess: () => {
      queryClient.invalidateQueries([queryKeys.TYPES]);
    },
  });
};

export const useActivateType = () => {
  return useMutation({
    mutationFn: activateType,
    onSuccess: () => {
      queryClient.invalidateQueries([queryKeys.TYPES]);
    },
  });
};
