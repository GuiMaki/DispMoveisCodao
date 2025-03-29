import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm";
import { v4 as uuid } from 'uuid';
import { category } from './category';

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
