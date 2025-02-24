import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateGuagesTable1740075955851 implements MigrationInterface {
    name = 'UpdateGuagesTable1740075955851'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`gauge\` DROP COLUMN \`status\``);
        await queryRunner.query(`ALTER TABLE \`gauge_value\` ADD \`status\` enum ('draft', 'approved', 'submitted') NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`updated_at\` \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`token\` CHANGE \`updated_at\` \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`entity\` CHANGE \`updated_at\` \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`gauge_value\` DROP COLUMN \`quarter\``);
        await queryRunner.query(`ALTER TABLE \`gauge_value\` ADD \`quarter\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`comment\` CHANGE \`updated_at\` \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`comment\` CHANGE \`updated_at\` \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`gauge_value\` DROP COLUMN \`quarter\``);
        await queryRunner.query(`ALTER TABLE \`gauge_value\` ADD \`quarter\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`entity\` CHANGE \`updated_at\` \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`token\` CHANGE \`updated_at\` \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`updated_at\` \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`gauge_value\` DROP COLUMN \`status\``);
        await queryRunner.query(`ALTER TABLE \`gauge\` ADD \`status\` varchar(255) NOT NULL`);
    }

}
