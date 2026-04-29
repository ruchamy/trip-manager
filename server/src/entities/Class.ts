import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Teacher } from "./Teacher";
import { Student } from "./Student";

@Entity()
export class Class {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  name!: string;

  @OneToMany(() => Teacher, teacher => teacher.class)
  teachers!: Teacher[];

  @OneToMany(() => Student, student => student.class)
  students! : Student[];
}