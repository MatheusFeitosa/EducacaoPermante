import React, { Fragment, useState, useEffect } from 'react'
import { Link } from "../../../../node_modules/react-router-dom"

// icons
import Create from "@material-ui/icons/Create"
import Class from "@material-ui/icons/Class"
import Done from "@material-ui/icons/Done"
import AccountCircle from "@material-ui/icons/AccountCircle"

import api from "../../../services/api"
import { NavBar } from "../../navbar"
import { Footer } from "../../footer"
import { Accessibility } from "../../accessibility"

import "./perfil.css"

var QRCode = require('qrcode.react');

function Perfil() {
	const [dados, setDados] = useState([])

	//alterar rota.
	useEffect(() => {
		try {
            const token = localStorage.getItem("token")
            const AuthStr = 'Bearer '.concat(token); 
			api.get("/dadosPessoais", { headers: { Authorization: AuthStr }}).then((response) => {
                setDados(response.data)
			})
		} catch (err) {
			alert("Não foi possível encontrar o usuário desejada, tente novamente")
		}
	}, [])

	function createQR(dadosQR){
		for (var key in dadosQR){
			var attrName = key;
			if (attrName != "email" && attrName != "cpf") {
				delete dadosQR [ attrName ]
			}

		}

		dadosQR = JSON.stringify(dadosQR)
		
		let content = []
		content.push(
		
			<QRCode value={dadosQR} renderAs='svg' size='300' />
		
		)
		return content

	}
	


	return (
		<Fragment>
			<Accessibility />
			<NavBar />
			<main className="main">
				<div className="profile__container">
					<div className="profile__container-info">
						<h1>Olá, usuário!</h1>
						<p className="subtitle">
							Visualize suas informações pessoais nesta página!
						</p>
						<p className="subtitle-qr">Seu QR Code de acesso</p>
						<div className="card">
							{createQR(dados)}
						</div>
						<div className="profile__container-buttons">
							<Link to="/editarDados">
								<button size="large" class="personal-buttons" disabled>
									<Create id="icons"></Create>
									<label>Editar Dados</label>
								</button>
							</Link>
							<Link to="/dadosPessoais">
								<button size="large" class="personal-buttons">
									<AccountCircle id="icons"></AccountCircle>
									<label>Dados Pessoais</label>
								</button>
							</Link>
						</div>
					</div>
					<div className="profile__container-options">
						<Link to="/turmasinscritas" className="link">
							<button size="large" class="button" disabled>
								<Class id="icons"></Class>
								<label>Turmas Inscritas</label>
							</button>
						</Link>
						<Link to="/presencaspessoais" className="link">
							<button size="large" class="button" disabled>
								<Done id="icons"></Done>
								<label>Presenças</label>
							</button>
						</Link>
					</div>
				</div>
			</main>
			<Footer />
		</Fragment>
	)
}

export default Perfil

