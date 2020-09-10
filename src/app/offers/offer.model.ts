export interface Offer {
  _id: string;
  name: string;
  slug: string;
  description: string;
  salaryMin: number;
  salaryMax: number;
  experienceLevel: 'Intern' | 'Junior' | 'Min' | 'Senior' | 'Expert';
  mustHave: string[];
  niceToHave: string[];
  category: string;
  city: string;
  postCode: string;
  street: string;
  streetNumber: string;
  isRemote: boolean;
  createdAt: Date;
  company: {
    _id: string;
    logo: string;
    name: string;
    companySize: string;
  };
}
