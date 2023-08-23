import React, { createContext, useState, useEffect } from "react";
import { UserTableInfos } from "../types/user";

type UserInfosContextValue = {
  isLoading: boolean;
  error: string | null;
  data: UserTableInfos[];
};

type UserInfosProviderProps = {
  children: React.ReactNode;
};

export const UserInfosContext = createContext<
  UserInfosContextValue | undefined
>(undefined);

export const UserInfosProvider = ({ children }: UserInfosProviderProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<UserTableInfos[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=50");
        const jsonData = await response.json();
        setData(jsonData.results);
      } catch (error) {
        setError("An error occurred while fetching data.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const contextValue: UserInfosContextValue = { isLoading, error, data };

  return (
    <UserInfosContext.Provider value={contextValue}>
      {children}
    </UserInfosContext.Provider>
  );
};
