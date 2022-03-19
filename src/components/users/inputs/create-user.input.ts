import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  /**
   * email {string}
   */
  @Field()
  email: string;

  /**
   * name {string}
   */
  @Field({ nullable: true })
  name: string;
}
