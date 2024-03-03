export interface ListType {
  id: string;
  name: string;
  url?: string;
  imageUrl?: string;
  imageAlt?: string;
  requirements: Array<Requirement>;
}

export interface Requirement {
  id: string;
  description: string; // rawHTML
}

export interface KeyBooleanValuePair {
  [key: string]: boolean;
}
