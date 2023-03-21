import './App.css';
import Langauage from './component/Langauage';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

function App() {
  const { t } = useTranslation();
  const handleClick = (e) => {
    i18next.changeLanguage(e.target.value);
  };
  return (
    <div className="App">
      <Langauage onChange={(e) => handleClick(e)} />
      <h1>{t('My first project')}</h1>
      <h2>{t('Welcome to i18n translator')}</h2>
    </div>
  );
}

export default App;
