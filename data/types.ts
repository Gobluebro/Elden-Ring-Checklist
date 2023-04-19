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
  description: string;
  url?: string;
  mapLink?: string;
}

export enum TabNames {
  Quests,
  Achievements,
  Graces,
  Bosses,
  "Golden Seeds",
  Misc,
}

export interface KeyBooleanValuePair {
  [key: string]: boolean;
}
