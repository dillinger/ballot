import dayjs from 'dayjs'
import { Choice } from '../types'

export function creationDate(string: string) {
  return dayjs(string)
}

export function roundNumber(number: number) {
  return number ? number.toFixed(2) : 0
}

export function votesInPercents(votes: number, totalVotes: number) {
  return roundNumber((Number(votes) / Number(totalVotes)) * 100)
}

export function calculatePercents(choices: Choice[] = []) {
  return choices.map((item) => ({
    ...item,
    percent: votesInPercents(
      item.votes,
      choices.reduce((acc, curr) => acc + curr.votes, 0)
    ),
  }))
}
