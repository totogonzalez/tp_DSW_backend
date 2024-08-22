var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Entity, Property, ManyToOne, OneToMany, Collection, OneToOne } from '@mikro-orm/core';
import { BaseClass3 } from '../shared/db/baseEntity.entity.js';
import { Resena } from './reseña.entity.js';
import { Cliente } from '../cliente/cliente.entity.js';
import { PlatoPedido } from '../platoPedido/platoPedido.entity.js';
export let Pedido = class Pedido extends BaseClass3 {
    constructor() {
        super(...arguments);
        this.platoPedidos = new Collection(this);
        /*@ManyToOne(() => Mesa, {nullable: false})
        mesa!: Rel<Mesa>*/
    }
};
__decorate([
    Property(),
    __metadata("design:type", String)
], Pedido.prototype, "estado", void 0);
__decorate([
    Property(),
    __metadata("design:type", Date)
], Pedido.prototype, "fecha", void 0);
__decorate([
    Property(),
    __metadata("design:type", Date)
], Pedido.prototype, "hora", void 0);
__decorate([
    Property({ nullable: true }),
    __metadata("design:type", Date)
], Pedido.prototype, "fechaCancelacion", void 0);
__decorate([
    Property({ nullable: true }),
    __metadata("design:type", Date)
], Pedido.prototype, "horaCancelacion", void 0);
__decorate([
    OneToMany(() => PlatoPedido, (platoPedido) => platoPedido.pedido),
    __metadata("design:type", Object)
], Pedido.prototype, "platoPedidos", void 0);
__decorate([
    OneToOne(() => Resena, (resena) => resena.pedido, { nullable: true, owner: true }),
    __metadata("design:type", Object)
], Pedido.prototype, "resena", void 0);
__decorate([
    ManyToOne(() => Cliente, { nullable: false }),
    __metadata("design:type", Object)
], Pedido.prototype, "cliente", void 0);
Pedido = __decorate([
    Entity()
], Pedido);
//# sourceMappingURL=pedido.entity.js.map