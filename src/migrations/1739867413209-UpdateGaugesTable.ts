import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateGaugesTable1739867413209 implements MigrationInterface {
    name = 'UpdateGaugesTable1739867413209'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`gauge_entities_entity\` (\`gaugeId\` int NOT NULL, \`entityId\` int NOT NULL, INDEX \`IDX_4288bd69554d59553c878a771e\` (\`gaugeId\`), INDEX \`IDX_4b016b97799ea8c0ecf0f03a20\` (\`entityId\`), PRIMARY KEY (\`gaugeId\`, \`entityId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`updated_at\` \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`token\` CHANGE \`updated_at\` \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`comment\` CHANGE \`updated_at\` \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`gauge\` DROP COLUMN \`approved_date\``);
        await queryRunner.query(`ALTER TABLE \`gauge\` ADD \`approved_date\` datetime NULL`);
        await queryRunner.query(`ALTER TABLE \`entity\` CHANGE \`updated_at\` \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`gauge_entities_entity\` ADD CONSTRAINT \`FK_4288bd69554d59553c878a771ee\` FOREIGN KEY (\`gaugeId\`) REFERENCES \`gauge\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`gauge_entities_entity\` ADD CONSTRAINT \`FK_4b016b97799ea8c0ecf0f03a20c\` FOREIGN KEY (\`entityId\`) REFERENCES \`entity\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`gauge_entities_entity\` DROP FOREIGN KEY \`FK_4b016b97799ea8c0ecf0f03a20c\``);
        await queryRunner.query(`ALTER TABLE \`gauge_entities_entity\` DROP FOREIGN KEY \`FK_4288bd69554d59553c878a771ee\``);
        await queryRunner.query(`ALTER TABLE \`entity\` CHANGE \`updated_at\` \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`gauge\` DROP COLUMN \`approved_date\``);
        await queryRunner.query(`ALTER TABLE \`gauge\` ADD \`approved_date\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`comment\` CHANGE \`updated_at\` \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`token\` CHANGE \`updated_at\` \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`updated_at\` \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP`);
        await queryRunner.query(`DROP INDEX \`IDX_4b016b97799ea8c0ecf0f03a20\` ON \`gauge_entities_entity\``);
        await queryRunner.query(`DROP INDEX \`IDX_4288bd69554d59553c878a771e\` ON \`gauge_entities_entity\``);
        await queryRunner.query(`DROP TABLE \`gauge_entities_entity\``);
    }

}
