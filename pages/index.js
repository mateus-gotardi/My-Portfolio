import Head from "next/head"
import ProgrammerAnimation from "../src/SVG/programmerAnimation"
import AboutAnimation from "../src/SVG/aboutSVG"
import { Title, FlexSection, Text, Header, colors, Skills, Top, Projects } from "../src/components"
import { IoLogoWhatsapp, IoLogoGithub } from 'react-icons/io'
import { SiLinkedin } from 'react-icons/si'
import AppContext from "../AppContext"
import { useContext } from "react"

export default function Home() {
  const value = useContext(AppContext)
  let {english} = value.state
  let {englishTexts, portugueseTexts} = value

  return (
    <div className='home-page'>
      <Head>
        <title>Mateus Gotardi - JSFullStack</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <Top />
      <FlexSection>
        <ProgrammerAnimation />
        <div id='hello'>
          <Title color={colors.yellow} fontSize='4.5'>Olá, eu sou o Mateus!</Title>
          <Text color={colors.yellow} fontSize='1.6'>Desenvolvedor Javascript FullStack</Text>
          <Title color={colors.yellow} fontSize='3'>
            <a className='contact' href='https://contate.me/mateusgotardi' target='_blank' rel="noreferrer"><IoLogoWhatsapp /></a>
            <a href="https://www.linkedin.com/in/mateus-de-aguiar-gotardi-774632195/" target='_blank' rel="noreferrer"><SiLinkedin /></a>
            <a href="https://github.com/mateus-gotardi" target='_blank' rel="noreferrer"><IoLogoGithub /></a>
          </Title>
        </div>
      </FlexSection>
      <div id='about'>
        <FlexSection backgroundColor={colors.yellow} >
          <div >
            <Title fontSize="3.2" textAlign='right'>Sobre mim</Title>
            <Text fontSize='1.75' textAlign='right'>
              Nascido e criado na cidade de Jundiaí, no interior de São Paulo,
              sempre fui apaixonado por tecnologia e movido a desafios.
              Almejo uma carreira de sucesso na área de desenvolvimento web.
              <br />Atualmente cursando graduação em Comunicação Social - Midialogia na Unicamp. Possuo experiência com produção audiovisual, design e diagramação.
            </Text>
          </div>
          <AboutAnimation />
        </FlexSection>
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id='projects'>
        <Projects />
      </div>
    </div>
  )
}
