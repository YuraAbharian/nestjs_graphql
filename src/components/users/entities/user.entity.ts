import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity('users')
export class UserEntity {
  /**
   * id {ID}
   */
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * createdAt {Date}
   */
  @Field()
  @CreateDateColumn()
  createdAt: Date;

  /**
   * updatedAt {Date}
   */
  @Field()
  @UpdateDateColumn()
  updatedAt: Date;

  /**
   * email {string}
   */
  @Field()
  @Column()
  email: string;

  /**
   * name {string}
   */
  @Field({ nullable: true })
  @Column({ nullable: true })
  name: string;
}
