import {charsets,relations} from "./config";
import {RawToken} from "./types";

function pulloutValue(tokens:RawToken[], str:string):string{
	if(!str.length) throw "Cannot pullout value from empty string";
	if(charsets.value_wrapper.includes( str[0] )){
		const raw = str.split(str[0])[1];
		tokens.push({type:"value-wraped",raw});
		return str.slice(raw.length + 2);
	}
	const raw = str.split(charsets.separator)[0];
	tokens.push({type:"value-naked",raw});
	return str.slice(raw.length);
}

function pulloutId(tokens:RawToken[], str:string):string{
	if(!str.length) throw "Cannot pullout id from empty string";
	let acc = "";
	while( !charsets.relation.includes( str[0] ) ){
		acc += str[0];
		str = str.slice(1);
	}
	tokens.push({type:"id",raw:acc})
	return str;
}

function pulloutRelation(tokens:RawToken[], str:string):string{
	if(!str.length) throw "Cannot pullout relation from empty string";
	let rel = relations.codes.filter( r => str.startsWith(r) )[0];
	tokens.push({
		type:"relation",
		raw:rel
	});
	return str.slice(rel.length);
}

function pulloutSeparator(tokens:RawToken[], str:string):string{
	if(!str.length) throw "Cannot pullout id from empty string";
	const token:RawToken = {
		type:"separator",
		raw:""
	};
	while( charsets.separator === str[0] ) {
		token.raw += str[0];
		str = str.slice(1);
	}
	tokens.push(token)
	return str;
}


const pulloutToken = (tokens:RawToken[], str:string):string=>{
	const last:RawToken|null = tokens.length ? tokens[tokens.length - 1] : null;

	if(last === null) return pulloutId(tokens,str);
	if(last.type === "id") return pulloutRelation(tokens,str);
	if(last.type === "relation") return pulloutValue(tokens,str);
	if(last.type === "value-naked" || last.type === "value-wraped"){
		if(charsets.separator === str[0]) return pulloutSeparator(tokens,str);
		else throw 'illegeal token or no token at all'
	}
	if(last.type === "separator") return pulloutId(tokens,str);

	throw "internal error";
}

export const rawTokenize = (text:string) => {
	const tokens:RawToken[] = [];
	while(text.length) text=pulloutToken(tokens,text);
	return tokens;	
}