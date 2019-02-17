export class User {
    _id: string;
    roleId: number;
    email: string;
    password: string;

    // deserialize(data: any): User {
    //     return <User>Object.assign({}, {
    //         _id: data._id,
    //         roleId: data.roleId,
    //         email: data.email,
    //         password: data.password
    //     });
    // }
}
