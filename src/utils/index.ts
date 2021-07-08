import dayjs from 'dayjs'

export function creationDate(string: string) {
  return dayjs(string)
}

export function roundNumber(number: number) {
  return number ? number.toFixed(2) : 0
}

export function votesInPercents(votes: number, totalVotes: number) {
  return roundNumber((Number(votes) / Number(totalVotes)) * 100)
}


