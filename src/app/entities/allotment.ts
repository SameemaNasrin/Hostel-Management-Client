import { Hostel } from "./hostel";
import { Room } from "./room";
import { Student } from "./student";

export class Allotment {
    id: number;
    room:Room;
    student:Student;
    hostel:Hostel; 
}
