import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany } from "typeorm";
import { v4 as uuid } from "uuid";
import { product } from "./product";
import { customer } from "./customer";

@Entity("sales")
class sale{
    @PrimaryColumn()
    readonly id!: string;

    @Column()
    date: Date

    @ManyToOne (() => product, (product) => product.id)
    product: product

    @OneToMany (() => customer, (customer) => customer.id)
    customer: customer
 
    @Column("int")
    amount: number

    @Column("decimal", { precision: 10, scale: 2 })
    total: number
    
    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if (!this.id){
            this.id = uuid();
        }
    }
}

export { sale }