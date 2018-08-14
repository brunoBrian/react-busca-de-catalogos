import React from 'react';

class CurrentTime extends React.Component {

	// Inicializando o componente e setando um state
	constructor(props) {
		super(props);

		this.state = {hora: new Date()};
	}

	// Método executado quando o componente renderizado na tela, atualiza a data a cada segundo
	componentDidMount() { 
		this.horaID = setInterval(
			() => this.atualizarSegundos(), 1000
		);
	}

	// Método para atualizar os segundos
	atualizarSegundos() {
		this.setState({hora: new Date()});
	}

	// Destruindo o componente 
	componentWillOnMoutn() {
		clearInterval(this.horaID);
	}

	render() {
		return <h4 className="center">Horário Atual - {this.state.hora.toLocaleTimeString()}</h4>
	}
}

export default CurrentTime;