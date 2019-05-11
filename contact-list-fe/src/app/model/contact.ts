export class Contact {
  id: number;
  firstname: string;
  lastname: string;
  gender: string = 'MALE';
  email?: string;
  phone: string;
  dob?: string;
  picture?: string = '/assets/images/profile.png';
  city?: string;
  state?: string;
  country?: string;
}
