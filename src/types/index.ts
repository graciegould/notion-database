export type GreetingProps = {
  name: string;
};

export interface User {
  id: number;
  name: string;
  email: string;
}

export type ApiResponse<T> = {
  data: T;
  error?: string;
};
