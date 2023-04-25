import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class ContactModel {
  @Field(() => Int)
    id: number;

  @Field(() => String)
    name: string;

  @Field(() => String)
    email: string;

  @Field(() => Date)
    created_at: Date;

  @Field(() => Date)
    updated_at: Date;

  @Field(() => Date, { nullable: true })
    deleted_at: Date | null;
}
