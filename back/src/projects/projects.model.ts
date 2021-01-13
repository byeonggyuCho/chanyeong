import { Column, Model, Table, DataType } from 'sequelize-typescript';
import { ObjectType, Field, registerEnumType, Int } from '@nestjs/graphql';

export enum ProjectType {
  PERSONAL,
  GROUP,
}

registerEnumType(ProjectType, { name: 'ProjectType' });

@ObjectType()
@Table({
  tableName: 'project',
  modelName: 'Project',
  timestamps: true,
  charset: 'utf8mb4',
  collate: 'utf8mb4_general_ci',
})
export class Project extends Model<Project> {
  @Field((type) => Int)
  @Column({ primaryKey: true })
  readonly id!: number;

  @Field((type) => ProjectType)
  @Column({ type: DataType.ENUM('PERSONAL', 'GROUP') })
  type!: ProjectType;

  @Field((type) => String, { nullable: true })
  @Column({ type: DataType.STRING(30), allowNull: true })
  groupName?: string;

  @Field((type) => String)
  @Column({ type: DataType.STRING(50) })
  title!: string;

  @Field((type) => String)
  @Column({ type: DataType.TEXT })
  description!: string;

  @Field((type) => String)
  @Column({ type: DataType.TEXT })
  content!: string;

  @Field((type) => String)
  @Column({ type: DataType.DATEONLY })
  startDate!: string;

  @Field((type) => String, { nullable: true })
  @Column({ type: DataType.DATEONLY, allowNull: true })
  endDate?: string;

  @Field((type) => String, { nullable: true })
  @Column({ type: DataType.STRING(200), allowNull: true })
  githubAddr?: string;

  @Field((type) => String, { nullable: true })
  @Column({ type: DataType.STRING(200), allowNull: true })
  titleImage?: string;

  @Field((type) => Int, { nullable: true })
  @Column({ type: DataType.INTEGER, allowNull: true })
  contribution?: number;

  @Field((type) => Date, { nullable: true })
  @Column({ type: DataType.DATE, allowNull: true })
  picked?: Date;

  @Field((type) => Date)
  @Column({ type: DataType.DATE })
  createdAt!: Date;

  @Field((type) => Date)
  @Column({ type: DataType.DATE })
  updatedAt!: Date;
}