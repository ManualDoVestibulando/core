"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateNotaJson = exports.generatePath = exports.notaFinalFuvest = exports.notaFuvestValidate = void 0;
var notaFuvestValidate = function (nota) {
    if (["AC", "EP", "PPI"].indexOf(nota.modalidade) == -1)
        return "Modalidade invalida";
    return null;
};
exports.notaFuvestValidate = notaFuvestValidate;
var notaFinalFuvest = function (nota) { return nota.final; };
exports.notaFinalFuvest = notaFinalFuvest;
var generatePath = function (_) { return "fuvest"; };
exports.generatePath = generatePath;
var generateNotaJson = function (nota) {
    return JSON.stringify(nota);
};
exports.generateNotaJson = generateNotaJson;
