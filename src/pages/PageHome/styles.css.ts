import { style } from '@vanilla-extract/css'

export const wrapper = style({
  display: 'flex',
  flexFlow: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '150px',
  margin: '40px',

  '@media': {
    'screen and (min-width: 768px)': {
      flexFlow: 'row',
      justifyContent:'space-evenly',
      width: '600px',
      margin: 'auto'
    }
  },
})
