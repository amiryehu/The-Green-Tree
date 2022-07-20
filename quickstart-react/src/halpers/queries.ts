export const queries = {
  getBoardIds: `query {
        boards {
            id
            name
        }
    }`,
  getBoardNameById: `query ($boardIds: [Int]!){
      boards (ids:$boardIds) {
        name
      }
    }`,
  getUser: `query ($userId: [Int]!){
    users (ids: $userId){
      name
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
            name
          } 
        }
      }
    }`,
  getAllUsers: `query ($boardIds: [Int]!){
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
