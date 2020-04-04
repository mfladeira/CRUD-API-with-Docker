import React from 'react'
import Main from '../Main'
import './Home.css'
import home from '../../../assets/imgs/home.jpg'
export default props =>
    <Main icon='home' title='Início' subtitle='Projeto desenvolvido com React' >
        <img className='imgs img-fluid' alt='home' src={home}   />
    </Main>