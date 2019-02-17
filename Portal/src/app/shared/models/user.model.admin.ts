export class UserModel {
  _id: string;
  profile: any;
  roleId: number;
  userType: string;
  salesCode: number;
  customerNumber: number;
  department: string;
  email: string;
  password: string;

  deserialize(data: any): UserModel {
    return <UserModel>Object.assign(
      {},
      {
        _id: data._id,
        profile: data.profile,
        roleId: data.roleId,
        userType: data.userType,
        salesCode: data.salesCode,
        customerNumber: data.customerNumber,
        department: data.department,
        email: data.email,
        password: data.password
      }
    );
  }
}
