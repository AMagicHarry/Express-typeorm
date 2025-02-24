import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateGaugeRelation1739369937539 implements MigrationInterface {
    name = 'UpdateGaugeRelation1739369937539'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`gauge_entites_entity\` (\`gaugeId\` int NOT NULL, \`entityId\` int NOT NULL, INDEX \`IDX_2b7d3fc3402a62fa1c7c82f215\` (\`gaugeId\`), INDEX \`IDX_67beab32c39da0100a48e44896\` (\`entityId\`), PRIMARY KEY (\`gaugeId\`, \`entityId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`gauge_categories_category\` (\`gaugeId\` int NOT NULL, \`categoryId\` int NOT NULL, INDEX \`IDX_24470df7a1ec59451a557c91fb\` (\`gaugeId\`), INDEX \`IDX_ade2e7cd05d7ac052cfeb7e6e6\` (\`categoryId\`), PRIMARY KEY (\`gaugeId\`, \`categoryId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`updated_at\` \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`token\` CHANGE \`updated_at\` \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`entity\` CHANGE \`updated_at\` \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`gauge_entites_entity\` ADD CONSTRAINT \`FK_2b7d3fc3402a62fa1c7c82f2158\` FOREIGN KEY (\`gaugeId\`) REFERENCES \`gauge\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`gauge_entites_entity\` ADD CONSTRAINT \`FK_67beab32c39da0100a48e448964\` FOREIGN KEY (\`entityId\`) REFERENCES \`entity\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`gauge_categories_category\` ADD CONSTRAINT \`FK_24470df7a1ec59451a557c91fbd\` FOREIGN KEY (\`gaugeId\`) REFERENCES \`gauge\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`gauge_categories_category\` ADD CONSTRAINT \`FK_ade2e7cd05d7ac052cfeb7e6e68\` FOREIGN KEY (\`categoryId\`) REFERENCES \`category\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`gauge_categories_category\` DROP FOREIGN KEY \`FK_ade2e7cd05d7ac052cfeb7e6e68\``);
        await queryRunner.query(`ALTER TABLE \`gauge_categories_category\` DROP FOREIGN KEY \`FK_24470df7a1ec59451a557c91fbd\``);
        await queryRunner.query(`ALTER TABLE \`gauge_entites_entity\` DROP FOREIGN KEY \`FK_67beab32c39da0100a48e448964\``);
        await queryRunner.query(`ALTER TABLE \`gauge_entites_entity\` DROP FOREIGN KEY \`FK_2b7d3fc3402a62fa1c7c82f2158\``);
        await queryRunner.query(`ALTER TABLE \`entity\` CHANGE \`updated_at\` \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`token\` CHANGE \`updated_at\` \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`updated_at\` \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP`);
        await queryRunner.query(`DROP INDEX \`IDX_ade2e7cd05d7ac052cfeb7e6e6\` ON \`gauge_categories_category\``);
        await queryRunner.query(`DROP INDEX \`IDX_24470df7a1ec59451a557c91fb\` ON \`gauge_categories_category\``);
        await queryRunner.query(`DROP TABLE \`gauge_categories_category\``);
        await queryRunner.query(`DROP INDEX \`IDX_67beab32c39da0100a48e44896\` ON \`gauge_entites_entity\``);
        await queryRunner.query(`DROP INDEX \`IDX_2b7d3fc3402a62fa1c7c82f215\` ON \`gauge_entites_entity\``);
        await queryRunner.query(`DROP TABLE \`gauge_entites_entity\``);
    }

}
