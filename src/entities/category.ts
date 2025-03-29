import { 
    Entity, 
    Column, 
    PrimaryColumn, 
    CreateDateColumn, 
    UpdateDateColumn, 
    OneToMany 
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import { product } from './product';

@Entity("categories")
class category {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @OneToMany(() => product, (product) => product.category)
    products: product[];

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

export { category };
