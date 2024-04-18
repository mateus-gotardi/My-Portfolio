'use client'
import React, { useState, useEffect } from 'react'
import { ProjectStyle } from "./styles";
import api from '../../services/api'
import { colors, Text, Title } from '../index';
import { DiGitPullRequest, DiGitMerge, DiGitBranch, DiGitCompare, DiGitCommit } from 'react-icons/di'
import { IoLogoGithub } from 'react-icons/io'
import AppContext from "../../../AppContext"
import { useContext } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';

const Projects = () => {
    const value = useContext(AppContext)
    let { english } = value.state
    let { englishTexts, portugueseTexts } = value
    const [repos, setRepos] = useState([{ name: 'Pokedex GameBoy', link: 'https://pokedexgbc.vercel.app', img: 'pokedex.png', description: 'Pokedex interativa inspirada no game boy color', techs: 'VueJS, Pinia, Consumo de API' },
    { name: 'Formulário Passo a passo', link: 'https://multi-step-form-eight-livid.vercel.app', img: 'form.png', description: 'Formulário de compra com 4 passos', techs: 'NextsJS, React' },
    { name: 'Coffee shop', img: 'cafe.png', link: 'https://coffee-shop-prototype.vercel.app', description: 'Loja online de café', techs: 'NextJS, React, Redux, Tailwind' },
    { name: 'Data inspector 3000', link: 'https://data-spector-300-vue.vercel.app', img: "dados.png", description: 'Site recebe uma planilha de assinaturas e exibe gráficos com base nos dados', techs: 'Python, NextJS, AntDesign, Zustand, React, API Rest' }])

    return (
        <ProjectStyle colors={colors}>
            <div><Title textAlign='center'>{english ? englishTexts.projects1 : portugueseTexts.projects1}</Title>
                <Text textAlign='center' fontSize='1.6'>{english ? englishTexts.projects2 : portugueseTexts.projects2}</Text>
            </div>
            <div className='slideContainer'>
                <Swiper modules={[Navigation, Pagination, Autoplay]} autoplay={{ delay: 5000 }}>
                    {repos.map((item, index) => <SwiperSlide key={index}><div className='slide'>
                        <h1>{item.name}</h1>
                        <Image alt={item.name} src={`/${item.img}`} width={1250} height={746} />
                        <p>{item.description}</p>
                        <p><b>feito com: </b>{item.techs}</p>
                        <a className='projectLink' href={item.link} target='_blank' rel="noreferrer" >Acessar Projeto</a>
                    </div></SwiperSlide>)}
                </Swiper>
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
