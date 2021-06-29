import { Warden } from "./warden";

export class Hostel {
    id: number;
    name: string;
    contact: string;
    type: string;
    address: string;
    fee: number;
    // rooms:Rooms[];
    totalFloors: number;
    imgUrl: string;
    wardens: Warden[]
}
