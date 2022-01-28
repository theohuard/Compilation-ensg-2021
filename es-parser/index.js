const Lexer = require('./Lexer')
const Parser = require('./Parser')

const src = '2 + ( 7 - 2 ) + 4 * 5'
//const src = '1234'

const tokens = new Lexer().parse(src);

console.log(tokens);

//parser
const result = new Parser().parser(tokens);
console.log(src);
console.log(result)
