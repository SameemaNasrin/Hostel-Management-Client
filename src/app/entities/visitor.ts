import { Hostel } from "./hostel";
import { Student } from "./student";

export class Visitor {
    id: number;
    visitorName: string;
    contactNumber: number;
    student: Student;
    studentRelation: string;
    visitorAddress: string;
    dateOfVisiting: string;
    reason: string;
    hostel: Hostel;
}
