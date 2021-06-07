import React from 'react';
import { createStyles, makeStyles, WithStyles } from '@material-ui/styles';
import { Theme, Typography } from '@material-ui/core';
import { DeepPartial } from 'utility-types';
import { Logo } from '../images/Logo';
import { GoogleMap } from '../../lib/google-maps/google-map/GoogleMap';
import { Marker } from '@react-google-maps/api';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      width: '100vw',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    contact: {
      marginBottom: theme.spacing(1),
      '& strong': {
        fontWeight: theme.typography.fontWeightBold,
        marginRight: theme.spacing(1 / 2),
      },
      '& a': {
        color: theme.palette.text.primary,
        textDecoration: 'none',
      },
    },
    subheading: {
      margin: theme.spacing(3, 0, 4, 0),
    },
    logo: {
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(20),
      },
      marginTop: theme.spacing(3),
    },
    map: {
      width: '100%',
      height: '30vh',
      marginTop: 'auto',
    },
  });
const useStyles = makeStyles(styles);

export interface ComingSoonProps
  extends DeepPartial<WithStyles<typeof styles>> {}

export const ComingSoon: React.FC<ComingSoonProps> = (props) => {
  const classes = useStyles(props);
  const tel = '+421 911 217 224';
  const insta = 'autoservis_patria';
  const fbLabel = 'Autoservis & Pneuservis Patria';
  const fbLink = 'https://www.facebook.com/Autoservis-Pneuservis-Patria-106763634881314';
  const center = React.useMemo(
    () => ({
      lat: 49.1661904,
      lng: 19.5640736,
    }),
    []
  );
  return (
    <div className={classes.root}>
      <Logo className={classes.logo} />
      <Typography component="h1" variant="h1">
        patria
      </Typography>
      <Typography
        component="h2"
        variant="h3"
        classes={{ root: classes.subheading }}
      >
        autoservis
        <br />
        pneuservis
      </Typography>
      <Typography classes={{ root: classes.contact }}>
        <strong>Tel. č.:</strong>
        <a href={`tel:${tel}`} target="_blank">
          {tel}
        </a>
      </Typography>
      <Typography classes={{ root: classes.contact }}>
        <strong>Instagram:</strong>
        <a href={`https://www.instagram.com/${insta}`} target="_blank">
          @{insta}
        </a>
      </Typography>
      <Typography classes={{ root: classes.contact }}>
        <strong>Facebook:</strong>
        <a href={fbLink} target="_blank">
          {fbLabel}
        </a>
      </Typography>
      <div className={classes.map}>
        <GoogleMap center={center} zoom={15}>
          <Marker position={center} />
        </GoogleMap>
      </div>
    </div>
  );
};
