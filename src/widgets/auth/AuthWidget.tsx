import {Input, Space, Typography} from "antd";
import { ChangeEvent, useState } from "react";
import { LoginUser } from "../../features/login";

export function AuthWidget() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeLogin = (e: ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value);
  };

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <Space direction="vertical">
      <Typography.Title>АВТОРИЗАЦИЯ</Typography.Title>
      <Input
        placeholder="Введите логин"
        onChange={handleChangeLogin}
        value={login}
      />
      <Input
        placeholder="Введите пароль"
        onChange={handleChangePassword}
        value={password}
      />
      <LoginUser login={login} password={password} />
    </Space>
  );
}
