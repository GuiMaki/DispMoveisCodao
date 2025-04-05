import { 
    Entity, 
    PrimaryColumn, 
    Column, 
    CreateDateColumn, 
    UpdateDateColumn, 
    ManyToOne,
    OneToMany
} from "typeorm";
import { v4 as uuid } from 'uuid';
import { category } from './category';
import { saleProduct } from './saleProduct';

@Entity("products")
class product {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @ManyToOne(() => category, (category) => category.products, { eager: true })
    category: category;

    @Column()
    description: string;

    @Column("decimal", { precision: 10, scale: 2 })
    price: number;

    @OneToMany(() => saleProduct, (saleProduct) => saleProduct.product)
    saleProduct: saleProduct[]; 

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

export { product };
