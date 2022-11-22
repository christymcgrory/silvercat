type User = {
  username: string;
  password: string;
  balance: number;
};

type UserData = {
  users: User[];
};

export type { User, UserData };
