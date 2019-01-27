export class User {
    _id: string;
    profile: any;
    roleId: number;
    userType: string;
    salesCode: number;
    customerNumber: number;
    email: string;
    password: string;

    deserialize(data: any): User {
        return <User>Object.assign({}, {
            _id: data._id,
            profile: data.profile,
            roleId: data.roleId,
            userType: data.userType,
            salesCode: data.salesCode,
            customerNumber: data.customerNumber,
            email: data.email,
            password: data.password

        });
    }
}