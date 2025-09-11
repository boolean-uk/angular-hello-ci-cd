import { Handler } from '@netlify/functions';


type LiverpoolPlayer = {
  id: number;
  jerseyNumber: number | null;
  name: string | null;
  posision: string | null;
  age: number | null;
  height: string | null;
  weight: number | null;
};


const handler: Handler = async (event, context) => {

  const liverpoolPlayers: LiverpoolPlayer[] = [
    { id: 1, jerseyNumber: 3, name: 'Wataru Endo', posision: 'Midfielder', age: 32, height: "5'10\"", weight: 76 },
    { id: 2, jerseyNumber: 4, name: 'Virgil Van Dijk', posision: 'Defender', age: 34, height: "6'4\"", weight: 92 },
    { id: 3, jerseyNumber: 11, name: 'Mohamed Salah', posision: 'Forward', age: 33, height: "5'8\"", weight: 71 },
    { id: 4, jerseyNumber: 1, name: 'Alisson', posision: 'Goalkeeper', age: 33, height: "6'3\"", weight: 91 },
    { id: 5, jerseyNumber: 26, name: 'Andy Robertson', posision: 'Defender', age: 31, height: "5'10\"", weight: 64 },
    { id: 6, jerseyNumber: 28, name: 'Freddie Woodman', posision: 'Goalkeeper', age: 28, height: "6'2\"", weight: 83 },
    { id: 7, jerseyNumber: 2, name: 'Joe Gomez', posision: 'Defender', age: 28, height: "6'2\"", weight: 77 },
    { id: 8, jerseyNumber: 21, name: 'Kostas Tsimikas', posision: 'Defender', age: 29, height: "5'10\"", weight: 77 },
    { id: 9, jerseyNumber: 9, name: 'Alexander Isak', posision: 'Forward', age: 26, height: "6'3\"", weight: 70 },
    { id: 10, jerseyNumber: 5, name: 'Ibrahima Konate', posision: 'Defender', age: 26, height: "6'4\"", weight: 84 },
    { id: 11, jerseyNumber: 46, name: 'Rhys Williams', posision: 'Defender', age: 24, height: "6'4\"", weight: 82 },
    { id: 12, jerseyNumber: 14, name: 'Federico Chiesa', posision: 'Midfielder', age: 28, height: "5'8\"", weight: 70 },
    { id: 13, jerseyNumber: 18, name: 'Cody Gakpo', posision: 'Forward', age: 26, height: "6'3\"", weight: 76 },
    { id: 14, jerseyNumber: 25, name: 'Giorgi Mamardashvili', posision: 'Goalkeeper', age: 25, height: "6'5\"", weight: 90 },
    { id: 15, jerseyNumber: 8, name: 'Dominik Szoboszlai', posision: 'Midfielder', age: 25, height: "6'1\"", weight: 74 },
    { id: 16, jerseyNumber: 10, name: 'Alexis Mac Allister', posision: 'Midfielder', age: 26, height: "5'9\"", weight: 70 },
    { id: 17, jerseyNumber: 56, name: 'Vitezslav Jaros', posision: 'Goalkeeper', age: 24, height: "6'1\"", weight: 73 },
    { id: 18, jerseyNumber: 63, name: 'Owen Beck', posision: 'Defender', age: 23, height: "5'9\"", weight: null },
    { id: 19, jerseyNumber: 17, name: 'Curtis Jones', posision: 'Midfielder', age: 24, height: "6'0\"", weight: 81 },
    { id: 20, jerseyNumber: 30, name: 'Jeremie Frimpong', posision: 'Defender', age: 24, height: "5'7\"", weight: 65 },
    { id: 21, jerseyNumber: 38, name: 'Ryan Gravenberch', posision: 'Midfielder', age: 23, height: "6'2\"", weight: 77 },
    { id: 22, jerseyNumber: 19, name: 'Harvey Elliott', posision: 'Midfielder', age: 22, height: "5'8\"", weight: 64 },
    { id: 23, jerseyNumber: 47, name: 'Calvin Ramsey', posision: 'Defender', age: 22, height: "-", weight: null },
    { id: 24, jerseyNumber: 12, name: 'Conor Bradley', posision: 'Defender', age: 22, height: "5'11\"", weight: 76 },
    { id: 25, jerseyNumber: 6, name: 'Milos Kerkez', posision: 'Defender', age: 22, height: "5'9\"", weight: 71 },
    { id: 26, jerseyNumber: 7, name: 'Florian Wirtz', posision: 'Midfielder', age: 22, height: "5'9\"", weight: 71 },
    { id: 27, jerseyNumber: 22, name: 'Hugo Ekitike', posision: 'Forward', age: 23, height: "6'2\"", weight: 76 },
    { id: 28, jerseyNumber: 52, name: 'Isaac Mabaya', posision: 'Midfielder', age: 21, height: "-", weight: null },
    { id: 29, jerseyNumber: 43, name: 'Stefan Bajcetic', posision: 'Defender', age: 21, height: "6'0\"", weight: 76 },
    { id: 30, jerseyNumber: 91, name: 'Luca Stephenson', posision: 'Midfielder', age: 22, height: "5'11\"", weight: 76 },
    { id: 31, jerseyNumber: 41, name: 'Armin Pecsi', posision: 'Goalkeeper', age: 20, height: "6'2\"", weight: null },
    { id: 32, jerseyNumber: 15, name: 'Giovanni Leoni', posision: 'Defender', age: 18, height: "6'4\"", weight: 76 },
    { id: 33, jerseyNumber: 42, name: 'Treymaurice Nyoni', posision: 'Midfielder', age: 18, height: "5'10\"", weight: 75 },
    { id: 34, jerseyNumber: 73, name: 'Rio Ngumoha', posision: 'Forward', age: 17, height: "5'6\"", weight: 75 },
  ];

  
  return {
    statusCode: 200,
    body: JSON.stringify(liverpoolPlayers),
    headers: { 'Content-Type': 'application/json' },
  };
};

export { handler };