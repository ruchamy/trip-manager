import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Class } from "./Class";
import { IsNotEmpty, IsString, Length, Matches } from "class-validator";

@Entity()
export class Student {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    @IsNotEmpty()
    @IsString()
    firstName!: string;

    @Column()
    @IsNotEmpty()
    @IsString()
    lastName!: string;

    @Column({ unique: true })
    @IsNotEmpty()
    @IsString()
    @Length(9, 9, { message: "Identity number must be exactly 9 characters long" })
    @Matches(/^\d+$/, { message: "Identity number must contain only digits" })
    identityNumber!: string;

    @ManyToOne(() => Class, classEntity => classEntity.students, { eager: true })
    class!: Class;
}