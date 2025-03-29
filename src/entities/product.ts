import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity("products")
class Product {
    @PrimaryGeneratedColumn("uuid")
    readonly id!: string;

    @Column()
    name!: string;

    @Column()
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