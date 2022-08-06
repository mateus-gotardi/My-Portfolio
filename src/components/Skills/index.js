import { FlexSection, Title, colors, Text } from "../index"
import { TbMessageLanguage } from 'react-icons/tb'
import { SiAdobeaftereffects, SiAdobepremierepro, SiPostgresql, SiNextdotjs, SiStyledcomponents, SiSequelize, SiAdobephotoshop, SiFigma, SiGithub, SiNodedotjs } from 'react-icons/si'
import { DiJavascript1, DiHtml5, DiCss3, DiReact, DiMongodb, DiSass, } from 'react-icons/di'
import { SkillsDiv } from "./styles"
import {AiFillApi} from 'react-icons/ai'

const Skills = ({ color = colors.yellow }) => {
    return (
        <SkillsDiv color={color}>
            <FlexSection>
                <div id="skills">
                    <Title color={colors.yellow}>Habilidades</Title>
                </div>
                <div className="skillsList">
                    <div><DiJavascript1 />JavaScript</div>
                    <div><DiHtml5 />HTML</div>
                    <div><DiCss3 />CSS</div>
                    <div><SiGithub />Git</div>
                    <div><SiNodedotjs />NodeJS</div>
                    <div><AiFillApi/>API</div>
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
                    <div><TbMessageLanguage /> Inglês Intermediário</div>
                </div>

            </FlexSection>
        </SkillsDiv>

    )
}
export default Skills