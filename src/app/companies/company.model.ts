export interface Company {
  _id?: string;
  __v?: string;
  name: string;
  email: string;
  slug: string;
  description: string;
  website: string;
  foundedIn: number;
  technologies: string[];
  createdAt?: Date;
  companySize: number;
  facebookLink?: string;
  instagramLink?: string;
  linkedinLink?: string;
  logo?: string;
  logoUrl?: string;
  user?: string;
  city: string;
  postCode: string;
  street: string;
  streetNumber: string;
}
