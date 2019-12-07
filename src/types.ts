export type CoreTokenType = "id"|"relation"|"separator";
export type RawToken = {
	type:CoreTokenType|"value-wraped"|"value-naked",
	raw:string
}
export type TokenValueType = string|number|boolean; 
export type Token = {
	type:CoreTokenType|"value",
	content:TokenValueType
}
export type Param = [string,string,TokenValueType]; // id, relation, value