import { Item } from "./consts";

export const countAllItemsAndMyItems = (items: Item[], userId: number) => {
  let counterAllItems = 0;
  let counterMyItems = 0;

  items.map((item) => {
    const numOfWords = item.name.split(" ").length;
    counterAllItems = counterAllItems + numOfWords;

    if (item.creator.id === userId) {
      counterMyItems = counterMyItems + numOfWords;
    }
  });

  const myPart = Math.ceil((counterMyItems / counterAllItems) * 100);
  const paperISave = Math.ceil(counterMyItems / 400);

  return {
    counterAllItems: counterAllItems,
    counterMyItems: counterMyItems,
    myPart: myPart,
    paperISave: paperISave,
  };
};
