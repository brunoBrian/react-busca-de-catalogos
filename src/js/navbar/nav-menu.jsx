import React from 'react';

class NavMenu extends React.Component {

	// Construtor da classe e setando o state e chamando o construtor
	constructor(props) {
		super(props);

		this.state = {menuAtivo: 'Home'};
		this.alterarActive = this.alterarActive.bind(this);
	};

	// Método da classe
	alterarActive(titulo, self) {
		self.setState({menuAtivo: titulo});
	}

	render() {

		// Recebendo o this da classe
		let self = this;

		// Adicionando classe active quando item do menu for clicado
		let lista = this.props.menu.map(function (value, index) {
			return (
				<li key={value.title} onClick={self.alterarActive.bind(null, value.title, self)} className={self.state.menuAtivo === value.title ? 'active' : ''}><a href={value.link}>{value.title}</a></li>
			);
		});

		// Retornando lista com os itens
		return (
			<ul id="nav-mobile" className="right">
		        {lista}
		    </ul>
		);
	}
}

// Exportando classe
export default NavMenu;