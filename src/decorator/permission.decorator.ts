import { SetMetadata } from '@nestjs/common';
import { Permission } from '../@generated';

export const PERMISSION = 'permission';
export const RequiredPermission = (permission: Permission) => SetMetadata(PERMISSION, permission);