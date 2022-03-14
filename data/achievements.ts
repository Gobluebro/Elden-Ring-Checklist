import { ListType } from "./types";
import ashes from "../public/achievements/ashes_30x30.jpg";
import talismans from "../public/achievements/talismans_30x30.jpg";
import sorcAndIncan from "../public/achievements/sorceries_and_incantations_30x30.jpg";
import armaments from "../public/achievements/armaments_30x30.jpg";

export const Achievements: Array<ListType> = [
  {
    id: "d62c2c4c-cc27-469b-87d2-0f1d96f915b0",
    name: "Legendary Ashen Remains",
    imageUrl: ashes,
    imageAlt: "Legendary Ashen Remains Achievement",
    requirements: [
      {
        id: "12a5ed50-53b8-491d-b348-56169ea60d1c",
        description: "Lhutel the Headless",
      },
      {
        id: "0782e771-52b2-447e-a174-b08ff1981cef",
        description: "Ancient Dragon Knight Kristoff",
      },
      {
        id: "f7b9aad4-d39a-425e-a58e-e25bbc310f84",
        description: "Black Knife Tiche",
      },
      {
        id: "285aba4b-7ced-4fbc-ace2-859ebd57c4b8",
        description: "Mimic Tear Ashes",
      },
      {
        id: "5612a3a9-6ed1-4337-9426-d41733b83212",
        description: "Redmane Knight Ogha",
      },
      {
        id: "415da615-f877-4823-aaef-9be7df965876",
        description: "Cleanrot Knight Finlay",
      },
    ],
  },
  {
    id: "1eed9ac3-6ca8-4c38-88d0-e0e8b441678c",
    name: "Legendary Talismans",
    imageUrl: talismans,
    imageAlt: "Legendary Talismans Achievement",
    requirements: [
      {
        id: "11ddcd50-99a9-4bb3-b5ad-1dcede078951",
        description: "Radagon Icon",
      },
      {
        id: "ae65334a-5ed2-47b6-9920-0eedc52d017c",
        description: "Radagon's Soreseal",
      },
      {
        id: "7079c109-3bb2-4063-9c0d-f68f5e4be09c",
        description: "Godfrey Icon",
      },
      {
        id: "a61a4200-1fbc-42e9-bbd2-0029ed0c46f2",
        description: "Moon of Nokstella",
      },
      {
        id: "cda06299-9016-4e16-b978-3113f73a92fb",
        description: "Dragoncrest Greatshield Talisman",
      },
      {
        id: "d767aac1-27b3-49f5-949b-68aa12869ead",
        description: "Marika's Soreseal",
      },
      {
        id: "3a6e87ec-7891-4adf-87b2-517edbdd9495",
        description: "Old Lord's Talisman",
      },
      {
        id: "8815eb72-fd77-47d7-9638-33531903b745",
        description: "Erdtree's Favor +2",
      },
    ],
  },
  {
    id: "ae1cc1fe-67c6-4630-9a6d-469e4311e25e",
    name: "Legendary Sorceries and Incantations",
    imageUrl: sorcAndIncan,
    imageAlt: "Legendary Sorceries and Incantations Achievement",
    requirements: [
      {
        id: "2be2eeec-1b01-4276-8ddd-04a35345e077",
        description: "Flame of the Fell God",
      },
      {
        id: "dfaff523-ffc5-496c-921c-1880516245bb",
        description: "Founding Rain of Stars",
      },
      {
        id: "12767f63-5dd7-4950-9587-269df266b873",
        description: "Elden Stars",
      },
      {
        id: "c0cc2b26-920c-440a-b71c-c3d3340f2710",
        description: "Ranni's Dark Moon",
      },
      {
        id: "c5a63b48-d748-4ecb-914b-bdbbbf69d779",
        description: "Comet Azur",
      },
      {
        id: "a102a76b-b685-4573-b147-71815eea3047",
        description: "Stars of Ruin",
      },
      {
        id: "02a9b689-b75a-49e6-91b3-066d1aeed8e0",
        description: "Greyoll's Roar",
      },
    ],
  },
  {
    id: "d92078bb-2544-45f9-aabf-3be911f65f32",
    name: "Legendary Armaments",
    imageUrl: armaments,
    imageAlt: "Legendary Armaments Achievement",
    requirements: [
      {
        id: "60d7351a-8977-4ed9-9276-0b4dd00f7428",
        description: "Grafted Blade Greatsword",
      },
      {
        id: "ad87f7e7-7658-4a01-9a29-e24097027372",
        description: "Marais Executioner's Sword",
      },
      {
        id: "48886187-b47f-4c3c-878b-3d6ce3dd0cf4",
        description: "Eclipse Shotel",
      },
      {
        id: "3ca7f934-5d8e-4eb7-ba05-9a6978263709",
        description: "Sword of Night and Flame",
      },
      {
        id: "fe5cf178-8c78-4dab-a863-2af73fc1fb65",
        description: "Devourer's Scepter",
      },
      {
        id: "8b73338e-7aab-47f4-9c71-69de9fd9bfa2",
        description: "Golden Order Greatsword",
      },
      {
        id: "34388927-e9cd-4fa2-a08f-37558f62b52c",
        description: "Ruins Greatsword",
      },
      {
        id: "d5ac25e3-83f1-4877-ad85-ca9ce4aa0daa",
        description: "Bolt of Gransax",
      },
      {
        id: "5c90de04-315a-4591-82c1-786107defa55",
        description: "Dark Moon Greatsword",
      },
    ],
  },
];
