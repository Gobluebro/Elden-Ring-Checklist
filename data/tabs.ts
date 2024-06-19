import {
  AchievementsList,
  BossesList,
  GracesList,
  MiscellaneousList,
  QuestsList,
  FlaskUpgradesList,
  ListType,
  WeaponsList,
  SpellsList,
} from "./lists";

export enum TabNames {
  Default,
  Quests,
  Achievements,
  Graces,
  Bosses,
  FlaskUpgrades,
  Miscellaneous,
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
    name: "Flask Upgrades",
    enum: TabNames.FlaskUpgrades,
    listData: FlaskUpgradesList,
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
    enum: TabNames.Miscellaneous,
    listData: MiscellaneousList,
  },
];
