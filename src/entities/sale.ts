import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany } from "typeorm";
import { v4 as uuid } from "uuid";
import { Product } from "./product";
import { Customer } from "./customer";

@Entity("sales")
class sale{
    @PrimaryColumn()
    readonly id!: string;

    @Column()
    date: Date

    @ManyToOne (() => Product, (product) => product.id)
    product: Product

    @OneToMany (() => Customer, (customer) => customer.id)
    customer: Customer
 
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