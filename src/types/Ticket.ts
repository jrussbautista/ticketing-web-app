import { User } from 'types/Auth';
import { Meta } from 'types';

export type TicketStatus = 'open' | 'closed' | 'cancelled' | 'solved';
export type TypeStatus = 'active' | 'inactive';

export type Type = {
  id: string;
  name: string;
  status: TypeStatus;
};

export type Priority = 'normal' | 'medium' | 'high' | 'urgent';

export type Ticket = {
  id: number;
  title: string;
  description: string;
  status: TicketStatus;
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

export type TypesResponse = {
  data: Type[];
  meta: Meta;
};

export type CreateTicketDTO = {
  title: string;
  description: string;
  priority: string;
  type_id: string;
  assignee_id: string;
};
