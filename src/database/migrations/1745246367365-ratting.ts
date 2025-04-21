import {MigrationInterface, QueryRunner} from "typeorm";

export class ratting1745246367365 implements MigrationInterface {
    name = 'ratting1745246367365'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "ratting" ("id" character varying NOT NULL, "title" character varying NOT NULL, "review" text NOT NULL, "stars" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "custommerId" character varying, "productId" character varying, CONSTRAINT "PK_7e0cde3c41a5b362707b3c32d13" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "ratting" ADD CONSTRAINT "FK_b07e088bdd831a8b47757883998" FOREIGN KEY ("custommerId") REFERENCES "customers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "ratting" ADD CONSTRAINT "FK_b89f8734f54dec9682fc02f4053" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ratting" DROP CONSTRAINT "FK_b89f8734f54dec9682fc02f4053"`);
        await queryRunner.query(`ALTER TABLE "ratting" DROP CONSTRAINT "FK_b07e088bdd831a8b47757883998"`);
        await queryRunner.query(`DROP TABLE "ratting"`);
    }

}
