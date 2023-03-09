import '../styles/globals.css'
import '../styles/animation.css'
import AppContext from '../AppContext'
import { useState } from "react";
import Head from 'next/head';


function MyApp({ Component, pageProps }) {
  const [english, setEnglish] = useState(false);
  const englishTexts = {
    header1: 'About Me', header2: 'Capacities', header3: 'Projects',
    header4: 'Contact',
    main1: 'Hello, my name is Mateus', main2: 'FullStack Developer and Video Maker from Brazil',
    about1: "Hey everyone! I'm a Communication student who is immersed in the world of full-stack web development. I was born and raised in Jundiaí, a small town in the interior of São Paulo, and since a very young age, I've been attracted to technology. Nowadays, I can't imagine myself doing anything else",
    about2: "I believe that technology has the power to transform the world, and I want to be part of that movement. Whether it's creating websites and apps that make people's lives easier, or developing innovative solutions that solve complex problems, I'm always looking for ways to use technology to make a difference.",
    about3: "If you're looking for a technology-loving professional who is dedicated to creating innovative solutions, don't hesitate to contact me. Let's transform the world with technology together!",
    capacities1: 'Skills', capacities2: 'Here are some of my main skills', capacities3: 'Intermediary English',
    projects1: 'Projects', projects2: 'Here are some of my projects', projects3: 'Description: ', projects4: 'Updated At: ', projects5: 'Main Language: ', projects6: 'See more on GitHub',
    contact1: 'Contact', contact2: "Let's work together! Send me a message and I will get back to you as soon as possible",
    contact3: 'Name', contact4: 'Email', contact5: 'Message', contact6: 'Send'
  }
  const portugueseTexts = {
    header1: 'Sobre Mim', header2: 'Habilidades', header3: 'Projetos',
    header4: 'Contato',
    main1: 'Olá, meu nome é Mateus', main2: 'Desenvolvedor FullStack e Video Maker',
    about1: 'E aí, pessoal! Eu sou um estudante de Comunicação Social que está mergulhado no universo do desenvolvimento web full stack. Eu nasci e cresci em Jundiaí, uma cidadezinha no interior de São Paulo, e desde muito cedo me vi atraído pela tecnologia. Hoje em dia, não consigo me imaginar fazendo outra coisa.',
    about2: 'Acredito que a tecnologia tem o poder de transformar o mundo e quero fazer parte desse movimento. Seja criando sites e aplicativos que facilitem a vida das pessoas, ou desenvolvendo soluções inovadoras que resolvam problemas complexos, eu estou sempre buscando maneiras de usar a tecnologia para fazer a diferença.',
    about3: 'Se você está procurando um profissional apaixonado por tecnologia e dedicado a criar soluções inovadoras, não hesite em me contatar. Vamos juntos transformar o mundo com tecnologia!',
    capacities1: 'Habilidades', capacities2: 'Aqui estão algumas das minhas principais habilidades', capacities3: 'Inglês Intermediário',
    projects1: 'Projetos', projects2: 'Aqui estão listados alguns dos meus projetos', projects3: 'Descrição: ', projects4: 'Atualizado em: ', projects5: 'Linguagem Predominante: ', projects6: 'Veja mais no GitHub',
    contact1: 'Contato', contact2: "Vamos trabalhar juntos! Envie-me uma mensagem e entrarei em contato o mais breve possível",
    contact3: 'Nome', contact4: 'Email', contact5: 'Mensagem', contact6: 'Enviar'
  }
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
      <Head>
        
        <title>Mateus Gotardi - Web Developer</title>
        <meta name="title" content="Mateus Gotardi - Web Developer" />
        <meta name="description" content="Desenvolvedor Full-Stack especialista em JavaScript, TypeScript, ReactJS, Front-End, Back-End" />
        <meta property="og:keywords" content="Developer, Desenvolvedor, JavaScript, TypeScript, React, Node, FrontEnd, BackEnd, FullStack" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mateusgotardi.vercel.app/" />
        <meta property="og:title" content="Mateus Gotardi - Web Developer" />
        <meta property="og:description" content="Desenvolvedor Full-Stack especialista em JavaScript, TypeScript, ReactJS, Front-End, Back-End" />
        <meta property="og:image" content="https://avatars.githubusercontent.com/u/98918812?v=4" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://mateusgotardi.vercel.app/" />
        <meta property="twitter:title" content="Mateus Gotardi - Web Developer" />
        <meta property="twitter:description" content="Desenvolvedor Full-Stack especialista em JavaScript, TypeScript, ReactJS, Front-End, Back-End" />
        <meta property="twitter:image" content="https://avatars.githubusercontent.com/u/98918812?v=4" />
      </Head>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp
