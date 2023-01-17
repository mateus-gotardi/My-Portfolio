import '../styles/globals.css'
import '../styles/animation.css'
import AppContext from '../AppContext'
import { useState } from "react";


function MyApp({ Component, pageProps }) {
  const [english, setEnglish] = useState(false);
  const englishTexts = {header1: 'About Me', header2: 'Capacities', header3: 'Projects',
  header4: 'Contact',
  main1: 'Hello, my name is Mateus', main2: 'FullStack Developer and Video Maker from Brazil',
  about1: 'I have been studying web development for 2 years now and I will graduate in social communication in july/2023', 
  about2: 'I am also a video maker, I have been working with video editing for about 5 years and I have experience with all the production process, from conception, caption and editing of audio and video.',
  capacities1: 'Capacities', capacities2: 'Here are some of my main capacities', capacities3: 'Intermediary English',
  projects1: 'Projects', projects2: 'Here are some of my projects', projects3: 'Description: ', projects4:'Updated At: ', projects5: 'Main Language: ' , projects6: 'See more on GitHub',
  contact1: 'Contact', contact2: "Let's work together! Send me a message and I will get back to you as soon as possible", 
  contact3: 'Name', contact4: 'Email', contact5: 'Message', contact6: 'Send'}
  const portugueseTexts = {header1: 'Sobre Mim', header2: 'Habilidades', header3: 'Projetos',
  header4: 'Contato',
  main1: 'Olá, meu nome é Mateus', main2: 'Desenvolvedor FullStack e Video Maker',
  about1: 'Estou me aprofundando em desenvolvimento web a 2 anos e me formarei em comunicação social pela Unicamp em julho  de 2023', 
  about2: 'Também sou editor de vídeo, trabalho com edição de vídeo a 5 anos e tenho experiência com todo o processo de produção, desde a concepção, captação e edição de áudio e vídeo.',
  capacities1: 'Habilidades', capacities2: 'Aqui estão algumas das minhas principais habilidades',capacities3: 'Inglês Intermediário',
  projects1: 'Projetos', projects2: 'Aqui estão listados alguns dos meus projetos',projects3:'Descrição: ', projects4:'Atualizado em: ', projects5: 'Linguagem Predominante: ' , projects6: 'Veja mais no GitHub',
  contact1: 'Contato', contact2: "Vamos trabalhar juntos! Envie-me uma mensagem e eu entrarei em contato o mais breve possível", 
  contact3: 'Nome', contact4: 'Email', contact5: 'Mensagem', contact6: 'Enviar'}
  return (
    <AppContext.Provider
      value={{
        state: {
          english: english,
        },

        englishTexts,
        portugueseTexts,

        setEnglish: setEnglish,
      }}
    >
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp
