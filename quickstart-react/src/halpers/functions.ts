import { Item } from "./consts";

export const countAllItemsAndMyItems = (items: Item[], userId: number) => {
  let counterAllItems = 0;
  let counterMyItems = 0;
  type ObjType = { name: string; numOfWords: number };
  let users: { [key: number]: ObjType } = {};

  items.forEach((item) => {
    let numOfWords = item.name.split(" ").length;

    item.updates.forEach((update) => {
      numOfWords += update.text_body.split(" ").length;
    });

    counterAllItems = counterAllItems + numOfWords;

    // if (item.creator.id === userId) {
    //   counterMyItems = counterMyItems + numOfWords + countUpdates;
    // }
    const usersCurrentValue = users[item.creator.id]?.numOfWords ?? 0;
    users[item.creator.id] = {
      name: item.creator.name,
      numOfWords: usersCurrentValue + numOfWords,
    };
  });

  const myPart = Math.ceil((counterMyItems / counterAllItems) * 100);
  const paperISave = Math.ceil(counterMyItems / 250);

  return {
    counterAllItems: counterAllItems,
    counterMyItems: counterMyItems,
    myPart: myPart,
    paperISave: paperISave,
    users,
  };
};
