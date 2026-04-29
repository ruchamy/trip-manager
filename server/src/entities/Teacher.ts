import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Class } from "./Class";
import { IsNotEmpty, IsString, Length, Matches } from "class-validator";

@Entity()
export class Teacher {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    @IsString()
    @IsNotEmpty()
    firstName!: string;

    @Column()
    @IsString()
    @IsNotEmpty()
    lastName!: string;

    @Column({ unique: true })
    @IsString()
    @IsNotEmpty()
    @Length(9, 9, { message: "Identity number must be exactly 9 characters long" })
    @Matches(/^\d+$/, { message: "Identity number must contain only digits" })
    identityNumber!: string;

    @ManyToOne(() => Class, classEntity => classEntity.teachers, { eager: true })
    class!: Class;
}