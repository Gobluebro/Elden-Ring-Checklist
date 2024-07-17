import { rawHTMLLink } from "./listHelper";
import { ListType } from "./types";

export const CollectablesList: Array<ListType> = [
  {
    id: "98a5935f-ab86-41e7-9201-8d957aad4220",
    name: "Cracked Pot",
    url: "https://eldenring.wiki.fextralife.com/Cracked+Pot",
    requirements: [
      {
        id: "c24c0492-c9f9-43cd-b973-5717fab0ab2b",
        description:
          rawHTMLLink(
            "https://eldenring.wiki.fextralife.com/Merchant+Kal%C3%A9",
            "Purchase 3 from Merchant Kalé - Limgrave"
          ) +
          ` [${rawHTMLLink(
            "https://eldenring.wiki.fextralife.com/Interactive+Map?id=4&code=mapA",
            "Map Link"
          )}]`,
      },
      {
        id: "364050e5-3420-4de0-99c5-9021dc2d9d07",
        description:
          rawHTMLLink(
            "https://eldenring.wiki.fextralife.com/Groveside+Cave",
            "Found on a corpse - Groveside Cave - Limgrave"
          ) +
          ` [${rawHTMLLink(
            "https://eldenring.wiki.fextralife.com/interactive+map?id=6751&code=mapA",
            "Map Link"
          )}]`,
      },
      {
        id: "4bd010c9-3297-4369-aa52-32c6a5cb6356",
        description:
          rawHTMLLink(
            "https://eldenring.wiki.fextralife.com/Nomadic+Merchant+North+Limgrave",
            "Purchase 1 from Nomadic Merchant North Limgrave - Limgrave"
          ) +
          ` [${rawHTMLLink(
            "https://eldenring.wiki.fextralife.com/Interactive+Map?id=959&code=mapA",
            "Map Link"
          )}]`,
      },
      {
        id: "ff273d37-81ab-4b29-9793-37aa63f4b42e",
        description:
          rawHTMLLink(
            "https://eldenring.wiki.fextralife.com/Nomadic+Merchant+Castle+Morne+Rampart",
            "Purchase 1 from Nomadic Merchant Castle Morne Rampart - Weeping Peninsula"
          ) +
          ` [${rawHTMLLink(
            "https://eldenring.wiki.fextralife.com/Interactive+Map?id=475&code=mapA",
            "Map Link"
          )}]`,
      },
      {
        id: "2200f789-3845-420a-ab6f-0910f08f7cd6",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Interactive+Map?id=6810&code=mapA",
          "Found 2 near Secluded Cell - Stormveil Castle"
        ),
      },
      {
        id: "bd4af449-4690-431f-923e-cf6850eb39cb",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Jarburg",
          "Found on a corpse - Jarburg - Liurnia of the Lakes"
        ),
      },
      {
        id: "235bb327-2e34-4b94-93ea-ee888e78c9e8",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Jarburg",
          "Found inside a hut - Jarburg - Liurnia of the Lakes"
        ),
      },
      {
        id: "7b700216-116f-4b16-a5d2-7f3fdd024fde",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Jarburg",
          "Found on a large headstone - Jarburg - Liurnia of the Lakes"
        ),
      },
      {
        id: "45a225a1-7e35-45e3-80f4-7bcc61c91c6e",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Interactive+Map?id=6546&code=mapA",
          "Found on a corpse - Debate Parlor - Raya Lucaria Academy"
        ),
      },
      {
        id: "1aa769f7-c8d2-4a2d-a087-61c0b3d51c71",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/interactive+map?id=1532&code=mapA",
          "Royal Moongazing Grounds - Caria Manor"
        ),
      },
      {
        id: "6a956e63-c5ca-48d7-a986-72670254bac8",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Interactive+Map?id=5435&code=mapA",
          "Found on a tree branch - Minor Erdtree (Caelid)"
        ),
      },
      {
        id: "bda0113b-ec50-4a72-a45a-57372e0536f5",
        description:
          rawHTMLLink(
            "https://eldenring.wiki.fextralife.com/Nomadic+Merchant+Caelid+South",
            "Purchase 1 from Nomadic Merchant Caelid South - Caelid"
          ) +
          ` [${rawHTMLLink(
            "https://eldenring.wiki.fextralife.com/interactive+map?id=1158&code=mapA",
            "Map Link"
          )}]`,
      },
      {
        id: "1b1c73dd-c7e5-43a0-900f-5c52e6b461a1",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Interactive+Map?id=6811&code=mapA",
          "Find 4 (2 if keepsake was Cracked Pot) at Auriza Side Tomb - Capital Outskirts"
        ),
      },
      {
        id: "1fc7057e-1980-4fe6-9fb7-829b56ee57c0",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Interactive+Map?id=3851&code=mapA",
          "Found on a corpse - Avenue Balcony - Leyndell, Royal Capital"
        ),
      },
    ],
  },
  {
    id: "8bf44a9f-3f0c-4ca0-9045-fc7a11e36932",
    name: "Crystal Tears",
    url: "https://eldenring.wiki.fextralife.com/Crystal+Tears",
    // not actually in alphabetically order
    // I don't have all of them currently to check the true order
    requirements: [
      {
        id: "a0e39f8f-9ac0-47b8-846a-3b70cf23e411",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Bloodsucking+Cracked+Tear",
          "Bloodsucking Cracked Tear"
        ),
        isDLC: true,
      },
      {
        id: "b5f848b8-7f06-4c09-8a13-9d9d6853db45",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Cerulean+Crystal+Tear",
          "Cerulean Crystal Tear"
        ),
      },
      {
        id: "0ed2c97d-0188-41d2-bc00-b8ff460f07e4",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Cerulean+Hidden+Tear",
          "Cerulean Hidden Tear"
        ),
      },
      {
        id: "2d6d1c22-88b1-4c56-852e-169f74448dba",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Cerulean-Sapping+Cracked+Tear",
          "Cerulean-sapping Cracked Tear"
        ),
        isDLC: true,
      },
      {
        id: "a33ef947-4068-4393-8157-d866accc6bf5",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Crimson+Bubbletear",
          "Crimson Bubbletear"
        ),
      },
      {
        id: "36be3c2b-ce73-4f6d-a3ad-f54b1c39586d",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Crimson+Crystal+Tear",
          "Crimson Crystal Tear"
        ),
      },
      {
        id: "67ff796e-fccb-45c9-be01-de956cd361be",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Crimson-Sapping+Cracked+Tear",
          "Crimson-sapping Cracked Tear"
        ),
        isDLC: true,
      },
      {
        id: "9991e6c4-7fde-4142-8efc-78a034173fba",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Crimsonburst+Crystal+Tear",
          "Crimsonburst Crystal Tear"
        ),
      },
      {
        id: "6d8e5752-9f73-4a5b-b37c-f081aac0e612",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Crimsonburst+Dried+Tear",
          "Crimsonburst Dried Tear"
        ),
        isDLC: true,
      },
      {
        id: "6c482080-f5ee-478c-9314-2417714d230c",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Crimsonspill+Crystal+Tear",
          "Crimsonspill Crystal Tear"
        ),
      },
      {
        id: "ed02410d-7ce4-4d60-bf43-35e96b435e24",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Crimsonwhorl+Bubbletear",
          "Crimsonwhorl Bubbletear"
        ),
      },
      {
        id: "b3a49933-6ef5-44ea-8038-4fb128e94ea0",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Deflecting+Hardtear",
          "Deflecting Hardtear"
        ),
        isDLC: true,
      },
      {
        id: "85c221e9-0fc6-48b4-b1fb-15baeb8e817d",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Dexterity-knot+Crystal+Tear",
          "Dexterity-knot Crystal Tear"
        ),
      },
      {
        id: "f8810d62-b54c-4eba-a69f-999bbcaaa33f",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Faith-knot+Crystal+Tear",
          "Faith-knot Crystal Tear"
        ),
      },
      {
        id: "79c261c0-5f9c-4528-9db4-625ef7a075cf",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Flame-Shrouding+Cracked+Tear",
          "Flame-shrouding Cracked Tear"
        ),
      },
      {
        id: "9ee22f08-6343-4683-b125-4a025649efc2",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Glovewort+Crystal+Tear",
          "Glovewort Crystal Tear"
        ),
        isDLC: true,
      },
      {
        id: "ac6846cc-dae4-4ba8-b1cd-485637da8c34",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Greenburst+Crystal+Tear",
          "Greenburst Crystal Tear"
        ),
      },
      {
        id: "5330ad03-57cc-4a8c-829a-91713eec524b",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Greenspill+Crystal+Tear",
          "Greenspill Crystal Tear"
        ),
      },
      {
        id: "6136e523-63da-49dc-ac8e-a8f019fa3907",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Holy-Shrouding+Cracked+Tear",
          "Holy-shrouding Cracked Tear"
        ),
      },
      {
        id: "5953c052-27d5-440e-b03f-506945479cfb",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Intelligence-knot+Crystal+Tear",
          "Intelligence-knot Crystal Tear"
        ),
      },
      {
        id: "72b90965-0033-4e36-99d5-85beaac2eaa1",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Leaden+Hardtear",
          "Leaden Hardtear"
        ),
      },
      {
        id: "bdcfb739-e935-400e-b28d-2bfa781c0c40",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Lightning-Shrouding+Cracked+Tear",
          "Lightning-shrouding Cracked Tear"
        ),
      },
      {
        id: "fc8258b1-7941-42f6-aad9-29d28203b291",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Magic-Shrouding+Cracked+Tear",
          "Magic-shrouding Cracked Tear"
        ),
      },
      {
        id: "3b860d1d-375d-4cf2-8b06-b1d096cc8eb9",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Oil-Soaked+Tear",
          "Oil-soaked Tear"
        ),
        isDLC: true,
      },
      {
        id: "66e11134-495d-4871-bc8f-ee8fd1171504",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Opaline+Bubbletear",
          "Opaline Bubbletear"
        ),
      },
      {
        id: "8c3a8075-76b3-40f9-9004-2191b6ce02fb",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Opaline+Hardtear",
          "Opaline Hardtear"
        ),
      },
      {
        id: "73482720-2787-4970-b44c-e2eb9d786d97",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Purifying+Crystal+Tear",
          "Purifying Crystal Tear"
        ),
      },
      {
        id: "14dee1f9-6d36-4ef1-bac8-a9f96be61703",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Ruptured+Crystal+Tear",
          "Ruptured Crystal Tear"
        ),
      },
      {
        id: "eb9a1382-a3bd-4ac2-ab76-4ee03538dd36",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Speckled+Hardtear",
          "Speckled Hardtear"
        ),
      },
      {
        id: "5df7bf88-7f5c-4d31-8f85-86bc4f479fda",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Spiked+Cracked+Tear",
          "Spiked Cracked Tear"
        ),
      },
      {
        id: "e82b0b64-d491-4c01-b4ae-18726505031d",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Stonebarb+Cracked+Tear",
          "Stonebarb Cracked Tear"
        ),
      },
      {
        id: "7850b04e-4972-4ff7-938f-dc6d35f2684f",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Strength-knot+Crystal+Tear",
          "Strength-knot Crystal Tear"
        ),
      },
      {
        id: "0d59229c-3408-4b6a-8d58-57338512c4c8",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Thorny+Cracked+Tear",
          "Thorny Cracked Tear"
        ),
      },
      {
        id: "ec894f70-7348-408d-a297-723883ba8338",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Twiggy+Cracked+Tear",
          "Twiggy Cracked Tear"
        ),
      },
      {
        id: "46788875-1a73-45cd-8db6-139ef682a3ef",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Viridian+Hidden+Tear",
          "Viridian Hidden Tear"
        ),
        isDLC: true,
      },
      {
        id: "4cb722dd-28dc-4e2c-81dc-85ff8277bc6a",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Windy+Crystal+Tear",
          "Windy Crystal Tear"
        ),
      },
      {
        id: "6c28bf48-c557-4c3c-b350-5522c5f9ae67",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Winged+Crystal+Tear",
          "Winged Crystal Tear"
        ),
      },
    ],
  },
  {
    id: "d190e862-59d4-4868-85db-82e80f3d8807",
    name: "Gestures", // not counting automatically received gestures
    url: "https://eldenring.wiki.fextralife.com/Gestures",
    // ordered by how they appear in game
    requirements: [
      {
        id: "b8fb8b2a-9240-4e59-923e-e95ab208fb5a",
        description: "Calm Down!",
      },
      {
        id: "9ece691c-c214-49bd-84ac-72a3dba28b73",
        description: "Casual Greeting",
      },
      {
        id: "8f86b3f0-b884-4780-be51-7cefa98d65bb",
        description: "Bravo!",
      },
      {
        id: "aed47a2c-40a6-42e2-ab44-61dbafb55bee",
        description: "Strength!",
      },
      {
        id: "aac81107-51db-46ca-a88e-0cf99cae6c7d",
        description: "Triumphant Delight",
      },
      {
        id: "5e6e548e-e1bd-421f-bf23-014e93b73998",
        description: "Fancy Spin",
      },
      {
        id: "bd75d508-eef9-4c67-8fe0-e648b2ff13f6",
        description: "Nod In Thought",
      },
      {
        id: "fb3b0443-df67-445a-93e8-13709fba6065",
        description: "Finger Snap",
      },
      {
        id: "defe98bf-073a-43b3-8e3a-a54b0d3221fe",
        description: "Heartening Cry",
      },
      {
        id: "6a5c8397-e92c-426f-8df7-572679c575aa",
        description: "May the Best Win",
        isDLC: true,
      },
      {
        id: "e36b5e25-ab07-44c0-914d-3e4df5d40ff7",
        description: "Polite Bow",
      },
      {
        id: "7a152b07-3bf5-4d6d-aeba-f93ddd95b6be",
        description: "As You Wish",
      },
      {
        id: "529f312a-6dc1-4e22-b0f6-4810b18dd8ea",
        description: "My Thanks",
      },
      {
        id: "4f645ddd-379d-4fac-a2cb-27c0c8ea7a08",
        description: "Curtsy",
      },
      {
        id: "42392369-513d-47c9-b0c9-b47867eb9802",
        description: "Reverential Bow",
      },
      {
        id: "18e85676-9415-42be-9270-9be1c3ffa9be",
        description: "My Lord",
      },
      {
        id: "34ca5145-4b68-44de-bad2-3786d9a1beb4",
        description: "What Do You Want?",
      },
      {
        id: "68d6c306-9b3c-4cff-9e69-0c16266d897a",
        description: "By My Sword",
      },
      {
        id: "38c580f0-0887-440e-826a-ffdfe1732721",
        description: "Hoslow's Oath",
      },
      {
        id: "24d8deec-1d1e-47c3-ade4-2779fa9061c7",
        description: "Fire Spur Me",
      },
      {
        id: "31a13275-3ba3-4f23-8780-ac3581064a56",
        description: "The Ring",
      },
      {
        id: "1ed73fa1-be86-470a-b991-bef751b3edb1",
        description: "Ring of Miquella",
        isDLC: true,
      },
      {
        id: "84189621-279f-4ee4-9e74-c0aa53c62467",
        description: "Erudition",
      },
      {
        id: "720ea5f4-cec7-4e74-9422-4faa48b5fb7a",
        description: "Prayer",
      },
      {
        id: "968bb31b-7ceb-4adf-922e-adedd56164d8",
        description: "Desperate Prayer",
      },
      {
        id: "68ddaa81-e1a0-4529-8e52-ed8f9e7c81e9",
        description: "Rapture",
      },
      {
        id: "bd2387b8-7953-4fed-a6b8-0566d2e3a962",
        description: "Inner Order",
      },
      {
        id: "3ab4fa19-d98d-4797-8b7b-840b8461295e",
        description: "Outer Order",
      },
      {
        id: "759347ef-3cfd-4d2f-8e9e-58e7adc9b71e",
        description: "Golden Order Totality",
      },
      {
        id: "354817e3-bfa7-4322-8d4c-e8c79f1870aa",
        description: "Extreme Repentance",
      },
      {
        id: "93fe4624-70a4-49b6-9f02-cddde16f479b",
        description: "Grovel for Mercy",
      },
      {
        id: "318934de-0a39-46c0-bb42-dc63d3274b4a",
        description: "Crossed Legs",
      },
      {
        id: "4059a489-a020-4593-a9ba-f94e42d3397c",
        description: "Dozing Cross-Legged",
      },
      {
        id: "e2d9fff5-cfef-41e8-bf19-bd82d99eb206",
        description: "Sitting Sideways",
      },
      {
        id: "8d3afe95-f900-4cf3-8def-08c0a4d43061",
        description: "Patches' Crouch",
      },
      {
        id: "83416472-18ed-4fcf-a781-446e841db063",
        description: "Balled Up",
      },
      {
        id: "0cbbba8b-3dae-40f6-8483-09df2efbe8be",
        description: "Spread Out",
      },
      {
        // not in correct order
        id: "ab406ebc-c4fc-4438-bcd5-dde2fd19d227",
        description: "The Two Fingers",
        isDLC: true,
      },
      {
        // not in correct order
        id: "8c750644-dcc9-4d6f-809e-86dc68c73857",
        description: "Let Us Go Together",
        isDLC: true,
      },
      {
        // not in correct order
        id: "9678bbd8-1f6e-454f-bea0-15773ae02d70",
        description: "O Mother",
        isDLC: true,
      },
    ],
  },
  {
    id: "4cc71681-af5e-49d0-a86d-3fe59782bb7e",
    name: "Whetblades",
    url: "https://eldenring.wiki.fextralife.com/Whetblades",
    requirements: [
      {
        id: "cda3a154-7924-431f-94c7-fba14b403b9b",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Whetstone+Knife",
          "Whetstone Knife (Gatefront Ruins)"
        ),
      },
      {
        id: "0954d6fc-1b67-479d-9c10-5e0fc9ca12f6",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Iron+Whetblade",
          "Iron Whetblade (Stormveil Castle)"
        ),
      },
      {
        id: "a8ab3b24-45b0-4045-82b9-e9c0f102a2fd",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Glintstone+Whetblade",
          "Glintstone Whetblade (Raya Lucaria Academy)"
        ),
      },
      {
        id: "5b98aace-0c7f-4544-b62d-a911552a337f",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Red-Hot+Whetblade",
          "Red-hot Whetblade (Redmane Castle)"
        ),
      },
      {
        id: "72a8e4f7-6331-4b52-bd97-491be6e4033a",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Sanctified+Whetblade",
          "Sanctified Whetblade (Fortified Manor, Leyndell)"
        ),
      },
      {
        id: "1adc93c0-7042-4147-ab2c-3af282696b74",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Black+Whetblade",
          "Black Whetblade (Nokron, Eternal City)"
        ),
      },
    ],
  },
  {
    id: "4934833c-c363-4ecf-a238-cea2bccece33",
    name: "Bell Bearings",
    url: "https://eldenring.wiki.fextralife.com/Bell+Bearings",
    requirements: [
      {
        id: "d31a2e70-448c-4590-b2c2-f3593b74abea",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Kalé's+Bell+Bearing",
          "Kalé's Bell Bearing - Limgrave - Church of Elleh"
        ),
      },
      {
        id: "5dc6a5ae-9917-4fdd-821c-0396df8825dd",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Nomadic+Merchant's+Bell+Bearing+(1)",
          "Nomadic Merchant's Bell Bearing [1] - Limgrave - East of Saintsbridge"
        ),
      },
      {
        id: "957d51f6-8bd5-49c3-b744-bf1e64b1cdb6",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Nomadic+Merchant's+Bell+Bearing+(2)",
          "Nomadic Merchant's Bell Bearing [2] - Limgrave - Found on the road between the Mistwood Ruins and Fort Haight"
        ),
      },
      {
        id: "e9176d4e-1c0a-4846-87c2-65a789c2d274",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Nomadic+Merchant's+Bell+Bearing+(3)",
          "Nomadic Merchant's Bell Bearing [3] - Limgrave - Underneath the rock structure southeast of the Coastal Cave"
        ),
      },
      {
        id: "eda59cbd-d7b3-4160-a5ac-07266faae379",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Nomadic+Merchant's+Bell+Bearing+(4)",
          "Nomadic Merchant's Bell Bearing [4] - Limgrave - Castle Morne Rampart"
        ),
      },
      {
        id: "1d2edbc0-378d-44e9-ac98-0705b3ea76e5",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Nomadic+Merchant's+Bell+Bearing+(5)",
          "Nomadic Merchant's Bell Bearing [5] - Liurnia - Liurnia Lake Shore"
        ),
      },
      {
        id: "8ed3f896-19d0-4506-98fa-eb470794b204",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Nomadic+Merchant's+Bell+Bearing+(6)",
          "Nomadic Merchant's Bell Bearing [6] - Liurnia - Under the rocky overpass just north of Bellum Church"
        ),
      },
      {
        id: "70ff91ad-0ec8-49a4-92b2-33c5e7fbab6a",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Nomadic+Merchant's+Bell+Bearing+(7)",
          "Nomadic Merchant's Bell Bearing [7] - Altus Plateau - Sitting by a fire at the side of the broken greatbridge, near the Forest-Spanning Greatbridge grace."
        ),
      },
      {
        id: "a0a69649-9fcb-46be-aeb2-ad1bb99efff8",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Nomadic+Merchant's+Bell+Bearing+(8)",
          "Nomadic Merchant's Bell Bearing [8] - Mt. Gelmir - East of the Ninth Mt. Gelmir Campsite grace, resting on a ledge halfway up the mountain"
        ),
      },
      {
        id: "829a2a40-28c6-4faa-8aa8-12af994105c2",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Nomadic+Merchant's+Bell+Bearing+(9)",
          "Nomadic Merchant's Bell Bearing [9] - Caelid - Sitting by a campfire east of the Astray from Caelid Highway North grace"
        ),
      },
      {
        id: "481a67e6-1d02-4d43-83b5-4c69aebe6be5",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Nomadic+Merchant's+Bell+Bearing+(10)",
          "Nomadic Merchant's Bell Bearing [10] - Caelid - South-west of the Southern Aeonia Swamp Bank grace"
        ),
      },
      {
        id: "a5074289-1ba9-4c92-acb6-5c113b2baa3b",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Isolated+Merchant's+Bell+Bearing+(1)",
          "Isolated Merchant's Bell Bearing [1] - Weeping Peninsula - Isolated Merchant's Shack"
        ),
      },
      {
        id: "9a137a44-b9f4-4aad-a46c-bb674e986a90",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Isolated+Merchant's+Bell+Bearing+(2)",
          "Isolated Merchant's Bell Bearing [2] - Liurnia of the Lakes - Outside of the Raya Lucaria Academy"
        ),
      },
      {
        id: "afeb1ed0-eb11-4dce-93f1-7f4be93cacc4",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Isolated+Merchant's+Bell+Bearing+(3)",
          "Isolated Merchant's Bell Bearing [3] - Dragonbarrow - Isolated Merchant's Shack"
        ),
      },
      {
        id: "2b01231a-a039-4515-8f56-5aba622a1b93",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Hermit+Merchant's+Bell+Bearing+(1)",
          "Hermit Merchant's Bell Bearing [1] - Leyndell - Hermit Merchant's Shack"
        ),
      },
      {
        id: "9aed955f-b589-44ce-90c8-1ea74b352c7c",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Hermit+Merchant's+Bell+Bearing+(2)",
          "Hermit Merchant's Bell Bearing [2] - Mountaintops of the Giants - South of Stargazers' Ruins beneath the cliffs"
        ),
      },
      {
        id: "d0731b26-3ff5-4a2b-86d5-89cbdd68a021",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Hermit+Merchant's+Bell+Bearing+(3)",
          "Hermit Merchant's Bell Bearing [3] - Ainsel River - In the far end of a large stone ruin in the south-west"
        ),
      },
      {
        id: "c6bbc907-47da-4169-b983-b72ba1480d94",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Abandoned+Merchant's+Bell+Bearing",
          "Abandoned Merchant's Bell Bearing - Siofra River - Playing music by an unlit campfire"
        ),
      },
      {
        id: "9e0d378b-7343-43ab-b741-59fc5afc6012",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Imprisoned+Merchant's+Bell+Bearing",
          "Imprisoned Merchant's Bell Bearing - Mohgwyn Palace - Mohgwyn Dynasty Mausoleum"
        ),
      },
      {
        id: "77fbb2af-9d1b-4be3-9870-9d68b967fbe3",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Smithing-Stone+Miner's+Bell+Bearing+(1)",
          "Smithing-Stone Miner's Bell Bearing [1] - Dropped by the Crystalian Boss at the end of Raya Lucaria Crystal Tunnel"
        ),
      },
      {
        id: "b4a895e9-6839-432f-bfc5-958c1670f43d",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Smithing-Stone+Miner's+Bell+Bearing+(2)",
          "Smithing-Stone Miner's Bell Bearing [2] - Found in a chest at the first secret area inside the Sealed Tunnel."
        ),
      },
      {
        id: "54da7b4c-7fcd-45ec-b35a-8f9076520238",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Smithing-Stone+Miner's+Bell+Bearing+(3)",
          "Smithing-Stone Miner's Bell Bearing [3] - Mountaintop of the Giants - Zamor Ruins"
        ),
      },
      {
        id: "32830176-3f11-47bf-8f34-ab395d4a9d70",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Smithing-Stone+Miner's+Bell+Bearing+(4)",
          "Smithing-Stone Miner's Bell Bearing [4] - Dropped by The Godskin Duo in Crumbling Farum Azula"
        ),
      },
      {
        id: "2c6a510b-8f81-4497-afa0-a926505f111c",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Somberstone+Miner's+Bell+Bearing+(1)",
          "Somberstone Miner's Bell Bearing [1] - Dropped by the Fallingstar Beast in the Sellia Crystal Tunnel"
        ),
      },
      {
        id: "0b097d31-8fa8-4f62-bda2-097b027b91c6",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Somberstone+Miner's+Bell+Bearing+(2)",
          "Somberstone Miner's Bell Bearing [2] - Dropped by the Crystalian Spear and Ringblade boss in the Altus Tunnel"
        ),
      },
      {
        id: "82a4e726-ea01-4450-86ee-e6dcd10ae935",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Somberstone+Miner's+Bell+Bearing+(3)",
          "Somberstone Miner's Bell Bearing [3] - Mountaintops of the Giants - First Church of Marika"
        ),
      },
      {
        id: "c60a3805-f605-4a93-a918-a0f5a01e7862",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Somberstone+Miner's+Bell+Bearing+(4)",
          "Somberstone Miner's Bell Bearing [4] - Crumbling Farum Azula - Near the Tempest-Facing Balcony grace"
        ),
      },
      {
        id: "055a17ae-8019-48ca-94be-8ef95f20dbbe",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Somberstone+Miner's+Bell+Bearing+(5)",
          "Somberstone Miner's Bell Bearing [5] - Crumbling Farum Azula - Small Church near the Great Bridge grace"
        ),
      },
      {
        id: "cc3b68db-f121-441e-9804-26785a69af57",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Glovewort+Picker's+Bell+Bearing+(1)",
          "Glovewort Picker's Bell Bearing [1] - Dropped by Erdtree Burial Watchdog in Wyndham Catacombs"
        ),
      },
      {
        id: "6cd5999a-45a7-4623-ac59-879e2b158da7",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Glovewort+Picker's+Bell+Bearing+(2)",
          "Glovewort Picker's Bell Bearing [2] - Dropped by Ulcerated Tree Spirit in Giants' Mountaintop Catacombs."
        ),
      },
      {
        id: "c22a1031-e22f-4b8a-b920-f6f8c7f82785",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Glovewort+Picker's+Bell+Bearing+(3)",
          "Glovewort Picker's Bell Bearing [3] - Crumbling Farum Azula - Under a gazebo next to the lake"
        ),
      },
      {
        id: "7a48adbd-3b75-4c53-8e9e-48d909c1753b",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Ghost-Glovewort+Picker's+Bell+Bearing+(1)",
          "Ghost-Glovewort Picker's Bell Bearing [1] - Nokron, Eternal City - Lying at the base of a gazebo"
        ),
      },
      {
        id: "902a259a-8556-4b7e-a8fb-e89612d8aef2",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Ghost-Glovewort+Picker's+Bell+Bearing+(2)",
          "Ghost-Glovewort Picker's Bell Bearing [2] - Nokstella, Eternal City - In a chest guarded by several Silver Tears with shields in the corner of a small room"
        ),
      },
      {
        id: "ae659134-a530-49e5-80db-62bf1fa54769",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Ghost-Glovewort+Picker's+Bell+Bearing+(3)",
          "Ghost-Glovewort Picker's Bell Bearing [3] - Elphael, Brace of the Haligtree - In a graveyard"
        ),
      },
      {
        id: "83f1d82f-ef30-4659-a771-d6d512577f55",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Bone+Peddler's+Bell+Bearing",
          "Bone Peddler's Bell Bearing - Defeat the Bell Bearing Hunter after nightly invasion at the Warmaster's Shack"
        ),
      },
      {
        id: "09cabed0-989c-4799-8b89-fed41fc10ef5",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Meat+Peddler's+Bell+Bearing",
          "Meat Peddler's Bell Bearing - Defeat the Bell Bearing Hunter after nightly invasion at the Church of Vows"
        ),
      },
      {
        id: "7cb6b968-e47c-46c7-ad38-3b0e9f17b27e",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Medicine+Peddler's+Bell+Bearing",
          "Medicine Peddler's Bell Bearing - Defeat the Bell Bearing Hunter after nightly invasion at the Hermit Merchant's Shack in Altus Plateau"
        ),
      },
      {
        id: "88e8375a-bcc4-4aeb-9ea8-6b86141f0695",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Gravity+Stone+Peddler's+Bell+Bearing",
          "Gravity Stone Peddler's Bell Bearing - Defeat the Bell Bearing Hunter after nightly invasion at the Isolated Merchant's Shack in Dragonbarrow"
        ),
      },
      {
        id: "e27b3d98-3667-456a-8189-3c337377bed7",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Sellen's+Bell+Bearing",
          "Sellen's Bell Bearing - Looted from Sorceress Sellen's body at Witchbane Ruins"
        ),
      },
      {
        id: "c59f372c-d904-4499-8a6f-dd2d27b32ac7",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Seluvis's+Bell+Bearing",
          "Seluvis's Bell Bearing - Looted from Seluvis' body in Seluvis's Rise after reaching the end of Ranni's questline."
        ),
      },
      {
        id: "9dd3dfd6-d23a-4fda-a069-9245243033b8",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Thops's+Bell+Bearing",
          "Thops's Bell Bearing - Looted from Thops's body"
        ),
      },
      {
        id: "1f00493a-dee4-41ff-89f4-a10533b18355",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Corhyn's+Bell+Bearing",
          "Corhyn's Bell Bearing - Obtained from Brother Corhyn at the end of Goldmask's questline"
        ),
      },
      {
        id: "69f28562-1468-4904-8f05-f27ae25789a9",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Miriel's+Bell+Bearing",
          "Miriel's Bell Bearing - Looted from Miriel, Pastor of Vows' body at the Church of Vows"
        ),
      },
      {
        id: "d6f0ee64-75d4-4dc1-98d3-7043a216f907",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/D's+Bell+Bearing",
          "D's Bell Bearing - Looted from D's body"
        ),
      },
      {
        id: "737412f6-9082-4ae3-9b2a-684fc6b5af03",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Gowry's+Bell+Bearing",
          "Gowry's Bell Bearing - Looted from Gowry's body at Gowry's Shack in eastern Caelid"
        ),
      },
      {
        id: "f1253955-ce1e-428a-bfaf-d2de219f936f",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Rogier's+Bell+Bearing",
          "Rogier's Bell Bearing - Looted from Rogier's body"
        ),
      },
      {
        id: "fc9f65b5-83ee-4563-af2e-74d1a16c2538",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Bernahl's+Bell+Bearing",
          "Bernahl's Bell Bearing - Looted from Bernahl's body at the Warmaster's Shack in Limgrave"
        ),
      },
      {
        id: "be954189-4ec0-4d29-84e7-d2a4e3dc2a24",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Iji's+Bell+Bearing",
          "Iji's Bell Bearing - Looted from Iji's body by his anvil"
        ),
      },
      {
        id: "eadc893f-475c-4fa4-ac16-613582a00b5e",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Gostoc's+Bell+Bearing",
          "Gostoc's Bell Bearing - Looted from Gostoc's body Stormveil Castle"
        ),
      },
      {
        id: "ee19ecf6-c366-40cd-81c8-ba4ffc6c7723",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Pidia's+Bell+Bearing",
          "Pidia's Bell Bearing - Looted from Pidia's body in the Caria Manor"
        ),
      },
      {
        id: "8087f93d-6b71-4ed7-a087-ee023b080f93",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Patches'+Bell+Bearing",
          "Patches' Bell Bearing - Looted from Patches' body in the Murkwater Cave"
        ),
      },
      {
        id: "c507c941-2ca6-4c61-8476-e3158ceb9cf1",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Blackguard's+Bell+Bearing",
          "Blackguard's Bell Bearing - Looted from Blackguard's body at the Boilprawn Shack in Liurnia"
        ),
      },
    ],
  },
  {
    id: "11ba4bf3-fea7-49ef-960f-4bd6f843192b",
    name: "Perfume Bottle",
    url: "https://eldenring.wiki.fextralife.com/Perfume+Bottle",
    requirements: [
      {
        id: "8686de75-cd31-4186-862d-170e4ff3d33b",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Interactive+Map?id=5707&code=mapA",
          "Street of Sages Ruins, Caelid"
        ),
      },
      {
        id: "5adb2faa-1059-47de-bbfd-2e5bf61746db",
        description: rawHTMLLink(
          // wiki is missing the map link for this one
          "https://eldenring.wiki.fextralife.com/file/Elden-Ring/volcano_manor_ground_floor_level_dungeon_map_elden_ring_wiki_guide_1374px.jpg?v=1652622586762",
          "Volcano Manor, Mt Gelmir"
        ),
      },
      {
        id: "e11e61e2-28db-45cc-a18c-7cb5f98b5b3c",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Interactive+Map?id=2842&code=mapA",
          "The Shaded Castle, Altus Plateau"
        ),
      },
      {
        id: "6076fac1-78d9-4b7a-96ad-9ecc58571502",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Interactive+Map?id=6859&code=mapA",
          "Perfumer's Ruin #1, Altus Plateau"
        ),
      },
      {
        id: "92c7ebcb-1f49-4851-bbce-ae2ac5741035",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Interactive+Map?id=6859&code=mapA",
          "Perfumer's Ruin #2, Altus Plateau"
        ),
      },
      {
        id: "38315e4e-5fb3-407c-a74a-782f036f857e",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Interactive+Map?id=8302&code=mapA",
          "Altus Highway Junction, Altus Plateau"
        ),
      },
      {
        id: "2246d2e3-ecd1-4358-a8fc-f48d0d91d43e",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Interactive+Map?id=5423&code=mapA",
          "Purchase 1 from Hermit Merchant (Leyndell)"
        ),
      },
      {
        id: "a666a425-d8df-4882-9aca-84a14aabece0",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Interactive+Map?id=4593&code=mapA",
          "Perfumer's Grotto, Altus Plateau"
        ),
      },
      {
        id: "07822492-d725-41b0-82bf-5ae1f50dec96",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Interactive+Map?id=2870&code=mapA",
          "East Capital Rampart, Leyndell, Royal Capital"
        ),
      },
      {
        id: "b7e8bd03-8d2c-4add-87ec-8ce242b65e34",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Interactive+Map?id=3823&code=mapA",
          "Avenue Balcony, Leyndell, Royal Capital"
        ),
      },
    ],
  },
  {
    id: "a5a975e9-b466-46f9-b070-ffc382a2face",
    name: "Ritual Pot",
    url: "https://eldenring.wiki.fextralife.com/Ritual+Pot",
    requirements: [
      {
        id: "cb270b86-6d3b-43c1-abfc-d1ae2bc11233",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/interactive+map?id=1503&code=mapA",
          "Laskyar Ruins, Liurnia of the Lakes"
        ),
      },
      {
        id: "e8268c69-01f5-42a0-8781-6fc44c196d4e",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Interactive+Map?id=2213&code=mapA",
          "Treasure Chest, Raya Lucaria Academy"
        ),
      },
      {
        id: "cebe0c2e-378d-4c8e-b132-0a8ef2b4ad53",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Interactive+Map?id=5864&code=mapA",
          "Roof, Jarburg, Liurnia of the Lakes"
        ),
      },
      {
        id: "1c03996d-3944-484c-b540-10405b613b77",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Interactive+Map?id=5864&code=mapA",
          "Large decorative jar, Jarburg, Liurnia of the Lakes"
        ),
      },
      {
        id: "18fc7532-676f-4bb6-bb4d-1eac40cab7f6",
        description:
          rawHTMLLink(
            "https://eldenring.wiki.fextralife.com/Pidia,+Carian+Servant",
            "Purchase 1 from Pidia, Carian Servant, Caria Manor."
          ) +
          ` [${rawHTMLLink(
            "https://eldenring.wiki.fextralife.com/Interactive+Map?id=2920&code=mapA",
            "Map Link"
          )}]`,
      },
      {
        id: "d45a12da-aab9-4391-b5db-d1b31e594bbc",
        description:
          rawHTMLLink(
            "https://eldenring.wiki.fextralife.com/Isolated+Merchant+Dragonbarrow",
            "Purchase 1 from Isolated Merchant Dragonbarrow, Dragonbarrow"
          ) +
          ` [${rawHTMLLink(
            "https://eldenring.wiki.fextralife.com/Interactive+map?id=2353&code=mapA",
            "Map Link"
          )}]`,
      },
      {
        id: "f9caebce-f418-4b69-b0b0-54ccc84d27df",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Auriza+Side+Tomb",
          "#1 guarded by large Living Jar, Auriza Side Tomb, Capital Outskirts"
        ),
      },
      {
        id: "b8d1e3fe-81c3-457b-b6d0-f80f7d9f4d90",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Auriza+Side+Tomb",
          "#2 guarded by large Living Jar, Auriza Side Tomb, Capital Outskirts"
        ),
      },
      {
        id: "d9376521-b618-4707-84a2-570b9c2fd5b7",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Subterranean+Shunning-Grounds",
          "Forsaken Depths, Subterranean Shunning-Grounds"
        ),
      },
      {
        id: "60379d47-cb29-474e-b8b8-0aea93af4ca6",
        description:
          rawHTMLLink(
            "https://eldenring.wiki.fextralife.com/Giants'+Mountaintop+Catacombs",
            "Giants' Mountaintop Catacombs, Mountaintops of the Giants"
          ) +
          ` [${rawHTMLLink(
            "https://eldenring.wiki.fextralife.com/Interactive+Map?id=8503&code=mapA",
            "Map Link"
          )}]`,
      },
    ],
  },
  {
    id: "4333b202-5590-4256-aa6f-e5f862b3bf37",
    name: "Talismans",
    url: "https://eldenring.wiki.fextralife.com/Talismans",
    requirements: [
      {
        id: "32d69424-24e1-4eaf-988a-ddccc7092b3f",
        isDLC: true,
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Aged+One's+Exultation",
          "Aged One's Exultation"
        ),
      },
      {
        id: "f135f6bf-5bb5-45b9-a4b2-52a2238938dd",
        isDLC: true,
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Ailment+Talisman",
          "Ailment Talisman"
        ),
      },
      {
        id: "b459e819-919a-434a-ae2f-56a667475fa2",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Ancestral+Spirit's+Horn",
          "Ancestral Spirit's Horn"
        ),
      },
      {
        id: "d95e607e-24cd-426a-8945-6a6c9deaf0d7",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Arrow's+Reach+Talisman",
          "Arrow's Reach Talisman"
        ),
      },
      {
        id: "4997f3dc-9488-42fc-9f79-dd2f19eef021",
        isDLC: true,
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Arrow's+Soaring+Sting+Talisman",
          "Arrow's Soaring Sting Talisman"
        ),
      },
      {
        id: "6eefc6bb-b8f1-4fd0-9591-aa8c1731dfae",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Arrow's+Sting+Talisman",
          "Arrow's Sting Talisman"
        ),
      },
      {
        id: "810d5de7-24a9-493f-a58f-7515d51a419c",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Arsenal+Charm",
          "Arsenal Charm"
        ),
      },
      {
        id: "7c93f796-2db2-4279-a37c-3991f5a46bcd",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Arsenal+Charm",
          "Arsenal Charm +1"
        ),
      },
      {
        id: "7eb3398b-34cb-4d24-a87e-222c6b75c907",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Assassin's+Cerulean+Dagger",
          "Assassin's Cerulean Dagger"
        ),
      },
      {
        id: "ceec70e8-06b6-466d-aefd-191352a9ec57",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Assassin's+Crimson+Dagger",
          "Assassin's Crimson Dagger"
        ),
      },
      {
        id: "34b4b046-0cfe-457a-955b-dd3c52da8451",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Axe+Talisman",
          "Axe Talisman"
        ),
      },
      {
        id: "2d3a5735-6a9b-428f-8e9f-b0ddc7c01284",
        isDLC: true,
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Beloved+Stardust",
          "Beloved Stardust"
        ),
      },
      {
        id: "ecb9ed26-9d26-4d06-9652-d9b9d9c33485",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Blade+of+Mercy",
          "Blade of Mercy"
        ),
        isDLC: true,
      },
      {
        id: "eb211187-b29e-442b-b5a5-bac1f6fa6e72",
        isDLC: true,
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Blessed+Blue+Dew+Talisman",
          "Blessed Blue Dew Talisman"
        ),
      },
      {
        id: "16fcb331-ed94-4ca4-8baf-369e0b9114b5",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Blessed+Dew+Talisman",
          "Blessed Dew Talisman"
        ),
      },
      {
        id: "79ae6f52-2988-42d1-9068-0a067522fd17",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Blue+Dancer+Charm",
          "Blue Dancer Charm"
        ),
      },
      {
        id: "90da0fb7-5b4b-4cd8-84cf-0617fce7a6e6",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Blue-Feathered+Branchsword",
          "Blue-Feathered Branchsword"
        ),
      },
      {
        id: "ba24a66d-10e5-4cb3-8798-f54780616051",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Boltdrake+Talisman",
          "Boltdrake Talisman"
        ),
      },
      {
        id: "c4e0497d-7643-4f74-ac23-1528e6a745ff",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Boltdrake+Talisman",
          "Boltdrake Talisman +1"
        ),
      },
      {
        id: "9ee6a0c6-cb8f-437c-8889-9286285084d2",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Boltdrake+Talisman",
          "Boltdrake Talisman +2"
        ),
      },
      {
        id: "20caba8f-28cb-4b18-b28f-13ebde5554c5",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Boltdrake+Talisman",
          "Boltdrake Talisman +3"
        ),
        isDLC: true,
      },
      {
        id: "ee67902a-bd5c-4a8f-b9dc-bf613c967c6f",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Bull-Goat's+Talisman",
          "Bull-Goat's Talisman"
        ),
      },
      {
        id: "87fedc52-06cb-49f2-b9a8-8416e410bbfb",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Carian+Filigreed+Crest",
          "Carian Filigreed Crest"
        ),
      },
      {
        id: "3fbe9d48-fe71-4afb-a636-78693b345e1b",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Cerulean+Amber+Medallion",
          "Cerulean Amber Medallion"
        ),
      },
      {
        id: "931087fd-4dcc-4013-9537-616f37350d77",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Cerulean+Amber+Medallion",
          "Cerulean Amber Medallion +1"
        ),
      },
      {
        id: "55dfa1ac-ed19-4053-b27a-af7bef098069",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Cerulean+Amber+Medallion",
          "Cerulean Amber Medallion +2"
        ),
      },
      {
        id: "43e5a37a-116f-4b7f-b985-448c5d63fb23",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Cerulean+Amber+Medallion",
          "Cerulean Amber Medallion +3"
        ),
        isDLC: true,
      },
      {
        id: "839e3238-a3ee-4874-aa5f-f17a1faa3545",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Cerulean+Seed+Talisman",
          "Cerulean Seed Talisman"
        ),
      },
      {
        id: "38ad9601-c0a0-4fb6-8987-64e45d3af21c",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Cerulean+Seed+Talisman",
          "Cerulean Seed Talisman +1"
        ),
        isDLC: true,
      },
      {
        id: "e7a746b2-e82e-441b-b449-7211039d8a7f",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Clarifying+Horn+Charm",
          "Clarifying Horn Charm"
        ),
      },
      {
        id: "b443065e-5ea1-419e-949f-86f57eb89326",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Clarifying+Horn+Charm",
          "Clarifying Horn Charm +1"
        ),
      },
      {
        id: "35e64ffa-f910-4f1a-9ab1-b22b68b7ff3f",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Clarifying+Horn+Charm",
          "Clarifying Horn Charm +2"
        ),
        isDLC: true,
      },
      {
        id: "63e1708f-8085-419f-88cd-fdae2d5a29db",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Claw+Talisman",
          "Claw Talisman"
        ),
      },
      {
        id: "cea1c334-5220-408d-bde8-736073d5bb5b",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Companion+Jar",
          "Companion Jar"
        ),
      },
      {
        id: "7797a7cc-4fd8-4d85-9f8b-89c4cc0dd65a",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Concealing+Veil",
          "Concealing Veil"
        ),
      },
      {
        id: "965a507c-db08-48aa-84e6-53f2087645bd",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Crepu's+Vial",
          "Crepus's Vial"
        ),
      },
      {
        id: "ee9e9396-c861-423e-8246-a802c1315a26",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Crimson+Amber+Medallion",
          "Crimson Amber Medallion"
        ),
      },
      {
        id: "e1bd2808-96db-4bd9-a642-e466dd8d9e0f",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Crimson+Amber+Medallion",
          "Crimson Amber Medallion +1"
        ),
      },
      {
        id: "08b21705-6704-41aa-9e64-74fd4db109cb",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Crimson+Amber+Medallion",
          "Crimson Amber Medallion +2"
        ),
      },
      {
        id: "ac620f96-350d-4b6a-b911-09587ad5e8ce",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Crimson+Amber+Medallion",
          "Crimson Amber Medallion +3"
        ),
        isDLC: true,
      },
      {
        id: "c00c46c3-e7f9-4a29-a645-6b4d15b917a3",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Crimson+Seed+Talisman",
          "Crimson Seed Talisman"
        ),
      },
      {
        id: "41a4de5e-cec3-4553-bbb8-733918e6f82d",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Crimson+Seed+Talisman",
          "Crimson Seed Talisman +1"
        ),
        isDLC: true,
      },
      {
        id: "b378e454-5e2d-4716-9e4d-2507ebb47a77",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Crucible+Feathered+Talisman",
          "Crucible Feather Talisman"
        ),
      },
      {
        id: "0e10f3cd-9f47-498f-8489-213fc60a80a4",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Crucible+Knot+Talisman",
          "Crucible Knot Talisman"
        ),
      },
      {
        id: "807e1336-f2d4-45af-8ff9-491920de0e80",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Crucible+Scale+Talisman",
          "Crucible Scale Talisman"
        ),
      },
      {
        id: "23142878-cd2f-4132-aee7-d684dbb52337",
        isDLC: true,
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Crusade+Insignia",
          "Crusade Insignia"
        ),
      },
      {
        id: "9a701fff-81d3-4896-9d49-792971ac2aca",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Curved+Sword+Talisman",
          "Curved Sword Talisman"
        ),
      },
      {
        id: "3aa40258-12cc-4400-a6a8-f5b9de1fd56f",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Daedicar's+Woe",
          "Daedicar's Woe"
        ),
      },
      {
        id: "78fd89fd-92d8-4e4f-8192-3e746e995691",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Dagger+Talisman",
          "Dagger Talisman"
        ),
      },
      {
        id: "499d2e75-5ea3-4728-9bfc-ce00f8b0d1de",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Dragoncrest+Shield+Talisman",
          "Dragoncrest Shield Talisman"
        ),
      },
      {
        id: "1c2bf93a-079a-4dbe-85e5-102e0599aa89",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Dragoncrest+Shield+Talisman",
          "Dragoncrest Shield Talisman +1"
        ),
      },
      {
        id: "8978de2a-a1c3-422f-81e1-52fc0418ea15",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Dragoncrest+Shield+Talisman",
          "Dragoncrest Shield Talisman +2"
        ),
      },
      {
        id: "9f332c4a-89ce-41f1-9f86-5729a45e6a32",
        isDLC: true,
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Dried+Bouquet",
          "Dried Bouquet"
        ),
      },
      {
        id: "79b8da2d-cf0a-4819-a55f-b321a8dfaac7",
        isDLC: true,
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Enraged+Divine+Beast",
          "Enraged Divine Beast"
        ),
      },
      {
        id: "90bcfd6e-08b5-4661-b956-844201e5762b",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Erdtree's+Favor",
          "Erdtree's Favor"
        ),
      },
      {
        id: "531ebf4a-080a-4b1f-b926-de0b71c2aaef",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Erdtree's+Favor",
          "Erdtree's Favor +1"
        ),
      },
      {
        id: "3c6f516d-cb0a-434a-b991-bec0e8a2c629",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Erdtree's+Favor",
          "Erdtree's Favor +2"
        ),
      },
      {
        id: "b1b4e1a6-bbf1-4d60-ad6b-e41075160e98",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Faithful+Canvas+Talisman",
          "Faithful's Canvas Talisman"
        ),
      },
      {
        id: "b34e70eb-c9fe-4b93-b011-27627495bd8d",
        isDLC: true,
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Fine+Crucible+Feather+Talisman",
          "Fine Crucible Feather Talisman"
        ),
      },
      {
        id: "05fd2d7c-7aaf-4a17-aa93-05ca3f78c279",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Fire+Scorpion+Charm",
          "Fire Scorpion Charm"
        ),
      },
      {
        id: "3e8c21db-cf5e-4cd4-a31c-23a305fe35cb",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Flamedrake+Talisman",
          "Flamedrake Talisman"
        ),
      },
      {
        id: "f037ae8e-7a55-4819-9933-f0ccf3552fea",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Flamedrake+Talisman",
          "Flamedrake Talisman +1"
        ),
      },
      {
        id: "bb4407ed-6326-4aa5-974d-37d7e8b823fb",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Flamedrake+Talisman",
          "Flamedrake Talisman +2"
        ),
      },
      {
        id: "3081b6c1-bac3-406a-959f-5ba6f4c752e9",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Flamedrake+Talisman",
          "Flamedrake Talisman +3"
        ),
        isDLC: true,
      },
      {
        id: "ce589206-0721-4744-874f-5c075282f257",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Flock's+Canvas+Talisman",
          "Flock's Canvas Talisman"
        ),
      },
      {
        id: "4c912352-b086-4687-9fd0-1484c2e342e8",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Furled+Finger's+Trick-Mirror",
          "Furled Finger's Trick-Mirror"
        ),
      },
      {
        id: "0a0cef5a-57da-44d3-8756-f85a20ff7eac",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Godfrey+Icon",
          "Godfrey Icon"
        ),
      },
      {
        id: "d5a095f4-e5cd-4ae9-8ef8-821b6a905e49",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Godskin+Swaddling+Cloth",
          "Godskin Swaddling Cloth"
        ),
      },
      {
        id: "19a44453-a7fb-4325-9cee-6c547865df47",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Golden+Scarab",
          "Gold Scarab"
        ),
      },
      {
        id: "0c3fdd65-1eda-4928-9d9a-778fc5016972",
        isDLC: true,
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Golden+Braid",
          "Golden Braid"
        ),
      },
      {
        id: "51450eab-480c-4015-8741-302f8edc4e14",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Graven-Mass+Talisman",
          "Graven-Mass Talisman"
        ),
      },
      {
        id: "1f2e32b7-edf8-446b-bf52-263017ce96c6",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Graven-School+Talisman",
          "Graven-School Talisman"
        ),
      },
      {
        id: "3c33fc07-220b-4f78-979e-7505930c83b1",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Great-Jar's+Arsenal",
          "Great-Jar's Arsenal"
        ),
      },
      {
        id: "356b47a5-a0c0-40bf-94af-0b511010c160",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Greatshield+Talisman",
          "Greatshield Talisman"
        ),
      },
      {
        id: "da439d6a-c36e-4a08-8d25-8a18a3ac5e3a",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Green+Turtle+Talisman",
          "Green Turtle Talisman"
        ),
      },
      {
        id: "5ea77609-88ee-42aa-ae6d-54c65ab917cc",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Haligdrake+Talisman",
          "Haligdrake Talisman"
        ),
      },
      {
        id: "43ac72a9-6522-4160-b19b-be84a135c75a",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Haligdrake+Talisman",
          "Haligdrake Talisman +1"
        ),
      },
      {
        id: "2db447ef-4399-4443-ab9a-96d011440212",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Haligdrake+Talisman",
          "Haligdrake Talisman +2"
        ),
      },
      {
        id: "3ab54e5e-27fc-45ae-a1c0-e01230ea118f",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Hammer+Talisman",
          "Hammer Talisman"
        ),
      },
      {
        id: "1a39a319-ae8b-4ba9-8943-c2245bac9c0c",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Host's+Trick-Mirror",
          "Host's Trick-Mirror"
        ),
      },
      {
        id: "bd88503e-ee61-42d2-ba7b-abcd64bbf3f5",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Immunizing+Horn+Charm",
          "Immunizing Horn Charm"
        ),
      },
      {
        id: "103c36d6-0729-42c9-a254-6a4d23f463d4",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Immunizing+Horn+Charm",
          "Immunizing Horn Charm +1"
        ),
      },
      {
        id: "3fefd3b7-242a-47d4-bfb7-17d794995b27",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Immunizing+Horn+Charm",
          "Immunizing Horn Charm +2"
        ),
        isDLC: true,
      },
      {
        id: "1c678569-2604-4651-81da-15bd665af20c",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Kindred+of+Rot's+Exultation",
          "Kindred of Rot's Exultation"
        ),
      },
      {
        id: "7f90661f-ed65-42ea-8605-908bdb090769",
        isDLC: true,
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Lacerating+Crossed-Tree",
          "Lacerating Crossed-Tree"
        ),
      },
      {
        id: "af65fae9-a7d4-4882-b9dc-6d5c1ba30a93",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Lance+Talisman",
          "Lance Talisman"
        ),
      },
      {
        id: "192d14a6-4950-4463-9c9d-b3ba3fec739f",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Lightning+Scorpion+Charm",
          "Lightning Scorpion Charm"
        ),
      },
      {
        id: "6a9fbc22-aced-43bc-a86a-faeeaef9eaab",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Longtail+Cat+Talisman",
          "Longtail Cat Talisman"
        ),
      },
      {
        id: "4b972754-ad72-48c8-8ef0-4a1bc4f74762",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Lord+of+Blood's+Exultation",
          "Lord of Blood's Exultation"
        ),
      },
      {
        id: "fded719e-091b-4af0-80e7-3c19c5272e7d",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Magic+Scorpion+Charm",
          "Magic Scorpion Charm"
        ),
      },
      {
        id: "7f2ae341-f5fc-4f3d-b814-5bc2dae87ba3",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Marika's+Scarseal",
          "Marika's Scarseal"
        ),
      },
      {
        id: "2666a360-9c81-48e1-a408-949d7ae76d67",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Marika's+Soreseal",
          "Marika's Soreseal"
        ),
      },
      {
        id: "5373cc74-845f-45d2-bbba-cce3111821ba",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Millicent's+Prosthesis",
          "Millicent's Prosthesis"
        ),
      },
      {
        id: "30bd5536-c8e8-46ee-a662-c1c60ea22904",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Moon+of+Nokstella",
          "Moon of Nokstella"
        ),
      },
      {
        id: "61708721-5320-46e5-a79b-e99e0182697d",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Mottled+Necklace",
          "Mottled Necklace"
        ),
      },
      {
        id: "c1dd9988-d8fc-45b3-b3e3-80cc09c39c92",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Mottled+Necklace",
          "Mottled Necklace +1"
        ),
      },
      {
        id: "c3756d80-4b3c-4948-9bb0-5d72939f8aee",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Mottled+Necklace",
          "Mottled Necklace +2"
        ),
        isDLC: true,
      },
      {
        id: "94f1ac30-8a5b-40a1-a506-c1d2d045b395",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Old+Lord's+Talisman",
          "Old Lord's Talisman"
        ),
      },
      {
        id: "98719e70-bf00-470b-977c-7e17f653495d",
        isDLC: true,
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Outer+God+Heirloom",
          "Outer God Heirloom"
        ),
      },
      {
        id: "75593c3c-59e0-4060-bb23-bbae23049867",
        isDLC: true,
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Pearl+Shield+Talisman",
          "Pearl Shield Talisman"
        ),
      },
      {
        id: "13a1aef7-d07b-4c43-8640-46dbe58dee62",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Pearldrake+Talisman",
          "Pearldrake Talisman"
        ),
      },
      {
        id: "a268e933-ed61-420a-9c45-e58b263296ca",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Pearldrake+Talisman",
          "Pearldrake Talisman +1"
        ),
      },
      {
        id: "acd53048-5a67-4327-9f70-934e5a46e8b7",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Pearldrake+Talisman",
          "Pearldrake Talisman +2"
        ),
      },
      {
        id: "df53c672-63f8-4179-8425-cc8a6859aa88",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Pearldrake+Talisman",
          "Pearldrake Talisman +3"
        ),
        isDLC: true,
      },
      {
        id: "56e6828f-1db3-463a-b6f1-539a99c9a60f",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Perfumer's+Talisman",
          "Perfumer's Talisman"
        ),
      },
      {
        id: "7965840e-2b8c-4fb2-bb0e-b26de7162804",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Primal+Glintstone+Blade",
          "Primal Glintstone Blade"
        ),
      },
      {
        id: "f22719d0-ac80-41f5-af42-67c142fa2d96",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Prince+of+Death's+Pustule",
          "Prince of Death's Pustule"
        ),
      },
      {
        id: "1ea70746-5c4d-409c-8bca-e7a6b5ec17ce",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Prosthesis-Wearer+Heirloom",
          "Prosthesis-Wearer Heirloom"
        ),
      },
      {
        id: "04745ba8-4686-43ad-bf40-ae4732bcd7e7",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Radagon+Icon",
          "Radagon Icon"
        ),
      },
      {
        id: "b3a31c5f-e30d-4127-854f-30d10a21557c",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Radagon's+Scarseal",
          "Radagon's Scarseal"
        ),
      },
      {
        id: "f487fd15-106d-4371-8001-d60ae3e1b794",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Radagon's+Soreseal",
          "Radagon's Soreseal"
        ),
      },
      {
        id: "24c22542-1bbd-41e9-9cbc-0f2983f5e2e1",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Red-Feathered+Branchsword",
          "Red-Feathered Branchsword"
        ),
      },
      {
        id: "7b6b510b-af84-4d8e-a03c-15a260be2660",
        isDLC: true,
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Rellana's+Cameo",
          "Rellana's Cameo"
        ),
      },
      {
        id: "b5c0cb9a-2767-435a-af6c-a4bd02e465fc",
        isDLC: true,
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Retaliatory+Crossed-Tree",
          "Retaliatory Crossed-Tree"
        ),
      },
      {
        id: "5890f8fd-8c65-4065-9b63-4a1528e5f4c5",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Ritual+Shield+Talisman",
          "Ritual Shield Talisman"
        ),
      },
      {
        id: "57cb6c09-aa7c-4376-be36-c0aa43ae2ebd",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Ritual+Sword+Talisman",
          "Ritual Sword Talisman"
        ),
      },
      {
        id: "0a79e4c4-d4e4-427d-8074-0b0aff67fcf9",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Roar+Medallion",
          "Roar Medallion"
        ),
      },
      {
        id: "672d4521-feba-4449-9913-d82662ffec3e",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Rotten+Winged+Sword+Insignia",
          "Rotten Winged Sword Insignia"
        ),
      },
      {
        id: "cf9cdffc-e829-4b2c-a7cd-def3d1cd772d",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Sacred+Scorpion+Charm",
          "Sacred Scorpion Charm"
        ),
      },
      {
        id: "eeb627a9-5027-4502-98d1-73e800754198",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Sacrificial+Twig",
          "Sacrificial Twig"
        ),
      },
      {
        id: "761d0532-e6de-495f-9a87-90da64dc38a7",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Shabriri's+Woe",
          "Shabriri's Woe"
        ),
      },
      {
        id: "0d16cc1f-fd6c-4fef-b677-0ea53d43c273",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Shard+of+Alexander",
          "Shard of Alexander"
        ),
      },
      {
        id: "ae02a315-0f86-4d9f-909d-3f338425846e",
        isDLC: true,
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Sharpshot+Talisman",
          "Sharpshot Talisman"
        ),
      },
      {
        id: "c92e9468-e9f5-46f1-80f6-628ed7604a82",
        isDLC: true,
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Shattered+Stone+Talisman",
          "Shattered Stone Talisman"
        ),
      },
      {
        id: "d64fa48b-9fca-4cc3-bf93-0342c724ee7d",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Silver+Scarab",
          "Silver Scarab"
        ),
      },
      {
        id: "b33bb84c-e78f-4400-988b-aca59926eb59",
        isDLC: true,
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Smithing+Talisman",
          "Smithing Talisman"
        ),
      },
      {
        id: "23ae7e57-f796-4e75-ae62-f9170674590d",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Spear+Talisman",
          "Spear Talisman"
        ),
      },
      {
        id: "7099d7b8-2b4d-4b31-b5ca-eecc2b01df56",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Spelldrake+Talisman",
          "Spelldrake Talisman"
        ),
      },
      {
        id: "f06f8b08-afa5-41ab-8993-ddfe22c2e9cf",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Spelldrake+Talisman",
          "Spelldrake Talisman +1"
        ),
      },
      {
        id: "0883d849-c240-498a-b565-60a4fbd19575",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Spelldrake+Talisman",
          "Spelldrake Talisman +2"
        ),
      },
      {
        id: "62401a59-56c9-4a00-983b-f55d39a8973b",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Spelldrake+Talisman",
          "Spelldrake Talisman +3"
        ),
        isDLC: true,
      },
      {
        id: "d470bcb4-6966-4e46-8d20-f13b34d248ab",
        isDLC: true,
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/St.+Trina's+Smile",
          "St. Trina's Smile"
        ),
      },
      {
        id: "50255550-740c-4890-b0ba-6ed1d3edf200",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Stalwart+Horn+Charm",
          "Stalwart Horn Charm"
        ),
      },
      {
        id: "51dc7e48-86e1-47ca-b902-00f2aaef505a",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Stalwart+Horn+Charm",
          "Stalwart Horn Charm +1"
        ),
      },
      {
        id: "b25462ae-e151-4615-b661-a66e7af99072",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Stalwart+Horn+Charm",
          "Stalwart Horn Charm +2"
        ),
        isDLC: true,
      },
      {
        id: "cb603d92-6fbe-4e50-b88d-d14a3a865043",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Stargazer+Heirloom",
          "Stargazer Heirloom"
        ),
      },
      {
        id: "4b3aeb77-be0f-4332-b153-76c49b399908",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Starscourge+Heirloom",
          "Starscourge Heirloom"
        ),
      },
      {
        id: "c1d6e1f7-53ad-4383-86e9-d1836636db63",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Taker's+Cameo",
          "Taker's Cameo"
        ),
      },
      {
        id: "7a0ba4f6-f665-4880-8148-b5f529f461c9",
        isDLC: true,
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Talisman+of+All+Crucibles",
          "Talisman of All Crucibles"
        ),
      },
      {
        id: "00964916-5614-4802-bc7a-2d890cfa6b96",
        isDLC: true,
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Talisman+of+Lord's+Bestowal",
          "Talisman of Lord's Bestowal"
        ),
      },
      {
        id: "69b61622-30ae-4cf3-9a7a-611d18515bc7",
        isDLC: true,
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Talisman+of+the+Dread",
          "Talisman of the Dread"
        ),
      },
      {
        id: "e1123436-fc05-469b-896a-ff3b0c557d20",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Twinblade+Talisman",
          "Twinblade Talisman"
        ),
      },
      {
        id: "b419f03e-215d-48fb-a42a-0da367958a5e",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Two+Fingers+Heirloom",
          "Two Fingers Heirloom"
        ),
      },
      {
        id: "c25c4063-a2ca-4c28-adec-173d9ca72470",
        isDLC: true,
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Two-Handed+Sword+Talisman",
          "Two-Handed Sword Talisman"
        ),
      },
      {
        id: "2410be11-e424-4229-b5fb-b3256d057c43",
        isDLC: true,
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Two-Headed+Turtle+Talisman",
          "Two-Headed Turtle Talisman"
        ),
      },
      {
        id: "5e11474b-0e20-41ec-9fcd-14b8bbcaf397",
        isDLC: true,
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Verdigris+Discus",
          "Verdigris Discus"
        ),
      },
      {
        id: "3bdeac87-8cf5-4878-b88e-d152ec76beea",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Viridian+Amber+Medallion",
          "Viridian Amber Medallion"
        ),
      },
      {
        id: "c01644a3-3a20-4ba5-b8a3-898844ecd286",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Viridian+Amber+Medallion",
          "Viridian Amber Medallion +1"
        ),
      },
      {
        id: "61d1a3e3-ec9f-491e-afe5-01e99372c31d",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Viridian+Amber+Medallion",
          "Viridian Amber Medallion +2"
        ),
      },
      {
        id: "b83eff01-4749-4e19-9867-d877f83a3b73",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Viridian+Amber+Medallion",
          "Viridian Amber Medallion +3"
        ),
      },
      {
        id: "91fdd483-5a9a-4eeb-8301-f7563b56c11c",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Warrior+Jar+Shard",
          "Warrior Jar Shard"
        ),
      },
      {
        id: "bbc04c04-b1c6-4b2a-8946-c1cd3c1d13ee",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Winged+Sword+Insignia",
          "Winged Sword Insignia"
        ),
      },
    ],
  },
  {
    id: "5679c882-2eda-4cc4-8212-4d034bd17608",
    name: "Deathroot",
    url: "https://eldenring.wiki.fextralife.com/Deathroot",
    requirements: [
      {
        id: "37ed06b3-bfc6-4729-9ad4-a3a72ee36df3",
        description:
          "Limgrave - Chest behind the Black Knife Assassin in the Deathtouched Catacombs. " +
          rawHTMLLink(
            "https://eldenring.wiki.fextralife.com/Interactive+Map?id=855&code=mapA",
            "Map Link"
          ),
      },
      {
        id: "7bf6d038-ff67-48e8-99c1-38fad83f1f9a",
        description:
          "Limgrave - Kill Tibia Mariner at Summonwater Village. " +
          rawHTMLLink(
            "https://eldenring.wiki.fextralife.com/Interactive+Map?id=1547&code=mapA",
            "Map Link"
          ),
      },
      {
        id: "d24e48eb-d509-46aa-a219-9d3caddbeae2",
        description:
          "Liurnia of the Lakes - Chest behind the Cemetery Shade in the Black Knife Catacombs. " +
          rawHTMLLink(
            "https://eldenring.wiki.fextralife.com/Interactive+Map?id=6807&code=mapA",
            "Map Link"
          ),
      },
      {
        id: "81cadfa9-e0ad-488f-8c63-31278663d284",
        description:
          "Liurnia of the Lakes - Kill Tibia Mariner at East Liurnia of the Lakes. " +
          rawHTMLLink(
            "https://eldenring.wiki.fextralife.com/Interactive+Map?id=2010&code=mapA",
            "Map Link"
          ),
      },
      {
        id: "fb9a7eb3-430f-43dc-b185-e53aee220f09",
        description:
          "Altus Plateau - Kill Tibia Mariner at Wyndham Ruins. " +
          rawHTMLLink(
            "https://eldenring.wiki.fextralife.com/Interactive+Map?id=2007&code=mapA",
            "Map Link"
          ),
      },
      {
        id: "4c2358a7-d8b5-4a72-9c13-88972d16dd9d",
        description:
          "Altus Plateau - Chest behind the Red Wolf of the Champion at Gelmir Hero's Grave. " +
          rawHTMLLink(
            "https://eldenring.wiki.fextralife.com/Interactive+Map?id=5765&code=mapA",
            "Map Link"
          ),
      },
      {
        id: "6f4cbdbd-d37d-4307-99e6-8e5abffce2c3",
        description:
          "Mountaintops of the Giants - Kill Tibia Mariner on a ledge between Castle Sol Main Gate and Snow Valley Ruins Overlook. " +
          rawHTMLLink(
            "https://eldenring.wiki.fextralife.com/Interactive+Map?id=6808&code=mapA",
            "Map Link"
          ),
      },
      {
        id: "7960bc68-1d2d-4bec-a694-f0795742e5a9",
        description:
          "Mountaintops of the Giants - Chest after defeating the Stray Mimic Tear in the secret catacombs underneath the Hidden Path to the Haligtree. " +
          rawHTMLLink(
            "https://eldenring.wiki.fextralife.com/Interactive+Map?id=6359&code=mapA",
            "Map Link"
          ),
      },
      {
        id: "43d1eb4b-da12-46fb-9bb5-97c7564da9c9",
        description:
          "Mountaintops of the Giants - Chest after defeating the Ulcerated Tree Spirit boss inside the Giants' Mountaintop Catacombs. " +
          rawHTMLLink(
            "https://eldenring.wiki.fextralife.com/Interactive+Map?id=6809&code=mapA",
            "Map Link"
          ),
      },
    ],
  },
  {
    id: "ea53811a-b202-4f84-a510-6622c62cd549",
    name: "Memory Stone",
    url: "https://eldenring.wiki.fextralife.com/Memory+Stone",
    requirements: [
      {
        id: "3ef14f61-c8d2-4b3d-9305-0b7be3e3b5a1",
        description:
          "Purchased from Twin Maiden Husks at the Roundtable Hold for 3,000 Runes.",
      },
      {
        id: "1e59cfa2-04e7-432e-977f-96cda0d36eed",
        description:
          "Found in a chest at the top of Oridys's Rise in Weeping Peninsula. " +
          rawHTMLLink(
            "https://eldenring.wiki.fextralife.com/Interactive+Map?id=726&code=mapA",
            "Map Link"
          ),
      },
      {
        id: "30ee1777-38c2-447a-a94f-e3d4d553fd63",
        description:
          "Found in a chest on the top floor of the Converted Tower in western Liurnia of the Lakes. " +
          rawHTMLLink(
            "https://eldenring.wiki.fextralife.com/interactive+map?id=1344&code=mapA",
            "Map Link"
          ),
      },
      {
        id: "bdd2cd91-1fb8-4acb-bd96-40ec8932f258",
        description:
          "Dropped by the Red Wolf of Radagon at Raya Lucaria Academy. " +
          rawHTMLLink(
            "https://eldenring.wiki.fextralife.com/Interactive+Map?id=2264&code=mapA",
            "Map Link"
          ),
      },
      {
        id: "25c232b6-37f2-4a99-9f2b-4fb6e15814da",
        description:
          "Found in a chest at the top floor of Testu's Rise in northern Liurnia of the Lakes. " +
          rawHTMLLink(
            "https://eldenring.wiki.fextralife.com/interactive+map?id=1589&code=mapA",
            "Map Link"
          ),
      },
      {
        id: "44a14959-116d-437e-9133-8399e3d80a83",
        description:
          "Found in a chest on the top floor of Seluvis's Rise in the Three Sisters sub-region. " +
          rawHTMLLink(
            "https://eldenring.wiki.fextralife.com/Interactive+map?id=1801&code=mapA",
            "Map Link"
          ),
      },
      {
        id: "7642cbcf-2b3c-4820-8ad8-4ca57fdd26c0",
        description:
          "Dropped by Demi-Human Queen Maggie, an optional boss in the northeast of Hermit Village in Mt. Gelmir. " +
          rawHTMLLink(
            "https://eldenring.wiki.fextralife.com/Interactive+map?id=2315&code=mapA",
            "Map Link"
          ),
      },
      {
        id: "b8047be5-ae3f-43c3-9868-3b435bac563d",
        description:
          "Found in a chest at the top floor of Lenne's Rise in eastern Dragonbarrow. " +
          rawHTMLLink(
            "https://eldenring.wiki.fextralife.com/Interactive+map?id=4277&code=mapA",
            "Map Link"
          ),
      },
    ],
  },
  {
    id: "62be8d24-c0e3-41e6-8e91-9e913949eb76",
    name: "Spirit Ashes and Puppets",
    url: "https://eldenring.wiki.fextralife.com/Spirit+Ashes",
    requirements: [
      {
        id: "c9b2a549-e5c4-4a36-a930-8ee1c035ce39",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Wandering+Noble+Ashes",
          "Wandering Noble Ashes"
        ),
      },
      {
        id: "bd239c69-9063-4c8a-ba28-a41c6df23376",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Noble+Sorcerer+Ashes",
          "Noble Sorcerer Ashes"
        ),
      },
      {
        id: "d0072e64-2bde-4bcf-b192-512ea56d0bde",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Nomad+Ashes",
          "Nomad Ashes"
        ),
      },
      {
        id: "78eaff89-f27d-48e9-a757-0eb600b3ae67",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Putrid+Corpse+Ashes",
          "Putrid Corpse Ashes"
        ),
      },
      {
        id: "428b73b3-b45f-4557-9eb1-6c2eec2727e3",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Skeletal+Militiaman+Ashes",
          "Skeletal Militiaman Ashes"
        ),
      },
      {
        id: "b9a2b878-d7fc-41d8-b290-83055525ca41",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Skeletal+Bandit+Ashes",
          "Skeletal Bandit Ashes"
        ),
      },
      {
        id: "80ce431e-1982-4d31-8ca4-f974ab523f09",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Albinauric+Ashes",
          "Albinauric Ashes"
        ),
      },
      {
        id: "0c348668-ea03-4b0e-8138-2cdcbecbd05d",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Winged+Misbegotten+Ashes",
          "Winged Misbegotten Ashes"
        ),
      },
      {
        id: "db165dd0-4a7b-471a-a216-35d2f3a7cb4f",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Demi-Human+Ashes",
          "Demi-Human Ashes"
        ),
      },
      {
        id: "2c1a4df5-a440-4795-82d2-8a4da2fcc12a",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Clayman+Ashes",
          "Clayman Ashes"
        ),
      },
      {
        id: "58036765-23d2-435c-8119-d0cdf843b364",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Oracle+Envoy+Ashes",
          "Oracle Envoy Ashes"
        ),
      },
      {
        id: "5d0daa82-3706-4508-a203-ab9ff361c2c4",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Lone+Wolf+Ashes",
          "Lone Wolf Ashes"
        ),
      },
      {
        id: "dfc55886-6492-4909-9491-243276140dbe",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Rotten+Stray+Ashes",
          "Rotten Stray Ashes"
        ),
      },
      {
        id: "88378c21-819a-4cbc-9bdb-0cd124e80338",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Giant+Rat+Ashes",
          "Giant Rat Ashes"
        ),
      },
      {
        id: "8c7eb612-ce06-48a9-b9c2-4462b3e1836e",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Warhawk+Ashes",
          "Warhawk Ashes"
        ),
      },
      {
        id: "a49bca7d-7165-42fd-8ca9-1825e1ae8c9f",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Land+Squirt+Ashes",
          "Land Squirt Ashes"
        ),
      },
      {
        id: "581871bf-db28-4a02-971f-a8028281e9e6",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Spirit+Jellyfish+Ashes",
          "Spirit Jellyfish Ashes"
        ),
      },
      {
        id: "be03a7e5-eb45-420d-ad11-c7ccb43f72b3",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Miranda+Sprout+Ashes",
          "Miranda Sprout Ashes"
        ),
      },
      {
        id: "147996f0-f053-48e4-b103-c0d22c731b6e",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Fanged+Imp+Ashes",
          "Fanged Imp Ashes"
        ),
      },
      {
        id: "f636b5f4-2d88-40ce-93b3-6137f5ffd612",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Soldjars+of+Fortune+Ashes",
          "Soldjars of Fortune Ashes"
        ),
      },
      {
        id: "55f22340-fe23-4eed-8bed-61c32c70a67c",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Archer+Ashes",
          "Archer Ashes"
        ),
      },
      {
        id: "4106838f-1189-4c23-81f2-1d5abef2e56d",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Greatshield+Soldier+Ashes",
          "Greatshield Soldier Ashes"
        ),
      },
      {
        id: "3ff377f5-6458-44af-9d70-047fb021b230",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Page+Ashes",
          "Page Ashes"
        ),
      },
      {
        id: "612f9b09-4035-4f2c-80e5-ff3a894c0467",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Vulgar+Militia+Ashes",
          "Vulgar Militia Ashes"
        ),
      },
      {
        id: "8b21f787-3879-42a1-b8a6-99e2db4ee20e",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Marionette+Soldier+Ashes",
          "Marionette Soldier Ashes"
        ),
      },
      {
        id: "4e7bbbd0-2b5c-4d09-97e9-6eaa28cb6078",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Avionette+Soldier+Ashes",
          "Avionette Soldier Ashes"
        ),
      },
      {
        id: "5d824ee3-e991-45e6-952d-b01efacfa487",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Kaiden+Sellsword+Ashes",
          "Kaiden Sellsword Ashes"
        ),
      },
      {
        id: "41077daa-4b2b-4ff3-958e-5f4179cfddcc",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Mad+Pumpkin+Head+Ashes",
          "Mad Pumpkin Head Ashes"
        ),
      },
      {
        id: "52ee4527-d68f-44fe-914a-1c27f3b11513",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Fire+Monk+Ashes",
          "Fire Monk Ashes"
        ),
      },
      {
        id: "e1d07360-9bba-43f1-9fbe-ef33d15e46fe",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Ancestral+Follower+Ashes",
          "Ancestral Follower Ashes"
        ),
      },
      {
        id: "aff3f92b-4171-45c4-9028-37a20a5fe42a",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Azula+Beastman+Ashes",
          "Azula Beastman Ashes"
        ),
      },
      {
        id: "a0f7d9cf-fb7e-47a3-a1c2-398894585606",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Man-Serpent+Ashes",
          "Man-Serpent Ashes"
        ),
      },
      {
        id: "caa16dae-8895-4ade-bd13-97ef61a1e6a2",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Crystalian+Ashes",
          "Crystalian Ashes"
        ),
      },
      {
        id: "88603633-c8fd-4505-81dd-c0226d50e225",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Kindred+of+Rot+Ashes",
          "Kindred of Rot Ashes"
        ),
      },
      {
        id: "ae5155d1-96f3-4ca5-ab32-e860acb4754a",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Glintstone+Sorcerer+Ashes",
          "Glintstone Sorcerer Ashes"
        ),
      },
      {
        id: "3f4758e2-486b-4d3a-ba1d-e2bd78ea6c0d",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Twinsage+Sorcerer+Ashes",
          "Twinsage Sorcerer Ashes"
        ),
      },
      {
        id: "48df34c4-226a-42ca-abf1-e2b7516d8f6b",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Godrick+Soldier+Ashes",
          "Godrick Soldier Ashes"
        ),
      },
      {
        id: "f3a0752a-9fdf-4b8c-9653-70c2372f8de8",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Raya+Lucaria+Soldier+Ashes",
          "Raya Lucaria Soldier Ashes"
        ),
      },
      {
        id: "f0a50c0a-c7dc-4eae-8513-595a8322af75",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Leyndell+Soldier+Ashes",
          "Leyndell Soldier Ashes"
        ),
      },
      {
        id: "e0f4d4fc-8102-4417-a672-d26ea3711f39",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Radahn+Soldier+Ashes",
          "Radahn Soldier Ashes"
        ),
      },
      {
        id: "a9f09a04-5887-48b9-86c3-d754f63666d4",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Haligtree+Soldier+Ashes",
          "Haligtree Soldier Ashes"
        ),
      },
      {
        id: "1d6d117c-28ad-4184-a9d5-e07000f265ee",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Mausoleum+Soldier+Ashes",
          "Mausoleum Soldier Ashes"
        ),
      },
      {
        id: "f854a941-95c7-4fdc-95b9-3ebde7abef70",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Stormhawk+Deenh",
          "Stormhawk Deenh"
        ),
      },
      {
        id: "845a527b-1045-459d-ba01-5d1f00581058",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Banished+Knight+Oleg+Ashes",
          "Banished Knight Oleg Ashes"
        ),
      },
      {
        id: "d9f7a761-b368-487d-88c1-08575bef0315",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Banished+Knight+Engvall+Ashes",
          "Banished Knight Engvall Ashes"
        ),
      },
      {
        id: "75c835e4-9a34-4a62-80c0-98f6456c40e3",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Bloodhound+Knight+Floh",
          "Bloodhound Knight Floh"
        ),
      },
      {
        id: "247cbc35-b037-4dc7-838d-699330ab056a",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Battlemage+Hugues+Ashes",
          "Battlemage Hugues Ashes"
        ),
      },
      {
        id: "7557121c-9e1a-44d7-bd48-05116db2e1fa",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Latenna+The+Albinauric",
          "Latenna the Albinauric"
        ),
      },
      {
        id: "3a29b082-1245-47a9-a7b4-6d85699a3af0",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Perfumer+Tricia+Spirit",
          "Perfumer Tricia"
        ),
      },
      {
        id: "f53f441c-025a-4200-9090-2ee0853a0b2b",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Depraved+Perfumer+Carmaan+Ashes",
          "Depraved Perfumer Carmaan Ashes"
        ),
      },
      {
        id: "70af17f4-77c8-4de7-bea5-f830aa42c6de",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Omenkiller+Rollo",
          "Omenkiller Rollo"
        ),
      },
      {
        id: "e40d806b-09af-4804-b1b0-dd02c83eac24",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Blackflame+Monk+Amon+Ashes",
          "Blackflame Monk Amon Ashes"
        ),
      },
      {
        id: "9527ee01-55eb-4de2-aec6-b9ffd1d8b400",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Ancient+Dragon+Knight+Kristoff+Ashes",
          "Ancient Dragon Knight Kristoff Ashes"
        ),
      },
      {
        id: "d09619c5-dfee-4b5d-87f2-3860913035df",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Redmane+Knight+Ogha+Ashes",
          "Redmane Knight Ogha Ashes"
        ),
      },
      {
        id: "a627868a-8a61-4eef-9798-1df613af58a3",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Lhutel+the+Headless",
          "Lhutel the Headless"
        ),
      },
      {
        id: "f4c27bcb-8ec7-4018-90e1-d3efe7c59006",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Cleanrot+Knight+Finlay+Ashes",
          "Cleanrot Knight Finlay Ashes"
        ),
      },
      {
        id: "b8af2ac4-e613-4ca9-8e2c-e74bee4ee462",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Black+Knife+Tiche",
          "Black Knife Tiche"
        ),
      },
      {
        id: "d34743bc-bcf4-4397-97e8-02cae0c983c7",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Mimic+Tear+Ashes",
          "Mimic Tear Ashes"
        ),
      },
      {
        id: "399ba3fe-c283-4da6-81a4-f83b0813675f",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Finger+Maiden+Therolina+Puppet",
          "Finger Maiden Therolina Puppet"
        ),
      },
      {
        id: "eb61998a-9d58-49d5-a54e-45f091b0ad89",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Jarwight+Puppet",
          "Jarwight Puppet"
        ),
      },
      {
        id: "846debc7-b219-4ba8-a848-c929c3f6899b",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Dolores+the+Sleeping+Arrow+Puppet",
          "Dolores the Sleeping Arrow Puppet"
        ),
      },
      {
        id: "13cad45f-577b-430e-b5f7-e25702ff67eb",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Nepheli+Loux+Puppet",
          "Nepheli Loux Puppet"
        ),
      },
      {
        id: "80613f1c-abd1-47cb-aab7-ae77f91204d0",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Dung+Eater+Puppet",
          "Dung Eater Puppet"
        ),
      },
      {
        id: "7180a64b-8187-42fe-86e4-2835907a7922",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Nightmaiden+&+Swordstress+Puppets",
          "Nightmaiden & Swordstress Puppets"
        ),
      },
      {
        id: "f1f8366e-2906-4339-b78d-995a074d749c",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Man-Fly+Ashes",
          "Man-Fly Ashes"
        ),
        isDLC: true,
      },
      {
        id: "b4e87e8a-2e4b-4c07-85c3-b551c36b9b08",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Spider+Scorpion+Ashes",
          "Spider Scorpion Ashes"
        ),
        isDLC: true,
      },
      {
        id: "29ba563c-436d-4ee5-aa9b-70012cbcd5ab",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Fingercreeper+Ashes",
          "Fingercreeper Ashes"
        ),
        isDLC: true,
      },
      {
        id: "d53289ce-ba3c-404c-836d-477af8cef4e4",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Bigmouth+Imp+Ashes",
          "Bigmouth Imp Ashes"
        ),
        isDLC: true,
      },
      {
        id: "69357681-ec8e-40d2-bc31-9f80e08810d5",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Gravebird+Ashes",
          "Gravebird Ashes"
        ),
        isDLC: true,
      },
      {
        id: "acbed506-f02e-461e-a9bb-7b0abee810bd",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Horned+Warrior+Ashes",
          "Horned Warrior Ashes"
        ),
        isDLC: true,
      },
      {
        id: "8b728fc1-cbb6-45bb-90ae-4075d56f3f92",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Bloodfiend+Hexer's+Ashes",
          "Bloodfiend Hexer's Ashes"
        ),
        isDLC: true,
      },
      {
        id: "ddf67cba-f39d-4d01-9fda-26f693dd3eae",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Inquisitor+Ashes",
          "Inquisitor Ashes"
        ),
        isDLC: true,
      },
      {
        id: "289f6371-c130-4368-9c88-9f872f25de07",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Messmer+Soldier+Ashes",
          "Messmer Soldier Ashes"
        ),
        isDLC: true,
      },
      {
        id: "bfc3efe5-56a1-4d78-adc6-cbb5930fb05b",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Black+Knight+Captain+Huw",
          "Black Knight Captain Huw"
        ),
        isDLC: true,
      },
      {
        id: "629e2a94-9563-4656-a1a4-486df0b68c5e",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Black+Knight+Commander+Andreas",
          "Black Knight Commander Andreas"
        ),
        isDLC: true,
      },
      {
        id: "7a8f0115-b67a-4dc2-89b2-acde865abd5b",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Fire+Knight+Hilde",
          "Fire Knight Hilde"
        ),
        isDLC: true,
      },
      {
        id: "52f721d3-1e35-4f86-b27a-781bb11302b4",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Fire+Knight+Queelign",
          "Fire Knight Queelign"
        ),
        isDLC: true,
      },
      {
        id: "246f113b-f399-4624-aa3b-2231a07949cb",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Curseblade+Meera",
          "Curseblade Meera"
        ),
        isDLC: true,
      },
      {
        id: "5278b0f7-11c5-4c05-9c92-f65f36a87069",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Demi-Human+Swordsman+Yosh",
          "Demi-Human Swordsman Yosh"
        ),
        isDLC: true,
      },
      {
        id: "a75f6c09-e66c-4a4d-a42d-d2edda35ae31",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Swordhand+of+Night+Jol%C3%A1n",
          "Swordhand of Night Jolán"
        ),
        isDLC: true,
      },
      {
        id: "9803ac9d-1cc1-497f-a1f1-93fe92138e30",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Jol%C3%A1n+and+Anna",
          "Jolán and Anna"
        ),
        isDLC: true,
      },
      {
        id: "7c5e0b53-783e-42a4-8eed-e1cc264783ea",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Ancient+Dragon+Florissax",
          "Ancient Dragon Florissax"
        ),
        isDLC: true,
      },
      {
        id: "5b806416-5377-4442-970e-892cafb1a0b5",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Divine+Bird+Warrior+Ornis",
          "Divine Bird Warrior Ornis"
        ),
        isDLC: true,
      },
      {
        id: "9d6e2d34-3d48-4f27-8f47-9223ea622e70",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Taylew+the+Golem+Smith",
          "Taylew the Golem Smith"
        ),
        isDLC: true,
      },
    ],
  },
  {
    id: "485cd4fb-6864-4358-8477-9993d38f75db",
    name: "Hefty Cracked Pot",
    url: "https://eldenring.wiki.fextralife.com/Hefty+Cracked+Pot",
    isDLC: true,
    requirements: [
      {
        id: "fe8a5c0c-2385-4745-9c6b-308499f77bf6",
        description:
          "Scorched Ruins: From the location of the Ghost NPC, south of the Scorched Ruins. Head north and take the first right to the higher ground. Alongside a group of Shadows, you will find a body containing this item.",
        isDLC: true,
      },
      {
        id: "47552fcc-b3aa-4171-a0c6-828937365ab8",
        description:
          "Belurat Gaol: One is inside a treasure chest in a room full of hanging pots that players have to jump down between.",
        isDLC: true,
      },
      {
        id: "c707d10b-bb0b-4911-bd42-31d43cd9e769",
        description:
          "Belurat Gaol: One more can be found within a room full of large jars after falling down a broken staircase trap.",
        isDLC: true,
      },
      {
        id: "bb8bc167-0326-46cc-a42f-af032be926f4",
        description:
          "Belurat Gaol: Can be found on some jar pots in the jar labyrinth. ",
        isDLC: true,
      },
      {
        id: "ccff9ef1-1a1f-43be-ac88-911c6c07d615",
        description:
          "Bonny Village: Can be found on the edge of the broken bridge.",
        isDLC: true,
      },
      {
        id: "2c17317e-03df-424a-85e6-db6489523298",
        description:
          "Bonny Village: Past the broken bridge, among many enemies. Below a shed.",
        isDLC: true,
      },
      {
        id: "a062507d-a4e2-4ea0-a57d-292161551438",
        description:
          "Shadow Keep: Right to the location of the Iris of Grace, on a bed. In the Room after the West Rampart Site of Grace.",
        isDLC: true,
      },
      {
        id: "1e9af4ec-ca91-4da2-8a51-76a0c7c2fcb0",
        description:
          "Cerulean Coast: One is given after defeating a Troll that throws giant pots.",
        isDLC: true,
      },
      {
        id: "feaccdbd-1bba-479a-bf5c-254a5f2aec4d",
        description:
          "Bonny Gaol: Right when you walk in, there are two hanging pots you can jump down to and that leads to it.",
        isDLC: true,
      },
      {
        id: "30317e21-8388-4498-8766-7a50d9640124",
        description:
          "Lementer's Gaol: A body on the southwestern corner of the area with the piled-up remains.",
        isDLC: true,
      },
    ],
  },
  {
    id: "b3dc2824-d280-4085-b9cc-efa6baf66e56",
    name: "Tools",
    url: "https://eldenring.wiki.fextralife.com/Tools",
    requirements: [
      {
        id: "6e292dce-8f64-4ad5-9034-b7779e06645a",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Memory+of+Grace",
          "Memory of Grace"
        ),
      },
      {
        id: "e6f2eca4-3b53-4510-97cd-c2c7073d9ad5",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Crafting+Kit",
          "Crafting Kit"
        ),
      },
      {
        id: "807b9013-f96e-41ee-bff0-e513929ecb71",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Telescope",
          "Telescope"
        ),
      },
      {
        id: "8769fa00-98b8-441f-886f-4aba17c6cec3",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Spectral+Steed+Whistle",
          "Spectral Steed Whistle"
        ),
      },
      {
        id: "dc6e523b-4a23-44a6-9f3b-a192737dcca3",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Spirit+Calling+Bell",
          "Spirit Calling Bell"
        ),
      },
      {
        id: "c5e83ed8-ed4d-4c94-a1bf-6a1036d0abe6",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Tailoring+Tools",
          "Tailoring Tools"
        ),
      },
      {
        id: "37c71b67-dc23-4fe8-b70b-cc4fc8520994",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Mimic's+Veil",
          "Mimic's Veil"
        ),
      },
      {
        id: "43d85e74-9dec-4e0f-84d7-c77ce4881928",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Lantern",
          "Lantern"
        ),
      },
      {
        id: "01a2dcb1-4e51-4d74-9076-186b6b0c06ea",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Wraith+Calling+Bell",
          "Wraith Calling Bell"
        ),
      },
      {
        id: "bf4db4a8-5174-412c-9665-6f3582805ea3",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Golden+Tailoring+Tools",
          "Golden Tailoring Tools"
        ),
      },
      {
        id: "6c50cd4c-e77e-4d2b-a85f-6c2bdc4749ac",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Ancestral+Infant's+Head",
          "Ancestral Infants Head"
        ),
      },
      {
        id: "75f057e8-93bc-4f35-bcf8-27c3a1ab36e3",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Omen+Bairn",
          "Omen Bairn"
        ),
      },
      {
        id: "fbdabc99-153c-4c37-84a1-d26c61719080",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Regal+Omen+Bairn",
          "Regal Omen Bairn"
        ),
      },
      {
        id: "0489918e-affa-4833-a1f0-f2fd9d32c4be",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Margit's+Shackle",
          "Margit's Shackle"
        ),
      },
      {
        id: "ef6316a9-6f26-4e4c-a60b-b838e69e507d",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Mohg's+Shackle",
          "Mohg's Shackle"
        ),
      },
      {
        id: "54a48416-5957-481b-8712-cb84ad202ec7",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Blasphemous+Claw",
          "Blasphemous Claw"
        ),
      },
      {
        id: "2b9515dc-2307-4ca4-9d70-113b3809fe57",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Horned+Bairn",
          "Horned Bairn"
        ),
        isDLC: true,
      },
      {
        id: "ff9945b9-ee84-41b9-9bdc-02bbf6616966",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Perfumed+Oil+of+Ranah",
          "Perfumed Oil of Ranah"
        ),
        isDLC: true,
      },
    ],
  },
  {
    id: "05fa5138-b2aa-4fef-b27e-5b8cadc29db6",
    name: "Prattling Pates",
    url: "https://eldenring.wiki.fextralife.com/Tools",
    requirements: [
      {
        id: "3525bd1f-5e2d-480f-894c-3cb5cd90e4ee",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Prattling+Pate+Hello",
          "Hello"
        ),
      },
      {
        id: "2c277ff7-1ec3-4ea0-a076-d100bc360490",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Prattling+Pate+Thank+you",
          "Thank You"
        ),
      },
      {
        id: "577123a1-4932-498e-bf18-4ba8e7b39fc2",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Prattling+Pate+Please+help",
          "Please Help"
        ),
      },
      {
        id: "00a3c087-6d74-4802-8d2d-690d3b5710ff",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Prattling+Pate+Apologies",
          "Apologies"
        ),
      },
      {
        id: "76e6b62e-2fc7-4cc1-9377-c0a5458ec237",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Prattling+Pate+You're+Beautiful",
          "You're Beautiful"
        ),
      },
      {
        id: "1e3901b8-ea52-4ef0-acb1-d08fe0e64b52",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Prattling+Pate+Wonderful",
          "Wonderful"
        ),
      },
      {
        id: "f316c080-94ee-4545-80de-31fb7f0a7aa7",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Prattling+Pate+Let's+get+to+it",
          "Let's Get To It"
        ),
      },
      {
        id: "13cf4992-b22c-4114-a426-bb391502f766",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Prattling+Pate+My+Beloved",
          "My Beloved"
        ),
      },
      {
        id: "3cfe3e33-349c-4839-a725-fdd910d7c3a9",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Prattling+Pate+Lamentation",
          "Lamentation"
        ),
        isDLC: true,
      },
    ],
  },
  {
    id: "51c52a82-1a44-471f-b50f-c449f3885213",
    name: "Multiplayer",
    url: "https://eldenring.wiki.fextralife.com/Multiplayer+Items",
    requirements: [
      {
        id: "cdab309c-0337-455f-bf75-bbb79cfaae12",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Tarnished's+Furled+Finger",
          "Tarnished's Furled Finger"
        ),
      },
      {
        id: "42d43f23-e8ad-423d-a394-8476b27e9eb2",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Small+Golden+Effigy",
          "Small Golden Effigy"
        ),
      },
      {
        id: "1ebe16f6-8f45-43f1-ad61-a98626c657bb",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Duelist's+Furled+Finger",
          "Duelist's Furled Finger"
        ),
      },
      {
        id: "71716f9d-cb5f-47d8-9af1-e4f8e7ce2e7e",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Small+Red+Effigy",
          "Small Red Effigy"
        ),
      },
      {
        id: "d6382d98-67c9-4cef-9eea-327e421d3069",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Bloody+Finger",
          "Bloody Finger"
        ),
      },
      {
        id: "7e008982-7422-45c3-88db-e480904c0ae7",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Recusant+Finger",
          "Recusant Finger"
        ),
      },
      {
        id: "3b7b4451-10c0-4d90-98a0-f2e78794b8c8",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/White+Cipher+Ring",
          "White Cipher Ring"
        ),
      },
      {
        id: "63b09d1c-ce28-405d-b743-7cefcbb37da4",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Blue+Cipher+Ring",
          "Blue Cipher Ring"
        ),
      },
      {
        id: "29a46780-265e-4d21-946a-c1d50eff8a69",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Taunter's+Tongue",
          "Taunter's Tongue"
        ),
      },
      {
        id: "61c2a95e-7781-4cc3-a529-834a3f157411",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Finger+Severer",
          "Finger Severer"
        ),
      },
      {
        id: "dd46bdab-0c3d-4452-a4ec-4d0f849fce2e",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Tarnished's+Wizened+Finger",
          "Tarnished's Wizened Finger"
        ),
      },
    ],
  },
];
