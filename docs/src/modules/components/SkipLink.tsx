import * as React from 'react';
import UshiiLink from '@u_ui/u-ui/Link';
import { styled } from '@u_ui/u-ui/styles';
import { useTranslate } from '@u-shii/docs/i18n';

const StyledLink = styled(UshiiLink)(({ theme }) => ({
  position: 'fixed',
  padding: theme.spacing(1, 2),
  backgroundColor: (theme.vars || theme).palette.primary[50],
  border: '1px solid',
  borderColor: (theme.vars || theme).palette.primary[100],
  color: (theme.vars || theme).palette.primary[600],
  outlineOffset: 5,
  outlineColor: (theme.vars || theme).palette.primary[300],
  borderRadius: theme.shape.borderRadius,
  left: theme.spacing(2),
  zIndex: theme.zIndex.tooltip + 1,
  top: theme.spacing(-10),
  transition: theme.transitions.create('top', {
    easing: theme.transitions.easing.easeIn,
    duration: theme.transitions.duration.leavingScreen,
  }),
  '&:hover': {
    backgroundColor: (theme.vars || theme).palette.primary[100],
    color: (theme.vars || theme).palette.primary[700],
  },
  '&:focus': {
    top: theme.spacing(2),
    transition: theme.transitions.create('top', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  '@media (prefers-reduced-motion: reduce)': {
    transition: theme.transitions.create('opacity'),
    opacity: 0,
    '&:focus': {
      top: theme.spacing(2),
      opacity: 1,
      transition: theme.transitions.create('opacity'),
    },
  },
  '@media print': {
    display: 'none',
  },
  ...theme.applyDarkStyles({
    backgroundColor: (theme.vars || theme).palette.primaryDark[600],
    borderColor: (theme.vars || theme).palette.primaryDark[400],
    color: (theme.vars || theme).palette.grey[100],
    outlineColor: (theme.vars || theme).palette.primary[500],
    '&:hover': {
      backgroundColor: (theme.vars || theme).palette.primaryDark[500],
      color: (theme.vars || theme).palette.grey[50],
    },
  }),
}));

export default function SkipLink() {
  const t = useTranslate();

  return <StyledLink href="#main-content">{t('appFrame.skipToContent')}</StyledLink>;
}
