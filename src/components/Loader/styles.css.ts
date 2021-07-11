import { style } from '@vanilla-extract/css'

export const overlay = style({
  position: 'relative',
})

export const loading = style({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: 'rgba(255,255,255,0.8)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '2rem',
  fontWeight: 700,
  minHeight: '600px',
  zIndex: 10,
})
