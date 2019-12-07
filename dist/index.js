"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const processText_1 = require("./processText");
const processRawTokens_1 = require("./processRawTokens");
const processTokens_1 = require("./processTokens");
exports.parse = (str) => {
    const rawTokens = processText_1.rawTokenize(str);
    const tokens = processRawTokens_1.tokenize(rawTokens);
    const params = processTokens_1.analize(tokens);
    const list = processTokens_1.buildList(params);
    const dict = processTokens_1.buildDictionary(params);
    return {
        list,
        dict
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQ0FBeUM7QUFDekMseURBQTJDO0FBQzNDLG1EQUFtRTtBQUV0RCxRQUFBLEtBQUssR0FBRyxDQUFDLEdBQUcsRUFBRSxFQUFFO0lBQzVCLE1BQU0sU0FBUyxHQUFHLHlCQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbkMsTUFBTSxNQUFNLEdBQUcsMkJBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNuQyxNQUFNLE1BQU0sR0FBRyx1QkFBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQy9CLE1BQU0sSUFBSSxHQUFHLHlCQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDL0IsTUFBTSxJQUFJLEdBQUcsK0JBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNyQyxPQUFPO1FBQ04sSUFBSTtRQUNKLElBQUk7S0FDSixDQUFDO0FBQ0gsQ0FBQyxDQUFBIn0=