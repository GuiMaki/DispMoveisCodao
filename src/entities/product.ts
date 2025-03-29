import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Category } from './category';

@Entity("products")
class Product {
    @PrimaryGeneratedColumn("uuid")
    readonly id!: string;

    @Column()
    name!: string;

    @OneToMany(() => Category, (category) => category.id)
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

export { Product };