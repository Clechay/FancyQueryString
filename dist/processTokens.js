"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
const validateOrder = (tokens) => {
    let last = "init";
    for (const token of tokens) {
        if (last === "init" && token.type !== "id")
            return false;
        if (last === "id" && token.type !== "relation" && token.type !== "separator")
            return false;
        if (last === "relation" && token.type !== "value")
            return false;
        if (last === "separator" && token.type !== "id")
            return false;
        if (last === "value" && token.type !== "separator")
            return false;
    }
    return true;
};
exports.analize = (tokens) => {
    const params = [];
    let acc;
    acc = ["", "", true];
    for (const token of tokens) {
        if (token.type === "id")
            acc[0] = String(token.content);
        if (token.type === "relation") {
            const code = String(token.content);
            const relation = config_1.relations.translations.filter(rel => rel.code === code)[0];
            const meaning = relation.meaning;
            acc[1] = meaning;
        }
        if (token.type === "value")
            acc[2] = token.content;
        if (token.type === "separator") {
            params.push(acc);
            acc = ["", "", true];
        }
    }
    params.push(acc);
    return params;
};
exports.buildList = (params) => {
    return params.map(param => {
        return {
            id: param[0],
            rel: param[1],
            val: param[2]
        };
    });
};
exports.buildDictionary = (params) => {
    const dict = {};
    for (const param of params) {
        dict[param[0]] = {
            rel: param[1],
            val: param[2]
        };
    }
    return dict;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvY2Vzc1Rva2Vucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9wcm9jZXNzVG9rZW5zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EscUNBQXFDO0FBRXJDLE1BQU0sYUFBYSxHQUFHLENBQUMsTUFBZSxFQUFFLEVBQUU7SUFDekMsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDO0lBQ2xCLEtBQUssTUFBTSxLQUFLLElBQUksTUFBTSxFQUFFO1FBQzNCLElBQUksSUFBSSxLQUFLLE1BQU0sSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLElBQUk7WUFBRSxPQUFPLEtBQUssQ0FBQztRQUN6RCxJQUFJLElBQUksS0FBSyxJQUFJLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxVQUFVLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxXQUFXO1lBQUUsT0FBTyxLQUFLLENBQUM7UUFDM0YsSUFBSSxJQUFJLEtBQUssVUFBVSxJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssT0FBTztZQUFFLE9BQU8sS0FBSyxDQUFDO1FBQ2hFLElBQUksSUFBSSxLQUFLLFdBQVcsSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLElBQUk7WUFBRSxPQUFPLEtBQUssQ0FBQztRQUM5RCxJQUFJLElBQUksS0FBSyxPQUFPLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxXQUFXO1lBQUUsT0FBTyxLQUFLLENBQUM7S0FDakU7SUFDRCxPQUFPLElBQUksQ0FBQztBQUNiLENBQUMsQ0FBQTtBQUdZLFFBQUEsT0FBTyxHQUFHLENBQUMsTUFBZSxFQUFXLEVBQUU7SUFDbkQsTUFBTSxNQUFNLEdBQVksRUFBRSxDQUFDO0lBQzNCLElBQUksR0FBVSxDQUFDO0lBQ2YsR0FBRyxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNyQixLQUFLLE1BQU0sS0FBSyxJQUFJLE1BQU0sRUFBRTtRQUMzQixJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssSUFBSTtZQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3hELElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxVQUFVLEVBQUU7WUFDOUIsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNuQyxNQUFNLFFBQVEsR0FBRyxrQkFBUyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlFLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUM7WUFDakMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQztTQUNqQjtRQUNELElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxPQUFPO1lBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7UUFDbkQsSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLFdBQVcsRUFBRTtZQUMvQixNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCLEdBQUcsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDckI7S0FDRDtJQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDakIsT0FBTyxNQUFNLENBQUM7QUFDZixDQUFDLENBQUE7QUFFWSxRQUFBLFNBQVMsR0FBRyxDQUFDLE1BQWUsRUFBRSxFQUFFO0lBQzVDLE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUN6QixPQUFPO1lBQ04sRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDWixHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNiLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQ2IsQ0FBQztJQUNILENBQUMsQ0FBQyxDQUFBO0FBQ0gsQ0FBQyxDQUFBO0FBR1ksUUFBQSxlQUFlLEdBQUcsQ0FBQyxNQUFlLEVBQUUsRUFBRTtJQUNsRCxNQUFNLElBQUksR0FBRyxFQUFFLENBQUM7SUFDaEIsS0FBSyxNQUFNLEtBQUssSUFBSSxNQUFNLEVBQUU7UUFDM0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHO1lBQ2hCLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ2IsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDYixDQUFBO0tBQ0Q7SUFDRCxPQUFPLElBQUksQ0FBQztBQUNiLENBQUMsQ0FBQSJ9