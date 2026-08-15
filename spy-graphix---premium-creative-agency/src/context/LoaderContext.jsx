import { createContext, useContext, useState } from "react";

const LoaderContext = createContext({
  isLoading: true,
  setIsLoading: () => {},
  replayLoader: () => {},
});

export const LoaderProvider = ({ children }) => {
  // Always start with isLoading = true on fresh page load/mount
  // so the user can see and test the award-winning intro loader properly!
  const [isLoading, setIsLoading] = useState(true);

  const replayLoader = () => {
    setIsLoading(true);
  };

  const handleSetIsLoading = (loading) => {
    setIsLoading(loading);
    if (!loading) {
      sessionStorage.setItem("spygraphix_intro_seen", "true");
    }
  };

  return (
    <LoaderContext.Provider value={{ isLoading, setIsLoading: handleSetIsLoading, replayLoader }}>
      {children}
    </LoaderContext.Provider>
  );
};

export const useLoader = () => useContext(LoaderContext);
