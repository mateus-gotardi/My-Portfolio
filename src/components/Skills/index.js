import { FlexSection, Title, colors, Text } from "../index"
import { TbMessageLanguage } from 'react-icons/tb'
import { SiAdobeaftereffects, SiAdobepremierepro, SiPostgresql, SiNextdotjs, SiStyledcomponents, SiSequelize, SiAdobephotoshop, SiFigma, SiGithub, SiNodedotjs } from 'react-icons/si'
import { DiJavascript1, DiHtml5, DiCss3, DiReact, DiMongodb, DiSass, } from 'react-icons/di'
import { SkillsDiv } from "./styles"
import { AiFillApi } from 'react-icons/ai'
import SkillsSVG from "../../SVG/skills"
import AppContext from "../../../AppContext"
import { useContext } from "react"

const Skills = ({ color = colors.yellow }) => {
    const value = useContext(AppContext)
    let { english } = value.state
    let { englishTexts, portugueseTexts } = value
    return (
        <SkillsDiv color={color}>
            <FlexSection>
                <div className='title_image'>
                    <Title color={colors.yellow} textAlign='center'>{english ? englishTexts.capacities1 : portugueseTexts.capacities1}</Title>
                    <Text color={colors.yellow} fontSize='1.6' textAlign='center'>{english ? englishTexts.capacities2 : portugueseTexts.capacities2}</Text>
                    <SkillsSVG />
                </div>
                <div className="skillsList">
                    <div><DiJavascript1 />JavaScript</div>
                    <div><DiHtml5 />HTML</div>
                    <div><DiCss3 />CSS</div>
                    <div><SiGithub />Git</div>
                    <div><SiNodedotjs />NodeJS</div>
                    <div><AiFillApi />API</div>
                    <div><DiReact />ReactJS</div>
                    <div><SiNextdotjs />NextJS</div>
                    <div><DiMongodb />MongoDB</div>
                    <div><SiPostgresql />PostgreSQL</div>
                    <div><SiSequelize />Sequelize</div>
                    <div><SiStyledcomponents />Styled Components</div>
                    <div><DiSass />Sass</div>
                    <div><SiFigma />Figma</div>
                    <div><SiAdobephotoshop />Photoshop</div>
                    <div><SiAdobeaftereffects />After-Effects</div>
                    <div><SiAdobepremierepro />Premiere PRO</div>
                    <div><TbMessageLanguage />{english ? englishTexts.capacities3 : portugueseTexts.capacities3}</div>
                </div>

            </FlexSection>
        </SkillsDiv>

    )
}
export default Skills