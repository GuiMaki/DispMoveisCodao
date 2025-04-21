import { 
    Entity, 
    PrimaryColumn, 
    Column, 
    JoinColumn,
    ManyToOne 
} from "typeorm";
import { product } from "./product";
import { sale } from "./sale";

@Entity("sale_product")
class saleProduct {
    @PrimaryColumn()
    sale_id: string; // Composite primary key part 1

    @PrimaryColumn()
    product_id: string; // Composite primary key part 2

    @Column()
    amount: number;

    @ManyToOne(() => sale, (sale) => sale.saleProduct)
    @JoinColumn({ name: "sale_id" })
    sale: sale;

    @ManyToOne(() => product, (product) => product.saleProduct)
    @JoinColumn({ name: "product_id" })
    product: product;
}

export { saleProduct };
