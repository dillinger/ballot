import { style } from '@vanilla-extract/css'
import { vars } from '../theme.css'


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

export const linkButton = style({
  borderRadius: '40px',
  minWidth: '100px',
  width: '200px',
  padding: '20px',
  display: 'block',
  backgroundColor: vars.color.color2,
  color: '#fff',
  textAlign: 'center',
  verticalAlign: 'baseline',
  fontWeight: 700,
  textDecoration: 'none'
})

