import React from 'react';
import {Theme, Typography} from "@material-ui/core";
import {createStyles, makeStyles, WithStyles} from "@material-ui/styles";
import {DeepPartial} from "utility-types";

const styles = (theme: Theme) => createStyles({
  root: {
    paddingBottom: theme.spacing(2),
    marginBottom: theme.spacing(2),
    '&:not(:last-child)': {
      borderBottom: `1px solid ${theme.palette.divider}`,
    }
  },
  topLine: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  title: {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.pxToRem(20)
  },
  price: {},
  description: {
    ...theme.typography.body2,
    textAlign: 'justify',
  },
});
const useStyles = makeStyles(styles, {classNamePrefix: 'PriceListItem'});

export interface PriceListItemProps extends Partial<WithStyles<typeof styles>> {
  title: React.ReactText;
  description?: React.ReactText;
  price: React.ReactText;
}

export const PriceListItem: React.FC<PriceListItemProps> = props => {
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <div className={classes.topLine}>
        <Typography classes={{root: classes.title}}>{props.title}</Typography>
        <Typography classes={{root: classes.price}}>{props.price}</Typography>
      </div>
      <Typography classes={{root: classes.description}}>{props.description}</Typography>
    </div>
  )
}
