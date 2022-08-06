import ProgrammerAnimation from "../src/SVG/programmerAnimation"
import { Title, FlexSection, Text, Header, colors, Skills, Top } from "../src/components"
import { IoLogoWhatsapp, IoLogoGithub } from 'react-icons/io'
import { SiLinkedin } from 'react-icons/si'


export default function Home() {

  return (
    <div className='home-page'>
      <Header />
      <Top/>
      <FlexSection>
        <ProgrammerAnimation />
        <div id='hello'>
          <Title color={colors.yellow} fontSize='5'>Olá, eu sou o Mateus!</Title>
          <Text color={colors.yellow} fontSize='2'>Javascript Full Stack Developer</Text>
          <Title color={colors.yellow} fontSize='3'>
            <a href='https://contate.me/mateusgotardi' target='_blank' rel="noreferrer"><IoLogoWhatsapp /></a>
            <a href="https://www.linkedin.com/in/mateus-de-aguiar-gotardi-774632195/" target='_blank' rel="noreferrer"><SiLinkedin /></a>
            <a href="https://github.com/mateus-gotardi" target='_blank' rel="noreferrer"><IoLogoGithub /></a>
          </Title>
        </div>
      </FlexSection>
      <FlexSection backgroundColor={colors.yellow} >
        <div id='about'>
          <Title fontSize="3.2">Sobre mim</Title>
          <Text fontSize='1.75'>
            Lorem ipsum faucibus facilisis per nisi pharetra vel, rhoncus mattis
            scelerisque consequat fermentum integer, mauris varius orci facilisis
            aptent dictumst orci quis urna semper mollis risus. Sit tristique tempus
            posuere pharetra morbi felis et duis quisque convallis est, quisque
            tellus magna eleifend sed augue nulla dolor consequat accumsan, netus
            elementum luctus eget interdum quisque tempor euismod sem donec.
            Habitasse class aliquam risus non lacinia a scelerisque vivamus
            fermentum, consequat scelerisque diam nibh volutpat eros sociosqu
            praesent pretium tristique, nisl curae malesuada vestibulum etiam purus
            curabitur arcu. In nostra torquent porttitor varius nam nisl ornare,
            aptent amet sit erat dolor platea, imperdiet at bibendum euismod
            condimentum ut interdum id eleifend eu eros semper cubilia sagittis.
            Praesent diam pretium class nostra semper augue nulla senectus
            adipiscing aliquet, habitant nisi lacinia ultricies aenean orci
            condimentum posuere et sollicitudin eu aenean placerat feugiat nibh duis
            proin curae.
          </Text>
        </div>
      </FlexSection>
      <Skills/>
    </div>
  )
}