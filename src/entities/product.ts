import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { category } from './category';

@Entity("products")
class product {
    @PrimaryGeneratedColumn("uuid")
    readonly id!: string;

    @Column()
    name!: string;

    @OneToMany(() => category, (category) => category.id)
    category!: string;

    @Column()
    description!: string;

    @Column("decimal")
    price!: number;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { product };