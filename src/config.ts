const relations_translations= [
	{code:"=" , meaning:"equal"},
	{code:"~=" , meaning:"fuzzyEqual"},
	{code:"<=", meaning:"lessOrEqual"},
	{code:"<" , meaning:"lessThan"},
	{code:">=", meaning:"moreOrEqual"},
	{code:">" , meaning:"moreThan"},
	{code:"!=", meaning:"notEqual"},
]

export const relations = {
	codes: relations_translations.map(o => o.code),
	meanings: relations_translations.map(o => o.meaning),
	translations: relations_translations,
}

export const charsets = {
	relation : "~=<>!".split(""),
	digits : "0123456789".split(""),
	value_wrapper : `'"`.split(""),
	separator : ' ',
	alphabet:{
		eng:{
			lower:"abcdefghijklmnopqrstuvwxyz".split(""),
			upper:[""],
			all:[""],
		},
		pol:{
			lower:"ąćęłńóśżź".split(""),
			upper:[""],
			all:[""],
		},
		combined:{
			lower:[""],
			upper:[""],
			all:[""],
		}
	},
	id:[""],
	value:{
		naked:[""],
		wraped:[""]
	}
}
{
	charsets.alphabet.eng.upper = charsets.alphabet.eng.lower.map( c => c.toUpperCase() );
	charsets.alphabet.eng.all = [...charsets.alphabet.eng.upper, ...charsets.alphabet.eng.lower];
	charsets.alphabet.pol.upper = charsets.alphabet.pol.lower.map( c => c.toUpperCase() );
	charsets.alphabet.pol.all = [...charsets.alphabet.pol.upper, ...charsets.alphabet.pol.lower];

	charsets.alphabet.combined.lower = [...charsets.alphabet.eng.lower, ...charsets.alphabet.pol.lower];
	charsets.alphabet.combined.upper = [...charsets.alphabet.eng.upper, ...charsets.alphabet.pol.upper];
	charsets.alphabet.combined.all = [...charsets.alphabet.eng.all, ...charsets.alphabet.pol.all];

	charsets.id = [...charsets.alphabet.eng.all, "_"];
	charsets.value = {
		naked : [...charsets.id, ...charsets.digits, ...charsets.alphabet.combined.all, "-"],
		wraped : [" "]
	}
	charsets.value.wraped = [...charsets.value.naked, " "];
}