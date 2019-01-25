export class User {
    profile: any;
    roleId: number;
    userType: string;
    salesCode: number;
    customerNumber: number;
    email: string;

    deserialize(data: any): User {
        return <User>Object.assign({}, {
            profile: data.profile,
            roleId: data.profile,
            userType: data.profile,
            salesCode: data.profile,
            customerNumber: data.profile,
            email: data.profile,

        });
    }
}