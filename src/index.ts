import {rawTokenize} from "./processText"
import {tokenize} from "./processRawTokens"
import {analize, buildList, buildDictionary} from "./processTokens"

export const parse = (str) => {
	const rawTokens = rawTokenize(str);
	const tokens = tokenize(rawTokens);
	const params = analize(tokens);
	const list = buildList(params);
	const dict = buildDictionary(params);
	return {
		list,
		dict
	};
}