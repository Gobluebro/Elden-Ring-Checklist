import {
  AchievementsList,
  BossesList,
  GracesList,
  MiscellaneousList,
  QuestsList,
  GoldenSeedsList,
  ListType,
  WeaponsList,
} from "./lists";

export enum TabNames {
  Quests,
  Achievements,
  Graces,
  Bosses,
  GoldenSeeds,
  Miscellaneous,
  Weapons,
}

export interface TabData {
  id: number;
  name: string;
  enum: TabNames;
  listData: ListType[];
}

export const TabDataArray: TabData[] = [
  {
    id: 1,
    name: "Quests",
    enum: TabNames.Quests,
    listData: QuestsList,
  },
  {
    id: 2,
    name: "Achievements",
    enum: TabNames.Achievements,
    listData: AchievementsList,
  },
  {
    id: 3,
    name: "Graces",
    enum: TabNames.Graces,
    listData: GracesList,
  },
  {
    id: 4,
    name: "Bosses",
    enum: TabNames.Bosses,
    listData: BossesList,
  },
  {
    id: 5,
    name: "Golden Seeds",
    enum: TabNames.GoldenSeeds,
    listData: GoldenSeedsList,
  },
  {
    id: 6,
    name: "Weapons",
    enum: TabNames.Weapons,
    listData: WeaponsList,
  },
  {
    id: 7,
    name: "Misc",
    enum: TabNames.Miscellaneous,
    listData: MiscellaneousList,
  },
];
