import { ListType } from "./types";

export const Quests: Array<ListType> = [
  /* TEMPLATE     
  {
    id: "", // Can be left blank to be filled later
    name: "", // Name of the NPC/ending
    requirements: [
      {
        id: "", // Can be left blank to be filled later
        // Short sentence in brief describing necessary actions with few details
        // Acceptable details:
        // - Nearby Site of Grace, or Map Section
        // - Necessary bosses and items
        // - Dialog options
        description: ""
      },
    ]
  },
  */
  {
    id: "1f28d880-77dd-487c-a056-60b6fbf6df20",
    name: "White Mask Varré",
    requirements: [
      {
        id: "b049cb65-103b-4811-b218-1bd13ffdd9e5",
        description: "Talk to Varré near The First Step grace.",
      },
      {
        id: "110084c1-17d9-47b6-9d68-c18d3d9cf919",
        description: "Defeat Margit, The Fell Omen.",
      },
      {
        id: "6609a0e2-ffbf-4fce-a037-07c34324315b",
        description: "Gain access to the Roundtable Hold.",
      },
      {
        id: "05cdc691-f29a-4425-977c-efa190d5a58a",
        description:
          "Talk to him at the Rose Church in Liurnia of the Lakes until you receive the Festering Bloody Finger.",
      },
      {
        id: "ba4a2aad-af54-4b99-b2ca-b0822e4baabc",
        description: "Use the Festering Bloody Finger three times.",
      },
      {
        id: "ebc0c68e-f8ca-4ee9-b601-98407c0a23fd",
        description: `Talk to Varré again at the Rose Church. Select the "Anoint me" dialogue option.`,
      },
      {
        id: "556ed60d-fbfa-4e2d-821f-2c27aa1807df",
        description:
          "Interact with a dead maidan at the Church of Inhibition or the Chapel of Anticipation.",
      },
      {
        id: "e736a54e-de8d-4c3a-a5ec-773f856de291",
        description:
          "Talk to Varré again at the Rose Church. Receive the Pureblood Knight's Medal.",
      },
      {
        id: "8175719c-3399-4458-b7d9-4672ba16ff74",
        description:
          "Use the Pureblood Knight's Medal to teleport to Mohgwyn Palace.",
      },
      {
        id: "47c91057-b5c3-4de9-a29d-21fc55d2e96d",
        description:
          "Defeat the Nameless White Mask invader twice in the swamp area of Mohgwyn Palace.",
      },
      {
        id: "2f9915fc-b6db-4b5f-98fe-db9eaf445e16",
        description:
          "Invade White Mask Varré's world near the Dynasty Mausoleum Midpoint grace.",
      },
      {
        id: "7bcf1573-ede1-41ed-be2d-15a39cd87249",
        description:
          "Talk to Varré who is crawling on the ground until he dies.",
      },
    ],
  },
  {
    id: "7e02c667-b3fe-4250-8ec9-aa2932332be6",
    name: "Bloody Finger Hunter Yura",
    requirements: [
      {
        id: "b88c9d9c-f7a6-4687-87b9-cdb09329878a",
        description:
          "Talk to Yura under a broken bridge near the Agheel Lake South grace.",
      },
      {
        id: "730aef5f-7253-49f2-835f-1cdfbdc6779b",
        description: "Defeat Flying Dragon Agheel in Agheel Lake.",
      },
      {
        id: "33f30975-d865-4dad-aa5e-459c97287b43",
        description: "Talk to Yura again under the broken bridge.",
      },
      {
        id: "10752ce8-a6c1-48a0-9ee6-5bb971bf12e5",
        description: "Defeat Bloody Finger Nerijus near Murkwater cave.",
      },
      {
        id: "e5c448e3-bb98-403f-a7c4-90c55c0bf801",
        description: "Talk to Yura north of Murkwater cave.",
      },
      {
        id: "58e8774c-4fb2-43c8-89ed-ff1c747f7f12",
        description:
          "Assist Yura in defeating Bloody Finger Ravenmount Assassin north of the Main Academy Gate grace.",
      },
      {
        id: "2b52c8d6-8cde-4eca-9260-7c7e1419c7c6",
        description:
          "Talk to Yura at the Second Church of Marika and receive the Nagakiba. Defeat Eleonora, Violet Bloody Finger.",
      },
      {
        id: "1cf9776b-4d22-42dd-b257-681b75fbb98c",
        description:
          "Talk to Yura who is now Shabriri at the Zamor Ruins grace.",
      },
      {
        id: "b0bf18e5-2b08-4261-9239-6013d9c84606",
        description:
          "Receive the Ronin's Set by defeating Shabriri or by accepting the frenzied flame from the Three Fingers and going back to Zamor Ruins grace.",
      },
    ],
  },
  {
    id: "75870d4b-4606-4012-b933-39e571cdb22d",
    name: "Blaidd",
    // note if you have completed Forlon Hound Evergaol before then Blaidd will be standing outside of it.
    requirements: [
      {
        id: "6eb3b171-9a14-43f0-a434-7de8633cf748",
        description: "Go to the Mistwood Ruins and listen for a wolf howl.",
      },
      {
        id: "9ee425bb-e98f-4917-99ff-b212247bab4a",
        description: `Talk to Merchant Kalé "About the howling in Mistwood" at the Church of Elleh grace. You will receive the Finger Snap gesture.`,
      },
      {
        id: "64325ac7-8ca9-44bb-8cdf-f6f9dad9de26",
        description:
          "Go back to the Mistwood Ruins and use the Finger Snap gesture. Once Blaidd has jumped down, talk to him.",
      },
      {
        id: "0bbdee7e-b298-4055-a6da-15eae4f7417b",
        description:
          "Enter the Forlorn Hound Evergaol and summon Blaidd. Defeat Bloodhound Knight Darriwil.",
      },
      {
        id: "54ae9277-0f1b-433d-ad12-85cb55f9f1fc",
        description: "Talk to Blaidd and exhaust his dialogue.",
      },
      {
        id: "4293c04f-e9fe-4a05-bd7e-938dd61cc36e",
        description: `Talk to Smithing Master Iji and exhaust his dialogue until you are able to select "Blaidd sent me". You may now purchase the Carian Filigreed Crest talisman.`,
      },
    ],
  },
  {
    id: "9731bfcb-bbde-4064-ac66-a28fa769f1ca",
    name: "Kenneth Haight",
    requirements: [
      {
        id: "fa323288-a38a-4538-99f6-eabfbcfa6b2e",
        description:
          "Talk to Kenneth on top of a fallen structure in between the Mistwood Outskirts grace and the Third Church of Marika grace.",
      },
      {
        id: "f63af61a-9518-46e3-b729-55a8629a16db",
        description: "Clear out enemies in Fort Haight in West Limgrave.",
      },
      {
        id: "64664736-fcbc-4f57-99f9-f0c594b31146",
        description: `Talk to Kenneth at his first location until he asks you to enter his service. Select the "Pledge service" dialogue option.`,
      },
      {
        id: "fd4d006f-6d1b-490f-9f89-36e35d745bfa",
        description: "Talk to Kenneth at Fort Haight.",
      },
      {
        id: "61b02aa4-4c15-4f31-b996-1705e75f02f3",
        description: "Defeat Morgott, The Omen King.",
      },
      {
        id: "988eb290-0852-4abc-8f62-34ad43bf5841",
        description:
          "Once you have completed Nepheli's questline, talk to Kenneth at the Stormveil Castle throne room near the Godrick the Grafted grace.",
      },
    ],
  },
  {
    id: "3c574a2d-a2fe-44dd-9255-fd801b6bc9f9",
    name: "Nepheli Loux",
    requirements: [
      {
        id: "5237d6c8-786d-4cf4-9523-68214804005d",
        description:
          "Meet Nepheli Loux in Stormveil Castle near the troll guarding Godrick's encounter.",
      },
      {
        id: "0b092d4c-ad94-4aa2-ae1e-6ea7678d7fec",
        description: "Defeat Godrick the Grafted.",
      },
      {
        id: "b730544e-45bc-4662-b231-b4686bfb2c8f",
        description:
          "Talk to Nepheli at Roundtable Hold grace. Receive the Arsenal Talisman.",
      },
      {
        id: "98922708-bec7-4ad4-9eb8-6aca1d32ef64",
        description:
          "(Optional) Talk to Seluvis and receive a Potion for Nepheli. Requires Ranni's quest.",
      },
      {
        id: "97fc37cf-4bfb-409b-8847-273cf81f6d05",
        description:
          "Meet Nepheli under the bridge at the Village of the Albinaurics.",
      },
      {
        id: "f2aa0dad-6659-4747-ae60-344f2e65096e",
        description: "Defeat Omenkiller at the Village.",
      },
      {
        id: "0fbf9cc1-ddc0-4b06-bd3e-401f9251833c",
        description: "Talk to Nepheli at the Roundtable Hold grace.",
      },
      {
        id: "dd587b56-b82d-418d-aba8-ce61d7bc415f",
        description:
          "Visit the Four Belfries in West Liurnia, and teleport to the Precipice of Anticipation (Requires 1 Imbued Stonesword Key).",
      },
      {
        id: "5ca88bbe-f725-4bf4-be37-6b3811f301f6",
        description: "Defeat the Grafted Scion.",
      },
      {
        id: "d1f8fe5e-5738-44ae-bc3a-22abb6dbf287",
        description:
          "Explore the Church of Anticipation, and find The Stormhawk King.",
      },
      {
        id: "8e0bf773-1f5f-403e-81f3-9fbafd012075",
        description: "Defeat Morgott, The Omen King.",
      },
      // TODO: add notes to as optional parameter to lists.
      // TODO: add note saying to not give the potion to Nepheli.
      // {
      //   id: "ca869a5e-4d1d-4a1a-b5be-a3d06075ced5",
      //   description:
      //     "(Choice) Give Nepheli the Potion from Seluvis or the Ashes (at Roundtable Hold).",
      // },
      {
        id: "a92b8990-e658-494a-982c-76165380ac63",
        description:
          "Talk to Nepheli at the Stormveil Castle throne room near the Godrick the Grafted grace.",
      },
    ],
  },
  {
    id: "5bcdbf66-3270-4af8-9c76-2d6e646d20cb",
    name: "Roderika (Spirit-Tuner)",
    requirements: [
      {
        id: "e92cafa4-53d7-4437-bd5e-204509437a5d",
        description: "Talk to Roderika at the Stormhill Shack grace.",
      },
      {
        id: "34a13bf4-8d2e-4994-a538-8683cd9ad8b8",
        description: "Get the Chrysalids' Memento in Stormveil Castle.",
      },
      {
        id: "7728b8f4-523d-4f25-acc4-81c6e6417c74",
        description:
          "Give the Chrysalids' Memento to Roderika at the Stormhill Shack grace.",
      },
      {
        id: "8c2f98ae-6920-4591-b333-e751654d4599",
        description: "Talk to Roderika at the Roundtable Hold grace.",
      },
      {
        id: "d3017b33-feb2-497c-b3aa-959c5ab24aaa",
        description: "Talk Hewg about Roderika at the Roundtable Hold grace.",
      },
      {
        id: "9d56441a-99fd-47ff-ac33-d207b870d4b6",
        description: `Talk Roderika again and select the "Tell her what the blacksmith said" dialogue option.`,
      },
      {
        id: "a6379139-f751-49da-a39f-b69d438152fc",
        description: `Talk Hewg about Roderika again. Select the "It's what she wants" dialogue option.`,
      },
      {
        id: "f58558ed-627a-4b10-9465-2b1ee0b70e0f",
        description:
          "Travel to the Roundtable Hold grace again and she will be your spirit tuner.",
      },
      {
        id: "f08ac60a-361b-49cd-bb90-4694c0f3380c",
        description:
          "Return the location that you got the Chrysalids' Memento and you will receive the Crimson Hood.",
      },
    ],
  },
  {
    id: "92e082f1-8051-45a4-b200-29312b8d127c",
    name: "Sorceress Sellen",
    requirements: [
      {
        id: "2ab188e3-bde1-4ef0-a370-a6c8200962e2",
        description: `Talk to Sellen at the Waypoint Ruins Cellar grace and select the "I want to learn sorcery" dialogue option.`,
      },
      {
        id: "616ed6af-b9f3-4221-a0a6-6794fb05fdf2",
        description: "Find the Academy Scroll and give it to Sellen.",
      },
      {
        id: "e7d4f697-0b29-42df-8c91-a4d6f6cdb013",
        description: "Find the Royal House Scroll and give it to Sellen.",
      },
      {
        id: "14765659-9b09-469c-90a5-db063881894f",
        description: "Find the Conspectus Scroll and give it to Sellen.",
      },
      {
        id: "c5a10978-9a21-4ff9-b694-5870ada89448",
        description:
          "Get the Comet Azur spell at the Primeval Sorcerer Azur grace.",
      },
      {
        id: "9f1f9f36-b74d-4b06-8eaf-b01ca661da0c",
        description:
          "Talk to Sellen at the Waypoint Ruins Cellar grace and accept her quest. You will receive the Sellian Sealbreaker key.",
      },
      {
        id: "1b780037-5750-4a4c-a2ba-a43adeeab76d",
        description:
          "Find Lusat near the Fort Faroth grace and get the Stars of Ruin spell",
      },
      {
        id: "e9846b5d-3f41-47e4-aa12-36d99c40e2af",
        description:
          "Talk to Sellen at the Waypoint Ruins Cellar grace about her request and about Lusat's location.",
      },
      {
        id: "092a68fc-f94b-4bcc-83b7-b32fdf95f60e",
        description:
          "Talk to Sellen in the Witchbane Ruins where she is shackled. This is near the Fourth Church of Marika grace. You will receive Sellen's Primal Glintstone.",
      },
      {
        id: "84a4d926-1cc5-46f3-a176-9699af034b8d",
        description: "Talk to Sellen near the Ranni's Rise grace.",
      },
      {
        id: "b8fd1fc9-a2a3-4251-8829-5486c1092b10",
        description:
          "Talk to Radahn's herald after defeating Radahn in the chapel near the Chamber Outside the Plaza grace.",
      },
      {
        id: "76ca7b65-8630-4ca7-ab42-0b60f7b7b26f",
        description:
          "Talk to Radahn's herald at the Witchbane Ruins where Sellen's dead body is shackled.",
      },
      {
        id: "065bb415-b30b-42ae-9a81-09aed46b4732",
        description:
          "Assist or challenge Sellen near the Raya Lucaria Grand Library grace.",
      },
      {
        id: "7001d187-4ca7-4aac-ba11-b9afe17e7759",
        description:
          "Return to Azur's body near the Primeval Sorcerer Azur grace to get the Azur's Glintstone clothing set.",
      },
      {
        id: "763fc9ac-1f5b-4554-8d4b-62472353a6d8",
        description:
          "Return to Lusat's body near the Sellia Hideaway grace to get the Lusat's clothing set",
      },
    ],
  },
  {
    id: "454972b3-6194-4eae-9f7e-3abaee7c96e7",
    name: "Gowry + Millicent",
    requirements: [
      {
        id: "3812e34e-b1aa-450b-ab43-90f8b0179d6c",
        description: "Talk to Gowry at Gowry's Shack",
      },
      {
        id: "de1f1d01-a0b0-4c0f-b8e8-80163ea1a32d",
        description: "Defeat Millicent Invasion (Optional?)",
      },
      {
        id: "2ab12632-be80-490d-8080-aad2da25616e",
        description:
          "Defeat Commander O'Neil and get the Unalloyed Gold Needle.",
      },
      {
        id: "d5e162a5-d688-4a06-a1ed-a7f465bca078",
        description: "Take the Unalloyed Gold Needle to Gowry.",
      },
      {
        id: "d50a3093-f569-42a6-b514-dbdc3e8e73eb",
        description:
          "Return to Gowry's Shack again or save and reload the game and talk to Gowry to receive the repaired Unalloyed Gold Needle.",
      },
      {
        id: "48c780eb-858a-483c-81ec-a5a6f377ea8e",
        description: `Talk to Millicent at the Church of the Plague. Select the "Give an Unalloyed Gold Needle" dialogue option.`,
      },
      {
        id: "311f42c6-e1fd-4528-a19e-a6efc859f4e7",
        description:
          "Rest at the grace and talk to Millicent again. You will receive the Prosthesis-Wearer Heirloom.",
      },
      {
        id: "e6f8a602-e152-4ab5-986d-e8c0e766e5e6",
        description: "Talk to Millicent at Gowry's Shack.",
      },
      {
        id: "b36080f1-f85a-4cfd-b770-58831938f594",
        description:
          "Return to Gowry's Shack again or save and reload the game and talk to Gowry.",
      },
      {
        id: "16c07548-c53d-4a26-be8a-ca6b00ce1a96",
        description: "Talk to Millicent near the Erdtree Grazing Hill grace.",
      },
      {
        id: "68667ffc-64b0-49ec-a858-90f7ef2c952a",
        description:
          "Get the Valkyrie's Prosthesis from a chest at The Shaded Castle.",
      },
      {
        id: "2c31fbdc-8378-4ac3-9d92-af8036b6a462",
        description: `Talk to Millicent near the Erdtree Grazing Hill grace and select the "Give the Valkyrie's Prosthesis" dialogue option.`,
      },
      {
        id: "9d0c36bb-87c0-47db-95b6-6ede16a0306a",
        description: "Defeat Godskin Apostle at the Windmill Village.",
      },
      {
        id: "8de9c501-1eef-49fb-8905-3d03156f37a1",
        description:
          "Rest at the Windmill Heights grace and talk to millicent.",
      },
      {
        id: "d478f91e-ceb1-4d87-9857-75db0c35111f",
        description:
          "Talk to Millicent at the Ancient Snow Valley Ruins grace.",
      },
      {
        id: "76e0cf24-fbd9-4863-a33c-d1d1069630aa",
        description: "Talk to Millicent at the Prayer Room grace.",
      },
      {
        id: "f2c70662-3c07-4bc6-8408-2f86102709e1",
        description:
          "Defeat the Ulcerated Tree Spirit between the Elphael Inner Wall grace and the Drainage Channel grace.",
      },
      {
        id: "1d01e0d5-6856-418d-85c2-f4cbc8f8f62b",
        description: "Assist or challenge Millicent.",
      },
      {
        id: "1af0438a-78ad-48d6-a416-cd1bb29b0362",
        description: "Return to Gowry at Gowry's Shack.",
      },
    ],
  },
  {
    id: "2abe0f98-8523-47f6-b060-0ca9c275962e",
    name: "Ranni the Witch / Age of the Stars Ending",
    requirements: [
      {
        id: "91c85542-89b6-4389-995e-9cecc58100d0",
        description: "Talk to Ranni in Ranni's Rise.",
      },
      {
        id: "659de324-b627-4ef4-af2d-19f516645295",
        description:
          "Talk to Seluvis, Iji, and Blaidd down the stairs of Ranni's Rise.",
      },
      {
        id: "36bcb894-17f9-4436-af1a-bdf31d1040fe",
        description: "Talk to Blaidd in the Siofra River.",
      },
      {
        id: "1fe99c6c-23f1-43a2-a16a-c15fa2e84f45",
        description: "Talk to Seluvis in Seluvis's Rise.",
      },
      {
        id: "93431942-585b-4e2e-8c9c-e0117412d93b",
        description: "Talk to Sellen at the Waypoint Ruins Cellar grace.",
      },
      {
        id: "8f56bb96-4203-42f3-a44c-82c81a8275fe",
        description: "Talk to Blaidd in the Siofra River.",
      },
      {
        id: "a4eb3249-0d6e-4f42-91dc-07291b717ee0",
        description: "Defeat Radahn.",
      },
      {
        id: "f0f2c1df-5dd3-458e-b919-7d1f7af26196",
        description: "Get Finger Slayer Blade in Nokron.",
      },
      {
        id: "05e68320-e745-4472-8fd0-7364c001249c",
        description:
          "Give the item to Ranni in Ranni's Rise. You will receive the inverted statue",
      },
      {
        id: "d2a30b83-30d9-4fa5-83f9-9f6c0acbb14a",
        description:
          "Take the inverted statue to the study hall entrance grace and place it on the table.",
      },
      {
        id: "414cfaf2-f60c-4d22-acaa-176b01aae842",
        description:
          "Get the Cursemark of Death from the Divine Tower of Liurnia.",
      },
      {
        id: "53067c65-0e84-494f-aafa-60bf6b4d1108",
        description:
          "Go to Renna's Rise (not Ranni's Rise) and enter the the portal.",
      },
      {
        id: "a5b3a004-8ee0-43e8-9779-3efd9f762bcb",
        description: "Pick up the Miniature Ranni.",
      },
      {
        id: "af01ffe4-5bf5-48c3-b64a-35ef84e54041",
        description:
          'Rest at the nearby grace and "Talk to the miniature Ranni" 3 times.',
      },
      {
        id: "aaa0ab74-c6f0-4e76-abf9-e885a30961be",
        description:
          "Get the Discarded Palace Key by defeating the Baleful Shadow in Nokstella. Make sure to get the Lake of Rot Shoreside grace after.",
      },
      {
        id: "ab4c3b70-aa65-4552-9cc5-4cd853030b04",
        description:
          "Get the Dark Moon Ring from the chest at the Raya Lucaria Grand Library by using the Discarded Palace Key.",
      },
      {
        id: "62afc7c6-369b-4e58-91c5-5fb724b091b6",
        description: "Defeat Astel, Naturalborn of the Void.",
      },
      {
        id: "8c891a85-9fc9-4fe5-9d62-11587a30301b",
        description:
          "Put the Dark Moon Ring on Ranni's Finger below the Cathedral of Manus Celes.",
      },
      {
        id: "c5d4512c-3dd5-4470-904f-abec927162b1",
        description: "Defeat Blaidd outside of Ranni's Rise.",
      },
      {
        id: "ee36e71e-9c19-4f67-bf38-f33be07df8e0",
        description: "Talk to Iji about Blaidd's death.",
      },
    ],
  },
  {
    id: "87a4def0-48b9-4b9d-ad78-38ea169b1ad1",
    name: "Dung Eater / Blessing of Despair Ending",
    requirements: [
      {
        id: "77ae3b59-142d-40a9-b366-bd1887623231",
        description: "Talk to Dung Eater at the Roundtable Hold",
      },
      {
        id: "033bf04e-e309-4fb8-abe9-ae3e080a0bab",
        description:
          "Collect the Seedbed Curse near the East Capital Rampart Grace",
      },
      {
        id: "ad4de190-085e-415f-a838-c0cd15610edb",
        description:
          "Give the Seedbed Curse to Dung Eater at the Roundtable Hold.",
      },
      {
        id: "d05ce552-d2a4-470c-a8e7-4957899743a5",
        description: "Talk to Dung Eater in his cell.",
      },
      {
        id: "0aa30a1d-0669-43e5-b710-e7351a307b11",
        description:
          "A message will appear in Dung Eater's spot in the Roundtable Hold telling you to come to the outer moat.",
      },
      {
        id: "b32d6a9e-bf30-40f1-b206-0604b3296bb3",
        description:
          "Defeat Dung Eater Invader in the outer moat near the Capital Rampart grace.",
      },
      {
        id: "a6fb70fe-9d3f-4d5e-a478-a4026136ba81",
        description: "Talk to Dung Eater in the Roundtable Hold.",
      },
      {
        id: "aebb2bcc-b9ef-45ef-a0f7-985d462afed8",
        description:
          "Collect the Seedbed Curse near the West Capital Rampart grace.",
      },
      {
        id: "3d94a479-c309-4f78-8708-e5407f82ece1",
        description: "Collect the Seedbed Curse at the Volcano Manor.",
      },
      {
        id: "a41aff83-05df-4906-90fc-af002915f15c",
        description:
          "Collect the first Seedbed Curses near the Prayer Room Grace.",
      },
      {
        id: "65ff1836-a1a0-481c-93d6-9f24b5b369d5",
        description:
          "Collect the second Seedbed Curses near the Prayer Room Grace.",
      },
      {
        id: "31dea69f-2d2b-447f-88f2-faa4409b69e1",
        description:
          'Talk to Dung Eater in his cell and select the "Use the Seedbed Curse" dialogue option.',
      },
      {
        id: "8b3260ab-fac1-4688-86f2-6cb0b29d7742",
        description:
          "Return to Dung Eater in his cell or save and reload the game and collect his outfit.",
      },
      {
        id: "d3745216-125d-4a68-a78d-f69f5823e8cc",
        description:
          'Defeat the Boss at the end of the game and select the "Use Mending Rune of the Fell Curse" dialogue option.',
      },
    ],
  },
  {
    id: "98054154-2e6e-4095-a4bf-ee0f071ece9e",
    name: "Irina + Edgar / Hyetta / Lord of the Frenzied Flame Ending",
    requirements: [
      {
        id: "98a2abed-c094-40f2-b058-5200d7b102d3",
        description: "Talk to Irina south of the Bridge of Sacrifice.",
      },
      {
        id: "097b6af4-dd9a-45a6-9463-42f171070a19",
        description: "Take Irina's letter to her father Edgar in Castle Morne.",
      },
      {
        id: "2ef06f76-df0b-4f1e-806a-6314d63d2998",
        description: "Defeat Leonine Misbegotten.",
      },
      {
        id: "779b7d1b-d73a-47bf-8ea2-5489951c0f6d",
        description: "Talk with Edgar.",
      },
      {
        id: "0a805ace-f6a7-44ce-9d1e-eaca5aff8c75",
        description: "Go back to Irina and talk with Edgar.",
      },
      {
        id: "86bea27e-e906-4e62-b60f-d3c664fdddb2",
        description: "Get the first Shabriri Grape from Godrick's throne room.",
      },
      {
        id: "6460323a-e809-4fd5-8e81-b0f5575fa71d",
        description:
          "Talk to Hyetta near the Lake-Facing Cliffs grace and donate a Shabriri grape to her.",
      },
      {
        id: "7b99e1a3-56bc-4097-8c5a-239332a165f0",
        description:
          "Get the second Shabriri Grape from the Purified Ruins near the Liurnia Highway North grace. Talk to Hyetta nearby and donate a Shabriri grape to her.",
      },
      {
        id: "3c7fb9a9-57ab-4d86-a3e5-2da93d97c9b2",
        description:
          "Defeat Edgar the Revenger at the Revenger's Shack and receive the third Shabriri Grape.",
      },
      {
        id: "fcf87da5-9b20-4644-accd-73b630f03df5",
        description: `Donate your third Shabriri Grape to Hyetta near the Gate Town Bridge. Select the "They're human eyes" dialogue option."`,
      },
      {
        id: "79e4eec6-db3a-47d1-8fa0-1d659bc71344",
        description: "Talk to Hyetta again so that she apologizes.",
      },
      {
        id: "2be6da83-9878-4170-bd4b-67c47a692baa",
        description: "Rest at the grace and then talk to Hyetta once more.",
      },
      {
        id: "8a57b4f7-c5be-49e3-ab5d-561b86e82bb3",
        description:
          "Defeat the Festering Fingerprint Vyke at the Church of Inhibition and receive the Fingerprint Grape.",
      },
      {
        id: "c540d9e3-15b0-442b-b685-a34e82b9db39",
        description:
          "Donate the Fingerprint Grape to Hyetta at the Bellum Church.",
      },
      {
        id: "8e06cead-4675-48fe-8495-39a0bb37cb28",
        description:
          "Defeat Mohg, the Omen and attack the alter behind the chest.",
      },
      {
        id: "80fdceaf-4285-4d8f-8c0c-0b941124937a",
        description:
          "Once you have finished jumping down, talk to Hyetta near the Frenzied Flame Proscription grace.",
      },
      {
        id: "076e6e04-4a83-4696-84e5-0202fdffd63d",
        description:
          "Take off your clothes and open the door to the three fingers.",
      },
      {
        id: "1bb499f9-7d93-4518-9870-ddd5e46c4bf4",
        description:
          "Talk with Hyetta until she dies. Pick up the Frenzied Flame Seal",
      },
      {
        id: "2662179f-44f6-44d2-a930-2c64e25d1f58",
        description:
          "Defeat the final boss and become the Lord of Frenzied Flame.",
      },
    ],
  },
  {
    id: "506e0994-ee99-4509-92f0-09db727e2e8b",
    name: "Brother Corhyn + Goldmask / Age of Order Ending",
    requirements: [
      {
        id: "a2c22fb5-91d1-444a-8cf4-13880d99b9d7",
        description: "Talk to Brother Corhyn at the Roundtable Hold grace.",
      },
      {
        id: "7af25090-d2c7-4ecd-a0c8-1067eab6b2d1",
        description:
          "Talk to Brother Corhyn at the Roundtable Hold grace after defeating 2 main bosses.",
      },
      {
        id: "c40d1235-4ecc-4279-93a6-09d39e640776",
        description: `Talk to Brother Corhyn near the Altus Plateau map fragment. Talk "About the noble goldmask"`,
      },
      {
        id: "4b09fc8d-abd3-4ce7-a1c5-c13bc6923c29",
        description: "Talk to Goldmask on the broken bridge.",
      },
      {
        id: "f25f7590-ca9c-4f8b-967a-517a041b5fca",
        description: `Go back to Brother Corhyn near the Altus Plateau map fragment and "Tell the noble Goldmask's whereabouts"`,
      },
      {
        id: "e59a5d41-7c4a-461e-a642-5653461df6ec",
        description: `Go back to the broken bridge and talk to Brother Corhyn "About the noble Goldmask"`,
      },
      {
        id: "306050cc-99f3-4739-8e05-1be39d7d7d51",
        description:
          "Get the Golden Order Principia at the Erdtree Sanctuary grace.",
      },
      {
        id: "fdbe8c88-81be-4cd0-afd2-cdcb3b51bc93",
        description: `Give the Golden Order Principia to Brother Corhyn near the arena. Learn the Law of Regression incantation. Talk "About the noble goldmask"`,
      },
      {
        id: "1fcf3bc3-0513-4808-8e3b-e24085dc4862",
        description: `Perform the Law of Regression incantation in front of the statue near the in game message that says "Regression alone reveals secrets." Read the new message that appears`,
      },
      {
        id: "977609ab-1035-4c7a-a2e6-b5087c57f909",
        description: `Go back to the arena and talk to Brother Corhyn and Goldmask. Select the "Tell him that Radagon is Marika" dialogue option. Then talk to Brother Corhyn.`,
      },
      {
        id: "327e0145-df64-44a7-95c3-f33e17363e1f",
        description:
          "Talk to Brother Corhyn on the bridge southeast of Stargazers' Ruins.",
      },
      {
        id: "fc397cad-1720-45fa-9693-1d5a834a7d42",
        description:
          "Receive the mending rune from Goldmask near the arena in Leyndell, Capital of Ash.",
      },
      {
        id: "2c3255de-4c4e-40d4-99bb-98fbfce2f3c1",
        description: `Defeat the final boss and select the "Use Mending Rune of Perfect Order" dialogue option.`,
      },
    ],
  },
  // {
  //   id: "ecdeb0c0-b56d-4a95-af9f-cbfe5ae6b52c",
  //   name: "Iron Fist Alexander",
  //   requirements: [],
  // },
  // {
  //   id: "739611be-441a-48cf-a1d5-3597fa9196fc",
  //   name: "Volcano Manor",
  //   requirements: [
  //     // {
  //     //   id: "b0dc1ab7-1564-4409-b0a5-7e93ad9f7a34",
  //     //   description: "Talk to Tanith at the Volcano Manor grace.",
  //     // },
  //     // {
  //     //   id: "9752859c-752f-4592-852d-40fb6c690634",
  //     //   description:
  //     //     "Talk to Bernahl. You will also be able to talk to Rya, Diallos, and Patches if you did their questlines.",
  //     // },
  //     // {
  //     //   id: "890c711c-d6e8-499d-8545-309ee4d8b732",
  //     //   description: "",
  //     // },
  //   ],
  // },
];
