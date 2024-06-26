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
    name: "Misiones",
    enum: TabNames.Quests,
    listData: QuestsList,
  },
  {
    id: 2,
    name: "Logros",
    enum: TabNames.Achievements,
    listData: AchievementsList,
  },
  {
    id: 3,
    name: "Gracias",
    enum: TabNames.Graces,
    listData: GracesList,
  },
  {
    id: 4,
    name: "Jefes",
    enum: TabNames.Bosses,
    listData: BossesList,
  },
  {
    id: 5,
    name: "Mejoras del Frasco",
    enum: TabNames.FlaskUpgrades,
    listData: FlaskUpgradesList,
  },
];

export const PersonalTabDataArray: TabData[] = [
  {
    id: 6,
    name: "Armas",
    enum: TabNames.Weapons,
    listData: WeaponsList,
  },
  {
    id: 7,
    name: "Hechizos",
    enum: TabNames.Spells,
    listData: SpellsList,
  },
  {
    id: 8,
    name: "Otros",
    enum: TabNames.Miscellaneous,
    listData: MiscellaneousList,
  },
];
