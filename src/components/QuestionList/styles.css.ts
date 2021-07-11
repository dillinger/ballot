import { style } from '@vanilla-extract/css'
import { vars } from '../../theme.css'

export const questionList = style({
  display: 'grid',
  gridGap: '10px',
  '@media': {
    'screen and (min-width: 420px)': {
      margin: '2rem',
    },
    'screen and (min-width: 639px)': {
      margin: '2rem auto',
      width: '650px',
      gridTemplateColumns: '320px 320px',
    },
    'screen and (min-width: 1000px)': {
      margin: '2rem auto',
      width: '980px',
      gridTemplateColumns: '320px 320px 320px',
    },
  },
})

export const questionBox = style({
  textDecoration: 'none',
  display: 'block',
  padding: '1.4rem',
  flexGrow: 1,
  backgroundColor: vars.color.white,
  transition: 'background-color 0.5s',
  fontSize: '14px',
  ':hover': {
    color: vars.color.white,
    backgroundColor: vars.color.color2,
  },
})

export const questionPublishDate = style({
  color: vars.color.gray,
  selectors: {
    [`${questionBox}:hover &`]: {
      color: vars.color.white
    },
  }
})

export const questionVotes = style({})

export const questionTitle = style({
  fontSize: '1.3rem',
  color: vars.color.black,
  fontWeight: 700,
  marginBottom: '1rem',
  selectors: {
    [`${questionBox}:hover &`]: {
      color: vars.color.white
    },
  },
})

export const buttomRow = style({ 
  '@media': {
    'screen and (min-width: 320px)': {
      display: 'flex',
      justifyContent: 'space-between',
    },
  },
})


// backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,

