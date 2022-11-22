import { AppProps } from "next/app";
import React, { useState } from "react";

interface TypeContext {
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
}
export const PublicContext = React.createContext<TypeContext>({
  isLoading: true,
  setIsLoading: (_value: boolean) => {},
});

const LayoutDefault = (props: AppProps) => {
  const { Component, pageProps } = props;
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <PublicContext.Provider
      value={{
        isLoading,
        setIsLoading,
      }}
    >
      <Component {...pageProps} />
    </PublicContext.Provider>
  );
};

export default LayoutDefault;
