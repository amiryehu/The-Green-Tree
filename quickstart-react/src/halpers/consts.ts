export const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjE0MDIyOTU3MCwidWlkIjoyNjQ2MzMwMCwiaWFkIjoiMjAyMi0wMS0xMVQwODoxMjoyMy4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MTEwMjMyOCwicmduIjoidXNlMSJ9.N_oz5hUENcW9QRWwcflkMcLur5UQGC5fVcFJx2RNb6c";

export const avgWordsInPage = 250;
export const treesColors = ["grayTree", "greenTree", "redTree", "yellowTree"];

export interface Item {
  name: string;
  updates: { text_body: string }[];
  creator: { id: number; name: string };
}

export interface Numbers {
  counterAllItems: number;
  counterMyItems: number;
  myPart: number;
  paperISave: number;
}

export interface User {
  name: string;
  id: number;
}

// export interface Tree {
//   iamgeUrl: string;
//   color: string;
//   height: string;
//   width: string;
// }
