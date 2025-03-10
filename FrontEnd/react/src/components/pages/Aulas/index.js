import React, { Fragment } from 'react'
// import AddIcon from '@material-ui/icons/Add';
import { Link } from '../../../../node_modules/react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import './aulas.css'

import { NavBar } from '../../navbar'
import { Footer } from '../../footer'
import { Accessibility } from '../../accessibility'


function Aulas() {

    //preencher dados da turma com db

    return (
        <Fragment>
            <Accessibility />
            <NavBar />
            <main className="main">
                {/* <Link to="/turma">
                    <ArrowBackIcon id="return-icon" />
                </Link> */}
                <div className="card-container">
                    <div className="card">
                        <table className="card-list">
                            <tr className="title">
                                <td>Natação</td>
                            </tr>
                            <tr className="tutor">
                                <td>Responsável:</td>
                                <td><span className="tutor__highlight">Fulaninho</span></td>

                            </tr>
                            <tr className="header">
                                <th>Turma</th>
                                <th>Informações</th>
                            </tr>
                            <tr className="content">
                                <td className="name">Dia</td>
                                <td className="value">Terça</td>
                            </tr>
                            <tr className="content">
                                <td className="name">Hora</td>
                                <td className="value">13:00</td>
                            </tr>
                            <tr className="content">
                                <td className="name">Carga horária total</td>
                                <td className="value">15min</td>
                            </tr>
                            <tr className="content">
                                <td className="name">Tolerância</td>
                                <td className="value">120h</td>
                            </tr>
                            <tr className="content">
                                <td className="name">Tolerância</td>
                                <td className="value">15min</td>
                            </tr>
                            <tr className="content">
                                <td className="name">Modalidade</td>
                                <td className="value">Esportes</td>
                            </tr>
                            <tr className="content">
                                <td className="name">Tag</td>
                                <td className="value">Atividade Física</td>
                            </tr>
                        </table>
                    </div>
                    <div className="info-turmas">
                        <div class="card">
                            <table class="presence-list">

                                <tr class="title">
                                    <td>Aulas Cadastradas</td>
                                </tr>

                                <tr class="header">
                                    <th class="header__first">Aula</th>
                                    <th>Data</th>
                                </tr>
                                <Link to="/aula" className="link">
                                    <tr class="students">
                                        <td class="name">Nado Sincronizado - Parte 1</td>
                                        <td class="value">20/04/2020</td>
                                    </tr>
                                </Link>

                                <tr class="students">
                                    <td class="name">Nado Sincronizado - Parte Exemplo</td>
                                    <td class="value">22/04/2020</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </Fragment>

    )
}

export default Aulas
