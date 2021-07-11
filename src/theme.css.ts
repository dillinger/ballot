import { style, composeStyles, styleVariants } from '@vanilla-extract/css'
import { createTheme } from '@vanilla-extract/css'

export const [themeClass, vars] = createTheme({
  color: {
    brand: '#A2D6F9',
    color1: '#072AC8',
    color2: '#1E96FC',
    color3: '#FCF300',
    color4: '#FFC600',
    white: '#fff',
    black: '#000',
    lightGray: '#f6f6f6',
    gray: '#ababab'
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

export const button = composeStyles(linkButton, style({
  display: 'inline-block',
  border: 'none',
  cursor: 'pointer',
  width: '100%',
}))


export const buttonType = styleVariants({
  submit: {
    backgroundColor: vars.color.color2,
  },
  empty: {
    backgroundColor: vars.color.white,
    border: `1px solid ${vars.color.gray}`,
    color: vars.color.black
  }
})
