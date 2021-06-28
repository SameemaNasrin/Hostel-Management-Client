import { Allotment } from "./allotment";
import { Student } from "./student";

export class Feestructure {
    id:number;
    paymentDate:string;
    paymentStatus:string;
    totalFees:number;
    allotment:Allotment;
    student:Student;
}
