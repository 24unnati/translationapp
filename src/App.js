
import React, { useState } from "react";
import Language from "./component/Langauage";
import { useTranslation } from "react-i18next";
import "./App.css";

const App = () => {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const handleLanguageChange = (event) => {
    const language = event.target.value;
    setSelectedLanguage(language);
    i18n.changeLanguage(language);
  };

  return (
    <div className="App">
      <Language
        onChange={handleLanguageChange}
        selectedLanguage={selectedLanguage}
      />
      <h1>{t("My first project")}</h1>
      <h2>{t("Welcome to i18n translator")}</h2>
    </div>
  );
};

export default App;
