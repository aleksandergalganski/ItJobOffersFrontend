export interface Offer {
  _id?: string;
  __v?: string;
  name: string;
  slug: string;
  description: string;
  salaryMin: number;
  salaryMax: number;
  experienceLevel: 'Intern' | 'Junior' | 'Min' | 'Senior' | 'Expert';
  mustHave: string[];
  niceToHave: string[];
  category: string;
  isRemote: boolean;
  city?: string;
  postCode?: string;
  street?: string;
  streetNumber?: string;
  createdAt?: Date;
  company:
    | {
        _id: string;
        logo: string;
        name: string;
        companySize: string;
        description: string;
      }
    | string;
}
