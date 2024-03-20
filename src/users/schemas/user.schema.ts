import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Field, ObjectType } from '@nestjs/graphql';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@ObjectType()
@Schema({ collection: 'users' })
export class User {
  @Field()
  @Prop()
  userId: string;

  @Field()
  @Prop()
  email: string;

  @Field()
  @Prop()
  age: number;

  @Field(() => [String])
  @Prop([String])
  favoriteFoods: string[];
}

export const UserSchema = SchemaFactory.createForClass(User);
