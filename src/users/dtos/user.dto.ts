import { Expose } from 'class-transformer';
import { Types } from 'mongoose';

export class UserDto {
  @Expose()
  _id: Types.ObjectId;
  @Expose()
  email: string;
  @Expose()
  name: string;
  @Expose()
  role: string;
  @Expose()
  is_verified: string;
  @Expose()
  isEmailVerified: string;
}
