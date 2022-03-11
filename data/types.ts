export interface ListType {
  id: number;
  name: string;
  requirements: Array<Requirement>;
}

export interface Requirement {
  id: number;
  description: string;
}

export enum TabNames {
  Quests,
  Achievements,
  Graces,
}
