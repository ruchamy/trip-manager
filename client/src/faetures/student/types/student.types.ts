import type { Class } from "../../class-features/types/class.types";

export type Student = {
    id: number;
    firstName: string;
    lastName: string;
    identityNumber: string;
    class: Class;
};