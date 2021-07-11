import { style } from '@vanilla-extract/css';
import { vars } from '../../theme.css'

export const wrapper = style({
  backgroundColor: vars.color.brand,
  textAlign: 'center'
});
