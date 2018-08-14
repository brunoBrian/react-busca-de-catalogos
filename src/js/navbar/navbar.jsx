import React from 'react';
import axios from 'axios';

// Importando arquivos internos da pasta src/js
import NavMenu from './nav-menu';

class Navbar extends React.Component {

	constructor(props) {
		super(props);

		this.state = {menu: []};
	}

	componentDidMount() {

		let self = this;

		axios.get('http://localhost:8000/servidor.php?menu=1').then( (response) => {
			self.setState({
				menu: response.data
			});
		});
	}

	render () {

		// Definindo objeto para ser consumido no menu
		let menu = this.state.menu;

		// Classe para cor de fundo
		let bgNav = "nav-wrapper " + this.props.cor;

		// Retornando menu-nav no front
		return (
			<nav>
		    <div className={bgNav}>
		    	<div className="container">
			      <a href="#" className="brand-logo">{this.props.titulo}</a>
			      <NavMenu menu={menu} />
			    </div>
		    </div>
			</nav>
		)
	}
}

// Exportando classe
export default Navbar;