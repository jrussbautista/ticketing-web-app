export type LoginDTO = {
  email: string;
  password: string;
};

export type User = {
  id: number;
  name: string;
  email: string;
  created_at: string;
};

export type UserResponse = {
  token: string;
  user: User;
};
