import React from 'react';
import { DeepPartial } from 'utility-types';
import { WithStyles } from '@material-ui/core/styles';
import { createStyles, makeStyles, Theme, Typography } from '@material-ui/core';

export interface MainLogoProps extends DeepPartial<WithStyles<typeof styles>> {
  contrast?: boolean;
  larger?: boolean;
  img?: string;
}

const styles = (theme: Theme) =>
  createStyles({
    root: (props: MainLogoProps) => ({
      padding: theme.spacing(10),
      background: props.contrast
        ? theme.palette.common.white
        : theme.palette.primary.main,
      color: !props.contrast
        ? theme.palette.common.white
        : theme.palette.primary.main,
    }),
    logo: {
      fontSize: '100px',
      letterSpacing: '-6px',
      position: 'relative',
    },
    p: {
      fontSize: '140px',
      fontWeight: 300
    },
    atria: {
      fontWeight: 300,
    },
    inner: (props: MainLogoProps) => ({
      position: 'absolute',
      ...!props.larger ? {
        left: theme.spacing(2.5),
        top: theme.spacing(10),
        width: theme.spacing(8),
        height: theme.spacing(8),
      } : {
        left: theme.spacing(-0.5),
        top: theme.spacing(7),
        width: theme.spacing(14),
        height: theme.spacing(14),
      }
    }),
  });
const useStyles = makeStyles(styles);

export const MainLogo: React.FC<MainLogoProps> = (props) => {
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <Typography classes={{ root: classes.logo }}>
        {
          props.img && (
            <img
              src={`/${props.img}-${props.contrast ? 'primary' : 'white'}.svg`}
              alt="inner"
              className={classes.inner}
            />
          )
        }
        <span className={classes.p}>p</span>
        <span className={classes.atria}>atria</span>
      </Typography>
    </div>
  );
};
