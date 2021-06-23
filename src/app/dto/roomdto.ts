import { Hostel } from "./hostel";

export class Roomdto {
    roomId: number;
    roomNo: string;
    hostel: Hostel;
    roomDesc: string;
    floor: number;
    maxSize: number=4;
}
