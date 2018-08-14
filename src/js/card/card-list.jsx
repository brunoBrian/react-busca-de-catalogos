import React from 'react';
import axios from 'axios';

// Importando arquivos internos da pasta src/js
import Card from './card';
import Search from '../search/search';

class ListaCartao extends React.Component {

	// Criando variavel para contar os cliques e declarando metodo addClick
	constructor(props) {
		super(props);

		this.state = {clicks: 0, search: '', data: [], server: []};
		this.addClick = this.addClick.bind(this);
		this.searchUpdate = this.searchUpdate.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	// Alterando o estado do clicks
	addClick() {
		this.setState((prevState) => ({
			clicks: prevState.clicks + 1
		}));
	}

	searchUpdate(event) {
		this.setState({search: event.target.value});
		if(event.target.value === '') {
			this.setState({data: this.state.server})
		}
	}

	onSubmit(event) {
		console.log(this.state.search);

		let search = this.state.search;
		let data = this.state.server;
		let newList = data.filter( (item) => {
			if( item.title.toUpperCase().indexOf(search.toUpperCase()) > -1 
			|| item.description.toUpperCase().indexOf(search.toUpperCase()) > -1 
			|| item.detail.toUpperCase().indexOf(search.toUpperCase()) > -1 ) {
				return item;
			}
		});

		this.setState({data: newList});


		event.preventDefault();	
	}

	// Array com os campos dos cards
	componentDidMount() {

		let self = this;

		axios.get('http://localhost:8000/servidor.php?dados=1').then( (response) => {
			self.setState({
				data: response.data,
				server: response.data
			});
		});
	}

	render() {

		// Array com os campos dos cards
		let news = this.state.data;

		let aux = [];
		let newList = [];

		// Separando os cards por linha, dependendo do valor que vem de this.props.amountRows
		for (let i=0; i < news.length; i++) {
			aux.push(news[i]);

			if (aux.length === this.props.amountRows) {
				newList.push(aux);
				aux = [];
			} else if (i === news.length - 1) {
				newList.push(aux);
			}
		}

		// Criando classe com o tamanho das colunas
		let sizeCol = "col m" + this.props.sizeCol;

		// Criando a div com a classe referente ao tamanho das colunas e retorna os cards prontos
		let cardList = function (group) {
			return group.map(function (item) {
				return (
					<div key={item.title} className={sizeCol}>
						<Card dados={item} addClick={self.addClick} />
					</div>
				);
			});
		};

		//Referenciando a classe
		let self = this;

		// Renderiza os cards
		let row = newList.map(function (group, index) {
			return (
				<div key={index} className="row">
					{cardList(group, self)}
				</div>
			);
		});


		return (
			<div>
				<div className="row">
					<Search searchUpdate={this.searchUpdate} onSubmit={this.onSubmit} search={this.state.search} />
				</div>
				<p>Quantidade de cliques: {this.state.clicks}</p>
				{row}
			</div>
		);
	}
}

// Exporta classe
export default ListaCartao;