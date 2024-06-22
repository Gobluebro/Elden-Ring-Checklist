import { rawHTMLLink } from "./listHelper";
import { ListType } from "./types";
const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const AchievementsList: Array<ListType> = [
  {
    id: "d62c2c4c-cc27-469b-87d2-0f1d96f915b0",
    name: "Restos Cenicientos Legendarios",
    imageUrl: prefix + "/achievements/ashes_30x30.jpg",
    imageAlt: "Legendary Ashen Remains Achievement",
    requirements: [
      {
        id: "12a5ed50-53b8-491d-b348-56169ea60d1c",
        description: rawHTMLLink(
          "https://www.eliteguias.com/guias/e/er/elden-ring_cenizas-espiritus-p8.php",
          "Lhutel la decapitada"
        ),
      },
      {
        id: "0782e771-52b2-447e-a174-b08ff1981cef",
        description: rawHTMLLink(
          "https://www.eliteguias.com/guias/e/er/elden-ring_cenizas-espiritus-p47.php",
          "Kristoff, Caballero del dragón antiguo"
        ),
      },
      {
        id: "f7b9aad4-d39a-425e-a58e-e25bbc310f84",
        description: rawHTMLLink(
          "https://www.eliteguias.com/guias/e/er/elden-ring_cenizas-espiritus-p44.php",
          "Tiche, la Cuchillo Negro"
        ),
      },
      {
        id: "285aba4b-7ced-4fbc-ace2-859ebd57c4b8",
        description: rawHTMLLink(
          "https://www.eliteguias.com/guias/e/er/elden-ring_cenizas-espiritus-p39.php",
          "Cenizas de lágrima mimética"
        ),
      },
      {
        id: "5612a3a9-6ed1-4337-9426-d41733b83212",
        description: rawHTMLLink(
          "https://www.eliteguias.com/guias/e/er/elden-ring_cenizas-espiritus-p34.php",
          "Caballero de la Melena Roja Ogha"
        ),
      },
      {
        id: "415da615-f877-4823-aaef-9be7df965876",
        description: rawHTMLLink(
          "https://www.eliteguias.com/guias/e/er/elden-ring_cenizas-espiritus-p61.php",
          "Caballera Imputrescible Finlay"
        ),
      },
    ],
  },
  {
    id: "1eed9ac3-6ca8-4c38-88d0-e0e8b441678c",
    name: "Talismanes Legendarios",
    imageUrl: prefix + "/achievements/talismans_30x30.jpg",
    imageAlt: "Legendary Talismans Achievement",
    requirements: [
      {
        id: "11ddcd50-99a9-4bb3-b5ad-1dcede078951",
        description: rawHTMLLink(
          "https://www.eliteguias.com/guias/e/er/elden-ring_talismanes-p36.php",
          "Icono de Radagon"
        ),
      },
      {
        id: "ae65334a-5ed2-47b6-9920-0eedc52d017c",
        description: rawHTMLLink(
          "https://www.eliteguias.com/guias/e/er/elden-ring_talismanes-p47.php",
          "Marca ulcerada de Radagon"
        ),
      },
      {
        id: "7079c109-3bb2-4063-9c0d-f68f5e4be09c",
        description: rawHTMLLink(
          "https://www.eliteguias.com/guias/e/er/elden-ring_talismanes-p58.php",
          "Icono de Godfrey"
        ),
      },
      {
        id: "a61a4200-1fbc-42e9-bbd2-0029ed0c46f2",
        description: rawHTMLLink(
          "https://www.eliteguias.com/guias/e/er/elden-ring_talismanes-p53.php",
          "Luna de Nokstella"
        ),
      },
      {
        id: "cda06299-9016-4e16-b978-3113f73a92fb",
        description: rawHTMLLink(
          "https://www.eliteguias.com/guias/e/er/elden-ring_talismanes-p83.php",
          "Talismán de escudo grande con blasón de dragón"
        ),
      },
      {
        id: "d767aac1-27b3-49f5-949b-68aa12869ead",
        description: rawHTMLLink(
          "https://www.eliteguias.com/guias/e/er/elden-ring_talismanes-p79.php",
          "Marca ulcerada de Márika"
        ),
      },
      {
        id: "3a6e87ec-7891-4adf-87b2-517edbdd9495",
        description: rawHTMLLink(
          "https://www.eliteguias.com/guias/e/er/elden-ring_talismanes-p86.php",
          "Talismán del antiguo señor"
        ),
      },
      {
        id: "8815eb72-fd77-47d7-9638-33531903b745",
        description: rawHTMLLink(
          "https://www.eliteguias.com/guias/e/er/elden-ring_talismanes-p3.php",
          "Favor del Árbol Áureo +2"
        ),
      },
    ],
  },
  {
    id: "ae1cc1fe-67c6-4630-9a6d-469e4311e25e",
    name: "Hechizos y Encantamientos Legendarios",
    imageUrl: prefix + "/achievements/sorceries_and_incantations_30x30.jpg",
    imageAlt: "Legendary Sorceries and Incantations Achievement",
    requirements: [
      {
        id: "2be2eeec-1b01-4276-8ddd-04a35345e077",
        description: rawHTMLLink(
          "https://www.eliteguias.com/guias/e/er/elden-ring_encantamientos-p27.php",
          "Llama del dios caído"
        ),
      },
      {
        id: "dfaff523-ffc5-496c-921c-1880516245bb",
        description: rawHTMLLink(
          "https://www.eliteguias.com/guias/e/er/elden-ring_hechizos-p67.php",
          "Lluvia de estrellas de Goliath"
        ),
      },
      {
        id: "12767f63-5dd7-4950-9587-269df266b873",
        description: rawHTMLLink(
          "https://www.eliteguias.com/guias/e/er/elden-ring_encantamientos-p53.php",
          "Estrellas ancestrales"
        ),
      },
      {
        id: "c0cc2b26-920c-440a-b71c-c3d3340f2710",
        description: rawHTMLLink(
          "https://www.eliteguias.com/guias/e/er/elden-ring_hechizos-p54.php",
          "Luna Negra de Ranni"
        ),
      },
      {
        id: "c5a63b48-d748-4ecb-914b-bdbbbf69d779",
        description: rawHTMLLink(
          "https://www.eliteguias.com/guias/e/er/elden-ring_hechizos-p59.php",
          "Cometa Azur"
        ),
      },
      {
        id: "a102a76b-b685-4573-b147-71815eea3047",
        description: rawHTMLLink(
          "https://www.eliteguias.com/guias/e/er/elden-ring_hechizos-p60.php",
          "Estrellas de ruina"
        ),
      },
      {
        id: "02a9b689-b75a-49e6-91b3-066d1aeed8e0",
        description: rawHTMLLink(
          "https://www.eliteguias.com/guias/e/er/elden-ring_encantamientos-p51.php",
          "Rugido de Greyoll"
        ),
      },
    ],
  },
  {
    id: "d92078bb-2544-45f9-aabf-3be911f65f32",
    name: "Armas Legendarias",
    imageUrl: prefix + "/achievements/armaments_30x30.jpg",
    imageAlt: "Legendary Armaments Achievement",
    requirements: [
      {
        id: "60d7351a-8977-4ed9-9276-0b4dd00f7428",
        description: rawHTMLLink(
          "https://www.eliteguias.com/guias/e/er/elden-ring_armas-p62.php",
          "Espadón de hoja injertada"
        ),
      },
      {
        id: "ad87f7e7-7658-4a01-9a29-e24097027372",
        description: rawHTMLLink(
          "https://www.eliteguias.com/guias/e/er/elden-ring_armas-p215.php",
          "Espada del ejecutor Marais"
        ),
      },
      {
        id: "48886187-b47f-4c3c-878b-3d6ce3dd0cf4",
        description: rawHTMLLink(
          "https://www.eliteguias.com/guias/e/er/elden-ring_armas-p271.php",
          "Shotel del eclipse"
        ),
      },
      {
        id: "3ca7f934-5d8e-4eb7-ba05-9a6978263709",
        description: rawHTMLLink(
          "https://www.eliteguias.com/guias/e/er/elden-ring_armas-p125.php",
          "Espada de la Noche y la Llama"
        ),
      },
      {
        id: "fe5cf178-8c78-4dab-a863-2af73fc1fb65",
        description: rawHTMLLink(
          "https://www.eliteguias.com/guias/e/er/elden-ring_armas-p76.php",
          "Cetro de devorador"
        ),
      },
      {
        id: "8b73338e-7aab-47f4-9c71-69de9fd9bfa2",
        description: rawHTMLLink(
          "https://www.eliteguias.com/guias/e/er/elden-ring_armas-p283.php",
          "Espadón de la Orden Dorada"
        ),
      },
      {
        id: "34388927-e9cd-4fa2-a08f-37558f62b52c",
        description: rawHTMLLink(
          "https://www.eliteguias.com/guias/e/er/elden-ring_armas-p170.php",
          "Espadón de ruinas"
        ),
      },
      {
        id: "d5ac25e3-83f1-4877-ad85-ca9ce4aa0daa",
        description: rawHTMLLink(
          "https://www.eliteguias.com/guias/e/er/elden-ring_armas-p258.php",
          "Rayo de Gransax"
        ),
      },
      {
        id: "5c90de04-315a-4591-82c1-786107defa55",
        description: rawHTMLLink(
          "https://www.eliteguias.com/guias/e/er/elden-ring_armas-p198.php",
          "Espadón de la luna negra"
        ),
      },
    ],
  },
];
