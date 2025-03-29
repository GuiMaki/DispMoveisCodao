import { Entity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { sale } from './sale';

@Entity("customers")
class customer {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @Column()
    number: string;

    @Column()
    email: string;

    @Column()
    street: string;

    @Column()
    neighborhood: string;

    @Column()
    city: string;

    @Column()
    state: string;

    @OneToMany(() => sale, (sale) => sale.customer)
    sales: sale[];

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

export { customer };
