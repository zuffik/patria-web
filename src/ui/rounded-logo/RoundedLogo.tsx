import React from 'react';
import { DeepPartial } from 'utility-types';
import { WithStyles } from '@material-ui/core/styles';
import { createStyles, makeStyles, Theme, Typography } from '@material-ui/core';

export interface RoundedLogoProps
  extends DeepPartial<WithStyles<typeof styles>> {
  contrast?: boolean;
  larger?: boolean;
  img?: string;
}

const styles = (theme: Theme) =>
  createStyles({
    root: (props: RoundedLogoProps) => ({
      padding: theme.spacing(1),
      background: props.contrast
        ? theme.palette.common.white
        : theme.palette.primary.main,
      color: !props.contrast
        ? theme.palette.common.white
        : theme.palette.primary.main,
      borderRadius: '50%',
      overflow: 'hidden',
      position: 'relative',
    }),
    logo: {
      fontSize: '100px',
      lineHeight: '72px',
      transform: 'translateY(-5px)',
      fontWeight: 300
    },
    inner: (props: RoundedLogoProps) => ({
      position: 'absolute',
      ...(!props.larger
        ? {
            left: theme.spacing(2.6),
            top: theme.spacing(2.5),
            width: theme.spacing(6),
            height: theme.spacing(6),
          }
        : {
            left: theme.spacing(0.6),
            top: theme.spacing(0.5),
            width: theme.spacing(10),
            height: theme.spacing(10),
          }),
    }),
  });
const useStyles = makeStyles(styles);

export const RoundedLogo: React.FC<RoundedLogoProps> = (props) => {
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      {props.img && (
        <img
          src={`/${props.img}-${props.contrast ? 'primary' : 'white'}.svg`}
          alt="inner"
          className={classes.inner}
        />
      )}
      <Typography classes={{ root: classes.logo }}>p</Typography>
    </div>
  );
};
