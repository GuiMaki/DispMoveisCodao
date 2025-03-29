import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, ManyToMany, JoinTable } from "typeorm";
import { v4 as uuid } from "uuid";
import { customer } from "./customer";
import { product } from "./product";

@Entity("sales")
class sale {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    date: Date;

    @ManyToOne(() => customer, (customer) => customer.sales, { eager: true })
    customer: customer;

    @ManyToMany(() => product, { eager: true })
    @JoinTable({
        name: "sale_products",
        joinColumn: { name: "sale_id", referencedColumnName: "id" },
        inverseJoinColumn: { name: "product_id", referencedColumnName: "id" }
    })
    products: product[];

    @Column("int")
    amount: number;

    @Column("decimal", { precision: 10, scale: 2 })
    total: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { sale };
