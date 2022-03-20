export interface ListType {
  id: string;
  name: string;
  imageUrl?: string;
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
  Bosses,
}
