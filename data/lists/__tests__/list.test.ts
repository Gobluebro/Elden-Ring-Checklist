import { expect, test } from "vitest";
import {
  AchievementsList,
  BossesList,
  GracesList,
  QuestsList,
  UpgradesList,
} from "../index";

// https://stackoverflow.com/a/840808
const findDuplicates = (arr: string[]) => {
  const sorted_arr = arr.slice().sort(); // You can define the comparing function here.
  // JS by default uses a crappy string compare.
  // (we use slice to clone the array so the
  // original array won't be modified)
  const results = [];
  for (let i = 0; i < sorted_arr.length - 1; i++) {
    if (sorted_arr[i + 1] == sorted_arr[i]) {
      results.push(sorted_arr[i]);
    }
  }
  return results;
};

test("List Ids must be unique", () => {
  const allLists = [
    ...AchievementsList,
    ...BossesList,
    ...GracesList,
    ...QuestsList,
    ...UpgradesList,
  ];
  const listTypeIds = allLists.map((listType) => listType.id);
  const requirementsIds = allLists
    .flatMap((listType) => listType.requirements)
    .map((requirement) => requirement.id);
  const allIds = [...listTypeIds, ...requirementsIds];
  expect(new Set(allIds).size).toBe(allIds.length);

  const duplicates = findDuplicates(allIds);
  console.log(duplicates);
  expect(duplicates.length).toBe(0);
});
