import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 220,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 4,
  },
});

class NativeSelects extends React.Component {
  state = {
    language: '',
    name: 'hai',
    labelWidth: 0,
  };

  componentDidMount() {
    this.setState({
      labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
    });
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <FormControl className={classes.formControl}>
          <InputLabel ref={ref => {
            this.InputLabelRef = ref;
          }} htmlFor="language-native-simple">Language</InputLabel>
          <Select
            native
            value={this.state.language}
            onChange={this.handleChange('language')}
            inputProps={{
              name: 'synthesis_engine',
              id: 'language-native-simple',
            }}
          >
            <option value="" />
            <option value='en-US'>English (United States)</option>
            <option value='fr-FR'>French (France)</option>
            <option value='de-DE'>German</option>
          </Select>
        </FormControl>
      </div>
    );
  }
}

NativeSelects.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NativeSelects);
