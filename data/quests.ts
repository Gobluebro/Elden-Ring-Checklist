export interface QuestType {
  id: number;
  name: string;
  requirements: Array<QuestType>;
}

export const Quests = [{}];
