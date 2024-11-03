import { createContext, useContext, useEffect, useState } from 'react';

interface IAppContext {
  theme: ThemContextType;
  setTheme: (v: ThemContextType) => void;
}

type ThemContextType = 'light' | 'dark';

const AppContext = createContext<IAppContext | null>(null);

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [theme, setTheme] = useState<ThemContextType>(() => {
    const initialTheme =
      (localStorage.getItem('theme') as ThemContextType) || 'light';
    return initialTheme;
  });

  useEffect(() => {
    const mode = localStorage.getItem('theme') as ThemContextType;
    if (mode) {
      setTheme(mode);
      document.documentElement.setAttribute('data-bs-theme', mode);
    }
  }, []);

  return (
    <AppContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useCurrentApp = () => {
  const currentAppContext = useContext(AppContext);

  if (!currentAppContext) {
    throw new Error(
      'useCurrentApp has to be used within <AppContext.Provider>',
    );
  }

  return currentAppContext;
};
