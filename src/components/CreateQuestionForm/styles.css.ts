import { style } from '@vanilla-extract/css'
import { vars } from '../../theme.css'

export const wrapper = style({
  padding: '2rem',
  backgroundColor: vars.color.white,
  '@media': {
    'screen and (min-width: 768px)': {
      width: '600px',
      margin: 'auto',
    }
  },
})

export const formRow = style({
  display: 'flex',
  flexFlow: 'column',
  marginBottom: '1rem'
})

export const lable = style({
  fontSize: '1.3rem',
  padding: '.5rem',
})

export const input = style({
  fontSize: '1.3rem',
  padding: '.5rem',
})

export const buttonRow = style({
  display: 'flex',
  flexFlow: 'column',
  '@media': {
    'screen and (min-width: 768px)': {
      flexFlow: 'row',
      justifyContent: 'space-between'
    }
  },
})


export const error = style({
  padding: '1rem',
  backgroundColor: vars.color.color3,
})
