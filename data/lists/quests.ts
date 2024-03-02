import { ListType } from "./types";

export const QuestsList: Array<ListType> = [
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
    id: "8636dc42-8c23-4e8f-a048-105b35009f28",
    name: "Blackguard Big Boggart",
    url: "https://eldenring.wiki.fextralife.com/Blackguard+Big+Boggart",
    requirements: [
      {
        id: "67be303a-7760-4073-b2ba-359c62ad19cd",
        description:
          "Buy Rya's Necklace from Blackguard Big Boggart at the Boilprawn Shack as part of Rya's quest line.",
      },
      {
        id: "0c8d0355-dec5-42f6-b6c4-f5576c37c9ee",
        description:
          "Purchase at least one Boiled Prawn from Boggart and he'll say he's never met someone with a taste for prawn he couldn't trust.",
      },
      {
        id: "33ab554a-6a20-48c5-b69b-7f10630e00be",
        description:
          "(Optional) Summon Boggart to fight Magma Wyrm Makar in Ruin-Strewn Precipice between Liurnia and Altus Plateau.",
        url: "https://eldenring.wiki.fextralife.com/Magma+Wyrm+Makar",
      },
      {
        id: "9b2366dc-6c14-4538-94fd-ec5e9fa6a37b",
        description:
          "Boggart will move to the Leyndell moat, south of the Minor Erdtree in the Capital Outskirts. Exhaust his dialogue to receive more information about Dung Eater and optionally purchase Boiled Crab.",
      },
      {
        id: "b17d2204-3a9c-464b-b379-6f63f15fb223",
        description:
          'Progress Dung Eater\'s quest to the point he says he will be "waiting in the outer moat."',
        url: "https://eldenring.wiki.fextralife.com/Dung+Eater",
      },
      {
        id: "63283a45-4589-4043-8b7d-631043820b52",
        description:
          "Return to Boggart (or reload the area) and exhaust his dialogue until he says he believes Dung Eater is lurking nearby.",
      },
      {
        id: "d919d0b6-7384-40c2-b427-40dac480f6d2",
        description:
          "Reload the area and Boggart will be dying. Dung Eater will invade when you interact with Boggart.",
      },
      {
        id: "3ea5714d-943f-44a9-b27b-cb37c8637577",
        description:
          "After fighting off Dung Eater, loot Boggart's corpse for a Seedbed Curse, Blackguard's Iron Mask, Iron Ball, and Blackguard's Bell Bearing.",
      },
    ],
  },
  {
    id: "75870d4b-4606-4012-b933-39e571cdb22d",
    name: "Blaidd",
    url: "https://eldenring.wiki.fextralife.com/Blaidd",
    requirements: [
      {
        id: "6eb3b171-9a14-43f0-a434-7de8633cf748",
        description: "Go to the Mistwood Ruins and listen for a wolf howl.",
      },
      {
        id: "9ee425bb-e98f-4917-99ff-b212247bab4a",
        description:
          'Talk to Merchant Kalé "About the howling in Mistwood" at the Church of Elleh grace. You will receive the Finger Snap gesture.',
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
        description:
          'Talk to Smithing Master Iji and exhaust his dialogue until you are able to select "Blaidd sent me." You may now purchase the Carian Filigreed Crest talisman.',
      },
    ],
  },
  {
    id: "7e02c667-b3fe-4250-8ec9-aa2932332be6",
    name: "Bloody Finger Hunter Yura",
    url: "https://eldenring.wiki.fextralife.com/Bloody+Finger+Hunter+Yura",
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
    id: "dbfd1d2c-f568-434d-a9dd-ec82fc45dea3",
    name: "Boc the Seamster",
    url: "https://eldenring.wiki.fextralife.com/Boc+the+Seamster",
    requirements: [
      {
        id: "ab481de8-72b8-4eec-8dfc-e1963a293e6b",
        description:
          "Hit the small tree and talk to Boc south of the Agheel Lake North grace.",
      },
      {
        id: "118b8382-70a0-4407-a69c-85ff1298a236",
        description: "Talk to Boc in the Coastal Cave in western Limgrave.",
      },
      {
        id: "d44fb6a6-99d7-40cc-8035-fc479608da55",
        description:
          "Defeat the Demi-Human Chief (Duo) and receive the Sewing Needle.",
      },
      {
        id: "4c82b4ff-b3a2-44a0-baa8-3ac07c96e65d",
        description:
          'Talk to Boc in the Coastal Cave again and select the "Give the Sewing Needle" dialogue option.',
      },
      {
        id: "3bd8d18e-7119-44d0-877e-59bbc30e7596",
        description: "Rest at the Lake-Facing Cliffs grace and talk to Boc.",
      },
      {
        id: "1f735427-bbee-434c-aa86-b4203b5c27c2",
        description:
          "Rest at the East Raya Lucaria Gate grace and talk to Boc.",
      },
      {
        id: "2c10bace-7112-4238-ae77-3f24c507afa1",
        description:
          'Rest at the East Raya Lucaria Gate grace and select the "Talk to Melina" dialogue.',
      },
      {
        id: "625d7959-059b-419f-bfbc-cdb54b99e920",
        description:
          "Rest at the Altus Highway Junction grace and talk to Boc.",
      },
      {
        id: "9816aa87-7342-48d2-9fc1-a1d95239989a",
        description: "Rest at the East Capital Rampart grace and talk to Boc.",
      },
      {
        id: "291d78fd-345b-4fe7-a15e-ebff7627dfe7",
        description:
          "Receive the Gold Sewing Needle from the chest at the Church of Vows.",
      },
      {
        id: "cc199bc2-3959-480d-974b-eafd0a8b5df2",
        description:
          "Buy an alterable boss armor piece from Finger Reader Enia at the Roundtable Hold.",
      },
      {
        id: "61d4cd57-e2a7-49f1-b7a0-0947819bf4e1",
        description:
          "Give the Gold Sewing Needle to Boc at any of the previous places you talked to him at.",
      },
      {
        id: "8e17d343-40e0-493c-b3f4-d3fc5cbd0b46",
        description:
          "Talk to Boc but do not give him the larval tear unless you are going for the bad ending.",
      },
      {
        id: "be763a73-15a4-4521-bbe8-058a24f04216",
        description: `Get the "You're Beautiful" Prattling Pate from Hermit Village.`,
      },
      {
        id: "fa616006-b559-45f7-94e5-d6acda6e4828",
        description: `Use the "You're Beautiful" Prattling Pate in front of Boc.`,
      },
      {
        id: "e466e59e-7d5d-4262-af8f-687e777d6f0d",
        description: 'Talk to Boc and select the "I heard a voice" dialogue.',
      },
    ],
  },
  {
    id: "6a2f5b7e-47ba-4b06-b51e-c88b7d93703e",
    name: "D, Hunter of the Dead",
    url: "https://eldenring.wiki.fextralife.com/D,+Hunter+of+the+Dead",
    requirements: [
      {
        id: "f7e3f8af-c8cc-46a4-83a4-bb07992e76cf",
        description:
          "Talk D to the east of Summonwater Village grace or at the Roundtable hold.",
      },
      {
        id: "164a555c-a9fd-4680-ab79-41bf8aa1210c",
        description: "Defeat Tibia Mariner at Summonwater Village.",
      },
      {
        id: "405f0050-fe45-4b72-852c-fb9031e63027",
        description:
          'Talk to D again at either location. Select the "Show Deathroot" and "Accept introduction" dialogue options.',
      },
      {
        id: "811d3b70-a8e0-4bc9-9f9c-104edf28ebad",
        description: "Feed Gurranq a Deathroot at Bestial Sanctum.",
        url: "https://eldenring.wiki.fextralife.com/Deathroot",
      },
      {
        id: "def4242a-89f1-4d62-aa4a-9c08b46458a6",
        description: "Talk to D at the Roundtable Hold.",
      },
      {
        id: "7877282d-863e-4fef-b392-065e733e370d",
        description: "Talk to Rogier about D at the Roundtable Hold.",
      },
      {
        id: "769bf6e9-469a-42e1-ae2c-12e7ed590552",
        description: "Reload and talk to Rogier again.",
      },
      {
        id: "c157162b-e1aa-4d11-a835-60d139c486aa",
        description:
          "Defeat Black Knife Assassin at Black Knife Catacombs, optionally summon D to help.",
      },
      {
        id: "e4f0ae15-d44d-43cd-aa8e-3277390e7dfd",
        description: "Follow Fia's questline to further progress.",
      },
    ],
  },
  {
    id: "beb92cc3-9bd0-4e8f-b982-2473c57c4d37",
    name: "Diallos Hoslow",
    url: "https://eldenring.wiki.fextralife.com/Diallos",
    requirements: [
      {
        id: "a1af8c12-09f6-4a22-bb15-e1cb0c3f4d49",
        description: "Talk to Diallos at the Roundtable Hold.",
      },
      {
        id: "208c2d13-35f0-40f6-8777-1bf713ad5d0e",
        description:
          "Talk to Diallos in Northern Liurnia near the Academy Gate Town Site of Grace.",
      },
      {
        id: "70026071-f8e4-462b-b5c8-191f17e87286",
        description: "Exhaust Diallos' dialogue in Roundtable Hold.",
      },
      {
        id: "a8f79e5a-e123-4596-9dd4-7b0007c3c965",
        description: "Talk to Diallos in Volcano Manor.",
      },
      {
        id: "363edd14-d283-4b61-9ab6-156528554c92",
        description:
          "Complete the first Volcano Manor request and return to talk to Diallos. He'll have new dialogue each time you complete a Volcano Manor request.",
      },
      {
        id: "88587a2c-81d4-4802-9c9e-945b22467bd4",
        description:
          "Complete the Volcano Manor quest (either successfully or by defeating Rykard, Lord of Blasphemy), then talk to Diallos in Volcano Manor.",
      },
      {
        id: "b3b404a5-f42b-44a3-bb1b-668622177563",
        description: "Locate Diallos in Jarburg and talk to him.",
      },
      {
        id: "1aeeaf5b-347f-4adb-bb27-1b8a38cbce05",
        description:
          "Progress Jar-Bairn's questline then exhaust both Diallos' and Jar-Bairn's dialogue, reloading the area as needed. Jar-Bairn should mention poachers at the end.",
      },
      {
        id: "b3143ed6-428c-4330-b975-ffe665c22b8a",
        description:
          "After Jarburg is attacked (it may take waiting for time to pass), exhaust Diallos' and Jar-Bairn's dialogue again. When Diallos asks a question, you can respond with either option.",
      },
      {
        id: "6b6e87f3-8d39-4c96-bdae-7ae11d0fd6a2",
        description:
          "Reload the area, exhaust Jar-Bairn's dialogue, then reload the area again to find Diallos's Mask, Hoslow's Petal Whip, and a Numen's Rune where Diallos was.",
      },
    ],
  },
  {
    id: "900d02cb-0685-4a28-951f-318ebdee46d0",
    name: "Ending: Age of Duskborn (Fia)",
    url: "https://eldenring.wiki.fextralife.com/Fia",
    requirements: [
      {
        id: "753a3949-1f33-4953-93b9-0ef16e351da4",
        description: "Rest at a site of grace in Altus Plateau.",
      },
      {
        id: "3d72b66b-98c5-4ee2-838e-28251a186c24",
        description:
          "Talk to Fia at the Roundtable Hold until you receive the Weathered Dagger.",
      },
      {
        id: "6ba21da1-0acd-4113-941c-3f44d520978d",
        description: "Give D, Hunter of the Dead the Weathered Dagger.",
      },
      {
        id: "3239894a-57f9-484b-8b21-904156c1e2d5",
        description:
          "Claim two great runes and then talk to Fia at the Roundtable hold to receive a map of the location of a Black Knifeprint.",
      },
      {
        id: "7c0c707e-6c22-4556-83d5-ad7dafa2f90d",
        description:
          "Talk to her in a newly opened room in the Roundtable Hold.",
      },
      {
        id: "fa9e90a8-bc0f-4dc0-8fe8-726f333611b3",
        description: "Give D's twin brother the Twinned Armor set.",
      },
      {
        id: "7cf4a33d-0ae7-4f54-894c-d87ba8acd580",
        description: "Defeat Fia's Champions.",
      },
      {
        id: "e4afc57f-69cb-42f2-b1a1-d4ccafbbe849",
        description: "Rest and talk to Fia multiple times until falls asleep.",
      },
      {
        id: "df1b7f52-a3d0-45d0-a2c6-5b9f5354c70a",
        description: "Defeat Lichdragon Fortissax.",
      },
      {
        id: "5e98459f-6e25-423c-a450-71c9d5770606",
        description: "Pick up the Mending Rune of the Death-Prince.",
      },
      {
        id: "7d9e7119-54ef-4a45-baf6-2936e8e6b07a",
        description:
          "Rest at the grace multiple times and pick up Fia's and D's brothers armor sets.",
      },
      {
        id: "cb90d59d-9c67-4fb4-988b-87fab462cfdd",
        description:
          'Defeat the Boss at the end of the game and select the "Use Mending Rune of the Death-Prince" dialogue option.',
      },
    ],
  },
  {
    id: "506e0994-ee99-4509-92f0-09db727e2e8b",
    name: "Ending: Age of Order (Brother Corhyn, Goldmask)",
    url: "https://eldenring.wiki.fextralife.com/Brother+Corhyn",
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
        description:
          'Talk to Brother Corhyn near the Altus Plateau map fragment. Talk "About the noble Goldmask."',
      },
      {
        id: "4b09fc8d-abd3-4ce7-a1c5-c13bc6923c29",
        description: "Talk to Goldmask on the broken bridge.",
      },
      {
        id: "f25f7590-ca9c-4f8b-967a-517a041b5fca",
        description:
          'Go back to Brother Corhyn near the Altus Plateau map fragment and "Tell the noble Goldmask\'s whereabouts."',
      },
      {
        id: "e59a5d41-7c4a-461e-a642-5653461df6ec",
        description:
          'Go back to the broken bridge and talk to Brother Corhyn "About the noble Goldmask."',
      },
      {
        id: "306050cc-99f3-4739-8e05-1be39d7d7d51",
        description:
          "Get the Golden Order Principia at the Erdtree Sanctuary grace.",
      },
      {
        id: "fdbe8c88-81be-4cd0-afd2-cdcb3b51bc93",
        description:
          'Give the Golden Order Principia to Brother Corhyn near the arena. Learn the Law of Regression incantation. Talk "About the noble goldmask."',
      },
      {
        id: "1fcf3bc3-0513-4808-8e3b-e24085dc4862",
        description:
          'Perform the Law of Regression incantation in front of the statue near the in game message that says "Regression alone reveals secrets." Read the new message that appears.',
      },
      {
        id: "977609ab-1035-4c7a-a2e6-b5087c57f909",
        description:
          'Go back to the arena and talk to Brother Corhyn and Goldmask. Select the "Tell him that Radagon is Marika" dialogue option. Then talk to Brother Corhyn.',
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
        description:
          'Defeat the final boss and select the "Use Mending Rune of Perfect Order" dialogue option.',
      },
    ],
  },
  {
    id: "2abe0f98-8523-47f6-b060-0ca9c275962e",
    name: "Ending: Age of Stars (Ranni the Witch)",
    url: "https://eldenring.wiki.fextralife.com/Ranni+the+Witch",
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
        description: "Get Fingerslayer Blade in Nokron.",
      },
      {
        id: "05e68320-e745-4472-8fd0-7364c001249c",
        description:
          "Give the item to Ranni in Ranni's Rise, you will receive the inverted statue (locks out Seluvis's questline for this NG cycle).",
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
    name: "Ending: Blessing of Despair (Dung Eater)",
    url: "https://eldenring.wiki.fextralife.com/Dung+Eater",
    requirements: [
      {
        id: "77ae3b59-142d-40a9-b366-bd1887623231",
        description: "Talk to Dung Eater at the Roundtable Hold.",
      },
      {
        id: "033bf04e-e309-4fb8-abe9-ae3e080a0bab",
        description:
          "Collect the Seedbed Curse near the East Capital Rampart Grace.",
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
    name: "Ending: Lord of the Frenzied Flame (Irina, Edgar, Hyetta)",
    url: "https://eldenring.wiki.fextralife.com/Hyetta",
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
        description:
          'Donate your third Shabriri Grape to Hyetta near the Gate Town Bridge. Select the "They\'re human eyes" dialogue option.',
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
          "Talk with Hyetta until she dies. Pick up the Frenzied Flame Seal.",
      },
      {
        id: "2662179f-44f6-44d2-a930-2c64e25d1f58",
        description:
          "Defeat the final boss and become the Lord of Frenzied Flame.",
      },
    ],
  },
  {
    id: "7283be28-9d16-40ba-b977-39d16df5d32b",
    name: "Ensha",
    url: "https://eldenring.wiki.fextralife.com/Ensha",
    requirements: [
      {
        id: "f4865803-9b86-443a-9d7e-743bf900b45c",
        description:
          'Interact with Ensha at Roundtable Hold to obtain the "What Do You Want?" Gesture.',
      },
      {
        id: "61227be7-78e6-4fe1-b09a-e30773697d96",
        description:
          "Obtain either half of the Haligtree Secret Medallion (Right or Left).",
      },
      {
        id: "03fa2971-d014-4546-8823-574b44456c1c",
        description: "Return to Roundtable Hold and Ensha will invade.",
      },
      {
        id: "3a02f02b-7c36-4308-b142-621860f8fa05",
        description:
          "Obtain Clinging Bone after defeating Ensha and the Royal Remains set from where Ensha was originally standing outside Gideon Ofnir's room.",
      },
      {
        id: "2d5da311-6b48-4e85-953a-3168a156f7ac",
        description:
          "Talk to Gideon Ofnir and he will apologize for Ensha's behavior.",
      },
    ],
  },
  {
    id: "454972b3-6194-4eae-9f7e-3abaee7c96e7",
    name: "Gowry + Millicent",
    url: "https://eldenring.wiki.fextralife.com/Millicent",
    requirements: [
      {
        id: "3812e34e-b1aa-450b-ab43-90f8b0179d6c",
        description: "Talk to Gowry at Gowry's Shack.",
      },
      {
        id: "de1f1d01-a0b0-4c0f-b8e8-80163ea1a32d",
        description: "(Optional) Defeat Millicent Invasion.",
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
        description:
          'Talk to Millicent at the Church of the Plague. Select the "Give an Unalloyed Gold Needle" dialogue option.',
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
        description: "Talk to Millicent near the Erdtree-Gazing Hill grace.",
      },
      {
        id: "68667ffc-64b0-49ec-a858-90f7ef2c952a",
        description:
          "Get the Valkyrie's Prosthesis from a chest at The Shaded Castle.",
      },
      {
        id: "2c31fbdc-8378-4ac3-9d92-af8036b6a462",
        description:
          'Talk to Millicent near the Erdtree Grazing Hill grace and select the "Give the Valkyrie\'s Prosthesis" dialogue option.',
      },
      {
        id: "9d0c36bb-87c0-47db-95b6-6ede16a0306a",
        description: "Defeat Godskin Apostle at the Windmill Village.",
      },
      {
        id: "8de9c501-1eef-49fb-8905-3d03156f37a1",
        description:
          "Rest at the Windmill Heights grace and talk to Millicent.",
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
    id: "ff39a7ac-8544-4654-9369-5a2a57a2c7bc",
    name: "Gurranq, Beast Clergyman",
    url: "https://eldenring.wiki.fextralife.com/Gurranq+Beast+Clergyman",
    requirements: [
      {
        id: "d5ffc09a-783a-4140-978b-30ae0ec5b596",
        description:
          "Retrieve a Deathroot after defeating the Tibia Mariner at Summonwater Village.",
        mapLink:
          "https://eldenring.wiki.fextralife.com/Interactive+Map?id=1547&code=mapA",
      },
      {
        id: "d22a50ea-45e6-41a0-be2a-e7f8918345a1",
        description:
          "(Optional) Talk to D at Roundtable Hold for directions to the Bestial Sanctum.",
      },
      {
        id: "f552e06e-e89e-4e15-bb66-25e1d395805c",
        description: "Take the Waygate D mentions to the Bestial Sanctum.",
        mapLink:
          "https://eldenring.wiki.fextralife.com/Interactive+Map?id=802&code=mapA",
      },
      {
        id: "c70ea8be-63af-47ca-b9b0-1627a75745fe",
        description: "Talk to Gurranq at Bestial Sanctum.",
      },
      {
        id: "42b42ae4-988c-4c1a-b997-b6f4ef6b2ddd",
        description:
          "Give one Deathroot to Gurranq for the Clawmark Seal Sacred Seal and Beast Eye Key Item.",
      },
      {
        id: "13ae7575-e7ca-4749-9936-2049c063802f",
        description:
          "Retrieve a Deathroot inside a chest behind the Black Knife Assassin in the Deathtouched Catacombs.",
        mapLink:
          "https://eldenring.wiki.fextralife.com/Interactive+Map?id=855&code=mapA",
      },
      {
        id: "f510560c-6aee-45b7-8eb4-3ea4edfee422",
        description:
          "Give a second Deathroot to Gurranq for the Bestial Sling Incantation.",
      },
      {
        id: "c6b12699-738d-463d-9216-ae76b24aa1f1",
        description:
          "Retrieve a Deathroot inside a chest behind the Cemetery Shade in the Black Knife Catacombs.",
        mapLink:
          "https://eldenring.wiki.fextralife.com/Interactive+Map?id=6807&code=mapA",
      },
      {
        id: "7b075c18-5c27-466b-910a-d80857cedebd",
        description:
          "Give a third Deathroot to Gurranq for the Bestial Vitality Incantation.",
      },
      {
        id: "2189ccf3-d2e5-42ee-a6db-d8449aa42085",
        description:
          "Retrieve a Deathroot by defeating the Tibia Mariner at East Liurnia of the Lakes.",
        mapLink:
          "https://eldenring.wiki.fextralife.com/Interactive+Map?id=2010&code=mapA",
      },
      {
        id: "bf466258-2964-4784-b0c9-b4d2ce8a7783",
        description:
          "Give a fourth Deathroot to Gurranq for Ash of War: Beast's Roar.",
      },
      {
        id: "2b8f890b-8f28-4876-bcc2-93db115ab141",
        description:
          "Retrieve a Deathroot by defeating the Tibia Mariner at Wyndham Ruins.",
        mapLink:
          "https://eldenring.wiki.fextralife.com/Interactive+Map?id=2007&code=mapA",
      },
      {
        id: "b519f1e3-531f-41ec-93a7-70e4d7f00087",
        description: "Gurranq will be hostile. Fight back until he gives up.",
      },
      {
        id: "6e96ffcb-8a9a-4661-9b34-969e5237c5a6",
        description:
          "Reload the area if necessary, then give a fifth Deathroot to Gurranq for the Beast Claw Incantation.",
      },
      {
        id: "3cbcd4f0-46f9-4478-bf5d-93ef4d2fc20b",
        description:
          "Retrieve a Deathroot by defeating the Tibia Mariner on a ledge between Castle Sol Main Gate and Snow Valley Ruins Overlook.",
        mapLink:
          "https://eldenring.wiki.fextralife.com/Interactive+Map?id=6808&code=mapA",
      },
      {
        id: "9b08d98a-119c-409b-9d13-eebf9da938f2",
        description:
          "Give a sixth Deathroot to Gurranq for the Stone of Gurranq Incantation.",
      },
      {
        id: "34c389a1-8307-4927-8452-98609c893154",
        description:
          "Retrieve a Deathroot inside a chest behind the Red Wolf of the Champion at Gelmir Hero's Grave.",
        mapLink:
          "https://eldenring.wiki.fextralife.com/Interactive+Map?id=5765&code=mapA",
      },
      {
        id: "0a00490b-aa1a-4cb2-85cd-1b91c0cc59b1",
        description:
          "Give a seventh Deathroot to Gurranq for the Warhammer armament Beastclaw Greathammer.",
      },
      {
        id: "989b70ec-d3f6-47da-94af-df6b57283243",
        description:
          "Retrieve a Deathroot inside a chest after defeating the Stray Mimic Tear in the secret catacombs underneath the Hidden Path to the Haligtree.",
        mapLink:
          "https://eldenring.wiki.fextralife.com/Interactive+Map?id=6359&code=mapA",
      },
      {
        id: "c6735e77-00d5-4ad9-8b5b-99be55581b24",
        description:
          "Give an eighth Deathroot to Gurranq for the Gurranq's Beast Claw Incantation.",
      },
      {
        id: "d0bd1b10-18fe-43d1-928d-facc24178226",
        description:
          "Retrieve a Deathroot inside the chest after defeating the Ulcerated Tree Spirit boss inside the Giants' Mountaintop Catacombs.",
        mapLink:
          "https://eldenring.wiki.fextralife.com/Interactive+Map?id=6809&code=mapA",
      },
      {
        id: "631d8c94-3060-40b0-acaa-5af4e95aa104",
        description:
          "Give Gurranq the ninth and final Deathroot. He will give you an Ancient Dragon Smithing Stone and disappear.",
      },
    ],
  },
  {
    id: "a77c63dc-92f1-4d4e-8ff5-db8940ea0d5c",
    name: "Iron Fist Alexander",
    url: "https://eldenring.wiki.fextralife.com/Iron+Fist+Alexander",
    requirements: [
      {
        id: "8197d868-2c05-4607-b375-21635d88049d",
        description: "Talk to Alexander southwest of the Saintsbridge grace.",
      },
      {
        id: "26cb514a-de84-4cff-b501-105e4b5697b0",
        description: "Hit Alexander from behind to get him unstuck.",
      },
      {
        id: "32020bec-cdba-4fa2-ad98-9ded7074c9a0",
        description: "Talk to Alexander and exhaust his dialogue.",
      },
      {
        id: "824d28ac-7dbb-49d6-90a8-ed2d18733f2d",
        description: "Talk to Alexander at the end of the Gael Tunnel.",
      },
      {
        id: "29b5ca22-d823-40c3-88fb-be3151b873e8",
        description: "Talk to Alexander at the Redmane Castle.",
      },
      {
        id: "7ca93270-fb64-461f-92b7-09c64e6aaa96",
        description:
          "Defeat Radahn, optionally summon Alexander to help you fight.",
      },
      {
        id: "a5cc767b-697d-4fcf-891b-7dd6c7043119",
        description:
          "Talk to Alexander after the fight and exhaust his dialogue.",
      },
      {
        id: "4d420e8a-1932-42c6-8a6a-310bec4ef468",
        description: "Craft an Oil Pot or a Roped Oil Pot.",
      },
      {
        id: "5fd524b7-0a2d-474c-94cd-2cb5ad2bddfb",
        description:
          "Talk to Alexander south of the Artist's Shack grace in Liurnia of the Lakes.",
      },
      {
        id: "a17d195b-88fb-49eb-bece-0dae95ce18c2",
        description:
          "Use Oil Pots on Alexander and hit him to get him unstuck.",
      },
      {
        id: "450211f0-c78f-4641-9367-05682b4597c3",
        description:
          "Talk to Alexander after you get him unstuck and exhaust his dialogue.",
      },
      {
        id: "cf86f19b-047d-45d6-b5b6-fbc88ed03b32",
        description: "Defeat the Magma Wyrm south of Fort Laiedd.",
      },
      {
        id: "31ca7d23-f727-42c6-bd6b-766c9d55826c",
        description:
          "Talk to Alexander in the lava field and exhaust his dialogue.",
      },
      {
        id: "38e41399-9074-40d3-95d8-01b5129394f4",
        description:
          "Defeat Fire Giant, optionally summon Alexander to help you fight.",
      },
      {
        id: "e434b13f-9780-4431-8637-e1f4b5001a08",
        description: "Talk to Alexander in Crumbling Farum Azula.",
      },
      {
        id: "898af2d8-90b9-48bc-8112-32484d125679",
        description: "Defeat Alexander.",
      },
      {
        id: "68ee23ee-a1c6-402f-ae27-3b2a6a2e4010",
        description: "Talk to Alexander and receive Alexander's Innards.",
      },
    ],
  },
  {
    id: "3c614049-2380-48e2-9727-7dbad5e4e703",
    name: "Jar-Bairn",
    url: "https://eldenring.wiki.fextralife.com/Jar+Bairn",
    requirements: [
      {
        id: "fb0351a4-6905-43d2-8b29-0309d8b759b2",
        description:
          "Reach Jarburg by following a series of grave stones down the eastern cliffs of Liurnia, just south of the Carian Study Hall.",
        url: "https://eldenring.wiki.fextralife.com/Jarburg",
      },
      {
        id: "b7e45220-1c65-47ae-a6ca-fa69e017585f",
        description:
          "(Optional) Interact with Jar-Bairn in Jarburg for some extra dialogue.",
      },
      {
        id: "82bb981b-9034-43ed-a3b7-52681a66fe79",
        description: "Progress Alexander's quest line at least one step.",
      },
      {
        id: "bcab5335-85f7-4cd6-ab98-bcc3ef8fb9db",
        description: "Progress Diallos' quest line.",
      },
      {
        id: "e6870a01-abdf-4f77-a148-5a3121afb358",
        description:
          "Exhaust Jar-Bairn's dialogue and reload the area multiple times, until Jar-Bairn mentions poachers in the area.",
      },
      {
        id: "03d6abc4-a0f5-4410-8916-81f4d104e4e7",
        description:
          "Continue to reload the area and exhaust Jar-Bairn's dialogue.",
      },
      {
        id: "2257f951-83a8-42c5-ab23-c028da4847b5",
        description:
          "Fully complete Alexander's quest line and obtain Alexander's Innards.",
      },
      {
        id: "99b9a82e-8912-4b18-8aa2-bd561ab86d80",
        description:
          "Give Alexander's Innards to Jar-Bairn, then reload the area. Where Jar-Bairn was sitting, obtain Companion Jar Talisman.",
      },
    ],
  },
  {
    id: "9731bfcb-bbde-4064-ac66-a28fa769f1ca",
    name: "Kenneth Haight",
    url: "https://eldenring.wiki.fextralife.com/Kenneth+Haight",
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
        description:
          'Talk to Kenneth at his first location until he asks you to enter his service. Select the "Pledge service" dialogue option.',
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
    id: "2b7a7880-41e5-4a42-aa9f-4f80bc59eb65",
    name: "Knight/Recusant Bernahl",
    url: "https://eldenring.wiki.fextralife.com/Knight+Bernahl",
    requirements: [
      {
        id: "b6945128-636d-4cee-81e3-f06d6e082b57",
        description: "Talk to Bernahl at the Warmaster's Shack grace.",
      },
      {
        id: "19a9a7f3-25c9-42bf-aae5-53624f40dd10",
        description:
          "Talk to Recusant Bernahl after joining the Volcano Manor.",
      },
      {
        id: "2e019569-1c39-4bfd-894b-e31249902936",
        description: "Complete the first Volcano Manor request.",
      },
      {
        id: "05cd7353-a2a3-47e2-be4e-3bbed1b566ef",
        description: "Talk to Bernahl in the Volcano Manor.",
      },
      {
        id: "28448d84-ce33-4619-ad06-a7709a731038",
        description: "Complete the second Volcano Manor request.",
      },
      {
        id: "e8ab0a15-d49f-42fe-a332-9fb8b47bd2e8",
        description: "Talk to Bernahl in the Volcano Manor.",
      },
      {
        id: "2359f5db-aab6-49b3-9698-3e284dae42b4",
        description: "Complete Bernahl's request.",
      },
      {
        id: "69fad4da-517a-4e6a-b35d-d8aebad5d290",
        description: "Talk to Bernahl in the Volcano Manor.",
      },
      {
        id: "84fea040-5d3a-499f-8d96-5bd127465af7",
        description: "Defeat Rykard.",
      },
      {
        id: "c4d5f927-fc10-4e21-92df-1017cabd6fba",
        description: "Talk to Bernahl in the Volcano Manor.",
      },
      {
        id: "becae901-b4bd-428a-8adc-ae8fbbbf6e2c",
        description: "Summon Bernahl at Godskin Duo.",
      },
      {
        id: "7debf54b-8413-472c-82ef-02002c8d50d7",
        description:
          "Defeat Recusant Bernahl (the invader) in Crumbling Farum Azula.",
      },
    ],
  },
  {
    id: "a6b3b8f2-33ed-413d-85fd-4bcd60e39478",
    name: "Latenna",
    url: "https://eldenring.wiki.fextralife.com/Latenna",
    requirements: [
      {
        id: "7d523ab2-46a0-4925-b77c-2a1e6cbbf587",
        description:
          "Find Albus in the Village of the Albinaurics, hiding transformed as a pot near the Depraved Perfumer, close to the Village of the Albinaurics Site of Grace. Obtain the Haligtree Secret Medallion (Right) from him.",
        url: "https://eldenring.wiki.fextralife.com/Albus",
      },
      {
        id: "c050025a-48cb-4c33-a172-ff1f2781b227",
        description:
          "Go through the Lakeside Crystal Cave in Liurnia and defeat the Bloodhound Knight boss. Find the Slumbering Wolf's Shack on the other side.",
      },
      {
        id: "e5702e50-e974-4b37-86e6-aa23a6a74f22",
        description:
          "Talk to Latenna and she'll ask for the player to escort her to Miquella's Haligtree. Answer yes and she'll give you the Latenna the Albinauric Spirit Ashes.",
      },
      {
        id: "88bd4d1c-4531-46bf-b3e9-b77489c77fcc",
        description:
          "Continue until the Mountaintop of the Giants and obtain the Haligtree Secret Medallion (Left) in Castle Sol.",
        url: "https://eldenring.wiki.fextralife.com/Haligtree+Secret+Medallion+(Left)",
      },
      {
        id: "7153c0d0-9156-4d35-a079-0b1d21ca60ef",
        description:
          "Return to the Lift of Rold and use both halves of the secret medallion (not the original Rold Medallion) to go to the Consecrated Snowfield.",
      },
      {
        id: "34745ba4-3297-4497-9221-888fd33aa08e",
        description:
          "Continue through Consecrated Snowfield and arrive at the Apostate Derelict. Interact with the giant Albinauric and Latenna will give you a Somber Ancient Dragon Smithing Stone.",
      },
    ],
  },
  {
    id: "3c574a2d-a2fe-44dd-9255-fd801b6bc9f9",
    name: "Nepheli Loux",
    url: "https://eldenring.wiki.fextralife.com/Nepheli+Loux",
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
      {
        id: "a92b8990-e658-494a-982c-76165380ac63",
        description:
          "Talk to Nepheli at the Stormveil Castle throne room near the Godrick the Grafted grace.",
      },
    ],
  },
  {
    id: "5120d756-d7d5-4827-8142-1ad8cedf94fc",
    name: "Patches",
    url: "https://eldenring.wiki.fextralife.com/Patches",
    requirements: [
      {
        id: "96490ccb-66c9-42b6-a651-bca6a80fce42",
        description: "Fight Patches until he surrenders in Murkwater Cave.",
      },
      {
        id: "8d1f86ac-2c71-4c4f-9346-b78a07747a43",
        description:
          'Talk to Patches after the fight and select the "Forgive and forget" dialogue option.',
      },
      {
        id: "4de0e9d0-62c3-4e7c-9895-5b1fb46e4534",
        description:
          "Reload the area and buy 2000 runes worth of items from Patches.",
      },
      {
        id: "789f6de9-a2b8-421f-95f8-8a5de5bdb428",
        description:
          "Talk to Patches about his chest and then go open his chest.",
      },
      {
        id: "322a82f9-fcd5-4f38-bb73-be87ce701f1a",
        description: "Return to Patches and talk to him again.",
      },
      {
        id: "e2ea8e49-d81a-426e-bedb-25880c45cf18",
        description: "Talk to Patches at the Scenic Isle grace.",
      },
      {
        id: "f4678a05-ac9a-4ce3-bd4f-25161ee26ace",
        description:
          "Die to an Iron Virgin at the bottom of the water wheel in Raya Lucaria.",
      },
      {
        id: "4fe7df58-1151-40ab-a0d9-b17b9266ae9f",
        description:
          "Escape to the Volcano Manor and talk to Patches again at the Scenic Isle grace.",
      },
      {
        id: "3c68f038-88dd-4c8a-a7fb-3c70c25a7b78",
        description:
          "Talk to Patches west of the First Mt. Gelmir Campsite grace.",
      },
      {
        id: "8bc1e31d-0126-4929-8a8c-735cd16aabd6",
        description:
          "Follow the rainbow stones until the cutscene with Patches happens.",
      },
      {
        id: "df8cd53a-7f31-4245-a8d6-ed98d1f7b4e1",
        description: "Talk to Patches again in Mt. Gelmir.",
      },
      {
        id: "1d628f60-81c5-43f5-a258-6b6aa1e655c3",
        description:
          "Talk to Patches, at the Volcano Manor grace, after joining Volcano Manor.",
      },
      {
        id: "b5926821-85b1-41ed-a8a9-97c54991a26e",
        description:
          "Talk to Patches again after completing one assassination request.",
      },
      {
        id: "2944671b-5651-4384-95d2-d64395b17f3d",
        description:
          "Invade Great Horned Tragoth and receive the Bull-Goat Set.",
      },
      {
        id: "852d5c76-d2aa-40ad-a12c-41834a9e9b03",
        description: "Talk to Patches again at the Volcano Manor grace.",
      },
      {
        id: "98f973fb-624d-47ae-90d5-da9238ac728a",
        description:
          "Reload the area and talk to Patches again and receive the Magma Whip Candlestick.",
      },
      {
        id: "3fe52bff-a2b9-445e-bf10-4ba85776331f",
        description: "Defeat Rykard, Lord of Blasphemy.",
      },
      {
        id: "71af77a8-94cd-4caf-942b-c4f5a678b6d1",
        description:
          "Talk to Patches again and he will leave the Volcano Manor.",
      },
      {
        id: "da696fb4-ae3f-4a72-9a6e-dbfdf9769537",
        description:
          "Talk to Patches in the Shaded Castle near the Castellan's Hall grace.",
      },
      {
        id: "f63a4849-c272-4a31-b360-b11314aa89c2",
        description:
          "(Optional) Return to Rykard at his grace and give the Dancer's Castanets to Tanith.",
      },
      {
        id: "b373c2d4-9b91-4a25-a00e-81f626ab3339",
        description:
          "Fight Patches until he surrenders again in Murkwater Cave.",
      },
      {
        id: "8b6771c2-ae55-43aa-95d2-051018f1b224",
        description:
          "Reload the area and you will able to purchase from him again.",
      },
    ],
  },
  {
    id: "2e3ecd46-fd2b-49b9-98a5-a0ee5f02e743",
    name: "Preceptor Seluvis",
    url: "https://eldenring.wiki.fextralife.com/Preceptor+Seluvis",
    requirements: [
      {
        id: "d88a5416-f99e-4551-9dfc-71688643547d",
        description:
          "Progress Ranni's quest line until you talk to her vassals and Seluvis' Rise is unlocked in the Three Sister's region of Liurnia, north of Caria Manor.",
      },
      {
        id: "c5593f73-bb06-4b5c-81d7-9b6b90882b2c",
        description:
          "Talk to Seluvis in Seluvis's Rise and receive Seluvis's Potion.",
      },
      {
        id: "637f6eca-9f40-45f0-ab58-12458487c9ab",
        description:
          "Progress Dung Eater's quest until you can give him Seedbed Curses, but give him Seluvis's Potion (locks out Dung Eater's questline/Blessing of Despair ending and Nepheli Loux's Puppet until new NG cycle).",
      },
      {
        id: "9a7ea65b-37ef-4e62-8a90-c75d089c7b22",
        description:
          "Feed Seluvis's Potion to Nepheli Loux (locks out Nepheli Loux's questline and Dung Eater's Puppet until new NG cycle).",
      },
      {
        id: "f20fc1e3-c8f4-4d00-972f-abde59daf659",
        description:
          "(Optional) Talk to Gideon Ofnir and give Seluvis's Potion to him to dispose of (locks out both Dung Eater's and Nepheli Loux's Puppets until new NG cycle).",
      },
      {
        id: "9f430f1f-e492-4f0a-b3fc-811d27f8d042",
        description:
          "Find Seluvis's secret laboratory in the Three Sister's region of Liurnia, behind an illusory floor.",
      },
      {
        id: "8a451186-d5af-4dd7-877e-e7f5d5061306",
        description:
          "(Optional) Inside Seluvis's lab, find another illusory wall with Dung Eater's Puppet behind it, if you gave him the potion.",
      },
      {
        id: "fe71ba5b-58a4-4a61-bf0f-93ba3216fb64",
        description:
          "Return to Seluvis and ask about his lab. Choose one Puppet to take from Seluvis.",
      },
      {
        id: "17d0a22d-c4c4-4d2c-8090-3574b7ddc9d6",
        description: "Purchase all of Seluvis's Sorceries and a second Puppet.",
      },
      {
        id: "34e4b608-86e7-45fe-8124-7c2eb53177f7",
        description:
          "Purchase Dung Eater's Puppet if you gave him the potion on this NG cycle.",
      },
      {
        id: "1ec168fa-7721-4a26-8fec-c5acdda7ccba",
        description:
          "Talking to Seluvis again will give you the option to hear his plot (sometimes buggy, check link for help).",
        url: "https://eldenring.wiki.fextralife.com/Preceptor+Seluvis",
      },
      {
        id: "32a48279-e85b-476e-b5cb-62d554c4f1ae",
        description:
          "(Optional) Purchase Weathered Map from Pidia nearby, with a clue to find the Amber Starlight.",
      },
      {
        id: "92942f28-afd7-45b4-a969-5b0dffa528ed",
        description: "Find the Amber Starlight in Altus Plateau.",
      },
      {
        id: "831a99fc-46d9-46f3-bdb2-e6ec387d2b25",
        description:
          "Return the Amber Starlight to Seluvis to receive the Magic Scorpion Charm Talisman.",
      },
      {
        id: "60ada8a8-1b52-465d-a7ba-3f33babeee7a",
        description:
          "Reload the area and receive the Amber Draught from Seluvis.",
      },
      {
        id: "3ec4208e-2c7c-46b6-9416-f22669d1791b",
        description: "(Optional) Administer the Amber Draught to Ranni.",
      },
      {
        id: "450f4a10-e26a-4463-bc98-87f237a135d2",
        description:
          "(Optional) Receive absolution at the Church of Vows by using a Celestial Dew to continue Ranni's quest line and obtain the Age of Stars ending.",
      },
      {
        id: "0959561d-1a01-402e-a664-02dff38b8111",
        description:
          "(Optional) Skip angering Ranni and give her the Fingerslayer Blade and she will simply kill Seluvis.",
      },
      {
        id: "331ede89-418a-42d2-a0bf-15f5c5165b48",
        description:
          "Go to Pidia and loot Nepheli Loux's Puppet from his corpse if you gave her the potion.",
      },
      {
        id: "ebb0776a-b44e-4f57-a30f-5953c45aa563",
        description:
          "Loot Dolores the Sleeping Arrow Puppet from Pidia if you didn't give Seluvis's Potion to Nepheli Loux.",
      },
    ],
  },
  {
    id: "5bcdbf66-3270-4af8-9c76-2d6e646d20cb",
    name: "Roderika (Spirit-Tuner)",
    url: "https://eldenring.wiki.fextralife.com/Roderika",
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
        description:
          'Talk Roderika again and select the "Tell her what the blacksmith said" dialogue option.',
      },
      {
        id: "a6379139-f751-49da-a39f-b69d438152fc",
        description:
          'Talk Hewg about Roderika again. Select the "It\'s what she wants" dialogue option.',
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
    id: "211ce6dd-6250-4c34-aae9-e84787089229",
    name: "Rya",
    url: "https://eldenring.wiki.fextralife.com/Rya",
    requirements: [
      {
        id: "3b9b7be2-5c63-49ca-802d-ca0aff4990a8",
        description:
          "Find Rya in a pavilion near the Birdseye Telescope, north of Laskyar ruins. Exhaust her dialogue and she'll request you retrieve her necklace.",
      },
      {
        id: "9a24d2b5-f878-4609-b74a-c309c7b32c90",
        description:
          "Buy Rya's Necklace for 1000 Runes from Blackguard Big Boggart at the Boilprawn Shack nearby.",
        url: "https://eldenring.wiki.fextralife.com/Blackguard+Big+Boggart",
      },
      {
        id: "0db11de2-fc14-46ba-a96f-14f6b2c59484",
        description:
          "Return her necklace at the pavilion and she'll give you Volcano Manor Invitation and clues to both ways to reach Altus Plateau.",
      },
      {
        id: "b614b24d-76f3-476b-9893-b485d7d5e41b",
        description:
          "Upon reaching Altus Plateau, Rya will be there (in a different location depending on which route you originally took). Talk to her and she'll warp you to Volcano Manor.",
      },
      {
        id: "604bfff5-64c2-4085-ac7a-05a5378123d3",
        description:
          "Complete the first Volcano Manor request (Old Knight Istvan).",
        url: "https://eldenring.wiki.fextralife.com/Old+Knight+Istvan",
      },
      {
        id: "77f82c49-5b92-4b94-a483-23f5c4bec8a9",
        description:
          "Return to Rya in another room of Volcano Manor, across the hall, in a slightly different form.",
      },
      {
        id: "c92edd4d-d319-4b74-a456-2f074b119ac3",
        description:
          "Complete the second Volcano Manor request (Rileigh the Idle).",
      },
      {
        id: "610270d1-7e85-4510-b336-d95143c4e1e2",
        description:
          "Return to Zorayas and follow her clues; roll into the illusory wall in the same room, then reach the Prison Town Church Site of Grace.",
      },
      {
        id: "f1ed00bf-6838-43fb-9199-1d05350921e9",
        description: "Return to Zorayas and report what you've seen.",
      },
      {
        id: "1c2f642d-0dd6-46a3-871b-cd887f1fd395",
        description:
          '(Optional) Talk to Tanith and ask about "Zorayas\' Troubles."',
      },
      {
        id: "6e538d21-b4d0-4b77-b4c4-91467e59b190",
        description:
          "Defeat the Godskin Noble boss in Temple of Eiglay and get the Serpent's Amnion.",
      },
      {
        id: "eb06c41e-1f68-4a3d-b0bc-3f64b1577467",
        description:
          "Give the Serpent's Amnion to Zorayas. She will leave the manor area.",
      },
      {
        id: "1c5f316e-b0dc-40e2-8157-f94239c4594b",
        description:
          '(Optional) Speak with Tanith and select "Zorayas Absence" to obtain the Tonic of Forgetfulness.',
      },
      {
        id: "82a61d47-8dd9-4730-9cea-482cf351f2ca",
        description:
          "Locate Rya within the Volcano Manor legacy dungeon and speak with her.",
      },
      {
        id: "a5c233be-6bb8-465c-adc4-c3df0875a6ad",
        description:
          "Now either kill Zorayas, kill Rykard and return to Zorayas, or give Zorayas the Tonic of Forgetfulness.",
      },
      {
        id: "df857757-52b1-4263-b908-eda8b2c33ed5",
        description:
          "Find Daedicar's Woe and (possibly) Zorayas' Letter, either where she was in legacy dungeon or her original location in the manor (depends on your choices).",
      },
    ],
  },
  {
    id: "16d5085f-b29c-433d-ba3e-9edfcbd02856",
    name: "Sorcerer Rogier",
    url: "https://eldenring.wiki.fextralife.com/Sorcerer+Rogier",
    requirements: [
      {
        id: "f9ff2515-7c1a-40ea-9f39-1bef1e83bb3e",
        description:
          "Talk to Rogier in Stormveil Castle, by the altar of the Chapel, before defeating Godrick.",
      },
      {
        id: "a3a77ba3-1480-4df6-9446-8a467a900293",
        description:
          "Talk to Rogier in Roundtable Hold and obtain Rogier's Rapier +8 with Ash of War: Glintblade Phalanx if you talked to him in Stormveil.",
      },
      {
        id: "b2cdf80e-a769-419d-a0c7-da59ded7b438",
        description:
          "Defeat the Lesser Ulcerated Tree Spirit in Stormveil and view the memory in front of the giant face before climbing up the ladder.",
      },
      {
        id: "1790ace6-e10c-4055-bc5d-7b872c3e184a",
        description: "Return to the Roundtable Hold and talk to Rogier.",
      },
      {
        id: "87e32e4e-50ee-42d6-a17a-9196800316a9",
        description:
          '(Optional) Interact with Fia and select "Hold Me." Exhaust the extra dialogue options to receive Knifeprint Clue.',
      },
      {
        id: "4760e7eb-e81c-4046-b1f4-d0560439d6a4",
        description:
          "Defeat a Black Knife Assassin in Black Knife Catacombs in Liurnia, behind an illusory wall to obtain Black Knifeprint.",
      },
      {
        id: "0c9ee6c6-8551-497c-ae3e-d2860a86eeea",
        description:
          "Return the Black Knifeprint to Rogier at Roundtable Hold. Reload the area and talk to Rogier; he'll send you to Ranni.",
      },
      {
        id: "68fdff3c-3f73-44f9-8af5-9ac6d48d7002",
        description:
          "Talk to Ranni in the Three Sister's area of Liurnia, north of Caria Manor, and she will tell you to leave.",
      },
      {
        id: "023f4206-3f97-4a72-ba99-ebb6cd6d68e2",
        description:
          "Talk to Rogier again at Roundtable Hold and he suggests you become a vassal of Ranni's.",
      },
      {
        id: "b448767f-e657-4371-ae4f-411f1697c4ca",
        description: "Return to Ranni to begin her questline.",
      },
      {
        id: "b1005351-0da4-448c-84da-102380362180",
        description:
          "Returning to Rogier and he will tell the player he is beginning to fall asleep.",
      },
      {
        id: "0a5f9d28-91e2-49de-9427-bb9ea6d6f8f5",
        description: "Reload the area and Rogier will now be asleep.",
      },
      {
        id: "f68d47be-1b74-44cb-ab6b-ff83a9abbbef",
        description:
          "Reload the area a few times, or activate a new Grace, and Rogier will die, leaving Rogier's Bell Bearing, Rogier's Set, and Rogier's Rapier (if you didn't receive it before), as well as Rogier's Letter.",
      },
    ],
  },
  {
    id: "92e082f1-8051-45a4-b200-29312b8d127c",
    name: "Sorceress Sellen",
    url: "https://eldenring.wiki.fextralife.com/Sorceress+Sellen",
    requirements: [
      {
        id: "2ab188e3-bde1-4ef0-a370-a6c8200962e2",
        description:
          'Talk to Sellen at the Waypoint Ruins Cellar grace and select the "I want to learn sorcery" dialogue option.',
      },
      {
        id: "c5a10978-9a21-4ff9-b694-5870ada89448",
        description:
          "Get the Comet Azur spell at the Primeval Sorcerer Azur grace.",
      },
      {
        id: "9f1f9f36-b74d-4b06-8eaf-b01ca661da0c",
        description: `Talk to Sellen at the Waypoint Ruins Cellar grace and select the "Let us journey together" dialogue option. You will receive the Sellian Sealbreaker key.`,
      },
      {
        id: "1b780037-5750-4a4c-a2ba-a43adeeab76d",
        description:
          "Find Lusat in the Sellia Hideaway and get the Stars of Ruin spell.",
      },
      {
        id: "e9846b5d-3f41-47e4-aa12-36d99c40e2af",
        description:
          "Talk to Sellen at the Waypoint Ruins Cellar grace about her request and about Lusat's location.",
      },
      {
        id: "092a68fc-f94b-4bcc-83b7-b32fdf95f60e",
        description:
          "Talk to Sellen in the Witchbane Ruins where she is shackled. You will receive Sellen's Primal Glintstone.",
      },
      {
        id: "84a4d926-1cc5-46f3-a176-9699af034b8d",
        description:
          "Transplant Sellen's primal glintstone in the puppet in Seluvis's Secret Puppet Room near the Ranni's Rise grace.",
      },
      {
        id: "b8fd1fc9-a2a3-4251-8829-5486c1092b10",
        description:
          "Talk to Witch-Hunter Jerren after defeating Radahn in the chapel near the Chamber Outside the Plaza grace.",
      },
      {
        id: "76ca7b65-8630-4ca7-ab42-0b60f7b7b26f",
        description:
          "Talk to Witch-Hunter Jerren at the Witchbane Ruins where Sellen's dead body is shackled.",
      },
      {
        id: "065bb415-b30b-42ae-9a81-09aed46b4732",
        description:
          "Assist or challenge Sellen near the Raya Lucaria Grand Library grace.",
      },
      {
        id: "4ea19246-09c3-4ce4-87d9-39019d398c2b",
        description:
          "After defeating either Sellen or Witch-Hunter Jerren, collect their respective rewards.",
      },
    ],
  },
  {
    id: "3b3bfcf4-8b9c-4e14-9e0f-c078cd88e79c",
    name: "Tanith",
    url: "https://eldenring.wiki.fextralife.com/Tanith",
    requirements: [
      {
        id: "31eb2092-b9c7-4128-a3da-65e115d33aaa",
        description:
          'Get to Volcano Manor and talk to Tanith. Answer "Yes" when asked to join the family and receive the Drawing-Room Key.',
      },
      {
        id: "2cb59cb6-3b89-4cad-aa76-437acf4f8385",
        description:
          "Enter a room nearby with the key and find Letter from Volcano Manor (and Recusant Finger) on the long table near Knight Bernahl.",
      },
      {
        id: "3d3f2146-ed29-4088-9aed-309abf87a546",
        description:
          "Return to Tanith and receive the first Volcano Manor request.",
      },
      {
        id: "06fed86d-1d56-4643-a6d4-9169b141c077",
        description: "Invade and kill Old Knight Istvan in Limgrave.",
        url: "https://eldenring.wiki.fextralife.com/Old+Knight+Istvan",
      },
      {
        id: "2e0f8a9f-badb-4a4e-880e-2d1de9480d06",
        description: "Return to Tanith and receive the Magma Shot Incantation.",
      },
      {
        id: "ac9bb555-3b98-405a-82f0-dff772f22442",
        description:
          "Reload the area and retrieve another Letter from Volcano Manor on the table in the adjoining room.",
      },
      {
        id: "f3a6b425-3348-4019-8e44-75a5f0824cb9",
        description: "Invade and kill Rileigh the Idle in Altus Plateau.",
        url: "https://eldenring.wiki.fextralife.com/Rileigh+the+Idle",
      },
      {
        id: "72ef23cd-9640-4b30-888e-bb6ad06f4b03",
        description: "Return to Tanith and receive Serpentbone Blade.",
      },
      {
        id: "063560b8-58c9-4a36-bba9-8fbaf0ecb836",
        description:
          "Reload the area and retrieve Red Letter in the usual location.",
      },
      {
        id: "8873c32c-642e-48ef-8eaa-362080337b4c",
        description:
          "Invade and kill Juno Hoslow, Knight of Blood in Mountaintops of the Giants.",
        url: "https://eldenring.wiki.fextralife.com/Juno+Hoslow,+Knight+of+Blood",
      },
      {
        id: "62e56a03-7f89-4def-9384-75aac2f74e5f",
        description: "Return to Tanith and receive Taker's Cameo.",
      },
      {
        id: "6e4388a4-ba17-48b9-948f-7ee9092816f4",
        description:
          "Tanith will now offer to take you to the lord of the manor. Ensure all other Volcano Manor quests are done before continuing.",
      },
      {
        id: "ec00a7f7-b713-4c37-8c52-c4da6ae55f73",
        description:
          "Accept Tanith's offer, or reach the Audience Pathway through the Volcano Manor legacy dungeon.",
      },
      {
        id: "02cbeb3b-9faf-4fa6-80d4-0d73227f3b2e",
        description: "Defeat Rykard, Lord of Blasphemy.",
        url: "https://eldenring.wiki.fextralife.com/Rykard,+Lord+of+Blasphemy",
      },
      {
        id: "5807b72b-aab4-4fcc-b728-61589be8d778",
        description: "Speak to Tanith one more time.",
      },
      {
        id: "d3fd5438-ae59-4847-9f8e-a58a63997d2f",
        description:
          "(Optional) Progress Patches quest line and receive the Dancer's Castanets.",
      },
      {
        id: "ba1d15fa-d49c-4bfc-b95a-2f105b66e699",
        description: "Return to Rykard, Lord of Blasphemy Site of Grace.",
      },
      {
        id: "e2488430-054b-47e3-98da-935c70377471",
        description:
          "(Optional) Offer the Dancer's Castanets to Tanith. She'll refuse.",
        url: "https://eldenring.wiki.fextralife.com/Dancer's+Castanets",
      },
      {
        id: "3ef29321-fdc6-416e-b08b-a13d5539ae94",
        description: "Kill Tanith and loot the Consort's Set.",
      },
      {
        id: "e4b0b2fc-7a40-4af3-94b6-1e65db9e3eac",
        description:
          "Tanith's Knight will invade. Kill and loot the Knight for Aspect of the Crucible: Breath.",
      },
    ],
  },
  {
    id: "8aa800d3-ea19-431a-9aca-3f0e8e4a01f3",
    name: "Thops",
    url: "https://eldenring.wiki.fextralife.com/Thops",
    requirements: [
      {
        id: "08d426d2-d027-4dec-abd1-d11994971311",
        description:
          "Talk to Thops at Church of Irith in Liurnia. Donate 10 Runes and exhaust his dialogue.",
      },
      {
        id: "e237056b-551b-4019-83e2-2e5fc1ae2c84",
        description:
          "Obtain (a second) Academy Glintstone Key hidden within Raya Lucaria, in the chandelier in the Church of the Cuckoo.",
        url: "https://eldenring.wiki.fextralife.com/Academy+Glintstone+Key",
      },
      {
        id: "cbad4533-57f7-4348-9c00-19a34629c49c",
        description:
          "Return to Thops and give him the extra Academy Glintstone Key.",
      },
      {
        id: "e70809dc-6c49-490f-b202-d78cbda88063",
        description:
          "Find Thops's corpse in a chair outside Schoolhouse Classroom with Thops's Barrier, Academy Glintstone Staff, and Thops's Bell Bearing.",
      },
    ],
  },
  {
    id: "1f28d880-77dd-487c-a056-60b6fbf6df20",
    name: "White Mask Varré",
    url: "https://eldenring.wiki.fextralife.com/White+Mask+Varre",
    requirements: [
      {
        id: "b049cb65-103b-4811-b218-1bd13ffdd9e5",
        description: "Talk to Varré near The First Step grace.",
        mapLink: "https://eldenring.wiki.fextralife.com/Interactive+Map?id=457",
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
        id: "0aa93d5a-f424-4ea9-ae4d-d976dfc25dac",
        description: "Retrieve the Bravo! Gesture near The First Step grace.",
      },
      {
        id: "05cdc691-f29a-4425-977c-efa190d5a58a",
        description:
          "Talk to him at the Rose Church in Liurnia of the Lakes until you receive the Festering Bloody Finger.",
      },
      {
        id: "ba4a2aad-af54-4b99-b2ca-b0822e4baabc",
        description:
          "Use the Festering Bloody Finger three times OR defeat Magnus the Beast Claw.",
        url: "https://eldenring.wiki.fextralife.com/Magnus+the+Beast+Claw",
      },
      {
        id: "ebc0c68e-f8ca-4ee9-b601-98407c0a23fd",
        description:
          'Talk to Varré again at the Rose Church. Select the "Anoint me" dialogue option.',
      },
      {
        id: "556ed60d-fbfa-4e2d-821f-2c27aa1807df",
        description:
          "Interact with a dead maiden at the Church of Inhibition or the Chapel of Anticipation.",
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
          "Talk to Varré, who is crawling on the ground, until he dies.",
      },
    ],
  },
];
