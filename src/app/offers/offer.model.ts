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
  address: string;
  isRemote: boolean;
  createdAt: Date;
  company: {
    _id: string;
    logo: string;
    name: string;
  };
}
