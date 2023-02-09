import { createContext, PropsWithChildren, useContext, useState } from "react";

interface INavContext {
  nav: boolean;
  setNav: (nav: boolean) => void;
}

const NavContext = createContext({
  nav: false,
  setNav: () => {},
} as INavContext);

const useNavContext = () => useContext(NavContext);

function NavProvider({ children }: PropsWithChildren) {
  const [nav, setNav] = useState(false);
  return (
    <NavContext.Provider value={{ nav, setNav }}>
      {children}
    </NavContext.Provider>
  );
}

export { NavProvider, useNavContext };
