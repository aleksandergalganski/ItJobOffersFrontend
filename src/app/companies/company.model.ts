export interface Company {
  _id: string;
  name: string;
  slug: string;
  description: string;
  website: string;
  mainLocation: string;
  foundedIn: number;
  address: string;
  technologies: string[];
  email: string;
  createdAt: Date;
  companySize: number;
  facebookLink?: string;
  instagramLink?: string;
  linkedinLink?: string;
  logo: string;
}
