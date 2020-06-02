import React, { Fragment, useState } from 'react'
// import { Link } from '../../../../node_modules/react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import api from '../../../services/api';


import { NavBar } from '../../navbar'
import { Footer } from '../../footer'
import { Accessibility } from '../../accessibility'



function CadastrarApoiador() {

    const [turma, setTurma] = useState("");  
    const [aluno, setAluno] = useState("");

    async function handleCreate(e) {
                
        e.preventDefault();
    
        const data = {
          turma, 
          aluno

        };
    
        try {
          api.post("/cadastrarhorario", data);
    
          alert(`O aluno foi cadastrado como apoiador da turma com sucesso!`);

        } catch (err) {
          console.log(err);
          alert("Erro no cadastro, tente novamente");
        }
      }


    return (
        <Fragment>
            <Accessibility />
            <NavBar />
            <main className="main">
                <a href="/turma">
                    <ArrowBackIcon id="return-icon" />
                </a>
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
                        <div class="form-page-container">
                            <div class="form-container">
                                <form onSubmit={handleCreate}>
                                    <h1>Cadastre o apoiador!</h1>
                                    <p>Insira abaixo o código do aluno escolhido.</p>
                                    <input name="aluno" class="form-input" placeholder="Código do Aluno" value={aluno} onChange={e => setAluno(e.target.value)} required />
                                    <input type="submit" class="button" value="cadastrar apoiador" />
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </Fragment>

    )
}

export default CadastrarApoiador
