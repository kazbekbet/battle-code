import { Button } from "antd";

interface Props {
  login: string;
  password: string;
}

export function LoginUser({ login, password }: Props) {
  return <Button onClick={() => alert(`${login} и ${password}`)}>Войти</Button>;
}
