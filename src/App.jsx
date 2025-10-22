import React from "react";
import GlobalStyles from "./style/GlobalStyles";
import MainPage from "./components/MainPage";
import AOSProvider from "./components/AOSProvider";

export default function App() {
  React.useEffect(() => {
    document.documentElement.setAttribute("dir", "rtl");
    document.documentElement.setAttribute("lang", "ar");
  }, []);
  return (
    <AOSProvider
      options={{
        duration: 1200,
        once: true,
        offset: 120,
        // disable: "mobile",
      }}
    >
      <GlobalStyles />
      <MainPage />
    </AOSProvider>
  );
}
