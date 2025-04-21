import { 
    Entity, 
    PrimaryColumn, 
    Column, 
    CreateDateColumn, 
    UpdateDateColumn, 
    ManyToOne,
} from "typeorm";
import { customer } from "./customer";
import { product } from "./product";
import { v4 as uuid } from 'uuid';

@Entity()
class rating {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    title: string;

    @Column("text")
    review: string;

    @Column("int")
    stars: number;

    @ManyToOne(() => customer, (custommer) => custommer.ratting) 
    custommer: customer;

    @ManyToOne(() => product, (product) => product.ratting)
    product: product;

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

export { rating };
