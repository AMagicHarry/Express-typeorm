import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateGaugeTable1739297605824 implements MigrationInterface {
    name = 'CreateGaugeTable1739297605824'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`gauge\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`description\` varchar(255) NULL, \`unit\` varchar(255) NOT NULL, \`started_on\` datetime NOT NULL, \`ended_on\` datetime NULL, \`time_interval\` varchar(255) NOT NULL, \`import_only\` tinyint NOT NULL, \`status\` varchar(255) NOT NULL, \`approved_date\` varchar(255) NULL, \`submitted_date\` datetime NULL, \`updated_date\` datetime NULL, \`approvedById\` int NULL, \`submittedById\` int NULL, \`updatedById\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`updated_at\` \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`entity\` CHANGE \`updated_at\` \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`token\` CHANGE \`updated_at\` \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`gauge\` ADD CONSTRAINT \`FK_877cf327df036a625013a40977a\` FOREIGN KEY (\`approvedById\`) REFERENCES \`user\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`gauge\` ADD CONSTRAINT \`FK_4f0492fea6985d2fa1eabb741a9\` FOREIGN KEY (\`submittedById\`) REFERENCES \`user\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`gauge\` ADD CONSTRAINT \`FK_24e4f9cf671d5711967e3f37c7c\` FOREIGN KEY (\`updatedById\`) REFERENCES \`user\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`gauge\` DROP FOREIGN KEY \`FK_24e4f9cf671d5711967e3f37c7c\``);
        await queryRunner.query(`ALTER TABLE \`gauge\` DROP FOREIGN KEY \`FK_4f0492fea6985d2fa1eabb741a9\``);
        await queryRunner.query(`ALTER TABLE \`gauge\` DROP FOREIGN KEY \`FK_877cf327df036a625013a40977a\``);
        await queryRunner.query(`ALTER TABLE \`token\` CHANGE \`updated_at\` \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`entity\` CHANGE \`updated_at\` \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`updated_at\` \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP`);
        await queryRunner.query(`DROP TABLE \`gauge\``);
    }

}
