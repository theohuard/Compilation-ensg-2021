const Lexer = require('./Lexer')
const TokenType = require('./TokenType')
const Token = require('./Token')

pile = []

class Parser {

	constructor() {
		this._tokens = []
		this._index = 0
	}

	consome(){
		console.log(pile,"/",this._tokens[this._index])
		this._index++
	}


	/** FONCTIONS DE LA PILE  */

	addNumber(){
		pile.push(parseInt(this._tokens[this._index].name))
	}

	addPlus(left, right){
		pile.push(left+right)
	}

	addMoins(left, right){
		pile.push(left-right)
	}

	addMultiple(left, right){
		pile.push(left*right)

	}

	/** PARSER **/

	addition(){
		return this.operation(this.addPlus,TokenType.PLUS)
	}
	soustraction(){
		return this.operation(this.addMoins,TokenType.MOINS)
	}
	multiplication(){
		return this.operation(this.addMultiple,TokenType.MULTIPLE)
	}

	operation(func,signe){
		
		if (this._index == TokenType.EOF) return true

		if ( this._tokens[this._index].type == TokenType.NUMBER || this._tokens[this._index].type == TokenType.PAR_OUVERT ){
			if (signe == TokenType.PLUS )  this.soustraction()
			if (signe == TokenType.MOINS ) this.multiplication()
			if (signe == TokenType.MULTIPLE )  this.nombre()
		}

		if ( this._tokens[this._index].type == signe ){
			this.consome()
			this.operation(func,signe)

			let right = pile.pop()
			let left = pile.pop()
			func(left, right)
		}
		return true 
	}

	nombre(){
		if (this._index == TokenType.EOF) return true

		if ( this._tokens[this._index].type == TokenType.NUMBER ){
			this.addNumber()
			this.consome()
		}
		else if (this._tokens[this._index].type == TokenType.PAR_OUVERT) {
			this.consome()
			this.addition()
			this.consome()
		}
		return true
	}

	parser(tokens) {
		this._tokens = tokens
		this.addition();
		return pile
	}
}

module.exports = Parser
