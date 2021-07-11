import { style } from '@vanilla-extract/css'
import { vars } from '../../theme.css'

export const wrapper = style({
  backgroundColor: vars.color.white,
  padding: '1rem',
  '@media': {
    'screen and (min-width: 768px)': {
      padding: '3rem',
      width: '600px',
      margin: '2rem auto 0',
    },
  },
})

export const list = style({
  border: `1px solid ${vars.color.gray}`,
})

export const row = style({
  position: 'relative',
  borderBottom: `1px solid ${vars.color.gray}`,
  padding: '1rem',
  ':hover': {
    cursor: 'pointer',
  },
})

export const text = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'relative',
  zIndex: 2,
})

export const voteButton = style({
  padding: '1rem',
})

export const votesMeter = style({
  content: "' '",
  position: 'absolute',
  background: vars.color.color2,
  top: '0',
  bottom: '0',
  left: '0',
  width: '0',
  zIndex: 1,
})
