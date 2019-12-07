import {RawToken, Token} from "./types"

function build(arg:string|boolean|number):Token{
	return {
		type:"value",
		content:arg
	}
}

function finalizeToken(token:RawToken):Token {
	if(token.type === "value-naked"){
		if(token.raw === "true") return build(true);
		if(token.raw === "false") return build(false);
		if(token.raw.match(/(\d)+(\.\d+)*/)) return build(Number(token.raw));
		return build(token.raw);
	}
	if(token.type === "value-wraped") return build(token.raw);
	return {
		type: token.type,
		content: token.raw
	};
}

export const tokenize = (rawTokens:RawToken[])=>{
	return rawTokens.map(finalizeToken);
}