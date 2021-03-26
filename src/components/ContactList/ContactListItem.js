import React from 'react';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  contactListItem: {
    marginTop: 10,
    backgroundColor: '#eeeeff',
    fontFamily: 'roboto',
  },
});

export default function ContactListItem({ id, name, number, onDeleteContact }) {
  const classes = useStyles();
  return (
    <Card className={classes.contactListItem}>
      <CardContent>
        <span>{name}:</span> {number}
      </CardContent>
      <Divider />
      <CardActions>
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
          onClick={() => onDeleteContact(id)}
        >
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
