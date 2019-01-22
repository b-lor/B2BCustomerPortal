export class User {
    _id: string;
    roleId: number;
    userType: string;
    salesCode: number;
    customerNumber: string;
    email: string;
    password: string;

    deserialize(data: any): User {
        return <User>Object.assign({}, {
            _id: data._id,
            roleId: data.roleId,
            userType: data.userType,
            salesCode: data.salesCode,
            customerNumber: data.customerNumber,
            email: data.email,
            password: data.password
        });
    }
}
