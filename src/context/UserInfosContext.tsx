import React, { createContext } from "react";
import { UserTableInfos } from "../types/user";
import { useQuery } from "@tanstack/react-query";

type UserInfosContextValue = {
  isLoading: boolean;
  error: string | null;
  data: UserTableInfos[];
};

type UserInfosProviderProps = {
  children: React.ReactNode;
};

export const UserInfosContext = createContext<UserInfosContextValue | undefined>(
  undefined
);

export const UserInfosProvider = ({ children }: UserInfosProviderProps) => {
  const { data, isLoading, error } = useQuery<UserTableInfos[]>({
    queryKey: ["randomUserData"],
    queryFn: () =>
      fetch("https://randomuser.me/api/?results=50")
        .then((res) => res.json())
        .then((data) => data.results), // 
  });

  const contextValue: UserInfosContextValue = { isLoading, error, data };

  return (
    <UserInfosContext.Provider value={contextValue}>
      {children}
    </UserInfosContext.Provider>
  );
};
