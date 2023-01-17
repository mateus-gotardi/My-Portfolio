import React, { useState, useEffect } from 'react'
import { ProjectStyle } from "./styles";
import api from '../../services/api'
import { colors, Text, Title } from '../index';
import { DiGitPullRequest, DiGitMerge, DiGitBranch, DiGitCompare, DiGitCommit } from 'react-icons/di'
import { IoLogoGithub } from 'react-icons/io'
import AppContext from "../../../AppContext"
import { useContext } from "react"

const Projects = () => {
    const value = useContext(AppContext)
    let { english } = value.state
    let { englishTexts, portugueseTexts } = value
    const [repos, setRepos] = useState([{ name: 'Carregando...', description: '...', html_url: '#', updated_at: '', language: '' }])
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
            <div><Title textAlign='center'>{english ? englishTexts.projects1 : portugueseTexts.projects1}</Title>
                 <Text textAlign='center' fontSize='1.6'>{english ? englishTexts.projects2 : portugueseTexts.projects2}</Text>
            </div>
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
                                    <Text fontSize='1.5'>{english ? englishTexts.projects3 : portugueseTexts.projects3}{i.description}</Text>
                                    <Text fontSize='1.5'>{english ? englishTexts.projects4 : portugueseTexts.projects4}{date}</Text>
                                    <Text fontSize='1.5'>{english ? englishTexts.projects5 : portugueseTexts.projects5}{i.language}</Text>
                                </a>
                            )
                        }
                    })
                }
            </div>
            <div>
                <a href="https://github.com/mateus-gotardi" target='_blank' rel="noreferrer">
                    <Title fontSize='2' textAlign='center'>{english ? englishTexts.projects6 : portugueseTexts.projects6}</Title>
                    <Title fontSize='3' textAlign='center'><IoLogoGithub /></Title>
                </a>
            </div>

        </ProjectStyle>
    )
}
export default Projects
