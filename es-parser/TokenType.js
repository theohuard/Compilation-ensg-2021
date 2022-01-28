const TokenType = {
	NUMBER : 'NUMBER',
	SYMBOL : 'SYMBOL',
	PLUS : 'PLUS',
	MOINS : 'MOINS',
	MULTIPLE : 'MULTIPLE',
	PAR_OUVERT : 'PAR_OUVERT',
	PAR_FERME : 'PAR_FERME',
	EOF : 'EOF'
}
Object.freeze(TokenType)

module.exports = TokenType
