import { useQuery } from '@tanstack/react-query';

import { getTypes } from 'api/typesApi';
import { queryKeys } from 'app/constants';

export const useTypes = (params: Record<string, any> = {}) => {
  return useQuery([queryKeys.TYPES, params], () => getTypes(params));
};
