import React from 'react';

// Importando arquivos internos da pasta src/js
import CardList from './card-list';

class Card extends React.Component {

	constructor(props) {
		super(props);

		this.clickCount = this.clickCount.bind(this);
	}

	clickCount() {
		this.props.addClick();
	}

	// Criando os cards
	render() {
		return (
			<div className="card sticky-action">
		    <div className="card-image waves-effect waves-block waves-light">
		      <img onClick={this.clickCount} className="activator" src={this.props.dados.image} />
		    </div>
		    <div className="card-content">
		      <span className="card-title activator grey-text text-darken-4">{this.props.dados.title}<i className="material-icons right">more_vert</i></span>
		      <p>{this.props.dados.description}</p>
		    </div>
		    <div className="card-action">
          <a href={this.props.dados.link}>Ver mais</a>
        </div>
		    <div className="card-reveal">
		      <span className="card-title grey-text text-darken-4">{this.props.dados.title}<i className="material-icons right">close</i></span>
		      <p>{this.props.dados.detail}</p>
		    </div>
		  </div>
		);
	}
}

// Exportando classe
export default Card;