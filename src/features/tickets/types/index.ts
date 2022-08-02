import { User } from 'features/auth/types';
import { Meta } from 'types';

export type Status = 'pending' | 'cancelled' | 'closed' | 'solved';

export type Type = {
  id: string;
  name: string;
};

export type Priority = {
  id: string;
  name: string;
};

export type Ticket = {
  id: number;
  title: string;
  description: string;
  status: Status;
  type: Type;
  priority: Priority;
  owner: User;
  assignee: User;
  deleted_at: string;
  created_at: string;
  updated_at: string;
};

export type TicketsResponse = {
  data: Ticket[];
  meta: Meta;
};
