import { useState, ChangeEvent, FormEvent } from "react";
import Button from "../Button/Button";
import LoginFormStyled from "./LoginFormStyled";

interface UserCredentials {
  username: string;
  password: string;
}

const LoginForm = () => {
  const [userCredentials, setUserCredentials] = useState<UserCredentials>({
    username: "",
    password: "",
  });
  const handleFormChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserCredentials((currentUserCredentials) => ({
      ...currentUserCredentials,
      [event.target.id]: event.target.value,
    }));
  };

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(userCredentials);

    setUserCredentials({ username: "", password: "" });
  };

  const error = "Invalid username or password";

  return (
    <LoginFormStyled className="login-form form" onSubmit={handleFormSubmit}>
      <h2 className="login-form__title form__title">Log in</h2>
      <div className="login-form__form-group form__group">
        <label htmlFor="username" className="login-form__label form__label">
          Username
        </label>
        <input
          type="text"
          id="username"
          className="login-form__input form__input"
          min="5"
          onChange={handleFormChange}
          value={userCredentials.username}
          autoComplete="off"
        />
      </div>

      <div className="login-form__form-group form__group">
        <label htmlFor="password" className="login-form__label form__label">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="login-form__input form__input"
          min="8"
          onChange={handleFormChange}
          value={userCredentials.password}
          autoComplete="off"
        />
      </div>

      <Button>{"Login"}</Button>

      <span>
        Don't have an account?{" "}
        <a className="form__link" href="/register">
          Register here
        </a>
      </span>

      {error && (
        <div className="form__error" data-test-id="error">
          There was an error: <span className="form__error-text">{error}</span>
        </div>
      )}
    </LoginFormStyled>
  );
};

export default LoginForm;
