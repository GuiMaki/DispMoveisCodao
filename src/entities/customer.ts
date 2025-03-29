import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity("customers")
class customer {
    @PrimaryGeneratedColumn("uuid")
    readonly id!: string;

    @Column()
    name!: string;

    @Column()
    number!: string;

    @Column()
    email!: string;

    @Column()
    street!: string;

    @Column()
    neighborhood!: string;

    @Column()
    city!: string;

    @Column()
    state!: string;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { customer };