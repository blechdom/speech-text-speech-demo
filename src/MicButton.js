import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Mic from '@material-ui/icons/Mic';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit * 2,
  },
});

function MicButton(props) {
  const { classes } = props;
  return (
    <div>
      <Tooltip title="Start Listening" aria-label="Start Listening">
        <Fab color="primary" className={classes.fab}>
          <Mic />
        </Fab>
      </Tooltip>
    </div>
  );
}

MicButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MicButton);
