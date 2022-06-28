export const queries = {
  getBoardIds: `query {
        boards {
            id
        }
    }`,
  getAllItemsFromBoard: `query ($boardIds: [Int]!){
      boards (ids:$boardIds) {
        name
        items {
          name

          creator {
            name
            id
          } 

          updates{
          text_body
          }
        }
      }
    }`,
};
