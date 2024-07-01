
export interface Sector {
  // id: number;
  name: string;
  children?: Sector[];
  category: string[];
  field: string[];
  subCategory: string[];
  division: string[];
  subDivision: string[];
}

