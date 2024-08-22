var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Entity, Property, Collection, OneToMany } from "@mikro-orm/core";
import { BaseClass2 } from '../shared/db/baseEntity.entity.js';
import { Pedido } from "../pedido/pedido.entity.js";
//import { Pedido } from "./pedido.entity.js";
export let Cliente = class Cliente extends BaseClass2 {
    constructor() {
        super(...arguments);
        this.pedidos = new Collection(this);
    }
};
__decorate([
    Property({ nullable: false }),
    __metadata("design:type", String)
], Cliente.prototype, "nombre", void 0);
__decorate([
    Property({ nullable: false }),
    __metadata("design:type", String)
], Cliente.prototype, "apellido", void 0);
__decorate([
    Property({ nullable: false }),
    __metadata("design:type", String)
], Cliente.prototype, "mail", void 0);
__decorate([
    Property({ nullable: false }),
    __metadata("design:type", String)
], Cliente.prototype, "telefono", void 0);
__decorate([
    OneToMany(() => Pedido, (pedido) => pedido.cliente),
    __metadata("design:type", Object)
], Cliente.prototype, "pedidos", void 0);
Cliente = __decorate([
    Entity()
], Cliente);
//# sourceMappingURL=cliente.entity.js.map