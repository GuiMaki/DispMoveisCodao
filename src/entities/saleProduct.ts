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
    amount: number;

    @ManyToOne(() => sale, (sale) => sale.saleProduct, { primary: true })
    @JoinColumn({ name: "sale_id" })
    sale: sale;

    @ManyToOne(() => product, (product) => product.saleProduct, { primary: true })
    @JoinColumn({ name: "product_id" })
    product: product;
}

export { saleProduct };
