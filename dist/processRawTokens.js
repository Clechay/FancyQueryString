"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function build(arg) {
    return {
        type: "value",
        content: arg
    };
}
function finalizeToken(token) {
    if (token.type === "value-naked") {
        if (token.raw === "true")
            return build(true);
        if (token.raw === "false")
            return build(false);
        if (token.raw.match(/(\d)+(\.\d+)*/))
            return build(Number(token.raw));
        return build(token.raw);
    }
    if (token.type === "value-wraped")
        return build(token.raw);
    return {
        type: token.type,
        content: token.raw
    };
}
exports.tokenize = (rawTokens) => {
    return rawTokens.map(finalizeToken);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvY2Vzc1Jhd1Rva2Vucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9wcm9jZXNzUmF3VG9rZW5zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsU0FBUyxLQUFLLENBQUMsR0FBeUI7SUFDdkMsT0FBTztRQUNOLElBQUksRUFBQyxPQUFPO1FBQ1osT0FBTyxFQUFDLEdBQUc7S0FDWCxDQUFBO0FBQ0YsQ0FBQztBQUVELFNBQVMsYUFBYSxDQUFDLEtBQWM7SUFDcEMsSUFBRyxLQUFLLENBQUMsSUFBSSxLQUFLLGFBQWEsRUFBQztRQUMvQixJQUFHLEtBQUssQ0FBQyxHQUFHLEtBQUssTUFBTTtZQUFFLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVDLElBQUcsS0FBSyxDQUFDLEdBQUcsS0FBSyxPQUFPO1lBQUUsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUMsSUFBRyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUM7WUFBRSxPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDckUsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ3hCO0lBQ0QsSUFBRyxLQUFLLENBQUMsSUFBSSxLQUFLLGNBQWM7UUFBRSxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDMUQsT0FBTztRQUNOLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSTtRQUNoQixPQUFPLEVBQUUsS0FBSyxDQUFDLEdBQUc7S0FDbEIsQ0FBQztBQUNILENBQUM7QUFFWSxRQUFBLFFBQVEsR0FBRyxDQUFDLFNBQW9CLEVBQUMsRUFBRTtJQUMvQyxPQUFPLFNBQVMsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDckMsQ0FBQyxDQUFBIn0=