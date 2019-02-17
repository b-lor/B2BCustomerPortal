export class Profile {
  _id: string;
  user: any;
  customerNumber: number;
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phone: string;
  street: string;
  city: string;
  state: string;
  zip: string;

  deserialize(data: any): Profile {
    return <Profile>Object.assign(
      {},
      {
        _id: data._id,
        user: data.any,
        customerNumber: data.customerNumber,
        firstName: data.firstName,
        lastName: data.lastName,
        company: data.company,
        email: data.email,
        phone: data.phone,
        street: data.street,
        city: data.city,
        state: data.state,
        zip: data.zip
      }
    );
  }
}
