const Lexer = require('./Lexer')


class Parser {

	constructor() {
		this._tokens = null
		this._ast = null
	}

	parser(tokens) {
		this._tokens = tokens

		return this._ast
	}
}

module.exports = Parser