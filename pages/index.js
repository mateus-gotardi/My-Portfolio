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
  let { english } = value.state
  let { englishTexts, portugueseTexts } = value

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
          <Title color={colors.yellow} fontSize='4.5'>{english ? englishTexts.main1 : portugueseTexts.main1}</Title>
          <Text color={colors.yellow} fontSize='1.6'>{english ? englishTexts.main2 : portugueseTexts.main2}</Text>
          <br/>
          <Text color={colors.yellow} fontSize='1.6'>{english ? englishTexts.contact2 : portugueseTexts.contact2}</Text>
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
            <Title fontSize="3.2" textAlign='right'>{english ? englishTexts.header1 : portugueseTexts.header1}</Title>
            <Text fontSize='1.75' textAlign='right'>
              {english ? englishTexts.about1 : portugueseTexts.about1}
              <br /><br/>{english?englishTexts.about2:portugueseTexts.about2}
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
