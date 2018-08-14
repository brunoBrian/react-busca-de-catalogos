import ReactDom from 'react-dom';
import React from 'react';

// Importando arquivos internos da pasta src/js
import Title from './title/title';
import CurrentTime from './current-time/current-time';
import Navbar from './navbar/navbar';
import CardList from './card/card-list';

// Estrutura principal do projeto
let App = (
	<div>
		<Navbar titulo="React" cor="orange" />
		<div className="container">
			<Title />
			<CurrentTime />
			<CardList amountRows="4" sizeCol="3" />
		</div>
	</div>
);

// Renderizando no front, na div com o ID = app
ReactDom.render(App, document.getElementById('app'));