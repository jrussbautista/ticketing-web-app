export type LoginDTO = {
  email: string;
  password: string;
};

export enum Role {
  ADMIN = 'admin',
  USER = 'user',
}

export type User = {
  id: number;
  name: string;
  email: string;
  created_at: string;
  role: Role;
};

export type UserResponse = {
  access_token: string;
  user: User;
};
