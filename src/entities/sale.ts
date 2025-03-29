import { 
    Entity, 
    PrimaryColumn, 
    Column, 
    CreateDateColumn, 
    UpdateDateColumn, 
    ManyToOne, OneToMany 
} from "typeorm";
import { v4 as uuid } from "uuid";
import { customer } from "./customer";
import { saleProduct } from "./saleProduct";

@Entity("sales")
class sale {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    date: Date;

    @ManyToOne(() => customer, (customer) => customer.sales, { eager: true })
    customer: customer;

    @OneToMany(() => saleProduct, (saleProduct) => saleProduct.sale, { eager: true })
    saleProduct: saleProduct[]; 

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
