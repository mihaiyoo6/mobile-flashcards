import { AsyncStorage } from 'react-native'
export const STORAGE_KEY = 'mobile-flashcards';

// export function fetchCalendarResults () {
//   return AsyncStorage.getItem(CALENDAR_STORAGE_KEY)
//     .then(formatCalendarResults)
// }

// export function submitEntry ({ entry, key }) {
//   return AsyncStorage.mergeItem(CALENDAR_STORAGE_KEY, JSON.stringify({
//     [key]: entry
//   }))
// }

// export function removeEntry (key) {
//   return AsyncStorage.getItem(CALENDAR_STORAGE_KEY)
//     .then((results) => {
//       const data = JSON.parse(results)
//       data[key] = undefined
//       delete data[key]
//       AsyncStorage.setItem(CALENDAR_STORAGE_KEY, JSON.stringify(data))
//     })
// }

export function getDecks() {
  return AsyncStorage.getItem(STORAGE_KEY)
    .then(result => {
      return JSON.parse(result)
    })
}

export function getDeck() {

}

export function getDeckTitle() {

}

export function saveDeckTitle(deck) {

  return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
    [deck]: {
      title: deck,
      questions: []
    }
  }));
}

export function addCardToDeck({ deck, question, answer }) {
  return AsyncStorage.getItem(STORAGE_KEY).then(result => {
    const data = JSON.parse(result)[deck];
    return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
      [deck]: {
        questions: [...data.questions, { question, answer }]
      }
    }))
  })

}
