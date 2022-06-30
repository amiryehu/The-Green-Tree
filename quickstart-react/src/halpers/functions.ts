import { Item } from "./consts";

export const countAllItemsAndMyItems = (items: Item[], userId: number) => {
  let counterAllItems = 0;
  let counterMyItems = 0;
  let countUpdates = 0;

  items.forEach((item) => {
    const numOfWords = item.name.split(" ").length;

    item.updates.forEach((update) => {
      countUpdates += update.text_body.split(" ").length;
    });

    counterAllItems = counterAllItems + numOfWords + countUpdates;

    if (item.creator.id === userId) {
      counterMyItems = counterMyItems + numOfWords + countUpdates;
    }
    countUpdates = 0;
  });

  const myPart = Math.ceil((counterMyItems / counterAllItems) * 100);
  const paperISave = Math.ceil(counterMyItems / 250);

  return {
    counterAllItems: counterAllItems,
    counterMyItems: counterMyItems,
    myPart: myPart,
    paperISave: paperISave,
  };
};
