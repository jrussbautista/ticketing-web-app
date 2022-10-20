export const APP_TITLE = 'Ticketting';
export const DRAWER_WIDTH = 240;

// TODO: move this constants to types api
export const TYPES = [
  {
    id: 1,
    name: 'bug',
  },
  {
    id: 2,
    name: 'it',
  },
  {
    id: 3,
    name: 'hr',
  },
];

// TODO: remove this constants once implement the assignees api
export const ASSIGNEES = [
  {
    id: 1,
    name: 'John Doe',
  },
  {
    id: 2,
    name: 'Jane Done',
  },
];

export const PRIORITIES = {
  NORMAL: 'normal',
  MEDIUM: 'medium',
  HIGH: 'high',
  URGENT: 'urgent',
};

export const localStorageKeys = {
  CURRENT_USER: 'currentUser',
  ACCESS_TOKEN: 'accessToken',
};

export const queryKeys = {
  TICKETS: 'tickets',
  TICKET: 'ticket',
};
