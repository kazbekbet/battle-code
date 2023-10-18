import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface Props {
  login: string;
  password: string;
  disabled?: boolean;
}

export function RegisterUser({ login, password, disabled }: Props) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleClickRegister = async () => {
    // TODO: добавить сервис.
    console.log(`Попытка зарегать юзера с ${login} и ${password}`);
    setIsLoading(true);
    await new Promise((res) => {
      setTimeout(res, 1000);
    });
    setIsLoading(false);
    navigate("/");
  };

  return (
    <Button
      loading={isLoading}
      disabled={disabled}
      type="primary"
      onClick={handleClickRegister}
    >
      Зарегистрироваться
    </Button>
  );
}
