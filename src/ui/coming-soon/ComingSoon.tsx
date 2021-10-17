import React from 'react';
import { createStyles, makeStyles, WithStyles } from '@material-ui/styles';
import { Grid, Theme, Typography } from '@material-ui/core';
import { DeepPartial } from 'utility-types';
import { Logo } from '../images/Logo';
import { GoogleMap } from '../../lib/google-maps/google-map/GoogleMap';
import { Marker } from '@react-google-maps/api';
import { PriceListItem } from './PriceListItem';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      width: '100vw',
      minHeight: '100vh',
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
    content: {
      maxWidth: theme.breakpoints.values.md,
      width: '100%',
      marginTop: theme.spacing(5),
      padding: theme.spacing(0, 2)
    },
    priceListTitle: {
      margin: theme.spacing(2, 0),
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
  const fbLink =
    'https://www.facebook.com/Autoservis-Pneuservis-Patria-106763634881314';
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
      <div className={classes.content}>
        <Typography variant="h4">Cenník</Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h5" classes={{ root: classes.priceListTitle }}>
              Tepovanie interiéru
            </Typography>
            <PriceListItem
              title="Látkový interiér"
              price="35€ - 80€"
              description="Tepovanie sedadiel, dverí, koberčekov, kurfra, vysávanie, impregnácia gumových rohoží, čistenie auta a klimatizácie ozónom. Cenu upresníme podľa typu auta."
            />
            <PriceListItem
              title="Koža/látka interiér"
              price="50€ - 85€"
              description="Tepovanie a čistenie sedadiel, dverí, koberčekov, kufra, vysávanie, impregnácia gumových rohoší, impregnácia a čistenie plastov, čistenie auta a klimatizácie ozónom. Možnosť ošetriť kožu kondicionérom. Cenu upresníme podľa typu auta."
            />
            <PriceListItem
              title="Kožený interiér"
              price="60€ - 110€"
              description="Tepovanie a čistenie sedadiel, dverí, koberčekov, kufra, vysávanie, impregnácia gumových rohoší, impregnácia a čistenie plastov, čistenie auta a klimatizácie ozónom. Možnosť ošetriť kožu kondicionérom. Cenu upresníme podľa typu auta."
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h5" classes={{ root: classes.priceListTitle }}>
              Ďalšia ponuka
            </Typography>
            <PriceListItem
              title="Tepovanie sedadiel"
              price="35€"
            />
            <PriceListItem
              title="Tepovanie koberčekov"
              price="2,5€/kus"
            />
            <PriceListItem
              title="Tepovanie tapacírov dverí"
              price="2,5€/kus"
            />
            <PriceListItem
              title="Vysávanie auta"
              price="od 8€"
            />
            <PriceListItem
              title="Dezinfekcia auta a klimatizácie o zónom"
              price="15€"
            />
            <PriceListItem
              title="Umytie okien zvnútra + zrkadlá"
              price="6€"
            />
            <PriceListItem
              title="Čistenie a impregnácia plastov"
              price="10€"
            />
          </Grid>
        </Grid>
      </div>
      <div className={classes.map}>
        <GoogleMap center={center} zoom={15}>
          <Marker position={center} />
        </GoogleMap>
      </div>
    </div>
  );
};
