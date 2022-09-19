import { gql } from "@apollo/client";

export const FETCH_EVENT = gql`
  query fetchEvent($eventId: String!) {
    fetchEvent(eventId: $eventId) {
      id
      title
      contentsImage {
        url
      }
      period
      location
      image
      createdAt
      brand
    }
  }
`;

export const FETCH_BOARDS = gql`
  query fetchBoards(
    $dateType: String!
    $page: Int
    $search: String
    $direcion: String
  ) {
    fetchBoards(
      dateType: $dateType
      page: $page
      search: $search
      direcion: $direcion
    ) {
      id
      image {
        url
      }
    }
  }
`;

// export const FETCH_BOARD = gql`
//   query fetchBoard($boardId: String!) {
//     fetchBoard(boardId: $boardId) {
//       id
//       image {
//         url
//       }
//     }
//   }
// `;
