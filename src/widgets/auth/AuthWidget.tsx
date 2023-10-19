import {Button, Input, Space} from "antd";
import { ChangeEvent, useState } from "react";
import { LoginUser } from "../../features/login";
import { LoginCard } from "../../shared/api/components/cards/LoginCard/LoginCard.tsx";
import {useNavigate} from "react-router-dom";

interface CredentialsState {
  login: string;
  password: string;
}

export function AuthWidget() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState<CredentialsState>({
    login: "",
    password: "",
  });

  const handleChangeField =
    (field: keyof CredentialsState) => (e: ChangeEvent<HTMLInputElement>) => {
      setCredentials((prev) => ({ ...prev, [field]: e.target.value }));
    };

  return (
    <LoginCard title="Авторизация">
      <Input
        placeholder="Введите логин"
        onChange={handleChangeField("login")}
        value={credentials.login}
      />
      <Input
        placeholder="Введите пароль"
        onChange={handleChangeField("password")}
        value={credentials.password}
      />
      <Space>
        <LoginUser
          disabled={!(credentials.login && credentials.password)}
          login={credentials.login}
          password={credentials.password}
        />
        <Button type="text" onClick={() => navigate('/register')}>Регистрация</Button>
      </Space>
    </LoginCard>
  );
}
