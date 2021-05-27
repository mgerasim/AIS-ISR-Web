import {Role} from '../../api/models/role';

export function RoletToInt(role: Role): number {
  switch (role) {
    case Role.User:
      return 1;
    case Role.Admin:
      return 2;
    case Role.SuperAdmin:
      return 3;
    default:
      throw new Error(role);
  }
}
