import { AppProps } from "next/app";
import React, { useState } from "react";

interface TypeContext {
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
}
export const PublicContext = React.createContext<TypeContext>({
  isLoading: false,
  setIsLoading: (_value: boolean) => {},
});

const LayoutDefault = (props: AppProps) => {
  const { Component, pageProps } = props;
  const [isLoading, setIsLoading] = useState<boolean>(false);

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
