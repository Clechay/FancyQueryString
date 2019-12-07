import { Token, Param, TokenValueType, } from "./types"
import { relations } from "./config";

const validateOrder = (tokens: Token[]) => {
	let last = "init";
	for (const token of tokens) {
		if (last === "init" && token.type !== "id") return false;
		if (last === "id" && token.type !== "relation" && token.type !== "separator") return false;
		if (last === "relation" && token.type !== "value") return false;
		if (last === "separator" && token.type !== "id") return false;
		if (last === "value" && token.type !== "separator") return false;
	}
	return true;
}


export const analize = (tokens: Token[]): Param[] => {
	const params: Param[] = [];
	let acc: Param;
	acc = ["", "", true];
	for (const token of tokens) {
		if (token.type === "id") acc[0] = String(token.content);
		if (token.type === "relation") {
			const code = String(token.content);
			const relation = relations.translations.filter(  rel => rel.code === code)[0];
			const meaning = relation.meaning;
			acc[1] = meaning;
		}
		if (token.type === "value") acc[2] = token.content;
		if (token.type === "separator") {
			params.push(acc);
			acc = ["", "", true];
		}
	}
	params.push(acc);
	return params;
}

export const buildList = (params: Param[]) => {
	return params.map(param => {
		return {
			id: param[0],
			rel: param[1],
			val: param[2]
		};
	})
}


export const buildDictionary = (params: Param[]) => {
	const dict = {};
	for (const param of params) {
		dict[param[0]] = {
			rel: param[1],
			val: param[2]
		}
	}
	return dict;
}