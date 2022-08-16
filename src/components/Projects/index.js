import React, { useState, useEffect } from 'react'
import { ProjectStyle } from "./styles";
import api from '../../services/api'
import { colors, Text, Title } from '../index';
import { DiGitPullRequest, DiGitMerge, DiGitBranch, DiGitCompare, DiGitCommit } from 'react-icons/di'
import { IoLogoGithub } from 'react-icons/io'


const Projects = () => {
    const [repos, setRepos] = useState([{ name: 'Carregando...', description: '...', html_url: '#', updated_at: '', language: '' }])
    const icons = { 0: <DiGitPullRequest />, 1: <DiGitMerge />, 2: <DiGitBranch />, 3: <DiGitCompare />, 4: <DiGitCommit /> }
    useEffect(() => {
        async function getGitAPI() {
            const response = await api.get("/users/mateus-gotardi/repos")
            console.log(response)
            setRepos(response.data)
        }
        getGitAPI()
    }, [])

    return (
        <ProjectStyle colors={colors}>
            <div><Title textAlign='center'>Projetos</Title></div>
            <div className='projects-grid'>
                {
                    repos.map((i, key) => {
                        let random = Math.floor(Math.random() * 5)
                        let year = i.updated_at[0] + i.updated_at[1] + i.updated_at[2] + i.updated_at[3]
                        let month = i.updated_at[5] + i.updated_at[6]
                        let day = i.updated_at[8] + i.updated_at[9]
                        let date = `${day}/${month}/${year}`
                        let hasLink = i.homepage !== '' && i.homepage !== null && i.homepage !== undefined ? true : false
                        let link = i.homepage
                        if (hasLink && !link.includes('https://')) {
                            link = `https://${link}`
                        }
                        if (i.name != 'mateus-gotardi' && i.name != 'My-Portfolio' && hasLink) {
                            return (
                                <a href={link} target='_blank' rel="noreferrer" key={key} className='project'>
                                    <Title fontSize='2' >{icons[random]}{' '}{i.name}</Title>
                                    <Text fontSize='1.5'>Descrição: {i.description}</Text>
                                    <Text fontSize='1.5'>Atualizado em: {date}</Text>
                                    <Text fontSize='1.5'>Linguagem Predominante: {i.language}</Text>
                                </a>
                            )
                        }
                    })
                }
            </div>
            <div>
                <a href="https://github.com/mateus-gotardi" target='_blank' rel="noreferrer">
                    <Title fontSize='2' textAlign='center'>Veja mais no GitHub</Title>
                    <Title fontSize='3' textAlign='center'><IoLogoGithub /></Title>
                </a>
            </div>

        </ProjectStyle>
    )
}
export default Projects
