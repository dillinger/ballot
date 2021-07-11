import { style } from '@vanilla-extract/css'

export const questionList = style({
  display: 'grid',
  gridTemplateColumns: '200px 200px 200px',
  gridGap: '10px',
  width: '620px',
  margin: 'auto',
})

export const questionTitle = style({})

export const questionPublishDate = style({})

export const questionVotes = style({})

export const questionBox = style({
  textDecoration: 'none',
  display: 'block',
  margin: '1rem',
  padding: '.5rem',
  width: '150px',
  flexGrow: 1,
  transition: 'background-color 0.5s',
  fontSize: '14px',
  ':hover': {
    color: 'red',
    backgroundColor: '#cce4fd',
  },
})
// grid-auto-flow: row;
