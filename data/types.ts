export interface ListType {
  id: string;
  name: string;
  imageUrl?: StaticImageData;
  imageAlt?: string;
  requirements: Array<Requirement>;
}

export interface Requirement {
  id: string;
  description: string;
}

export enum TabNames {
  Quests,
  Achievements,
  Graces,
}
