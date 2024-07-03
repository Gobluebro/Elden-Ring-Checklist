import {
  AchievementsList,
  BossesList,
  GracesList,
  CollectablesList,
  QuestsList,
  UpgradesList,
  ListType,
  WeaponsList,
  SpellsList,
} from "./lists";

export enum TabNames {
  Quests,
  Achievements,
  Graces,
  Bosses,
  Upgrades,
  Collectables,
  Weapons,
  Spells,
}

export interface TabData {
  id: number;
  name: string;
  enum: TabNames;
  listData: ListType[];
}

export const MainTabDataArray: TabData[] = [
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
    name: "Upgrades",
    enum: TabNames.Upgrades,
    listData: UpgradesList,
  },
];

export const PersonalTabDataArray: TabData[] = [
  {
    id: 6,
    name: "Weapons",
    enum: TabNames.Weapons,
    listData: WeaponsList,
  },
  {
    id: 7,
    name: "Spells",
    enum: TabNames.Spells,
    listData: SpellsList,
  },
  {
    id: 8,
    name: "Collectables",
    enum: TabNames.Collectables,
    listData: CollectablesList,
  },
];
