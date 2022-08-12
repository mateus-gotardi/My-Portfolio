import React, { useState, useEffect } from 'react'
import { ProjectStyle } from "./styles";
import api from '../../services/api'
import { colors, Text, Title } from '../index';
import { DiGitPullRequest, DiGitMerge, DiGitBranch, DiGitCompare, DiGitCommit } from 'react-icons/di'


const Projects = () => {
    const [repos, setRepos] = useState([{ name: 'Carregando...', descripion: '...', html_url: '#', updated_at: '', language: '' }])
    const icons = { 0: <DiGitPullRequest />, 1: <DiGitMerge />, 2: <DiGitBranch />, 3: <DiGitCompare />, 4: <DiGitCommit /> }
    useEffect(() => {
        async function getGitAPI() {
            const response = await api.get("/users/mateus-gotardi/repos")
            setRepos(response.data)
        }
        getGitAPI()
    }, [])

    return (
        <ProjectStyle colors={colors}>
            <div><Title>Projetos</Title></div>
            <div className='projects-grid' >
                {
                    repos.map((i) => {
                        let random = Math.floor(Math.random() * 5)
                        if (i.name != 'mateus-gotardi') {
                            return (
                                <a key={i.name} href={i.html_url} target='_blank' rel="noreferrer" className='project'>
                                    <Title fontSize='2' >{icons[random]}{' '}{i.name}</Title>
                                    <Text fontSize='1.5'>Descrição: {i.description}</Text>
                                    <Text fontSize='1.5'>Atualizado em: {i.updated_at}</Text>
                                    {i.homepage!=='' && <Text fontSize='1.5'>Live Site: {i.homepage}</Text>
                                    <Text fontSize='1.5'>Linguagem Predominante: {i.language}</Text>
                                </a>
                            )
                        }

                    })
                }
            </div>

        </ProjectStyle>
    )
}
export default Projects
