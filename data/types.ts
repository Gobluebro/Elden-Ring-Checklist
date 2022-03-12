export interface ListType {
  id: string;
  name: string;
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
