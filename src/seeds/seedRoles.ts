import { AppDataSource } from "../config/ormconfig";
import { Role } from "../entities/role.entity";

export const seedRoles = async () => {
  const roleRepository = AppDataSource.getRepository(Role);
  const roles = ['admin', 'user'];

  for (const roleName of roles) {
    const existingRole = await roleRepository.findOne({ where: { name: roleName } });
    if (!existingRole) {
      const role = roleRepository.create({ name: roleName });
      await roleRepository.save(role);
    }
  }
};
