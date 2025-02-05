"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Structures = void 0;
const Socket_1 = require("./structures/Socket");
const Player_1 = require("./structures/Player");
const Filters_1 = require("./structures/Filters");
class Structures {
    static extend(name, extend) {
        const extended = extend(this.structures[name]);
        return (this.structures[name] = extended);
    }
    static get(name) {
        return this.structures[name];
    }
}
exports.Structures = Structures;
Structures.structures = {
    player: Player_1.Player,
    socket: Socket_1.Socket,
    filters: Filters_1.Filters
};
