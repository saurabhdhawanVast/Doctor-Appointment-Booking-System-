// import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

// @Schema({ timestamps: true })
// export class Patient {
//   @Prop({ unique: true, required: true })
//   email: string;
//   @Prop({ required: true })
//   password: string;

//   @Prop({ required: true })
//   name: string;

//   @Prop({
//     required: true,
//   })
//   mobileNo: string;

//   @Prop({ required: true })
//   address: string;

//   @Prop()
//   blood_group: string;

//   @Prop({ require: true })
//   gender: string;
// }

// export const PatientSchema = SchemaFactory.createForClass(Patient);

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { Address } from 'src/patients/dtos/adddress';

@Schema({ timestamps: true })
export class Patient {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  user: Types.ObjectId;

  @Prop({
    required: true,
  })
  contactNumber: string;

  @Prop()
  address: Address;

  @Prop()
  blood_group: string;

  @Prop({ require: true })
  gender: string;

  
  @Prop({ required: true })
  age: number;

  // @Prop({ required: true })
  // profilePic: string;
}

export const PatientSchema = SchemaFactory.createForClass(Patient);
