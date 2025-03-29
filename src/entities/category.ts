import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity("categories")
class category {
    @PrimaryGeneratedColumn("uuid")
    readonly id!: string;

    @Column()
    name!: string;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { category };