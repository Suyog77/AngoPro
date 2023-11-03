export interface IUser {
    id: Number;
    name: String;
    address: {
        street:string;
        zipcode:string;
    };
    phone: String;
}