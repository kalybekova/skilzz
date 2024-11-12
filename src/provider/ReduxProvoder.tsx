import { store } from "@/redux/store";
import { FC, ReactNode } from "react";
import { Provider } from "react-redux";

interface ReduxProviderType {
  children: ReactNode;
}

export const ReduxProvider: FC<ReduxProviderType> = ({ children }) => {
  return (
    <>
      <Provider store={store}>{children}</Provider>
    </>
  );
};
