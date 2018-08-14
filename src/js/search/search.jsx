import React from 'react';

class Search extends React.Component {

	constructor(props) {
		super(props);

		this.searchUpdate = this.searchUpdate.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	searchUpdate(event) {
		this.props.searchUpdate(event);
	}

	onSubmit(event) {
		this.props.onSubmit(event);
	}

	render() {
		return (
			<form onSubmit={this.onSubmit}>
			    <div className="input-field col s6">
			        <input type="text" placeholder="Digite sua busca" value={this.props.search} onChange={this.searchUpdate} />
			        <label>Busca</label>
			    </div>
			</form>
		);
	}
}

export default Search;