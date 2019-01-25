export class User {
    _id: string;
    profile: any;
    roleId: number;
    userType: string;
    salesCode: number;
    customerNumber: number;
    email: string;

    deserialize(data: any): User {
        return <User>Object.assign({}, {
            _id: data._id,
            profile: data.profile,
            roleId: data.profile,
            userType: data.profile,
            salesCode: data.profile,
            customerNumber: data.profile,
            email: data.profile,

        });
    }
}