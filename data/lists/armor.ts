import { ListType } from "./types";
import { rawHTMLLink } from "./listHelper";

// sorted by item type (in game specific default sort)
export const ArmorList: Array<ListType> = [
  {
    id: "d712751e-4fcd-4c1d-8ac0-e080d65f61c6",
    name: "Helms",
    url: "https://eldenring.wiki.fextralife.com/Helms",
    requirements: [
      {
        id: "2790bb7f-f0d5-4ab6-8f35-625a6199ff47",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Commoner's+Headband",
          "Commoner's Headband"
        ),
      },
      {
        id: "c1111177-ea4e-4c6a-abc0-d2443b2ea167",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Commoner's+Headband+(Altered)",
          "Commoner's Headband (Altered)"
        ),
      },
      {
        id: "7da480f8-49da-412d-a4fd-79ac59b73f75",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Aristocrat+Headband",
          "Aristocrat Headband"
        ),
      },
      {
        id: "65f222a8-7bda-442f-bdce-57ab84c9017f",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Aristocrat+Hat",
          "Aristocrat Hat"
        ),
      },
      {
        id: "636d3220-23f9-4de0-9283-6e327ce61b0a",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Old+Aristocrat+Cowl",
          "Old Aristocrat Cowl"
        ),
      },
      {
        id: "b93be50d-ac92-48bb-aa33-d8f0409bb2ab",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Page+Hood",
          "Page Hood"
        ),
      },
      {
        id: "f6d7406e-a1ad-47fc-aa0e-7dddb57e5fb4",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/High+Page+Hood",
          "High Page Hood"
        ),
      },
      {
        id: "a25a69f0-285f-4597-ae0d-e6e4c55bbebb",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Guardian+Mask",
          "Guardian Mask"
        ),
      },
      {
        id: "a0850c7e-24c9-48d1-a96b-46f649f42d2e",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Festive+Hood",
          "Festive Hood"
        ),
      },
      {
        id: "0d314acb-fea3-48ba-af34-d7e9c481fd1f",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Festive+Hood+(Altered)",
          "Festive Hood (Altered)"
        ),
      },
      {
        id: "9e3dde36-8089-48f3-bfd3-b64cddd0abf2",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Blue+Festive+Hood",
          "Blue Festive Hood"
        ),
      },
      {
        id: "50b83ff4-88bf-4945-b0e8-d46a35209214",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Guilty+Hood",
          "Guilty Hood"
        ),
      },
      {
        id: "de621141-6c65-4846-9997-4aff82535d25",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Prisoner+Iron+Mask",
          "Prisoner Iron Mask"
        ),
      },
      {
        id: "a8d87f75-d6f5-4fd5-a976-6807d03c6f10",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Blackguard's+Iron+Mask",
          "Blackguard's Iron Mask"
        ),
      },
      {
        id: "28d1124e-ff1e-43ef-bf25-4814f26320cc",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Bloodsoaked+Mask",
          "Bloodsoaked Mask"
        ),
      },
      {
        id: "42de7ad8-d552-4de2-81e4-04efbe70e4ba",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Caterpillar+Mask",
          "Caterpillar Mask"
        ),
        isDLC: true,
      },
      {
        id: "a970fac1-727f-4bd5-afc3-34288a10522d",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Black+Dumpling",
          "Black Dumpling"
        ),
      },
      {
        id: "7922f0ca-416e-4350-a6fe-370ce3d34f14",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Mushroom+Head",
          "Mushroom Head"
        ),
      },
      {
        id: "1891a8c0-fc13-4d07-8ad5-f0928ce23a05",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Mushroom+Crown",
          "Mushroom Crown"
        ),
      },
      {
        id: "61c96a0f-7a96-4fbd-af8f-e3cd697a4070",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/St.+Trina's+Blossom",
          "St. Trina's Blossom"
        ),
        isDLC: true,
      },
      {
        id: "041641d2-5b83-40f4-91f9-a3b9195a52a2",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Circlet+of+Light",
          "Circlet of Light"
        ),
        isDLC: true,
      },
      // horizontal rule in game
      {
        id: "c73b754f-28ec-415c-9d8b-7c949f75e51b",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Astrologer+Hood",
          "Astrologer Hood"
        ),
      },
      {
        id: "1e29fc2a-41d9-4203-b0fb-a1a7f79b3950",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Juvenile+Scholar+Cap",
          "Juvenile Scholar Cap"
        ),
      },
      {
        id: "873ce94f-382d-463a-a384-500953ff76cc",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Karolos+Glintstone+Crown",
          "Karolos Glintstone Crown"
        ),
      },
      {
        id: "8d1f7776-a4c5-4857-b690-053ae3a5d570",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Olivinus+Glintstone+Crown",
          "Olivinus Glintstone Crown"
        ),
      },
      {
        id: "ba42892e-18db-4f62-8d3b-fbf77beded4e",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Twinsage+Glintstone+Crown",
          "Twinsage Glintstone Crown"
        ),
      },
      {
        id: "2c13e884-b798-45d2-b2ac-6ea13aadbc05",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Witch's+Glintstone+Crown",
          "Witch's Glintstone Crown"
        ),
      },
      {
        id: "6679af78-39de-40e5-bb30-7d278f6e5249",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Lazuli+Glintstone+Crown",
          "Lazuli Glintstone Crown"
        ),
      },
      {
        id: "a3ba0495-5c3e-4ce0-bc2b-6eb516ee3cef",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Haima+Glintstone+Crown",
          "Haima Glintstone Crown"
        ),
      },
      {
        id: "3f59ad71-1007-42e8-940b-92a238d37bb1",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Hierodas+Glintstone+Crown",
          "Hierodas Glintstone Crown"
        ),
      },
      {
        id: "58b7662d-398d-487f-91ff-c7c3616553b5",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Spellblade's+Pointed+Hat",
          "Spellblade's Pointed Hat"
        ),
      },
      {
        id: "3d415b49-83d8-4bf8-a5fc-320bc82dbd0a",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Alberich's+Pointed+Hat",
          "Alberich's Pointed Hat"
        ),
      },
      {
        id: "2b3500e5-424a-47ad-b016-e4fadd48feed",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Alberich's+Pointed+Hat+(Altered)",
          "Alberich's Pointed Hat (Altered)"
        ),
      },
      {
        id: "f7e3b465-ee18-45d5-b331-2809c6c6933c",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Preceptor's+Big+Hat",
          "Preceptor's Big Hat"
        ),
      },
      {
        id: "eadb83f9-79cd-4c27-80a5-b82d8ad096bf",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Mask+of+Confidence",
          "Mask of Confidence"
        ),
      },
      {
        id: "7563591f-18c1-4db0-b9e5-e3a91bca1b2e",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Azur's+Glintstone+Crown",
          "Azur's Glintstone Crown"
        ),
      },
      {
        id: "27b68241-4b38-49e7-9647-1a620c39caa8",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Lusat's+Glintstone+Crown",
          "Lusat's Glintstone Crown"
        ),
      },
      {
        id: "0d58bcbc-9159-4f55-b197-9847efaee43f",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Queen's+Crescent+Crown",
          "Queen's Crescent Crown"
        ),
      },
      {
        id: "72c7bbd9-7e40-48a7-b526-a7ae00d18841",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Snow+Witch+Hat",
          "Snow Witch Hat"
        ),
      },
      {
        id: "a9fbb130-999c-4f7b-b44f-0d870f4c8a5c",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/High+Priest+Hat",
          "High Priest Hat"
        ),
        isDLC: true,
      },
      {
        id: "e2d061eb-4c7a-48e8-9e7a-68e6a540ec10",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Fia's+Hood",
          "Fia's Hood"
        ),
      },
      {
        id: "a5b209c4-3191-4748-b3be-23a596e32614",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Prophet+Blindfold",
          "Prophet Blindfold"
        ),
      },
      {
        id: "96cd4213-0933-4593-b6ec-f3804a352f2e",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Traveling+Maiden+Hood",
          "Traveling Maiden Hood"
        ),
      },
      {
        id: "4f8b3e6c-9aa3-4841-8b65-cfb65001b6a5",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Finger+Maiden+Fillet",
          "Finger Maiden Fillet"
        ),
      },
      {
        id: "a4990f34-4547-4601-b9a6-fb54d06fad78",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Sage+Hood",
          "Sage Hood"
        ),
      },
      {
        id: "42da9025-d832-4cd2-beb9-597f9593c53d",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Greathood",
          "Greathood"
        ),
      },
      {
        id: "27269e26-38b2-4b68-bdf1-a3110e7aec04",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Dane's+Hat",
          "Dane's Hat"
        ),
        isDLC: true,
      },
      {
        id: "7a2226b0-6bfc-4a89-9521-a440a3671351",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Radiant+Gold+Mask",
          "Radiant Gold Mask"
        ),
      },
      // horizontal rule in game
      {
        id: "f9206779-67f5-4cb6-b53f-57001f0101aa",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Perfumer+Hood",
          "Perfumer Hood"
        ),
      },
      {
        id: "3b49c637-b5a7-4d91-88fe-f562c7b8b324",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Traveler's+Hat",
          "Traveler's Hat"
        ),
      },
      {
        id: "3fc6844a-9a54-44b0-88c5-a5b496f5e119",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Depraved+Perfumer+Headscarf",
          "Depraved Perfumer Headscarf"
        ),
      },
      {
        id: "29b00ced-f8d6-4bd6-90e8-c3244d38d038",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Ruler's+Mask",
          "Ruler's Mask"
        ),
      },
      {
        id: "0b3214a3-a6a8-47fe-b925-07e50b886e75",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Consort's+Mask",
          "Consort's Mask"
        ),
      },
      {
        id: "238c2ae6-73d7-439d-bb2f-2d12e406759f",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Marais+Mask",
          "Marais Mask"
        ),
      },
      {
        id: "e07eb97b-cf71-4708-ba5c-20ce191cbb0c",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Great+Horned+Headband",
          "Great Horned Headband"
        ),
      },
      {
        id: "6f0801ce-f8dd-46b9-af33-87bab4eaebe4",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Shining+Horned+Headband",
          "Shining Horned Headband"
        ),
      },
      {
        id: "4b620c35-c969-416a-9557-5767b7db36dc",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Godskin+Apostle+Hood",
          "Godskin Apostle Hood"
        ),
      },
      {
        id: "49e2a96e-6535-44d9-a772-f974713a116f",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Godskin+Noble+Hood",
          "Godskin Noble Hood"
        ),
      },
      {
        id: "9067394a-3e6d-48ec-9ccd-a1be34cc3f98",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Sanguine+Noble+Hood",
          "Sanguine Noble Hood"
        ),
      },
      {
        id: "21d961f8-33c1-460f-8cb4-9ef8d9ad0bdf",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Wise+Man's+Mask",
          "Wise Man's Mask"
        ),
        isDLC: true,
      },
      // horizontal rule in game
      {
        id: "3598a945-f46a-4755-98ff-75188f74cada",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Crimson+Tear+Scarab",
          "Crimson Tear Scarab"
        ),
      },
      {
        id: "b9523818-2d04-4a36-86eb-a5f0527f01e1",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Cerulean+Tear+Scarab",
          "Cerulean Tear Scarab"
        ),
      },
      {
        id: "25a3431b-4a5f-4efa-86e0-ee703526ee62",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Ash-of-War+Scarab",
          "Ash-of-War Scarab"
        ),
      },
      {
        id: "59bf7f4a-9c46-4af8-a0f7-24b5fd6d70ae",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Glintstone+Scarab",
          "Glintstone Scarab"
        ),
      },
      {
        id: "8550be55-5652-42d2-b0ef-b6be73adeb67",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Incantation+Scarab",
          "Incantation Scarab"
        ),
      },
      {
        id: "7c108261-edf0-49e1-9f79-0cd6a1c67ae3",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Imp+Head+(Cat)",
          "Imp Head (Cat)"
        ),
      },
      {
        id: "078447e3-18d4-418d-898d-f3f63c50f0ce",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Imp+Head+(Wolf)",
          "Imp Head (Wolf)"
        ),
      },
      {
        id: "04abde8d-fd49-44b9-889c-d04bf3af1a29",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Imp+Head+(Fanged)",
          "Imp Head (Fanged)"
        ),
      },
      {
        id: "78149856-c1a3-4923-9a2a-065203dacd17",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Imp+Head+(Long-Tongued)",
          "Imp Head (Long-Tongued)"
        ),
      },
      {
        id: "30b6dc78-fd37-4ed0-8db7-5f361f90b38e",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Imp+Head+(Corpse)",
          "Imp Head (Corpse)"
        ),
      },
      {
        id: "0a1312a9-cfe5-4ce8-9b36-938be2f4e47f",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Imp+Head+(Elder)",
          "Imp Head (Elder)"
        ),
      },
      {
        id: "28bd5ee4-fbc2-4ad1-84b5-e0cb056af945",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Imp+Head+(Lion)",
          "Imp Head (Lion)"
        ),
        isDLC: true,
      },
      {
        id: "717f5a17-6cf8-4d97-833e-b67e21243ae4",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Nox+Mirrorhelm",
          "Nox Mirrorhelm"
        ),
      },
      {
        id: "566a9d0d-45f3-4fab-9526-0679af671d57",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Iji's+Mirrorhelm",
          "Iji's Mirrorhelm"
        ),
      },
      {
        id: "acc3105f-df60-4d9d-8ea8-ebd4ea4993cd",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Silver+Tear+Mask",
          "Silver Tear Mask"
        ),
      },
      {
        id: "938c79d9-b5e8-40ab-ae23-5587e926b76f",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Envoy+Crown",
          "Envoy Crown"
        ),
      },
      {
        id: "18750e06-9e46-4ded-8a0b-4334f8992554",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Octopus+Head",
          "Octopus Head"
        ),
      },
      {
        id: "60f10817-09d8-4cb8-8aba-d2efacef7c02",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Jar",
          "Jar"
        ),
      },
      {
        id: "aeefec61-72ea-42f1-ac09-9b035fd11b7f",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Greatjar",
          "Greatjar"
        ),
        isDLC: true,
      },
      {
        id: "d1f742c0-a6a8-42de-b59a-ce811b7aeb60",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Albinauric+Mask",
          "Albinauric Mask"
        ),
      },
      {
        id: "1677fd30-0223-4007-a684-530f9446b94c",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Black+Wolf+Mask",
          "Black Wolf Mask"
        ),
      },
      // horizontal rule in game
      {
        id: "ef1bc9c4-3fa3-456e-acdc-c4d487c9e33c",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Blue+Cloth+Cowl",
          "Blue Cloth Cowl"
        ),
      },
      {
        id: "60b95f37-164e-4823-96a7-8ab9ccdc4c7c",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Crimson+Hood",
          "Crimson Hood"
        ),
      },
      {
        id: "76ac0242-aa20-4566-ba37-a5e78be7d40c",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Navy+Hood",
          "Navy Hood"
        ),
      },
      {
        id: "3b1cc0ec-febf-4f9c-bc49-1d16d237e4f1",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/White+Mask",
          "White Mask"
        ),
      },
      {
        id: "321018d2-175f-48cc-a563-257f93f24b50",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Thiollier's+Mask",
          "Thiollier's Mask"
        ),
        isDLC: true,
      },
      {
        id: "d6195e3a-d7d4-41fa-a8f3-d8a5755e7365",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Nomadic+Merchant's+Chapeau",
          "Nomadic Merchant's Chapeau"
        ),
      },
      {
        id: "c3a3a6b9-4410-4d70-8f4d-5f21e561cb1a",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Bandit+Mask",
          "Bandit Mask"
        ),
      },
      {
        id: "c9e4b7ab-4ea7-44f8-9606-3d83f4969d0d",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Black+Hood",
          "Black Hood"
        ),
      },
      {
        id: "b7a02ff8-cbea-4196-832e-dbd0c60dad87",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Confessor+Hood",
          "Confessor Hood"
        ),
      },
      {
        id: "22cfd94b-b30c-4473-9066-7e96c93f74d6",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Confessor+Hood+(Altered)",
          "Confessor Hood (Altered)"
        ),
      },
      {
        id: "d3e421cb-fbcd-4561-9895-269c86a540cf",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Omensmirk+Mask",
          "Omensmirk Mask"
        ),
      },
      {
        id: "015827c3-3e32-4ed0-8d3f-8356fa8e63fb",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Skeletal+Mask",
          "Skeletal Mask"
        ),
      },
      {
        id: "3869c742-1cd9-469d-8920-d6feec61480a",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Gravebird+Helm",
          "Gravebird Helm"
        ),
        isDLC: true,
      },
      {
        id: "b28049a5-c9ca-4405-9d9e-ab1c81ea1e54",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Dancer's+Hood",
          "Dancer's Hood"
        ),
        isDLC: true,
      },
      // horizontal rule in game
      {
        id: "f745c670-c73e-433b-a9d9-bea298254164",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Foot+Soldier+Helm",
          "Foot Soldier Helm"
        ),
      },
      {
        id: "71cf4731-c525-46a9-b7ee-5f885f96f1b4",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Foot+Soldier+Helmet",
          "Foot Soldier Helmet"
        ),
      },
      {
        id: "3a7125b5-027f-4905-8795-a252f25757f0",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Foot+Soldier+Cap",
          "Foot Soldier Cap"
        ),
      },
      {
        id: "49835cce-2a33-4892-88a3-18f3b90f26b8",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Gilded+Foot+Soldier+Cap",
          "Gilded Foot Soldier Cap"
        ),
      },
      {
        id: "a65a8ef2-298b-4980-a8ed-eecb17dea270",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Sacred+Crown+Helm",
          "Sacred Crown Helm"
        ),
      },
      {
        id: "f9883aef-1e90-408d-96af-6ce2f6e7c192",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Highwayman+Hood",
          "Highwayman Hood"
        ),
      },
      {
        id: "8bedc183-071b-4c1c-a3e1-2f836766dafb",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Common+Soldier+Helm",
          "Common Soldier Helm"
        ),
        isDLC: true,
      },
      {
        id: "ce1e5813-55bc-45fe-8ee6-635a1c59e2b1",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Vulgar+Militia+Helm",
          "Vulgar Militia Helm"
        ),
      },
      {
        id: "14b7b8c2-7de3-4fe9-af5a-2562f4ba279e",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Shadow+Militiaman+Helm",
          "Shadow Militiaman Helm"
        ),
        isDLC: true,
      },
      {
        id: "33ae27dc-f376-496b-80d7-567e3c3adddf",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Duelist+Helm",
          "Duelist Helm"
        ),
      },
      {
        id: "d706dba5-7203-441b-ae1e-a3666c510ce7",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Rotten+Duelist+Helm",
          "Rotten Duelist Helm"
        ),
      },
      {
        id: "64e0af78-f26c-4556-9f4f-7f9f0723e8b9",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Nox+Monk+Hood",
          "Nox Monk Hood"
        ),
      },
      {
        id: "699303a0-9bf1-4b3c-a7d1-17c57aa3e0ef",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Nox+Monk+Hood+(Altered)",
          "Nox Monk Hood (Altered)"
        ),
      },
      {
        id: "513bedee-f992-4830-8da0-37109cdbc7d4",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Nox+Swordstress+Crown",
          "Nox Swordstress Crown"
        ),
      },
      {
        id: "ef288cf5-f932-4b97-8526-804a55f7ae97",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Nox+Swordstress+Crown+(Altered)",
          "Nox Swordstress Crown (Altered)"
        ),
      },
      {
        id: "064e761f-755d-44ac-b03f-9bc8a7d5643f",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Night+Maiden+Twin+Crown",
          "Night Maiden Twin Crown"
        ),
      },
      {
        id: "9507af78-377c-45c5-ac14-1cc0799755f3",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Champion+Headband",
          "Champion Headband"
        ),
      },
      {
        id: "4d2b7187-7ded-45fd-afb5-c96fe2beca53",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Leather+Headband",
          "Leather Headband"
        ),
        isDLC: true,
      },
      {
        id: "4840efc7-4e53-4ff3-94fc-ec8eff8ccb8e",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Leather+Crown",
          "Leather Crown"
        ),
        isDLC: true,
      },
      {
        id: "7f1226da-bd9b-48ed-9dda-2aaa10d4bea5",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Fang+Helm",
          "Fang Helm"
        ),
        isDLC: true,
      },
      {
        id: "181edc7d-190b-427e-8772-ee20f37f805f",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Igon's+Helm",
          "Igon's Helm"
        ),
        isDLC: true,
      },
      {
        id: "f34764cb-c06c-4b6f-a875-36ff643e2cf3",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Igon's+Helm+(Altered)",
          "Igon's Helm (Altered)"
        ),
        isDLC: true,
      },
      {
        id: "96ee01cf-2d16-4604-acb8-74f6531fc26b",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Curseblade+Mask",
          "Curseblade Mask"
        ),
        isDLC: true,
      },
      {
        id: "b6ffb77e-07a0-4b63-bd40-45ffffb85a6e",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Pelt+of+Ralva",
          "Pelt of Ralva"
        ),
        isDLC: true,
      },
      // horizontal rule in game
      {
        id: "5bab1039-070c-49d2-ac63-0f191b4f7ce2",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Chain+Coif",
          "Chain Coif"
        ),
      },
      {
        id: "95997329-95fa-43b8-8f9e-81ccbd036a73",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Iron+Helmet",
          "Iron Helmet"
        ),
      },
      {
        id: "3d11f098-684a-468e-8c01-27b69e13e054",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Godrick+Soldier+Helm",
          "Godrick Soldier Helm"
        ),
      },
      {
        id: "15bb6c03-acfd-44a1-adf2-3c506bf061dc",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Raya+Lucarian+Helm",
          "Raya Lucarian Helm"
        ),
      },
      {
        id: "3379a6dc-018d-4d8d-83ec-fa95329e08ac",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Radahn+Soldier+Helm",
          "Radahn Soldier Helm"
        ),
      },
      {
        id: "05b65e1c-73d5-4fbe-ba10-f933ef6efdde",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Leyndell+Soldier+Helm",
          "Leyndell Soldier Helm"
        ),
      },
      {
        id: "39d9aef5-0ec7-4f3f-9dc5-e45bb4f641b6",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Haligtree+Helm",
          "Haligtree Helm"
        ),
      },
      {
        id: "c7a95f9e-2be4-453e-83c5-3ccdb2af2ca6",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Messmer+Soldier+Helm",
          "Messmer Soldier Helm"
        ),
        isDLC: true,
      },
      {
        id: "1421802e-5077-4db4-ab38-a65ebb7d27e5",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Exile+Hood",
          "Exile Hood"
        ),
      },
      {
        id: "9283942e-f64d-4626-851f-f169a468481a",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Kaiden+Helm",
          "Kaiden Helm"
        ),
      },
      {
        id: "ebc55926-0405-4bdd-a4ea-8ebd32c6ba4b",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Land+of+Reeds+Helm",
          "Land of Reeds Helm"
        ),
      },
      {
        id: "8be13aef-2fee-404b-9bd2-c4efa61accd2",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Okina+Mask",
          "Okina Mask"
        ),
      },
      {
        id: "bfd0fb34-5b84-4cd8-8e3d-b17e55d2742b",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Iron+Kasa",
          "Iron Kasa"
        ),
      },
      {
        id: "9f767816-5795-4aeb-a70b-b0c440ddb69c",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Eccentric's+Hood",
          "Eccentric's Hood"
        ),
      },
      {
        id: "866a8aea-d4a8-4187-ba31-9312a2520841",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Eccentric's+Hood+(Altered)",
          "Eccentric's Hood (Altered)"
        ),
      },
      {
        id: "556321dc-105b-4454-a315-13fe0757c3e2",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Freyja's+Helm",
          "Freyja's Helm"
        ),
        isDLC: true,
      },
      {
        id: "7e846063-53f8-40e7-87a1-012db5699c85",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Marionette+Soldier+Helm",
          "Marionette Soldier Helm"
        ),
      },
      {
        id: "dc8501e1-77e2-43a7-9903-14a53b540ded",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Marionette+Soldier+Birdhelm",
          "Marionette Soldier Birdhelm"
        ),
      },
      {
        id: "c8792ada-9e2b-4267-8768-c3118afd89aa",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Blue+Silver+Mail+Hood",
          "Blue Silver Mail Hood"
        ),
      },
      {
        id: "512b57a3-25e9-4630-b36e-4430da11b6a4",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Fire+Monk+Hood",
          "Fire Monk Hood"
        ),
      },
      {
        id: "3792113d-5380-4aa5-a6c7-9ef340bfe0b9",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Blackflame+Monk+Hood",
          "Blackflame Monk Hood"
        ),
      },
      {
        id: "fa7e99dc-8982-4d8c-96b3-333af75ae5ce",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Zamor+Mask",
          "Zamor Mask"
        ),
      },
      {
        id: "80d0f7b1-c282-4763-827e-901acc9c3cdd",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Black+Knife+Hood",
          "Black Knife Hood"
        ),
      },
      {
        id: "0e1d704e-4899-472a-b7f0-69e42ce60b81",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Helm+of+Night",
          "Helm of Night"
        ),
        isDLC: true,
      },
      {
        id: "e7fdf949-5619-401e-a430-cb6cb7d07852",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Malenia's+Winged+Helm",
          "Malenia's Winged Helm"
        ),
      },
      {
        id: "4ea427c6-bb8c-487c-8bec-40c623791f83",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Elden+Lord+Crown",
          "Elden Lord Crown"
        ),
      },
      {
        id: "54b9e891-d920-420e-8383-d7018362c096",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Messmer's+Helm",
          "Messmer's Helm"
        ),
        isDLC: true,
      },
      {
        id: "43a3979f-91f0-4096-983e-7eb4e838085a",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Messmer's+Helm+(Altered)",
          "Messmer's Helm (Altered)"
        ),
        isDLC: true,
      },
      // horizontal rule in game
      {
        id: "9b9f696f-6a98-4968-959e-10d9b427b046",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Knight+Helm",
          "Knight Helm"
        ),
      },
      {
        id: "a3b5e26b-ce9f-4886-baab-6026e1042e38",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Vagabond+Knight+Helm",
          "Vagabond Knight Helm"
        ),
      },
      {
        id: "918f9989-971b-4530-ae0c-18a38afd648a",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Greathelm",
          "Greathelm"
        ),
      },
      {
        id: "0f0b8e92-e035-4ca9-b148-1c05642012ef",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Carian+Knight+Helm",
          "Carian Knight Helm"
        ),
      },
      {
        id: "94009829-45b6-4424-a61f-16b2a7b49a56",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Godrick+Knight+Helm",
          "Godrick Knight Helm"
        ),
      },
      {
        id: "497451de-7586-498c-a49d-1e5273df9fcd",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Cuckoo+Knight+Helm",
          "Cuckoo Knight Helm"
        ),
      },
      {
        id: "1ce6c900-0f4f-4acb-9485-6d999efa22b8",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Redmane+Knight+Helm",
          "Redmane Knight Helm"
        ),
      },
      {
        id: "3b23ab55-863d-4421-b95d-645a539de77b",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Gelmir+Knight+Helm",
          "Gelmir Knight Helm"
        ),
      },
      {
        id: "481233ac-f30a-4f4c-ba34-4ecdaf571767",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Leyndell+Knight+Helm",
          "Leyndell Knight Helm"
        ),
      },
      {
        id: "55b7c984-d0e4-4866-9a2e-d84be00266e3",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Haligtree+Knight+Helm",
          "Haligtree Knight Helm"
        ),
      },
      {
        id: "6ab182bb-2739-4cbe-a1e8-f6da1ef91201",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Black+Knight+Helm",
          "Black Knight Helm"
        ),
        isDLC: true,
      },
      {
        id: "dc5a985b-67db-4773-b7cb-655bd901058e",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Bloodhound+Knight+Helm",
          "Bloodhound Knight Helm"
        ),
      },
      {
        id: "1baa3b57-7438-4f0b-bb98-ed85124b277d",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Cleanrot+Helm",
          "Cleanrot Helm"
        ),
      },
      {
        id: "4f1e2bcb-6cb2-4f6f-bab0-796d5909971a",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Cleanrot+Helm+(Altered)",
          "Cleanrot Helm (Altered)"
        ),
      },
      {
        id: "0155b80e-20a1-4f53-a195-a411a930ffe9",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Fire+Knight+Helm",
          "Fire Knight Helm"
        ),
        isDLC: true,
      },
      {
        id: "3f450b54-5735-4d3f-a14c-7749ef983f1e",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Winged+Serpent+Helm",
          "Winged Serpent Helm"
        ),
        isDLC: true,
      },
      {
        id: "b69ba44d-f882-42cb-8ab3-81c558238111",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Death+Mask+Helm",
          "Death Mask Helm"
        ),
        isDLC: true,
      },
      {
        id: "12de9cef-68cd-4eb9-8505-7a440ab3331e",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Salza's+Hood",
          "Salza's Hood"
        ),
        isDLC: true,
      },
      {
        id: "50f22fde-4c97-44f2-8967-e86855dc6bf7",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Death+Knight+Helm",
          "Death Knight Helm"
        ),
        isDLC: true,
      },
      {
        id: "c7dac646-2e08-47d0-807e-d09ad8526a61",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Horned+Warrior+Helm",
          "Horned Warrior Helm"
        ),
        isDLC: true,
      },
      {
        id: "89897b38-1756-4829-8094-f5d930c0d1ac",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Divine+Beast+Helm",
          "Divine Beast Helm"
        ),
        isDLC: true,
      },
      {
        id: "6824a089-6299-4084-8c10-22abb9b16830",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Divine+Bird+Helm",
          "Divine Bird Helm"
        ),
        isDLC: true,
      },
      // horizontal rule in game
      {
        id: "779d4d9c-8f36-46c0-8940-d0851088ef28",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Oathseeker+Knight+Helm",
          "Oathseeker Knight Helm"
        ),
        isDLC: true,
      },
      {
        id: "27273ca3-02d7-4951-af8b-0d7522384c7f",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Raging+Wolf+Helm",
          "Raging Wolf Helm"
        ),
      },
      {
        id: "1a2cd757-594a-49d2-9420-48d1ac4e54ea",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Hoslow's+Helm",
          "Hoslow's Helm"
        ),
      },
      {
        id: "69107d36-64c8-4f9c-9b1e-946742f1d8d7",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Diallos's+Mask",
          "Diallos's Mask"
        ),
      },
      {
        id: "f94dc5e0-bd95-44bb-bd15-6905b9c7f27d",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Twinned+Helm",
          "Twinned Helm"
        ),
      },
      {
        id: "166c575f-e612-47a9-bfe1-bc3123b5a5df",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Drake+Knight+Helm",
          "Drake Knight Helm"
        ),
      },
      {
        id: "1b2fdd5b-4a6e-4251-aa7c-fa50f23ec900",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Drake+Knight+Helm+(Altered)",
          "Drake Knight Helm (Altered)"
        ),
      },
      {
        id: "2645af19-6303-4780-b827-46419699c45f",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Briar+Helm",
          "Briar Helm"
        ),
      },
      {
        id: "c1133bbb-c132-4d32-b77d-8655129389e7",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Fingerprint+Helm",
          "Fingerprint Helm"
        ),
      },
      {
        id: "b8f105cd-e04e-44c2-a3d8-b14d6ce8ae8c",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Rakshasa+Helm",
          "Rakshasa Helm"
        ),
        isDLC: true,
      },
      {
        id: "58c98eba-a440-4b0b-8bae-5beb38e722ab",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Royal+Remains+Helm",
          "Royal Remains Helm"
        ),
      },
      {
        id: "7eeb0e2a-8529-4a29-a072-23401ec1481a",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/All-Knowing+Helm",
          "All-Knowing Helm"
        ),
      },
      {
        id: "76592fd1-1065-4024-a4b9-3c3e68a284ca",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Royal+Knight+Helm",
          "Royal Knight Helm"
        ),
      },
      {
        id: "b888c3cf-687e-46f0-b6a6-e20ba0da77b3",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Rellana's+Helm",
          "Rellana's Helm"
        ),
        isDLC: true,
      },
      {
        id: "e0269aa4-8c3e-4d3a-8d5a-347c7e8636a6",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Maliketh's+Helm",
          "Maliketh's Helm"
        ),
      },
      {
        id: "0612e685-4cb5-4342-9311-94e192236a28",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Banished+Knight+Helm",
          "Banished Knight Helm"
        ),
      },
      {
        id: "349bee5f-c287-4024-9164-be2a6a352962",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Banished+Knight+Helm+(Altered)",
          "Banished Knight Helm (Altered)"
        ),
      },
      {
        id: "b726a6a9-599a-4d9b-8d0d-e506f39120e8",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Night's+Cavalry+Helm",
          "Night's Cavalry Helm"
        ),
      },
      {
        id: "8fa87620-ece9-409c-9f2f-1799db9b43c1",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Night's+Cavalry+Helm+(Altered)",
          "Night's Cavalry Helm (Altered)"
        ),
      },
      {
        id: "ee96ad20-6ad6-4b5d-802f-5aed3782e393",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Helm+of+Solitude",
          "Helm of Solitude"
        ),
        isDLC: true,
      },
      {
        id: "34f7b0ea-5215-40b7-a4fc-6427805c476b",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Veteran's+Helm",
          "Veteran's Helm"
        ),
      },
      {
        id: "5d47b457-b5a6-4cc8-bc04-9e19ce974c91",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Scaled+Helm",
          "Scaled Helm"
        ),
      },
      {
        id: "5fc52835-4d2e-4c0c-9342-1b6678f2dd36",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Beast+Champion+Helm",
          "Beast Champion Helm"
        ),
      },
      {
        id: "9792b1ec-e567-48b8-9311-321988ab9f46",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Tree+Sentinel+Helm",
          "Tree Sentinel Helm"
        ),
      },
      {
        id: "75e750db-f03d-4edf-b518-2d01f18f9e22",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Malformed+Dragon+Helm",
          "Malformed Dragon Helm"
        ),
      },
      {
        id: "5cfff695-9665-405a-b5a3-b94ecf93a9be",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Crucible+Axe+Helm",
          "Crucible Axe Helm"
        ),
      },
      {
        id: "7b75cffa-136a-44be-b2a4-8b3c0e797122",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Crucible+Tree+Helm",
          "Crucible Tree Helm"
        ),
      },
      {
        id: "8320ada3-2aec-41a2-8545-a33e81aaaabe",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Crucible+Hammer-Helm",
          "Crucible Hammer-Helm"
        ),
        isDLC: true,
      },
      {
        id: "9ca50e7b-2a3e-4c89-90e5-a33ffed3da5c",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Gaius's+Helm",
          "Gaius's Helm"
        ),
        isDLC: true,
      },
      {
        id: "73b5c265-22b1-4257-b043-9a8e222f9384",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Radahn's+Redmane+Helm",
          "Radahn's Redmane Helm"
        ),
      },
      {
        id: "70437285-7051-4cc6-9435-a22485f78af7",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Young+Lion's+Helm",
          "Young Lion's Helm"
        ),
        isDLC: true,
      },
      // horizontal rule in game
      {
        id: "c4992cf7-fb88-4728-bff4-5e2b126e3198",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Lionel's+Helm",
          "Lionel's Helm"
        ),
      },
      {
        id: "368765ff-859f-4ab8-b554-bbe4462f89ee",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Bull-Goat+Helm",
          "Bull-Goat Helm"
        ),
      },
      {
        id: "e7019fec-11ff-4782-be87-36613591cab6",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Verdigris+Helm",
          "Verdigris Helm"
        ),
        isDLC: true,
      },
      {
        id: "1d9cb2d7-618f-456e-b9f0-cdf7837cc7e7",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Omen+Helm",
          "Omen Helm"
        ),
      },
      {
        id: "6047daa1-5c77-499f-bf85-00b2501e0e33",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Fire+Prelate+Helm",
          "Fire Prelate Helm"
        ),
      },
      {
        id: "ee03838c-9fbf-4bb0-8270-2ef3252982ad",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Pumpkin+Helm",
          "Pumpkin Helm"
        ),
      },
      {
        id: "bedac094-e4af-4d75-b46a-e33f7722df40",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Divine+Beast+Head",
          "Divine Beast Head"
        ),
        isDLC: true,
      },
    ],
  },
  {
    id: "4438737b-9a7d-45de-9482-8d179f317ec1",
    name: "Chests",
    url: "https://eldenring.wiki.fextralife.com/Chest+Armor",
    requirements: [
      {
        id: "fe3917f3-0703-453a-b4ad-297001a33622",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Cloth+Garb",
          "Cloth Garb"
        ),
      },
      {
        id: "a4bc67cb-08a8-4cbe-8701-bab20572a393",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Traveler's+Clothes",
          "Traveler's Clothes"
        ),
      },
      {
        id: "a971b324-5630-4004-9563-0a0270700f45",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Commoner's+Simple+Garb",
          "Commoner's Simple Garb"
        ),
      },
      {
        id: "4c6a193f-9c1c-4241-979a-57add7a0db98",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Commoner's+Simple+Garb+(Altered)",
          "Commoner's Simple Garb (Altered)"
        ),
      },
      {
        id: "4c5a6377-5803-48a3-b1fa-fba55ed42589",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Commoner's+Garb",
          "Commoner's Garb"
        ),
      },
      {
        id: "0d247c3b-42dd-4edf-b2d5-bcfb00c8e8fc",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Commoner's+Garb+(Altered)",
          "Commoner's Garb (Altered)"
        ),
      },
      {
        id: "3783a0fa-814b-4055-a229-cf599cae3ac8",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Aristocrat+Garb",
          "Aristocrat Garb"
        ),
      },
      {
        id: "173780ac-fbcc-4e08-85f7-b35ef75840db",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Aristocrat+Garb+(Altered)",
          "Aristocrat Garb (Altered)"
        ),
      },
      {
        id: "227e53a9-0f53-4026-a2c8-c1c9b6113e79",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Aristocrat+Coat",
          "Aristocrat Coat"
        ),
      },
      {
        id: "18f602af-74b4-45ab-ba61-68bfaee9e92b",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Old+Aristocrat+Gown",
          "Old Aristocrat Gown"
        ),
      },
      {
        id: "cd614b9d-cd9d-4918-bcd6-a5c6624c1d33",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Page+Garb",
          "Page Garb"
        ),
      },
      {
        id: "ba98e8bb-47bc-41b1-9971-622c91aa1044",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Page+Garb+(Altered)",
          "Page Garb (Altered)"
        ),
      },
      {
        id: "137847b5-6340-4581-8877-d2e947ec96a4",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/High+Page+Clothes",
          "High Page Clothes"
        ),
      },
      {
        id: "9ed62670-ddc8-4638-aea7-fe9e4de31084",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/High+Page+Clothes+(Altered)",
          "High Page Clothes (Altered)"
        ),
      },
      {
        id: "7349778a-9cf6-4c4f-af71-1b9c4bb65721",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Guardian+Garb",
          "Guardian Garb"
        ),
      },
      {
        id: "e99daf1d-1d46-44ef-81c5-fa900f3f38c0",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Guardian+Garb+(Full+Bloom)",
          "Guardian Garb (Full Bloom)"
        ),
      },
      {
        id: "a8d77d1f-48e8-400f-9d9a-6d5c4068645d",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Festive+Garb",
          "Festive Garb"
        ),
      },
      {
        id: "e1b39b7c-2966-4421-b7bb-0eef4715dec7",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Festive+Garb+(Altered)",
          "Festive Garb (Altered)"
        ),
      },
      {
        id: "47b4597e-6e75-471f-8e16-815da11c3d0e",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Blue+Festive+Garb",
          "Blue Festive Garb"
        ),
      },
      {
        id: "60b44344-075b-48ad-a414-2149b25ce15d",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Prisoner+Clothing",
          "Prisoner Clothing"
        ),
      },
      {
        id: "c438d47b-7044-4307-8628-ecf4e15b23d7",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Braided+Cord+Robe",
          "Braided Cord Robe"
        ),
        isDLC: true,
      },
      {
        id: "d6c3ee39-8339-4efd-bf1d-88d0b14d010a",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Mushroom+Body",
          "Mushroom Body"
        ),
      },
      {
        id: "bcdc5f1b-f1f1-47e9-afff-3ddca75b388c",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Astrologer+Robe",
          "Astrologer Robe"
        ),
      },
      {
        id: "518fbffc-5ca3-4116-9773-b719f6bfcf6a",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Astrologer+Robe+(Altered)",
          "Astrologer Robe (Altered)"
        ),
      },
      {
        id: "49465c88-572b-4dcf-8749-8763961207a2",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Juvenile+Scholar+Robe",
          "Juvenile Scholar Robe"
        ),
      },
      {
        id: "28e02142-fa7a-4efa-ae12-738c4a228721",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Raya+Lucarian+Robe",
          "Raya Lucarian Robe"
        ),
      },
      {
        id: "092b9c1b-7f84-4d34-a416-fef1143a6e1f",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Lazuli+Robe",
          "Lazuli Robe"
        ),
      },
      {
        id: "7887a2db-a0f7-42a6-9bdd-52eb638418a1",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Battlemage+Robe",
          "Battlemage Robe"
        ),
      },
      {
        id: "944f09c2-8041-49ac-bafe-01d4560bb015",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Errant+Sorcerer+Robe",
          "Errant Sorcerer Robe"
        ),
      },
      {
        id: "ebf9f44f-abdc-462a-9f4f-b342e2e4a48f",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Errant+Sorcerer+Robe+(Altered)",
          "Errant Sorcerer Robe (Altered)"
        ),
      },
      {
        id: "b685f3ca-2682-4d66-b9f6-89e9b05029d2",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Spellblade's+Traveling+Attire",
          "Spellblade's Traveling Attire"
        ),
      },
      {
        id: "5a303998-930c-4202-be8c-db66414e3230",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Spellblade's+Traveling+Attire+(Altered)",
          "Spellblade's Traveling Attire (Altered)"
        ),
      },
      {
        id: "8be1b556-a98a-4d00-8f44-54433cd089e7",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Alberich's+Robe",
          "Alberich's Robe"
        ),
      },
      {
        id: "34b2a2e1-c306-42a8-bd02-8665c17dff09",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Alberich's+Robe+(Altered)",
          "Alberich's Robe (Altered)"
        ),
      },
      {
        id: "e1b19dc2-ce0e-4d10-b4bf-55bb61b6c938",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Preceptor's+Long+Gown",
          "Preceptor's Long Gown"
        ),
      },
      {
        id: "04104f5f-40cc-4ac4-8cac-a9e431eb7797",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Preceptor's+Long+Gown+(Altered)",
          "Preceptor's Long Gown (Altered)"
        ),
      },
      {
        id: "a134b95e-981d-4cb7-8528-094bdcbeb661",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Azur's+Glintstone+Robe",
          "Azur's Glintstone Robe"
        ),
      },
      {
        id: "a81b868b-b1be-4e4f-a0da-46a928b43944",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Lusat's+Robe",
          "Lusat's Robe"
        ),
      },
      {
        id: "0b9d1cce-d172-4281-8675-194af0d0b5af",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Queen's+Robe",
          "Queen's Robe"
        ),
      },
      {
        id: "25009b5a-029a-4418-a447-9a2e0c8b8c71",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Snow+Witch+Robe",
          "Snow Witch Robe"
        ),
      },
      {
        id: "72707a17-974e-4cc7-b41b-67cb09ba9530",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Snow+Witch+Robe+(Altered)",
          "Snow Witch Robe (Altered)"
        ),
      },
      {
        id: "4dd6d7ab-3eaf-4302-8c8f-4490417d1884",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/High+Priest+Robe",
          "High Priest Robe"
        ),
        isDLC: true,
      },
      {
        id: "5dfdbd49-709f-447b-8e49-3a1970be29b2",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Finger+Robe",
          "Finger Robe"
        ),
        isDLC: true,
      },
      {
        id: "5527c4f2-04c5-4507-b7d3-399eceed974c",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Fia's+Robe",
          "Fia's Robe"
        ),
      },
      {
        id: "356c7dc1-a9a2-423e-bb48-cb36811c1d91",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Fia's+Robe+(Altered)",
          "Fia's Robe (Altered)"
        ),
      },
      {
        id: "bd4047dc-d83a-4b7a-a59a-fac9e44454ab",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Deathbed+Dress",
          "Deathbed Dress"
        ),
      },
      {
        id: "1267592d-d98a-47bd-9b8f-272743f548d9",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Prophet+Robe",
          "Prophet Robe"
        ),
      },
      {
        id: "b093d720-7a1f-43f8-b8d1-e874015c2ec7",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Prophet+Robe+(Altered)",
          "Prophet Robe (Altered)"
        ),
      },
      {
        id: "55e7e34a-6ef2-4f04-8f55-c07a45bdba9a",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Corhyn's+Robe",
          "Corhyn's Robe"
        ),
      },
      {
        id: "79e39edf-87c1-45fb-a924-cddb757be6d6",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Traveling+Maiden+Robe",
          "Traveling Maiden Robe"
        ),
      },
      {
        id: "93bcbb8e-dac6-48e3-a6fc-4619b7d1edf4",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Traveling+Maiden+Robe+(Altered)",
          "Traveling Maiden Robe (Altered)"
        ),
      },
      {
        id: "afdefa94-3cfd-4f2a-a18b-cccfd255399d",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Finger+Maiden+Robe",
          "Finger Maiden Robe"
        ),
      },
      {
        id: "fb82e4e5-d83a-4813-9644-f23a095bdb23",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Finger+Maiden+Robe+(Altered)",
          "Finger Maiden Robe (Altered)"
        ),
      },
      {
        id: "ff7c5e77-8de7-4c1c-afbb-5059fac2f7b1",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Dryleaf+Robe",
          "Dryleaf Robe"
        ),
        isDLC: true,
      },
      {
        id: "46e0477e-a9bc-416a-b371-00a63acc9d5f",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Dryleaf+Robe+(Altered)",
          "Dryleaf Robe (Altered)"
        ),
        isDLC: true,
      },
      {
        id: "aab9f11e-0306-44ab-ba11-ff1ae7d90fdc",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Sage+Robe",
          "Sage Robe"
        ),
      },
      {
        id: "9b0bdc2e-4cdc-4c16-b14c-a392bc80c3a8",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Goldmask's+Rags",
          "Goldmask's Rags"
        ),
      },
      // horizontal rule in game
      {
        id: "8b86b884-f4ce-414e-b11d-a65683421fa0",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Perfumer+Robe",
          "Perfumer Robe"
        ),
      },
      {
        id: "d2036d60-cb97-4564-843e-400702954280",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Perfumer+Robe+(Altered)",
          "Perfumer Robe (Altered)"
        ),
      },
      {
        id: "39d3bb8b-c459-4418-bee4-f62a1bba85c7",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Perfumer's+Traveling+Garb",
          "Perfumer's Traveling Garb"
        ),
      },
      {
        id: "06da4ec8-a1f8-4b2f-805e-636c1fdb5621",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Perfumer's+Traveling+Garb+(Altered)",
          "Perfumer's Traveling Garb (Altered)"
        ),
      },
      {
        id: "87352959-44d6-43c2-aa73-1187c1cf928f",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Depraved+Perfumer+Robe",
          "Depraved Perfumer Robe"
        ),
      },
      {
        id: "aab5e455-7feb-4d42-bfc4-c48c94c0466e",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Depraved+Perfumer+Robe+(Altered)",
          "Depraved Perfumer Robe (Altered)"
        ),
      },
      {
        id: "c7367619-b7f4-4e33-aa6d-7b13f124169e",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Upper-Class+Robe",
          "Upper-Class Robe"
        ),
      },
      {
        id: "7770e709-0462-4580-8e51-193768d276dd",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Ruler's+Robe",
          "Ruler's Robe"
        ),
      },
      {
        id: "0c05a778-e619-4e3e-b8b2-e06c5accaac3",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Consort's+Robe",
          "Consort's Robe"
        ),
      },
      {
        id: "6a0a15be-5097-4cfd-bd31-158bef318ecc",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Official's+Attire",
          "Official's Attire"
        ),
      },
      {
        id: "0c462de9-9d16-4344-b268-70bcb50ea085",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Marais+Robe",
          "Marais Robe"
        ),
      },
      {
        id: "3797e67b-8c4d-40ba-a28b-167a29e21da7",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Fur+Raiment",
          "Fur Raiment"
        ),
      },
      {
        id: "606d8354-728e-4cf0-bff1-ce163eada92f",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Shaman+Furs",
          "Shaman Furs"
        ),
      },
      {
        id: "21f79146-9940-442d-9e80-5502d79867a5",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Godskin+Apostle+Robe",
          "Godskin Apostle Robe"
        ),
      },
      {
        id: "670b904a-8096-4008-8db2-30d7cfc5678c",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Godskin+Noble+Robe",
          "Godskin Noble Robe"
        ),
      },
      {
        id: "c75e412b-42c8-4bee-99a2-f3ebf1e71e53",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Fell+Omen+Cloak",
          "Fell Omen Cloak"
        ),
      },
      {
        id: "694db710-1bbf-4737-9160-67be11961ccd",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Sanguine+Noble+Robe",
          "Sanguine Noble Robe"
        ),
      },
      {
        id: "7f005567-f823-4892-aae9-0c2c4a535f07",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Ansbach's+Attire",
          "Ansbach's Attire"
        ),
        isDLC: true,
      },
      {
        id: "37a9ba0a-1806-4d55-97cd-3888fc961af5",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Ansbach's+Attire+(Altered)",
          "Ansbach's Attire (Altered)"
        ),
        isDLC: true,
      },
      {
        id: "d6e18512-dc88-4d41-9997-438ef07e5b38",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Lord+of+Blood's+Robe",
          "Lord of Blood's Robe"
        ),
      },
      {
        id: "ebf9e435-4682-4cb2-bb48-618011235a90",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Lord+of+Blood's+Robe+(Altered)",
          "Lord of Blood's Robe (Altered)"
        ),
      },
      // horizontal rule in game
      {
        id: "8fce4ead-9e0f-4cfe-9f81-a1044808d6c9",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Leather+Armor",
          "Leather Armor"
        ),
      },
      {
        id: "f290663a-8360-4c2f-88eb-d17e51b91830",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Blue+Cloth+Vest",
          "Blue Cloth Vest"
        ),
      },
      {
        id: "7408b4f3-c2a4-4f14-b05f-099c886363e9",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Noble's+Traveling+Garb",
          "Noble's Traveling Garb"
        ),
      },
      {
        id: "b70b5d4e-d8b2-453c-bb6d-ca53f2f9be0f",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/War+Surgeon+Gown",
          "War Surgeon Gown"
        ),
      },
      {
        id: "7d0c2591-fb21-4ba2-bb55-99bcca8cb3bf",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/War+Surgeon+Gown+(Altered)",
          "War Surgeon Gown (Altered)"
        ),
      },
      {
        id: "6afa509c-f550-4a8f-8727-b4e5841d058a",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Thiollier's+Garb",
          "Thiollier's Garb"
        ),
        isDLC: true,
      },
      {
        id: "a161a126-f2c9-4286-a712-dd1bf45c9688",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Thiollier's+Garb+(Altered)",
          "Thiollier's Garb (Altered)"
        ),
        isDLC: true,
      },
      {
        id: "a207aaf2-7bcf-4904-bb1e-84faffec636d",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Nomadic+Merchant's+Finery",
          "Nomadic Merchant's Finery"
        ),
      },
      {
        id: "438ae875-dfcb-4aef-96b3-7f2f5d6712c7",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Nomadic+Merchant's+Finery+(Altered)",
          "Nomadic Merchant's Finery (Altered)"
        ),
      },
      {
        id: "1678889a-9a7d-4e35-8b0e-dba17368ccec",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Bandit+Garb",
          "Bandit Garb"
        ),
      },
      {
        id: "79edc70a-a0cf-4227-b85e-7ccb4b4c8fc2",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Confessor+Armor",
          "Confessor Armor"
        ),
      },
      {
        id: "1ced6109-fb19-4186-bf4c-b88febdee6da",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Confessor+Armor+(Altered)",
          "Confessor Armor (Altered)"
        ),
      },
      {
        id: "5492a9f4-2e15-4c80-909e-853ddffc63b7",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Omenkiller+Robe",
          "Omenkiller Robe"
        ),
      },
      {
        id: "378682f8-13be-42fd-9618-84ed54081b76",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Raptor's+Black+Feathers",
          "Raptor's Black Feathers"
        ),
      },
      {
        id: "b3d355e8-f317-4529-8943-35f4fd14b429",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Gravebird+Armor",
          "Gravebird Armor"
        ),
        isDLC: true,
      },
      {
        id: "e728a63c-23ec-401f-ba50-777c66183a82",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Gravebird's+Blackquill+Armor",
          "Gravebird's Blackquill Armor"
        ),
        isDLC: true,
      },
      {
        id: "3b46bd47-f7c4-4782-a383-7c93ccea66b7",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Dancer's+Dress",
          "Dancer's Dress"
        ),
        isDLC: true,
      },
      {
        id: "cf92ef5c-23bf-42aa-a2d0-c43d78b04b9e",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Dancer's+Dress+(Altered)",
          "Dancer's Dress (Altered)"
        ),
        isDLC: true,
      },
      {
        id: "053c5538-0d74-4813-b4c4-6ad2f3528808",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Foot+Soldier+Tabard",
          "Foot Soldier Tabard"
        ),
      },
      {
        id: "c162abdc-b3e1-4ec8-af1d-46f9f8b0eda7",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Leather-Draped+Tabard",
          "Leather-Draped Tabard"
        ),
      },
      {
        id: "4ca40fff-f0c4-419a-b8c9-b67e48cae53e",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Chain-Draped+Tabard",
          "Chain-Draped Tabard"
        ),
      },
      {
        id: "1dd14fcd-4cf1-404d-9f36-4cb86132b75c",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Ivory-Draped+Tabard",
          "Ivory-Draped Tabard"
        ),
      },
      {
        id: "9f918ead-418d-4c52-b9bd-79a50a661e05",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Scarlet+Tabard",
          "Scarlet Tabard"
        ),
      },
      {
        id: "311130b3-56f7-4914-a429-14ecf2af05fe",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Bloodsoaked+Tabard",
          "Bloodsoaked Tabard"
        ),
      },
      {
        id: "3e83ac1f-2d47-4ccd-98b7-135a93aead70",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Highwayman+Cloth+Armor",
          "Highwayman Cloth Armor"
        ),
      },
      {
        id: "b97ee099-b9ae-46d1-99dc-c1fa170da45f",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Common+Soldier+Cloth+Armor",
          "Common Soldier Cloth Armor"
        ),
        isDLC: true,
      },
      {
        id: "d3b27a16-d6c8-4cff-ae43-6a2733590b4d",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Vulgar+Militia+Armor",
          "Vulgar Militia Armor"
        ),
      },
      {
        id: "33544c91-6345-4295-9a94-bde49b207904",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Shadow+Militiaman+Armor",
          "Shadow Militiaman Armor"
        ),
        isDLC: true,
      },
      {
        id: "1f3f3657-0f32-461f-b762-675380e40230",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Gravekeeper+Cloak",
          "Gravekeeper Cloak"
        ),
      },
      {
        id: "ac286806-f503-4ddb-bf11-044d1540155b",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Gravekeeper+Cloak+(Altered)",
          "Gravekeeper Cloak (Altered)"
        ),
      },
      {
        id: "f48998dc-f30b-4c23-8c73-e66e32e7287b",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Rotten+Gravekeeper+Cloak",
          "Rotten Gravekeeper Cloak"
        ),
      },
      {
        id: "91af3cd3-eae1-4c5b-b418-afabca7484de",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Rotten+Gravekeeper+Cloak+(Altered)",
          "Rotten Gravekeeper Cloak (Altered)"
        ),
      },
      {
        id: "e0153fdb-88c2-48ba-a978-d8f6e5f055c7",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Nox+Monk+Armor",
          "Nox Monk Armor"
        ),
      },
      {
        id: "73f86301-0c89-4048-9b67-9faea7d94b40",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Nox+Monk+Armor+(Altered)",
          "Nox Monk Armor (Altered)"
        ),
      },
      {
        id: "96e610fa-4336-4ebf-9844-ecfd69e7be8e",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Nox+Swordstress+Armor",
          "Nox Swordstress Armor"
        ),
      },
      {
        id: "9e10d222-5308-4d32-b7ba-8d959c1e9a35",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Nox+Swordstress+Armor+(Altered)",
          "Nox Swordstress Armor (Altered)"
        ),
      },
      {
        id: "da427295-4b1a-41c9-ba8c-0bab0b74320f",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Night+Maiden+Armor",
          "Night Maiden Armor"
        ),
      },
      {
        id: "3440ad2c-0576-4c37-9133-bf11b55b0716",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Champion+Pauldron",
          "Champion Pauldron"
        ),
      },
      {
        id: "ccb11ebd-892c-4117-abea-8a0e8d896103",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Highland+Attire",
          "Highland Attire"
        ),
        isDLC: true,
      },
      {
        id: "bf35e762-4946-4315-83a9-87db1c50e1e5",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Gloried+Attire",
          "Gloried Attire"
        ),
        isDLC: true,
      },
      {
        id: "61f0f4a7-b31f-4b92-a2d6-60583d6bf7d7",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Iron+Rivet+Armor",
          "Iron Rivet Armor"
        ),
        isDLC: true,
      },
      {
        id: "1b8f55ec-3fc7-4816-9ad5-5d98f5b09065",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Igon's+Armor",
          "Igon's Armor"
        ),
        isDLC: true,
      },
      {
        id: "d5e051ec-d42e-4769-bc69-1f6ed9696ffc",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Igon's+Armor+(Altered)",
          "Igon's Armor (Altered)"
        ),
        isDLC: true,
      },
      {
        id: "4e367ff4-3ff0-426e-b568-c0678d2cb5d9",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Ascetic's+Loincloth",
          "Ascetic's Loincloth"
        ),
        isDLC: true,
      },
      // horizontal rule in game
      {
        id: "709a6e87-f32e-4d12-b30d-e32ce2f281be",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Chain+Armor",
          "Chain Armor"
        ),
      },
      {
        id: "8051f340-cc7d-4b27-a180-0eda1e6b95f6",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Dirty+Chainmail",
          "Dirty Chainmail"
        ),
      },
      {
        id: "f99b1f7a-8938-4baf-a79a-2273fd99b14d",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Tree+Surcoat",
          "Tree Surcoat"
        ),
      },
      {
        id: "828262f9-ba49-4076-9bdf-6d9e1ad9f531",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Eye+Surcoat",
          "Eye Surcoat"
        ),
      },
      {
        id: "e6ca40db-c355-4e42-8cb6-49c79570b5c7",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Tree-and-Beast+Surcoat",
          "Tree-and-Beast Surcoat"
        ),
      },
      {
        id: "bad75f40-1ded-4f96-81e5-69893803fe53",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Cuckoo+Surcoat",
          "Cuckoo Surcoat"
        ),
      },
      {
        id: "41b47010-d1e2-4f77-9909-0b6fec54fea0",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Redmane+Surcoat",
          "Redmane Surcoat"
        ),
      },
      {
        id: "e04081ce-766b-497b-8a08-59a8a1ecdb8a",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Erdtree+Surcoat",
          "Erdtree Surcoat"
        ),
      },
      {
        id: "0cb92979-6eb2-4b3a-a9f3-44c11fd46598",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Haligtree+Crest+Surcoat",
          "Haligtree Crest Surcoat"
        ),
      },
      {
        id: "be2bf409-9813-4892-ba17-e6a19b919082",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Mausoleum+Surcoat",
          "Mausoleum Surcoat"
        ),
      },
      {
        id: "36ae5780-ac22-49e2-8737-6216f9d166ba",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Messmer+Soldier+Armor",
          "Messmer Soldier Armor"
        ),
        isDLC: true,
      },
      {
        id: "5ef45a47-358d-4bb3-92aa-b174847b61db",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Messmer+Soldier+Armor+(Altered)",
          "Messmer Soldier Armor (Altered)"
        ),
        isDLC: true,
      },
      // horizontal rule in game
      {
        id: "8af7f917-4632-4159-9c13-952ad0171be1",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Scale+Armor",
          "Scale Armor"
        ),
      },
      {
        id: "05e3589d-6b2a-4c71-9547-10e684938106",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Exile+Armor",
          "Exile Armor"
        ),
      },
      {
        id: "a339a07c-c570-453d-a592-5fefb4e3595f",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Kaiden+Armor",
          "Kaiden Armor"
        ),
      },
      {
        id: "cd25b574-b723-4d42-a95e-dab24b41bc0f",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Land+of+Reeds+Armor",
          "Land of Reeds Armor"
        ),
      },
      {
        id: "d2c7ae00-a30a-4b19-a4b6-f1d6bb1eaa8b",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Land+of+Reeds+Armor+(Altered)",
          "Land of Reeds Armor (Altered)"
        ),
      },
      {
        id: "32fc8ebf-2563-4128-bc17-7a4bb8b5a7bf",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/White+Reed+Armor",
          "White Reed Armor"
        ),
      },
      {
        id: "c77f5757-8f62-4e86-bd1e-2b45fdf3d869",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Ronin's+Armor",
          "Ronin's Armor"
        ),
      },
      {
        id: "248812d9-1f21-45a0-9222-deb66ebfcd76",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Ronin's+Armor+(Altered)",
          "Ronin's Armor (Altered)"
        ),
      },
      {
        id: "b0fce899-ca22-45c3-9b62-2450022e4108",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Eccentric's+Armor",
          "Eccentric's Armor"
        ),
      },
      {
        id: "87ea2357-1847-490b-9cc8-6f0c2a7c7ed4",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Freyja's+Armor",
          "Freyja's Armor"
        ),
        isDLC: true,
      },
      {
        id: "4ec3bd3b-9fec-41ba-90f6-9a26ff0275dd",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Freyja's+Armor+(Altered)",
          "Freyja's Armor (Altered)"
        ),
        isDLC: true,
      },
      {
        id: "2afb4b42-8459-4fc1-9ae0-9ede4ff12244",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Marionette+Soldier+Armor",
          "Marionette Soldier Armor"
        ),
      },
      {
        id: "2334ddae-1894-4430-9b39-ad2386640c30",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Blue+Silver+Mail+Armor",
          " Blue Silver Mail Armor"
        ),
      },
      {
        id: "04a856cd-d35f-40a0-8d33-c6a173bdb0a3",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Blue+Silver+Mail+Armor+(Altered)",
          "Blue Silver Mail Armor (Altered)"
        ),
      },
      {
        id: "b1279acb-6835-451f-941d-17e0491b6333",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Fire+Monk+Armor",
          "Fire Monk Armor"
        ),
      },
      {
        id: "06d2d658-a0e3-4633-8196-c07186ec7196",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Blackflame+Monk+Armor",
          "Blackflame Monk Armor"
        ),
      },
      {
        id: "2f5a7ae2-7398-4368-87f2-3f50523947ec",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Zamor+Armor",
          "Zamor Armor"
        ),
      },
      {
        id: "5f37d283-d1a7-4a18-b06a-ed4d07bf14bd",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Black+Knife+Armor",
          "Black Knife Armor"
        ),
      },
      {
        id: "a954f3d4-453e-45f2-b10d-2b9690194424",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Black+Knife+Armor+(Altered)",
          "Black Knife Armor (Altered)"
        ),
      },
      {
        id: "6eadf894-f64a-4798-afbd-0031909f4429",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Armor+of+Night",
          "Armor of Night"
        ),
        isDLC: true,
      },
      {
        id: "c9f3a7ad-4fd6-447f-90f0-535e3ff4ca8c",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Malenia's+Armor",
          "Malenia's Armor"
        ),
      },
      {
        id: "c99c9682-9cf0-44d3-b315-ae512f5f5e56",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Malenia's+Armor+(Altered)",
          "Malenia's Armor (Altered)"
        ),
      },
      {
        id: "04e218fd-3495-4511-86da-f447525a0bfd",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Elden+Lord+Armor",
          "Elden Lord Armor"
        ),
      },
      {
        id: "c8e9094e-2c7e-4186-87c2-534a54b32747",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Elden+Lord+Armor+(Altered)",
          "Elden Lord Armor (Altered)"
        ),
      },
      {
        id: "247df4c3-b1c4-4e22-b7a7-224fcec72ff5",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Messmer's+Armor",
          "Messmer's Armor"
        ),
        isDLC: true,
      },
      // horizontal rule in game
      {
        id: "d01826be-cbc9-4b54-8697-31ec4e819828",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Knight+Armor",
          "Knight Armor"
        ),
      },
      {
        id: "4bdab1df-e62a-4c4a-b752-2895099e46a1",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Vagabond+Knight+Armor",
          "Vagabond Knight Armor"
        ),
      },
      {
        id: "08614aed-68a0-4a68-94db-e36707652a1f",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Vagabond+Knight+Armor+(Altered)",
          "Vagabond Knight Armor (Altered)"
        ),
      },
      {
        id: "c64e4af3-9294-44c0-ba5a-0c0016b35cd3",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Carian+Knight+Armor",
          "Carian Knight Armor"
        ),
      },
      {
        id: "8adf95b7-7eb2-483b-a7a0-7eb916d11e19",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Carian+Knight+Armor+(Altered)",
          "Carian Knight Armor (Altered)"
        ),
      },
      {
        id: "c495f50a-81d9-49fc-8b74-ee343d67a261",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Godrick+Knight+Armor",
          "Godrick Knight Armor"
        ),
      },
      {
        id: "e80db068-c9c5-4041-89f9-1eb80579ff9f",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Godrick+Knight+Armor+(Altered)",
          "Godrick Knight Armor (Altered)"
        ),
      },
      {
        id: "17038f02-db98-404c-bc5d-ac573ce8f682",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Cuckoo+Knight+Armor",
          "Cuckoo Knight Armor"
        ),
      },
      {
        id: "cfbb93ed-fdaf-45d2-9355-ce3f0f18e69f",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Cuckoo+Knight+Armor+(Altered)",
          "Cuckoo Knight Armor (Altered)"
        ),
      },
      {
        id: "cfe31dde-62ff-4508-a5db-3280eb532482",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Redmane+Knight+Armor",
          "Redmane Knight Armor"
        ),
      },
      {
        id: "9383ade3-b730-4485-b6b2-7cac65ab16a5",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Redmane+Knight+Armor+(Altered)",
          "Redmane Knight Armor (Altered)"
        ),
      },
      {
        id: "55e51785-2c62-4cee-8d50-bc9a20f4439f",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Gelmir+Knight+Armor",
          "Gelmir Knight Armor"
        ),
      },
      {
        id: "7abbe3da-c824-4c78-943a-829ab291b8a1",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Gelmir+Knight+Armor+(Altered)",
          "Gelmir Knight Armor (Altered)"
        ),
      },
      {
        id: "7ae96a11-1aa7-4be4-93cd-2cdbfcee5e11",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Leyndell+Knight+Armor",
          "Leyndell Knight Armor"
        ),
      },
      {
        id: "1e70e37d-0b56-489f-a4e8-feafd71a150a",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Leyndell+Knight+Armor+(Altered)",
          "Leyndell Knight Armor (Altered)"
        ),
      },
      {
        id: "f05b191f-7649-443a-83c8-96682508dc9b",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Haligtree+Knight+Armor",
          "Haligtree Knight Armor"
        ),
      },
      {
        id: "cdf4c94f-948b-44b5-bad1-bbdcb8e49216",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Haligtree+Knight+Armor+(Altered)",
          "Haligtree Knight Armor (Altered)"
        ),
      },
      {
        id: "18c54486-147f-4178-bb8c-d74132cc717e",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Mausoleum+Knight+Armor",
          "Mausoleum Knight Armor"
        ),
      },
      {
        id: "d219491c-57db-4541-8494-acfb42d5ca27",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Mausoleum+Knight+Armor+(Altered)",
          "Mausoleum Knight Armor (Altered)"
        ),
      },
      {
        id: "218aeac5-d21c-4ee6-bbf5-793040152bb5",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Black+Knight+Armor",
          "Black Knight Armor"
        ),
        isDLC: true,
      },
      {
        id: "f3f71b57-54a9-48a4-a724-ebf9ad2c8d86",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Bloodhound+Knight+Armor",
          "Bloodhound Knight Armor"
        ),
      },
      {
        id: "03c9553c-b017-40d4-927c-9754a6489a8f",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Bloodhound+Knight+Armor+(Altered)",
          "Bloodhound Knight Armor (Altered)"
        ),
      },
      {
        id: "0ddfd436-178f-4a41-98be-f34498d08840",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Cleanrot+Armor",
          "Cleanrot Armor"
        ),
      },
      {
        id: "9ea20212-718d-46ab-9db6-d376eaa298b5",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Cleanrot+Armor+(Altered)",
          "Cleanrot Armor (Altered)"
        ),
      },
      {
        id: "02724381-ff50-4c52-98bc-e0c32c946a08",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Fire+Knight+Armor",
          "Fire Knight Armor"
        ),
        isDLC: true,
      },
      {
        id: "f6f981da-83c6-46b6-97f9-b0208c2c3455",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Fire+Knight+Armor+(Altered)",
          "Fire Knight Armor (Altered)"
        ),
        isDLC: true,
      },
      {
        id: "5a2e4ea5-8610-48a3-9a8b-1c84b8190217",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Death+Knight+Armor",
          "Death Knight Armor"
        ),
        isDLC: true,
      },
      {
        id: "3201447d-37fb-43a2-abd5-eecef2028ffa",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Horned+Warrior+Armor",
          "Horned Warrior Armor"
        ),
        isDLC: true,
      },
      {
        id: "40dc9b0d-4fad-41a3-8444-8ea8c01d29c6",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Divine+Beast+Warrior+Armor",
          "Divine Beast Warrior Armor"
        ),
        isDLC: true,
      },
      {
        id: "6c483342-2be4-4700-94e4-2e6cf8124f0d",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Divine+Bird+Warrior+Armor",
          "Divine Bird Warrior Armor"
        ),
        isDLC: true,
      },
      // horizontal rule in game
      {
        id: "1ae8ee15-cc43-4ee2-a581-0791eda9b0e4",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Oathseeker+Knight+Armor",
          "Oathseeker Knight Armor"
        ),
        isDLC: true,
      },
      {
        id: "e5574383-c508-4af0-920b-a88b6537185b",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Leda's+Armor",
          "Leda's Armor"
        ),
        isDLC: true,
      },
      {
        id: "075c6808-4638-4842-906f-99d6098bea68",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Raging+Wolf+Armor",
          "Raging Wolf Armor"
        ),
      },
      {
        id: "4a5f6fe1-8863-4ac9-85ed-405ce3aea9c7",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Raging+Wolf+Armor+(Altered)",
          "Raging Wolf Armor (Altered)"
        ),
      },
      {
        id: "af9d5459-93ea-4065-84d9-9edbae1272d9",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Hoslow's+Armor",
          "Hoslow's Armor"
        ),
      },
      {
        id: "bfb943ee-9d26-49c1-b449-74fae22682b7",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Hoslow's+Armor+(Altered)",
          "Hoslow's Armor (Altered)"
        ),
      },
      {
        id: "49b4703f-05bf-4018-aa5d-e5eda00459c9",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Twinned+Armor",
          "Twinned Armor"
        ),
      },
      {
        id: "1fe50d07-eab9-4760-b061-43eab606d443",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Twinned+Armor+(Altered)",
          "Twinned Armor (Altered)"
        ),
      },
      {
        id: "83f70352-144c-4f5e-9602-f585c6aebfe4",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Drake+Knight+Armor",
          "Drake Knight Armor"
        ),
      },
      {
        id: "84b43760-07d5-48c6-8d6f-d63083c4f1ae",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Drake+Knight+Armor+(Altered)",
          "Drake Knight Armor (Altered)"
        ),
      },
      {
        id: "2a4a3892-60b9-49b8-aa25-549248c1f7c6",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Blaidd's+Armor",
          "Blaidd's Armor"
        ),
      },
      {
        id: "2d2597bb-a737-43a5-b41d-df3f4d251e33",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Blaidd's+Armor+(Altered)",
          "Blaidd's Armor (Altered)"
        ),
      },
      {
        id: "c7b688dc-ef28-453f-be5e-924547eabf23",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Briar+Armor",
          "Briar Armor"
        ),
      },
      {
        id: "33904786-a74b-442f-948c-ccb770490a4e",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Briar+Armor+(Altered)",
          "Briar Armor (Altered)"
        ),
      },
      {
        id: "03384434-4701-4410-9030-c19800dbeac6",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Fingerprint+Armor",
          "Fingerprint Armor"
        ),
      },
      {
        id: "d4803d99-2706-4de4-b719-324f3fdb53f3",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Fingerprint+Armor+(Altered)",
          "Fingerprint Armor (Altered)"
        ),
      },
      {
        id: "7215f7e6-304e-4630-a72e-0bb8d04072c8",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Rakshasa+Armor",
          "Rakshasa Armor"
        ),
        isDLC: true,
      },
      {
        id: "3b4c8cf7-1e03-4049-92c6-f79de2975e24",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Royal+Remains+Armor",
          "Royal Remains Armor"
        ),
      },
      {
        id: "e97a2822-d246-4c6e-a960-42b826dbc4c1",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/All-Knowing+Armor",
          "All-Knowing Armor"
        ),
      },
      {
        id: "826291aa-c54f-4c4e-8e09-9040c25d6a8b",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/All-Knowing+Armor+(Altered)",
          "All-Knowing Armor (Altered)"
        ),
      },
      {
        id: "cc6ac901-9dfe-4b56-9edc-ca886ba23da1",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Royal+Knight+Armor",
          "Royal Knight Armor"
        ),
      },
      {
        id: "9e0c7c4c-0d5e-4eae-9d63-7ccc2af5dd71",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Royal+Knight+Armor+(Altered)",
          "Royal Knight Armor (Altered)"
        ),
      },
      {
        id: "b5bed874-78d4-4636-ac4f-870c71adddad",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Rellana's+Armor",
          "Rellana's Armor"
        ),
        isDLC: true,
      },
      {
        id: "e7ff306b-0e02-4779-91d3-6a2953d21a03",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Maliketh's+Armor",
          "Maliketh's Armor"
        ),
      },
      {
        id: "788d26a7-ae47-4b95-939d-fd3ad5bf7b74",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Maliketh's+Armor+(Altered)",
          "Maliketh's Armor (Altered)"
        ),
      },
      // horizontal rule in game
      {
        id: "40621b77-550d-4d20-906c-bef76ac9c56b",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Banished+Knight+Armor",
          "Banished Knight Armor"
        ),
      },
      {
        id: "40b07e93-0442-413d-a4a5-91847d60aaf5",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Banished+Knight+Armor+(Altered)",
          "Banished Knight Armor (Altered)"
        ),
      },
      {
        id: "90a526c7-e21f-4dad-b9b4-a1cad91a7c7c",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Night's+Cavalry+Armor",
          "Night's Cavalry Armor"
        ),
      },
      {
        id: "47184cbb-f26c-4fb9-b646-e68049f0e8d3",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Night's+Cavalry+Armor+(Altered)",
          "Night's Cavalry Armor (Altered)"
        ),
      },
      {
        id: "aa8dfadc-2ee9-44f2-a9f2-cb98d564d280",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Armor+of+Solitude",
          "Armor of Solitude"
        ),
        isDLC: true,
      },
      {
        id: "2a030295-06ad-4fd4-bcc6-4b273860c6e0",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Armor+of+Solitude+(Altered)",
          "Armor of Solitude (Altered)"
        ),
        isDLC: true,
      },
      {
        id: "aeb6032d-3faa-46d8-9d9d-1c992f921b8a",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Veteran's+Armor",
          "Veteran's Armor"
        ),
      },
      {
        id: "cc233459-5015-455a-bba5-14e4d8961cb7",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Veteran's+Armor+(Altered)",
          "Veteran's Armor (Altered)"
        ),
      },
      {
        id: "fd39a8b0-cfc1-469e-8916-8a11b9d76839",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Scaled+Armor",
          "Scaled Armor"
        ),
      },
      {
        id: "5568feb9-2d3e-437e-921d-1f1fdb4f112a",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Scaled+Armor+(Altered)",
          "Scaled Armor (Altered)"
        ),
      },
      {
        id: "7c7ead5e-a4e9-4a91-aaa8-a3ee8d8c7886",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Beast+Champion+Armor",
          "Beast Champion Armor"
        ),
      },
      {
        id: "edd4526d-7dab-431a-be8b-9662a61212e8",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Beast+Champion+Armor+(Altered)",
          "Beast Champion Armor (Altered)"
        ),
      },
      {
        id: "09a4f2e2-4343-4211-8d47-2a18f4ca8959",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Tree+Sentinel+Armor",
          "Tree Sentinel Armor"
        ),
      },
      {
        id: "7e65b900-5f79-44c7-85c0-c5c32205f18f",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Tree+Sentinel+Armor+(Altered)",
          "Tree Sentinel Armor (Altered)"
        ),
      },
      {
        id: "e6082db9-7307-4992-9810-9225fc956e7d",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Malformed+Dragon+Armor",
          "Malformed Dragon Armor"
        ),
      },
      {
        id: "02cf4ffc-9b4a-49f9-8865-edbd5bc85024",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Crucible+Axe+Armor",
          "Crucible Axe Armor"
        ),
      },
      {
        id: "527d064e-384e-4c4e-bb03-0ee925d87b15",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Crucible+Axe+Armor+(Altered)",
          "Crucible Axe Armor (Altered)"
        ),
      },
      {
        id: "6d9f4b7b-dca8-4924-929d-8f0bee880b87",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Crucible+Tree+Armor",
          "Crucible Tree Armor"
        ),
      },
      {
        id: "faca9033-c758-488b-a2a1-166e16988fc1",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Crucible+Tree+Armor+(Altered)",
          "Crucible Tree Armor (Altered)"
        ),
      },
      {
        id: "9f917fd8-f658-43d9-b273-f9cd6f86b9cb",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Gaius's+Armor",
          "Gaius's Armor"
        ),
        isDLC: true,
      },
      {
        id: "926924ac-e4b9-4a60-b50f-dddf4092b0ca",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Radahn's+Lion+Armor",
          "Radahn's Lion Armor"
        ),
      },
      {
        id: "51168ef8-1624-4714-9444-00ce66e9c42f",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Radahn's+Lion+Armor+(Altered)",
          "Radahn's Lion Armor (Altered)"
        ),
      },
      {
        id: "852b5929-1307-413a-b057-3261861ed4c9",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Young+Lion's+Armor",
          "Young Lion's Armor"
        ),
        isDLC: true,
      },
      {
        id: "e16a5cdf-f481-4ca3-b914-ada8d4535e53",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Young+Lion's+Armor+(Altered)",
          "Young Lion's Armor (Altered)"
        ),
        isDLC: true,
      },
      // horizontal rule in game
      {
        id: "f427f681-a859-40ae-9d08-42f3ae218a24",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Lionel's+Armor",
          "Lionel's Armor"
        ),
      },
      {
        id: "ed925aa5-d7f8-4c0e-bc66-df62c2c61c59",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Lionel's+Armor+(Altered)",
          "Lionel's Armor (Altered)"
        ),
      },
      {
        id: "8dd3808b-cb23-4efd-a11b-1b97ee9a9f10",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Bull-Goat+Armor",
          "Bull-Goat Armor"
        ),
      },
      {
        id: "bd03dff7-f330-4b55-9101-88dbb2bb9e2c",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Verdigris+Armor",
          "Verdigris Armor"
        ),
        isDLC: true,
      },
      {
        id: "41bdba02-d112-4fc8-95a1-def65507df29",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Omen+Armor",
          "Omen Armor"
        ),
      },
      {
        id: "a4b42d7c-c3ce-4ffb-9e0b-34594c06bd2c",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Fire+Prelate+Armor",
          "Fire Prelate Armor"
        ),
      },
      {
        id: "79882241-fbcc-46c4-972e-0b1d8f3eb60d",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Fire+Prelate+Armor+(Altered)",
          "Fire Prelate Armor (Altered)"
        ),
      },
    ],
  },
  {
    id: "1bac12c5-3675-46ec-b548-dfc113ab34fa",
    name: "Gauntlets",
    url: "https://eldenring.wiki.fextralife.com/Gauntlets",
    requirements: [
      {
        id: "af3d2103-2b96-4a85-b8f2-ae518d39ae0f",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Traveler's+Manchettes",
          "Traveler's Manchettes"
        ),
      },
      {
        id: "2a1aa4d5-f46c-4a75-9d8a-e30b821f96eb",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Guardian+Bracers",
          "Guardian Bracers"
        ),
      },
      {
        id: "5f39fc50-fcd9-40b1-a20f-1e046163716e",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Bloodsoaked+Manchettes",
          "Bloodsoaked Manchettes"
        ),
      },
      {
        id: "a62309dd-cc57-4133-86eb-0faa1ed49021",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Braided+Arm+Wraps",
          "Braided Arm Wraps"
        ),
        isDLC: true,
      },
      {
        id: "86b914fd-28ff-40e7-82c3-1ea05ecc079b",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Mushroom+Arms",
          "Mushroom Arms"
        ),
      },
      // horizontal rule in game
      {
        id: "e0be1702-4cae-4d6e-9339-9fed9ef58169",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Astrologer+Gloves",
          "Astrologer Gloves"
        ),
      },
      {
        id: "e881a2f8-7893-4228-beef-b8c0a322a764",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Sorcerer+Manchettes",
          "Sorcerer Manchettes"
        ),
      },
      {
        id: "715d683b-cb1a-4f6d-96ab-47b46e924fb1",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Battlemage+Manchettes",
          "Battlemage Manchettes"
        ),
      },
      {
        id: "4df20a58-232b-4e99-adca-3b591ce5e656",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Errant+Sorcerer+Manchettes",
          "Errant Sorcerer Manchettes"
        ),
      },
      {
        id: "19ddb6b8-f8e9-49c2-bc93-18d4329066e5",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Spellblade's+Gloves",
          "Spellblade's Gloves"
        ),
      },
      {
        id: "42c9eb01-a3f4-40ea-bad6-b66bff917308",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Alberich's+Bracers",
          "Alberich's Bracers"
        ),
      },
      {
        id: "e6642224-dd61-4186-8fa8-a8f15022e5fa",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Preceptor's+Gloves",
          "Preceptor's Gloves"
        ),
      },
      {
        id: "0fa051a9-340b-4fd7-85b8-e8eb3da3cd18",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/High+Priest+Gloves",
          "High Priest Gloves"
        ),
        isDLC: true,
      },
      {
        id: "f8a5b481-3bb0-4844-bfe0-300aee8160ea",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Azur's+Manchettes",
          "Azur's Manchettes"
        ),
      },
      {
        id: "b200c76b-3b0f-45b6-ace8-62ea5914ba0f",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Lusat's+Manchettes",
          "Lusat's Manchettes"
        ),
      },
      {
        id: "801b8061-1bfa-4cd5-b24c-ec65ae1de354",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Queen's+Bracelets",
          "Queen's Bracelets"
        ),
      },
      {
        id: "f04941bc-f79e-46a5-84ab-40824d77b8db",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Traveling+Maiden+Gloves",
          "Traveling Maiden Gloves"
        ),
      },
      {
        id: "254b5bf0-30c5-4a4f-b24a-410e515002f1",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Dryleaf+Arm+Wraps",
          "Dryleaf Arm Wraps"
        ),
        isDLC: true,
      },
      {
        id: "4fed4aff-0329-45f5-840c-94c5c7d7a947",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Gold+Bracelets",
          "Gold Bracelets"
        ),
      },
      // horizontal rule in game
      {
        id: "1041f446-2e17-4004-b632-804d63b82bb4",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Perfumer+Gloves",
          "Perfumer Gloves"
        ),
      },
      {
        id: "9ad8b291-3abb-4613-99b4-c9cae7a54a98",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Traveler's+Gloves",
          "Traveler's Gloves"
        ),
      },
      {
        id: "a0bf3d84-e96a-437a-802d-515f52c83e34",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Depraved+Perfumer+Gloves",
          "Depraved Perfumer Gloves"
        ),
      },
      {
        id: "ecae557f-a1a3-440d-be49-6c7d08d8b5d9",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Godskin+Apostle+Bracelets",
          "Godskin Apostle Bracelets"
        ),
      },
      {
        id: "56de05cb-53a9-4d6f-82ff-31baa219d94e",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Godskin+Noble+Bracelets",
          "Godskin Noble Bracelets"
        ),
      },
      {
        id: "6fc9c9a9-5235-478e-b1b5-837f33c042fe",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Ansbach's+Manchettes",
          "Ansbach's Manchettes"
        ),
        isDLC: true,
      },
      // horizontal rule in game
      {
        id: "54bbd030-9a94-4877-8886-36d9e06a9004",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Leather+Gloves",
          "Leather Gloves"
        ),
      },
      {
        id: "79e3b91c-9022-4b0d-8b38-87b43347440e",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Warrior+Gauntlets",
          "Warrior Gauntlets"
        ),
      },
      {
        id: "9f774387-c3b0-422d-a919-48c0e3cf7533",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Noble's+Gloves",
          "Noble's Gloves"
        ),
      },
      {
        id: "a0be5d15-ddfe-4137-b571-d4f0f2096488",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/War+Surgeon+Gloves",
          "War Surgeon Gloves"
        ),
      },
      {
        id: "4ee780d4-0e0f-4e80-95f4-1ffbf13f16ef",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Thiollier's+Gloves",
          "Thiollier's Gloves"
        ),
        isDLC: true,
      },
      {
        id: "e8ba8dd2-5819-4d40-8f35-ed19644c431a",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Bandit+Manchettes",
          "Bandit Manchettes"
        ),
      },
      {
        id: "a64a7765-498b-46c7-8254-ed7426d3774d",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Confessor+Gloves",
          "Confessor Gloves"
        ),
      },
      {
        id: "33c98bde-c70d-49fe-94f2-dca21ad31d45",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Omenkiller+Long+Gloves",
          "Omenkiller Long Gloves"
        ),
      },
      {
        id: "4f4cb5f7-2923-48ae-8786-d788b00c02f0",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Gravebird+Bracelets",
          "Gravebird Bracelets"
        ),
        isDLC: true,
      },
      {
        id: "776b0471-daa7-4ad1-81a1-07a31b331d2f",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Dancer's+Bracer",
          "Dancer's Bracer"
        ),
        isDLC: true,
      },
      // horizontal rule in game
      {
        id: "ddfd9bd3-24ec-4265-8307-eb44a3d78b8c",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Foot+Soldier+Gauntlets",
          "Foot Soldier Gauntlets"
        ),
      },
      {
        id: "1baaa282-4592-49ca-bbb5-522c0802b4d6",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Highwayman+Gauntlets",
          "Highwayman Gauntlets"
        ),
      },
      {
        id: "8f209236-c638-47bb-8144-36a59858ebac",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Common+Soldier+Gauntlets",
          "Common Soldier Gauntlets"
        ),
        isDLC: true,
      },
      {
        id: "39f39cce-2b4a-4d7e-86e7-3b24d9925608",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Vulgar+Militia+Gauntlets",
          "Vulgar Militia Gauntlets"
        ),
      },
      {
        id: "eb0fdde6-0827-4ba2-a0f1-f1d170624120",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Shadow+Militiaman+Gauntlets",
          "Shadow Militiaman Gauntlets"
        ),
        isDLC: true,
      },
      {
        id: "753f549d-3ee3-4267-a3cf-e98904fddb4b",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Nox+Bracelets",
          "Nox Bracelets"
        ),
      },
      {
        id: "10ed4b7b-52fa-4496-bb53-3f1d51f7afea",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Champion+Bracers",
          "Champion Bracers"
        ),
      },
      {
        id: "a7985c03-dab4-4dc8-8664-7dd3490559b9",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Leather+Arm+Wraps",
          "Leather Arm Wraps"
        ),
        isDLC: true,
      },
      {
        id: "b6d5c85b-e435-4375-939a-8aa2621521a4",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Iron+Rivet+Gauntlets",
          "Iron Rivet Gauntlets"
        ),
        isDLC: true,
      },
      {
        id: "3f872345-b920-4323-ae75-860b14e8e200",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Igon's+Gauntlets",
          "Igon's Gauntlets"
        ),
        isDLC: true,
      },
      {
        id: "f6a209ee-2bb6-4a34-974d-652307dce0bc",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Ascetic's+Wrist+Guards",
          "Ascetic's Wrist Guards"
        ),
        isDLC: true,
      },
      // horizontal rule in game
      {
        id: "ad6db3bd-1075-4e9e-bf29-3dece46b7d2c",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Chain+Gauntlets",
          "Gauntlets"
        ),
      },
      {
        id: "50fc1725-f64d-42b5-816c-75dd37b160a6",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Iron+Gauntlets",
          "Iron Gauntlets"
        ),
      },
      {
        id: "1c788f15-ab04-4974-9edd-3e2d7ac005cc",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Godrick+Soldier+Gauntlets",
          "Godrick Soldier Gauntlets"
        ),
      },
      {
        id: "57527130-17e6-42a3-ba52-764cf896995e",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Raya+Lucarian+Gauntlets",
          "Raya Lucarian Gauntlets"
        ),
      },
      {
        id: "39b79bd6-2333-420c-9fa4-555d79fa7084",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Radahn+Soldier+Gauntlets",
          "Radahn Soldier Gauntlets"
        ),
      },
      {
        id: "bb6c7c08-115e-44c9-85c7-4d91285d14b1",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Leyndell+Soldier+Gauntlets",
          "Leyndell Soldier Gauntlets"
        ),
      },
      {
        id: "52fe3957-d958-474a-916d-ad4bda39fd7f",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Haligtree+Gauntlets",
          "Haligtree Gauntlets"
        ),
      },
      {
        id: "358593c9-64d5-4283-8e29-3659621a442f",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Mausoleum+Gauntlets",
          "Mausoleum Gauntlets"
        ),
      },
      {
        id: "21db0da6-3d94-4c0d-aa0c-891d3bee735b",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Messmer+Soldier+Gauntlets",
          "Messmer Soldier Gauntlets"
        ),
        isDLC: true,
      },
      {
        id: "f04a82c3-d22e-4c8a-8d38-3f1b4f1899b1",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Exile+Gauntlets",
          "Exile Gauntlets"
        ),
      },
      {
        id: "e8352fe5-7b2d-4c65-9e68-1ec547556c39",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Kaiden+Gauntlets",
          "Kaiden Gauntlets"
        ),
      },
      {
        id: "8717210c-8e2b-4cc6-8c5c-966b477e9f4d",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Land+of+Reeds+Gauntlets",
          "Land of Reeds Gauntlets"
        ),
      },
      {
        id: "a8be0009-30c0-4285-84de-0e1c382f1112",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/White+Reed+Gauntlets",
          "White Reed Gauntlets"
        ),
      },
      {
        id: "a739a05a-b6b3-469c-bef6-3427c8b61536",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Ronin's+Gauntlets",
          "Ronin's Gauntlets"
        ),
      },
      {
        id: "e2bbca88-b71a-42e5-bc74-7d07f41899fc",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Eccentric's+Manchettes",
          "Eccentric's Manchettes"
        ),
      },
      {
        id: "25c34254-b815-41d6-bd21-276f5ba81ba4",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Freyja's+Gauntlets",
          "Freyja's Gauntlets"
        ),
        isDLC: true,
      },
      {
        id: "29861211-46bf-4377-9245-e97f3098f6cc",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Blue+Silver+Bracelets",
          "Blue Silver Bracelets"
        ),
      },
      {
        id: "aae00aaf-850a-4915-9b89-4e50c30f4d2f",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Fire+Monk+Gauntlets",
          "Fire Monk Gauntlets"
        ),
      },
      {
        id: "3c5ac6b1-6295-427c-b3c4-d192d25eff52",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Blackflame+Monk+Gauntlets",
          "Blackflame Monk Gauntlets"
        ),
      },
      {
        id: "9bb05bb9-1cc5-4080-9aba-34f0c9e26634",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Zamor+Bracelets",
          "Zamor Bracelets"
        ),
      },
      {
        id: "f6b25a6b-374b-4d36-9a71-b2f65a817024",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Black+Knife+Gauntlets",
          "Black Knife Gauntlets"
        ),
      },
      {
        id: "a495832b-0fc1-4b1f-abc6-a94efc9662b9",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Gauntlets+of+Night",
          "Gauntlets of Night"
        ),
        isDLC: true,
      },
      {
        id: "0bb9e0df-7aef-46db-9cd6-326a918744ef",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Malenia's+Gauntlet",
          "Malenia's Gauntlet"
        ),
      },
      {
        id: "e57d3a98-eb2c-43b9-9fe9-0aeb797f0441",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Elden+Lord+Bracers",
          "Elden Lord Bracers"
        ),
      },
      {
        id: "785e77af-5957-4dcf-a331-4ec23810e8f5",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Messmer's+Gauntlets",
          "Messmer's Gauntlets"
        ),
        isDLC: true,
      },
      // horizontal rule in game
      {
        id: "640223ab-9846-45e6-b1a6-e624e0e1627b",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Knight+Gauntlets",
          "Knight Gauntlets"
        ),
      },
      {
        id: "49b6cc91-dfde-4f1c-9107-f705272dcb3a",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Vagabond+Knight+Gauntlets",
          "Vagabond Knight Gauntlets"
        ),
      },
      {
        id: "8f7d5d80-4da4-459b-a062-5eb0ce27a477",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Carian+Knight+Gauntlets",
          "Carian Knight Gauntlets"
        ),
      },
      {
        id: "367d5a8a-4412-4910-8bbe-834d3c20faf1",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Godrick+Knight+Gauntlets",
          "Godrick Knight Gauntlets"
        ),
      },
      {
        id: "22b3436b-15ba-4084-98fd-b530fd103ae4",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Cuckoo+Knight+Gauntlets",
          "Cuckoo Knight Gauntlets"
        ),
      },
      {
        id: "1a9b8965-d5fa-4cd0-bbbf-13983dadadac",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Redmane+Knight+Gauntlets",
          "Redmane Knight Gauntlets"
        ),
      },
      {
        id: "e4537580-f58a-43a8-8a63-73af59aa0626",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Gelmir+Knight+Gauntlets",
          "Gelmir Knight Gauntlets"
        ),
      },
      {
        id: "21cc5570-78fa-4786-8983-4206c732d4e3",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Leyndell+Knight+Gauntlets",
          "Leyndell Knight Gauntlets"
        ),
      },
      {
        id: "38ae75c0-a390-4efc-9075-d3cd00cce9dd",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Haligtree+Knight+Gauntlets",
          "Haligtree Knight Gauntlets"
        ),
      },
      {
        id: "29979e4f-404d-4da6-8cc0-ab3080ac20fb",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Mausoleum+Knight+Gauntlets",
          "Mausoleum Knight Gauntlets"
        ),
      },
      {
        id: "3d3ac4b2-688d-4704-9965-1b592ddd41f9",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Black+Knight+Gauntlets",
          "Black Knight Gauntlets"
        ),
        isDLC: true,
      },
      {
        id: "4a1be364-964d-4d81-805d-cd8af6e743b2",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Bloodhound+Knight+Gauntlets",
          "Bloodhound Knight Gauntlets"
        ),
      },
      {
        id: "ff839d07-01cd-45c6-b2c3-fb969ee7dddf",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Cleanrot+Gauntlets",
          "Cleanrot Gauntlets"
        ),
      },
      {
        id: "0d32e2d8-ea51-47fa-a0a0-74e0f6c68fde",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Fire+Knight+Gauntlets",
          "Fire Knight Gauntlets"
        ),
        isDLC: true,
      },
      {
        id: "53857362-22d8-4c39-8fc7-b96f68ae0880",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Death+Knight+Gauntlets",
          "Death Knight Gauntlets"
        ),
        isDLC: true,
      },
      {
        id: "ee1bda8a-9e06-430d-8eda-f8e1e0cec346",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Horned+Warrior+Gauntlets",
          "Horned Warrior Gauntlets"
        ),
        isDLC: true,
      },
      {
        id: "47ea3e6a-b79d-4a99-ae55-585c9473548a",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Divine+Bird+Warrior+Gauntlets",
          "Divine Bird Warrior Gauntlets"
        ),
        isDLC: true,
      },
      // horizontal rule in game
      {
        id: "2441cc67-c88e-45ee-857a-9d3303dc64c9",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Oathseeker+Knight+Gauntlets",
          "Oathseeker Knight Gauntlets"
        ),
        isDLC: true,
      },
      {
        id: "68708a37-e0cb-4074-9dcd-14ac5097d555",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Raging+Wolf+Gauntlets",
          "Raging Wolf Gauntlets"
        ),
      },
      {
        id: "c9095bcb-9423-4223-bd3c-f7aaff76a84e",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Hoslow's+Gauntlets",
          "Hoslow's Gauntlets"
        ),
      },
      {
        id: "577ffb1c-521e-4261-9b67-afd41352902f",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Twinned+Gauntlets",
          "Twinned Gauntlets"
        ),
      },
      {
        id: "df111e49-c561-4f4f-91a5-6a31cca7389c",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Drake+Knight+Gauntlets",
          "Drake Knight Gauntlets"
        ),
      },
      {
        id: "73d0ca77-0b1e-4553-b3a5-beed56ed4bb5",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Blaidd's+Gauntlets",
          "Blaidd's Gauntlets"
        ),
      },
      {
        id: "da5f6d88-ee6a-4d2c-b59e-4ad150d14b92",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Briar+Gauntlets",
          "Briar Gauntlets"
        ),
      },
      {
        id: "033a4245-4b99-42a7-9ffc-e992d2ae84ea",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Fingerprint+Gauntlets",
          "Fingerprint Gauntlets"
        ),
      },
      {
        id: "c9c54c72-814b-42ae-8541-43d831de348b",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Rakshasa+Gauntlets",
          "Rakshasa Gauntlets"
        ),
        isDLC: true,
      },
      {
        id: "55900d27-e245-4050-ab98-8e853d8efd7f",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Royal+Remains+Gauntlets",
          "Royal Remains Gauntlets"
        ),
      },
      {
        id: "e29f5495-f606-4225-bb02-29456c2235bf",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/All-Knowing+Gauntlets",
          "All-Knowing Gauntlets"
        ),
      },
      {
        id: "69af0627-de55-478a-90e6-dd5bf71dd40d",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Royal+Knight+Gauntlets",
          "Royal Knight Gauntlets"
        ),
      },
      {
        id: "09ee81e7-48e4-48f0-b3f8-2303763363d7",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Rellana's+Gloves",
          "Rellana's Gloves"
        ),
        isDLC: true,
      },
      {
        id: "58e3997b-3e8b-4ed8-b1f0-f5aef2a45202",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Maliketh's+Gauntlets",
          "Maliketh's Gauntlets"
        ),
      },
      // horizontal rule in game
      {
        id: "a6e3cbff-bafe-4671-8de2-e63dc52cd15a",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Banished+Knight+Gauntlets",
          "Banished Knight Gauntlets"
        ),
      },
      {
        id: "f80b94f4-d99c-4a9f-86f0-0fae34125108",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Night's+Cavalry+Gauntlets",
          "Night's Cavalry Gauntlets"
        ),
      },
      {
        id: "64e48c6e-7195-4ddd-bb9b-4c17e1f6dde9",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Gauntlets+of+Solitude",
          "Gauntlets of Solitude"
        ),
        isDLC: true,
      },
      {
        id: "901a2632-5726-4b8e-b008-aa6e34603e79",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Veteran's+Gauntlets",
          "Veteran's Gauntlets"
        ),
      },
      {
        id: "9b300d4b-ae36-4d5f-9179-59afe1e0e930",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Scaled+Gauntlets",
          "Scaled Gauntlets"
        ),
      },
      {
        id: "1bedefd9-2ec4-4b29-b310-ef6b8a453b7a",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Beast+Champion+Gauntlets",
          "Beast Champion Gauntlets"
        ),
      },
      {
        id: "1754f35b-0791-4aca-9366-fb5d1a2b502d",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Tree+Sentinel+Gauntlets",
          "Tree Sentinel Gauntlets"
        ),
      },
      {
        id: "e227f432-2257-4714-a42f-35639a099945",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Malformed+Dragon+Gauntlets",
          "Malformed Dragon Gauntlets"
        ),
      },
      {
        id: "22591548-3975-489c-a31e-831e27f88446",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Crucible+Gauntlets",
          "Crucible Gauntlets"
        ),
      },
      {
        id: "e177b06d-104b-43ee-83f5-171414125eb7",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Gaius's+Gauntlets",
          "Gaius's Gauntlets"
        ),
        isDLC: true,
      },
      {
        id: "26089bd7-c42a-47b1-bf45-01946b81aa51",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Radahn's+Gauntlets",
          "Radahn's Gauntlets"
        ),
      },
      {
        id: "edb8373a-9266-4b11-ab72-2d81e9b3b034",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Young+Lion's+Gauntlets",
          "Young Lion's Gauntlets"
        ),
        isDLC: true,
      },
      // horizontal rule in game
      {
        id: "6ceb2e02-846f-4b88-97e3-881a897fde44",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Lionel's+Gauntlets",
          "Lionel's Gauntlets"
        ),
      },
      {
        id: "55ffe846-1e2e-4d25-8417-22832a6605a7",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Bull-Goat+Gauntlets",
          "Bull-Goat Gauntlets"
        ),
      },
      {
        id: "418bedf9-5e58-46c7-aa28-4285a15958c0",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Verdigris+Gauntlets",
          "Verdigris Gauntlets"
        ),
        isDLC: true,
      },
      {
        id: "7c46b4a2-ab08-4b39-ae05-95aaaacf80eb",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Omen+Gauntlets",
          "Omen Gauntlets"
        ),
      },
      {
        id: "87839ffc-9db4-4594-a8e9-0ae33c5e34e4",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Fire+Prelate+Gauntlets",
          "Fire Prelate Gauntlets"
        ),
      },
    ],
  },
  {
    id: "46a7fe62-7c6b-481e-a0a5-686e6ba2f531",
    name: "Legs",
    url: "https://eldenring.wiki.fextralife.com/Leg+Armor",
    requirements: [
      {
        id: "cb1e4b8c-7542-4a07-b762-87e4801ff9b7",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Cloth+Trousers",
          "Cloth Trousers"
        ),
      },
      {
        id: "d6d212ee-91b1-45c9-883f-f8890f89850a",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Traveler's+Boots",
          "Traveler's Boots"
        ),
      },
      {
        id: "ea773b46-7d2a-4ba6-a505-be0b13b8aec5",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Commoner's+Shoes",
          "Commoner's Shoes"
        ),
      },
      {
        id: "4026adc2-f08a-4516-9400-246e6973f274",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Aristocrat+Boots",
          "Aristocrat Boots"
        ),
      },
      {
        id: "51da7d80-d4d5-495d-acca-b70ce7c15cb5",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Old+Aristocrat+Shoes",
          "Old Aristocrat Shoes"
        ),
      },
      {
        id: "4f706636-da80-471c-a12b-a2d703b8d60d",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Page+Trousers",
          "Page Trousers"
        ),
      },
      {
        id: "3b256bae-c4ed-46eb-8350-837e36c38d23",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Guardian+Greaves",
          "Guardian Greaves"
        ),
      },
      {
        id: "9bef0415-d77c-4139-a7ee-19aded71a9a3",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Prisoner+Trousers",
          "Prisoner Trousers"
        ),
      },
      {
        id: "6ed01dec-f4a9-4a1a-a852-8c8bfcb07a6d",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Soiled+Loincloth",
          "Soiled Loincloth"
        ),
        isDLC: true,
      },
      {
        id: "8e0f4c0b-19f4-44dc-9cb1-6688020f42e3",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Mushroom+Legs",
          "Mushroom Legs"
        ),
      },
      // horizontal rule in game
      {
        id: "68f76f9f-1582-478a-90dc-1f193196e5e5",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Astrologer+Trousers",
          "Astrologer Trousers"
        ),
      },
      {
        id: "63e9cbf6-8013-4172-9d20-c575f1af2d5d",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Sorcerer+Leggings",
          "Sorcerer Leggings"
        ),
      },
      {
        id: "98c5387a-90e6-4ba1-86b7-b802fea6a7d4",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Battlemage+Legwraps",
          "Battlemage Legwraps"
        ),
      },
      {
        id: "6e6f09b6-940c-4fe7-b468-667312ac6d7e",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Errant+Sorcerer+Boots",
          "Errant Sorcerer Boots"
        ),
      },
      {
        id: "6f5eb73a-9743-4bfb-935b-48ed728dc2f4",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Spellblade's+Trousers",
          "Spellblade's Trousers"
        ),
      },
      {
        id: "2171c10c-e197-4118-bec8-df8603e55a79",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Alberich's+Trousers",
          "Alberich's Trousers"
        ),
      },
      {
        id: "1be34473-ceb4-4444-9b20-03a6346404e4",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Preceptor's+Trousers",
          "Preceptor's Trousers"
        ),
      },
      {
        id: "ff508dd5-d3ea-4f71-995b-fb956de01aa5",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Old+Sorcerer's+Legwraps",
          "Old Sorcerer's Legwraps"
        ),
      },
      {
        id: "1626e5f8-8c94-4f9d-a75f-3a2f80984968",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Queen's+Leggings",
          "Queen's Leggings"
        ),
      },
      {
        id: "41924250-c789-4754-a385-f8cea2d90603",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Snow+Witch+Skirt",
          "Snow Witch Skirt"
        ),
      },
      {
        id: "ebdac7c1-9399-4140-a73d-a6cd1829be7a",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/High+Priest+Undergarments",
          "High Priest Undergarments"
        ),
        isDLC: true,
      },
      {
        id: "300ca1c0-25a2-471c-8edb-bbf3ca2d8021",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Prophet+Trousers",
          "Prophet Trousers"
        ),
      },
      {
        id: "423fd7c2-5f39-4b8d-ade0-176351337b1f",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Traveling+Maiden+Boots",
          "Traveling Maiden Boots"
        ),
      },
      {
        id: "26167073-3501-4257-b9df-8748a7873701",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Finger+Maiden+Shoes",
          "Finger Maiden Shoes"
        ),
      },
      {
        id: "5adca1f2-a9fd-44ec-ba68-0c42447a1685",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Sage+Trousers",
          "Sage Trousers"
        ),
      },
      {
        id: "5b16c07d-897c-4f87-bf1b-6c174f196345",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Dryleaf+Cuissardes",
          "Dryleaf Cuissardes"
        ),
        isDLC: true,
      },
      {
        id: "6639748e-4b0d-4cbd-b23e-444d4dafc4da",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Gold+Waistwrap",
          "Gold Waistwrap"
        ),
      },
      // horizontal rule in game
      {
        id: "36dc4a8a-01ba-4f29-80c6-baa289ad0152",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Perfumer+Sarong",
          "Perfumer Sarong"
        ),
      },
      {
        id: "22f2de95-606c-4061-87e2-538e549ec150",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Traveler's+Slops",
          "Traveler's Slops"
        ),
      },
      {
        id: "64c858ac-104c-4425-933f-bd43103ac376",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Depraved+Perfumer+Trousers",
          "Depraved Perfumer Trousers"
        ),
      },
      {
        id: "f7f0a3f1-5c95-46aa-86ab-2ac5c7569d10",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Consort's+Trousers",
          "Consort's Trousers"
        ),
      },
      {
        id: "aff39cb7-05dc-4c1c-8ede-71b39edbc018",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Fur+Leggings",
          "Fur Leggings"
        ),
      },
      {
        id: "cb9512bf-9f7b-4586-ad7e-88f1f0385834",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Shaman+Leggings",
          "Shaman Leggings"
        ),
      },
      {
        id: "8dba130d-fc93-4785-8eca-bf0b31de664e",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Godskin+Apostle+Trousers",
          "Godskin Apostle Trousers"
        ),
      },
      {
        id: "f6d0ee6f-051f-4483-bb95-4e5c639fe3f5",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Godskin+Noble+Trousers",
          "Godskin Noble Trousers"
        ),
      },
      {
        id: "adeafef0-4257-4d2c-98eb-95fb4bb6848c",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Sanguine+Noble+Waistcloth",
          "Sanguine Noble Waistcloth"
        ),
      },
      {
        id: "3c9f703d-4391-482e-8e89-6b5606ea1c33",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Ansbach's+Boots",
          "Ansbach's Boots"
        ),
        isDLC: true,
      },
      // horizontal rule in game
      {
        id: "dc7a30d7-50a3-4494-be74-639c73a4e39c",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Leather+Trousers",
          "Leather Trousers"
        ),
      },
      {
        id: "a05693b3-f108-4368-a991-4bf84fa46340",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Leather+Boots",
          "Leather Boots"
        ),
      },
      {
        id: "daf04b6f-dae4-4f4b-9bea-a275a38f179e",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Warrior+Greaves",
          "Warrior Greaves"
        ),
      },
      {
        id: "74b7e928-9fca-4bb9-ae37-e20aebfc656c",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Noble's+Trousers",
          "Noble's Trousers"
        ),
      },
      {
        id: "2c9b5a7a-be2e-4d04-a5d3-a8a9c5ac9027",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/War+Surgeon+Trousers",
          "War Surgeon Trousers"
        ),
      },
      {
        id: "38c24652-412a-46c2-b85f-a34aec01a1c1",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Thiollier's+Trousers",
          "Thiollier's Trousers"
        ),
        isDLC: true,
      },
      {
        id: "a4494a31-5d24-4e48-a56a-e8dc336885ce",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Nomadic+Merchant's+Trousers",
          "Nomadic Merchant's Trousers"
        ),
      },
      {
        id: "a2acf22d-a133-4c02-8cb5-12a274547f6d",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Bandit+Boots",
          "Bandit Boots"
        ),
      },
      {
        id: "0a9c19e1-3f1f-4b6f-a49e-cc56a316d1de",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Confessor+Boots",
          "Confessor Boots"
        ),
      },
      {
        id: "57e21149-812d-491a-9755-e7677cc3c31f",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Omenkiller+Boots",
          "Omenkiller Boots"
        ),
      },
      {
        id: "59d3ad99-7c7f-4377-b451-cad13e039d06",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Gravebird+Anklets",
          "Gravebird Anklets"
        ),
        isDLC: true,
      },
      {
        id: "d42dbadc-248e-4ae2-86ac-7c0dafbefe17",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Dancer's+Trousers",
          "Dancer's Trousers"
        ),
        isDLC: true,
      },
      // horizontal rule in game
      {
        id: "ed4f177e-8e2a-421e-aa49-02f6f7c5b09a",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Foot+Soldier+Greaves",
          "Foot Soldier Greaves"
        ),
      },
      {
        id: "967e466c-e38a-4079-b4e2-764d7f19d0ce",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Common+Soldier+Greaves",
          "Common Soldier Greaves"
        ),
        isDLC: true,
      },
      {
        id: "8afc56e1-37ca-4fb2-a892-66d707d09e66",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Vulgar+Militia+Greaves",
          "Vulgar Militia Greaves"
        ),
      },
      {
        id: "3e015a68-0039-41ef-ac45-70f63765b238",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Shadow+Militiaman+Greaves",
          "Shadow Militiaman Greaves"
        ),
        isDLC: true,
      },
      {
        id: "d1a29c35-ee83-4a5a-bc0c-0d19ec22cb39",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Duelist+Greaves",
          "Duelist Greaves"
        ),
      },
      {
        id: "c3ae371d-7c69-4db5-80be-5840e45180a8",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Rotten+Duelist+Greaves",
          "Rotten Duelist Greaves"
        ),
      },
      {
        id: "ef384a70-b7e3-4095-99c8-a3567f91c21b",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Nox+Greaves",
          "Nox Greaves"
        ),
      },
      {
        id: "042632ca-a96c-41d7-bbf2-07207a7110a2",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Champion+Gaiters",
          "Champion Gaiters"
        ),
      },
      {
        id: "cd01e41c-29d0-4ecc-b1a8-2d23b7aef2df",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Leather+Leg+Wraps",
          "Leather Leg Wraps"
        ),
        isDLC: true,
      },
      {
        id: "a334b2f4-e86c-457c-acd9-e6a37e039fce",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Iron+Rivet+Greaves",
          "Iron Rivet Greaves"
        ),
        isDLC: true,
      },
      {
        id: "c3ef0675-0e55-409b-9fdd-df564bc5d4ec",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Igon's+Loincloth",
          "Igon's Loincloth"
        ),
        isDLC: true,
      },
      {
        id: "defc6537-7461-4c33-a6ac-b766cc55dafb",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Ascetic's+Ankle+Guards",
          "Ascetic's Ankle Guards"
        ),
        isDLC: true,
      },
      // horizontal rule in game
      {
        id: "52353184-32ad-4bef-bed0-495536235954",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Chain+Leggings",
          "Chain Leggings"
        ),
      },
      {
        id: "b4efd552-15af-4624-863e-eb148a5edeca",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Godrick+Soldier+Greaves",
          "Godrick Soldier Greaves"
        ),
      },
      {
        id: "42f58fff-3e7b-4696-b5d3-bedd4db74191",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Raya+Lucarian+Greaves",
          "Raya Lucarian Greaves"
        ),
      },
      {
        id: "4f0ce3bf-330c-4457-ac2b-6871464c9d15",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Radahn+Soldier+Greaves",
          "Radahn Soldier Greaves"
        ),
      },
      {
        id: "19e4d7fc-b32e-431d-ae5b-2a879614c8c3",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Leyndell+Soldier+Greaves",
          "Leyndell Soldier Greaves"
        ),
      },
      {
        id: "4d03d98c-7922-4232-8c1e-d3f035395a4c",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Haligtree+Greaves",
          "Haligtree Greaves"
        ),
      },
      {
        id: "a1979615-ffa8-444c-9096-f67e2903fbc3",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Messmer+Soldier+Greaves",
          "Messmer Soldier Greaves"
        ),
        isDLC: true,
      },
      {
        id: "7371a2da-fe2f-4a4b-aba9-ecc9cfaa90ce",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Mausoleum+Greaves",
          "Mausoleum Greaves"
        ),
      },
      {
        id: "93dd99f5-0965-4d89-8672-9d24c58258d7",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Exile+Greaves",
          "Exile Greaves"
        ),
      },
      {
        id: "c62cbf9c-0ea2-40a1-9220-7a813a578510",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Kaiden+Trousers",
          "Kaiden Trousers"
        ),
      },
      {
        id: "28aa546f-643c-4a92-b0f8-5a15bf6e4dc3",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Land+of+Reeds+Greaves",
          "Land of Reeds Greaves"
        ),
      },
      {
        id: "5ecb127d-3b6b-4665-b953-d00d88f3ef1d",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/White+Reed+Greaves",
          "White Reed Greaves"
        ),
      },
      {
        id: "156f81d5-a53a-42bd-8e86-2e6f5bf7a758",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Ronin's+Greaves",
          "Ronin's Greaves"
        ),
      },
      {
        id: "a04d6ccf-694f-4f48-9caf-5c2a3494876e",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Eccentric's+Breeches",
          "Eccentric's Breeches"
        ),
      },
      {
        id: "0a36e4f6-03b4-4e5a-a7cb-d8d248e04744",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Freyja's+Greaves",
          "Freyja's Greaves"
        ),
        isDLC: true,
      },
      {
        id: "60601d89-aad0-4284-86b4-ea334409d0fd",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Blue+Silver+Mail+Skirt",
          "Blue Silver Mail Skirt"
        ),
      },
      {
        id: "52441d56-0d55-4c6f-b688-3c4b970d0856",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Fire+Monk+Greaves",
          "Fire Monk Greaves"
        ),
      },
      {
        id: "c8b667a3-9628-442f-9e91-e9919e8e8e69",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Blackflame+Monk+Greaves",
          "Blackflame Monk Greaves"
        ),
      },
      {
        id: "60fa51d4-7d24-4edf-ac20-ee77d38177c2",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Zamor+Legwraps",
          "Zamor Legwraps"
        ),
      },
      {
        id: "4aa22bbe-a35d-477e-9451-a7d924af092a",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Black+Knife+Greaves",
          "Black Knife Greaves"
        ),
      },
      {
        id: "d550797a-c09d-483a-8590-791247a0f594",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Greaves+of+Night",
          "Greaves of Night"
        ),
        isDLC: true,
      },
      {
        id: "4254fe58-2819-4763-bd77-7d4ce8ba1b11",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Malenia's+Greaves",
          "Malenia's Greaves"
        ),
      },
      {
        id: "d6ccc43b-8a9e-4dbd-873a-f9dc648abefc",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Elden+Lord+Greaves",
          "Elden Lord Greaves"
        ),
      },
      {
        id: "0e5865cc-c04c-446a-9d64-7938df4efe98",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Messmer's+Greaves",
          "Messmer's Greaves"
        ),
        isDLC: true,
      },
      // horizontal rule in game
      {
        id: "1e0f2777-0101-482f-bb36-e634e8661856",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Knight+Greaves",
          "Knight Greaves"
        ),
      },
      {
        id: "64208afd-88fb-44f6-a661-5d9c7548af7d",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Vagabond+Knight+Greaves",
          "Vagabond Knight Greaves"
        ),
      },
      {
        id: "da364dee-35c9-48de-8bfd-4bc32b44368d",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Carian+Knight+Greaves",
          "Carian Knight Greaves"
        ),
      },
      {
        id: "ac105d05-f8d5-4ae3-9716-05f73c2243bc",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Godrick+Knight+Greaves",
          "Godrick Knight Greaves"
        ),
      },
      {
        id: "fd13aadc-e36e-4471-9b81-7801a5afb473",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Cuckoo+Knight+Greaves",
          "Cuckoo Knight Greaves"
        ),
      },
      {
        id: "3d4552c1-be8e-45ea-b9a1-1c482989f551",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Redmane+Knight+Greaves",
          "Redmane Knight Greaves"
        ),
      },
      {
        id: "5fd4064a-2b4a-4a04-bcf5-beec3c1172d5",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Gelmir+Knight+Greaves",
          "Gelmir Knight Greaves"
        ),
      },
      {
        id: "2b6b3417-3eb1-4ed0-87d7-4ba344c87e10",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Leyndell+Knight+Greaves",
          "Leyndell Knight Greaves"
        ),
      },
      {
        id: "2e63a70d-e51e-42e8-94f9-0db302337d0d",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Haligtree+Knight+Greaves",
          "Haligtree Knight Greaves"
        ),
      },
      {
        id: "18584f7b-d50e-44cc-a02c-a9804418bf87",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Mausoleum+Knight+Greaves",
          "Mausoleum Knight Greaves"
        ),
      },
      {
        id: "6fa7138c-3917-4226-bbf6-3594d8343356",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Black+Knight+Greaves",
          "Black Knight Greaves"
        ),
        isDLC: true,
      },
      {
        id: "86fe5793-16f0-4ef4-a7f1-f434c84de4ed",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Bloodhound+Knight+Greaves",
          "Bloodhound Knight Greaves"
        ),
      },
      {
        id: "c99897fb-1a4d-4d89-8158-2356bec988b1",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Cleanrot+Greaves",
          "Cleanrot Greaves"
        ),
      },
      {
        id: "ea07a744-16ff-45af-a39b-c8f2c22033a9",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Fire+Knight+Greaves",
          "Fire Knight Greaves"
        ),
        isDLC: true,
      },
      {
        id: "01be6266-bf88-48a3-a825-d4db9adac7dd",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Death+Knight+Greaves",
          "Death Knight Greaves"
        ),
        isDLC: true,
      },
      {
        id: "91cb1bcd-fff0-4265-a70e-5b4e0cd44cea",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Horned+Warrior+Greaves",
          "Horned Warrior Greaves"
        ),
        isDLC: true,
      },
      {
        id: "0dcdd4fa-5ec1-42bc-836c-df57550e33e8",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Divine+Bird+Warrior+Greaves",
          "Divine Bird Warrior Greaves"
        ),
        isDLC: true,
      },
      // horizontal rule in game
      {
        id: "7aa5fd2b-703a-4c1e-87ed-8a53e4fe6493",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Oathseeker+Knight+Greaves",
          "Oathseeker Knight Greaves"
        ),
        isDLC: true,
      },
      {
        id: "d444738e-aa15-4357-9f48-a99d3c3dbda8",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Raging+Wolf+Greaves",
          "Raging Wolf Greaves"
        ),
      },
      {
        id: "8d89b69a-533e-4e3f-b551-b976cef3d1e2",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Hoslow's+Greaves",
          "Hoslow's Greaves"
        ),
      },
      {
        id: "0de00ebd-e2d0-4e56-bf95-5d3e52d7286c",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Twinned+Greaves",
          "Twinned Greaves"
        ),
      },
      {
        id: "0e58aff0-5861-4dbf-bf79-49ec3d31b4d7",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Drake+Knight+Greaves",
          "Drake Knight Greaves"
        ),
      },
      {
        id: "445fb6b7-1e54-4183-a0d4-5ab12a2af7d1",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Blaidd's+Greaves",
          "Blaidd's Greaves"
        ),
      },
      {
        id: "818cbec2-b1a5-43be-bade-805c284f2f26",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Briar+Greaves",
          "Briar Greaves"
        ),
      },
      {
        id: "cec5bbb1-1dd6-4f0b-9d69-e2f9e4721b8f",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Fingerprint+Greaves",
          "Fingerprint Greaves"
        ),
      },
      {
        id: "1ce41a9f-5ff5-4813-b4dd-ac7f24a05c6c",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Rakshasa+Greaves",
          "Rakshasa Greaves"
        ),
        isDLC: true,
      },
      {
        id: "7f140607-c60d-4267-b270-d649ff482d10",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Royal+Remains+Greaves",
          "Royal Remains Greaves"
        ),
      },
      {
        id: "d0611dd0-23ed-4d2f-90af-eb22a7a4ae01",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/All-Knowing+Greaves",
          "All-Knowing Greaves"
        ),
      },
      {
        id: "3d897cc3-926a-4d91-b784-f452ff5346dd",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Royal+Knight+Greaves",
          "Royal Knight Greaves"
        ),
      },
      {
        id: "a2f25a68-4fd5-44d4-b080-07cf7020a041",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Rellana's+Greaves",
          "Rellana's Greaves"
        ),
        isDLC: true,
      },
      {
        id: "39cda0c4-849a-486a-8e32-f72731618f06",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Maliketh's+Greaves",
          "Maliketh's Greaves"
        ),
      },
      // horizontal rule in game
      {
        id: "1e870c5b-31f8-4dfa-a5c9-c3be77e86b3c",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Banished+Knight+Greaves",
          "Banished Knight Greaves"
        ),
      },
      {
        id: "2b8e2075-7bcf-4d70-83fd-57bc0d110ca1",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Night's+Cavalry+Greaves",
          "Night's Cavalry Greaves"
        ),
      },
      {
        id: "3e335746-1ecf-4fd1-a2d6-f9e497f84cc6",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Greaves+of+Solitude",
          "Greaves of Solitude"
        ),
        isDLC: true,
      },
      {
        id: "ee6df765-3064-4d98-bc92-28d7c2723ff7",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Veteran's+Greaves",
          "Veteran's Greaves"
        ),
      },
      {
        id: "47dad958-d1c1-43d1-a1f1-b81612eecef1",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Scaled+Greaves",
          "Scaled Greaves"
        ),
      },
      {
        id: "7631124a-9bb2-4832-b22d-914b94b218c9",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Beast+Champion+Greaves",
          "Beast Champion Greaves"
        ),
      },
      {
        id: "568c48f2-1ab5-4619-89da-ecafbe0cbb9a",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Tree+Sentinel+Greaves",
          "Tree Sentinel Greaves"
        ),
      },
      {
        id: "eda3aa0e-5197-4b23-98b7-e5c4f3f94c3a",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Malformed+Dragon+Greaves",
          "Malformed Dragon Greaves"
        ),
      },
      {
        id: "cd68de0c-c7e5-4960-a176-0d844514178e",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Crucible+Greaves",
          "Crucible Greaves"
        ),
      },
      {
        id: "9e87f305-06c8-4eab-b01a-e523dad48173",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Gaius's+Greaves",
          "Gaius's Greaves"
        ),
        isDLC: true,
      },
      {
        id: "209756ff-6f0c-4de0-bdae-43b21f67e690",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Radahn's+Greaves",
          "Radahn's Greaves"
        ),
      },
      {
        id: "5d498e4a-5bdf-411d-9d1c-7d680340be11",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Young+Lion's+Greaves",
          "Young Lion's Greaves"
        ),
        isDLC: true,
      },
      // horizontal rule in game
      {
        id: "42518288-00f0-48c1-9887-05a4b4276749",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Lionel's+Greaves",
          "Lionel's Greaves"
        ),
      },
      {
        id: "fa39bb3b-7e7f-4c3c-853f-974c70fdcff8",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Bull-Goat+Greaves",
          "Bull-Goat Greaves"
        ),
      },
      {
        id: "0bc976c9-a44e-4c8c-a7bc-98d406a8eea2",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Verdigris+Greaves",
          "Verdigris Greaves"
        ),
        isDLC: true,
      },
      {
        id: "70462363-b322-4688-a5b8-169ade5d0b0e",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Omen+Greaves",
          "Omen Greaves"
        ),
      },
      {
        id: "09aace7e-0ae7-4594-9f6d-51b6a5c03720",
        description: rawHTMLLink(
          "https://eldenring.wiki.fextralife.com/Fire+Prelate+Greaves",
          "Fire Prelate Greaves"
        ),
      },
    ],
  },
];
