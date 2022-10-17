import { User } from 'types/Auth';
import { Meta } from 'types';

export type Status = 'pending' | 'rejected' | 'closed' | 'resolved';

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

export type CreateTicketDTO = {
  title: string;
  description: string;
  priority_id: string;
  type_id: string;
  assignee_id: string;
};
