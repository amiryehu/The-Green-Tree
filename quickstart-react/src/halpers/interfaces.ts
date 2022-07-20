export interface Item {
  name: string;
  updates: { text_body: string }[];
  creator: { id: number; name: string };
}

export interface IUserData {
  counterAllItems: number;
  counterMyItems: number;
  myPart: number;
  paperISave: number;
  users: {};
}

export interface User {
  name: string;
  numOfWords: number;
}

interface userItemData {}
