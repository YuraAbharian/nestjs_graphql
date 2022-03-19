import { Field, InputType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput {
  /**
   * id {number}
   */
  @Field(() => ID)
  id: number;

  /**
   * email {string}
   */
  @Field({ nullable: true })
  email: string;

  /**
   * name {string}
   */
  @Field({ nullable: true })
  name: string;
}
