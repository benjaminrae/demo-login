1. Create usersSlice in src/redux/features

```ts
// userSlice/types.ts

export interface UserState extends User {
  isLogged: boolean;
}

export interface User {
  username: string;
  id: string;
  token: string;
}

// userSlice/userSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserState } from "./types";

const initialState: UserState = {
  id: "",
  isLogged: false,
  token: "",
  username: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (previousUser, action: PayloadAction<User>) => ({
      ...action.payload,
      isLogged: true,
    }),

    logoutUser: (previousUser) => ({
      ...initialState,
    }),
  },
});

export const userReducer = userSlice.reducer;

export const {
  loginUser: loginUserActionCreator,
  logoutUser: logoutUserActionCreator,
} = userSlice.actions;

// store.ts
export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

// index.tsx

<Provider store={store}>...</Provider>;
```

2. Create useUser custom hook in src/hooks/useUser/useUser.ts

```ts
// types.ts
import { JwtPayload } from "jwt-decode";

export interface CustomTokenPayload extends JwtPayload {
  username: string;
  id: string;
}

export interface AxiosErrorResponseBody {
  error: string;
}

// useUser.ts

interface UseUserStructure {
  registerUser: (registerFormData: RegisterFormData) => Promise<void>;
  loginUser: (loginFormData: LoginFormData) => Promise<void>;
  logoutUser: () => void;
}

export interface LoginFormData {
  username: string;
  password: string;
}

interface LoginUserResponse {
  token: string;
}

const apiUrl = process.env.REACT_APP_API_URL;

const useUser = (): UseUserStructure => {
  const dispatch = useAppDispatch();
  const { removeToken } = useToken();
  const navigate = useNavigate();

  const loginUser = async (loginFormData: LoginFormData) => {
    dispatch(showLoadingActionCreator());
    try {
      const response = await axios.post<LoginUserResponse>(
        `${apiUrl}${userRoutes.usersRoute}${userRoutes.loginRoute}`,
        loginFormData
      );

      const { token } = response.data;

      const tokenPayload: CustomTokenPayload = decodeToken(token);

      const { username, id } = tokenPayload;

      const loggedUser: User = {
        username,
        id,
        token,
      };

      dispatch(hideLoadingActionCreator());
      dispatch(loginUserActionCreator(loggedUser));
      navigate("/profiles");
      window.localStorage.setItem("token", token);
    } catch (error: unknown) {
      dispatch(hideLoadingActionCreator());

      if (error instanceof AxiosError) {
        dispatch(
          showModalActionCreator({
            isError: true,
            modalText: (error as AxiosError<AxiosErrorResponseBody>).response
              ?.data.error!,
          })
        );
      }
    }
  };

  const logoutUser = () => {
    removeToken();

    dispatch(logoutUserActionCreator());
  };

  return {
    registerUser,
    loginUser,
    logoutUser,
  };
};

export default useUser;
```

3. create useToken custom hook in src/hooks/useToken/useToken.ts

```ts
interface UseTokenStructure {
  getToken: () => void;
  removeToken: () => void;
}

const useToken = (): UseTokenStructure => {
  const dispatch = useAppDispatch();

  const getToken = useCallback(() => {
    const token = window.localStorage.getItem("token");

    if (token) {
      const user = decodeToken<CustomTokenPayload>(token);

      dispatch(loginUserActionCreator({ ...user, token }));
    }
  }, [dispatch]);

  const removeToken = () => {
    window.localStorage.removeItem("token");
  };

  return {
    getToken,
    removeToken,
  };
};

export default useToken;
```
