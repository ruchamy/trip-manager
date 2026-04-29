import type { Class } from "../../class-features/types/class.types";

export type Teacher = {
    id: number;
    identityNumber: string;
    firstName: string;
    lastName: string;
    class: Class;
};