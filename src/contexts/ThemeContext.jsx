import { createContext, useReducer, useEffect } from "react";

const ThemeContext = createContext();

const getInitialTheme = () => {
  if (typeof window === "undefined") return "dark";
  return localStorage.getItem("theme") ?? "dark";
};

const ThemeReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_THEME":
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
};

const ThemeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ThemeReducer, {
    theme: getInitialTheme(),
  });

  useEffect(() => {
    localStorage.setItem("theme", state.theme);
  }, [state.theme]);

  const changeTheme = (theme) => {
    dispatch({
      type: "CHANGE_THEME",
      payload: theme,
    });
  };

  const isDark = state.theme === "dark";

  return (
    <ThemeContext.Provider value={{ ...state, changeTheme, isDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeContextProvider };
