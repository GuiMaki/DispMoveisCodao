import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm";
import { v4 as uuid } from "uuid";
import { Product } from "./product";
import { Customer } from "./customer";

@Entity("sales")
class sale{
    @PrimaryColumn()
    readonly id!: string;

    @Column()
    date: Date

    @ManyToOne (() => Product, (product) => product.sales)
    product: Product

    @ManyToOne (() => Customer, (customer) => customer.sales)
    customer: Customer
 
    @Column("decimal")
    ammount: number

    @Column("decimal")
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