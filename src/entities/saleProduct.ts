import { Entity, PrimaryColumn, Column, JoinColumn, ManyToOne, ManyToMany, JoinTable } from "typeorm";
import { product } from "./product";
import { sale } from "./sale";

@Entity("sale_product")
class saleProduct {
    @ManyToOne(() => sale, (sale) => sale.saleProduct)
    @JoinColumn({ name: "sale_id" })
    sale: sale;

    @ManyToOne(() => product, (product) => product.saleProduct)
    @JoinColumn({ name: "product_id" })
    product: product;

    @Column("int")
    amount: number;

    @PrimaryColumn()
    sale_id: string;

    @PrimaryColumn()
    product_id: string;
}

export { saleProduct };
