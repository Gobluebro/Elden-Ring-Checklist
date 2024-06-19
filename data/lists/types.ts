export interface ListType {
  id: string;
  name: string;
  url?: string;
  imageUrl?: string;
  imageAlt?: string;
  requirements: Array<Requirement>;
  isDLC?: boolean;
}

export interface Requirement {
  id: string;
  description: string; // rawHTML
  isDLC?: boolean;
}

export interface KeyBooleanValuePair {
  [key: string]: boolean;
}
