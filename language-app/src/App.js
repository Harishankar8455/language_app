import React from 'react';
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  console.log(t('title'))
  return (
    <div>
      <h1>{t('welcome')}</h1>
      <h2>{t('greeting', { name: 'John' })}</h2>
      <h3>{t('title')}</h3>
      <p>{t('description')}</p>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('es')}>Español</button>
    </div>
  );
}

export default App;
