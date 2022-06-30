export const queries = {
  getBoardIds: `query {
        boards {
            id
        }
    }`,
  getAllItemsFromBoardById: `query ($boardIds: [Int]!){
      boards (ids:$boardIds) {
        name
        items {
          name
          updates {
            text_body
          }
          creator {
            id
          } 
        }
      }
    }`,
  getAllItemsInCurrentBoard: `query {
      items {
        name
        updates {
          text_body
        }
        creator {
          id
        } 
      }
  }`,
};
