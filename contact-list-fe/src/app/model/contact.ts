export class Contact {
  id: number;
  firstname: string;
  lastname: string;
  gender: string = 'MALE';
  email?: string;
  phone: string;
  dob?: string;
  image?: string = 'https://svl-static.s3.eu-central-1.amazonaws.com/profile.png';
  city?: string;
  state?: string;
  country?: string;
}
