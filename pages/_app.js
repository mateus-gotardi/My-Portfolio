import '../styles/globals.css'
import '../styles/animation.css'
import App from 'next/app'
import AppContext from '../AppContext'
import { useState } from "react";


function MyApp({ Component, pageProps }) {
  const [english, setEnglish] = useState(false);
  const englishTexts = {}
  const portugueseTexts = {}
  return (
    <AppContext.Provider
      value={{
        state: {
          english: english,
        },
        languages: {
          englishTexts,
          portugueseTexts
        },
        setEnglish: setEnglish,
      }}
    >
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp
