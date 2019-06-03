import React from 'react';
import Autocomplete from './Autocomplete';
import './App.css';
import countries from './countries';

// for comparison
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

class App extends React.Component {
  state = {
    value: '',
  };

  handleSelect = option => {
    const value = countries.find(country => country.value === option.value);
    this.setState({value});
  };

  render() {
    return (
      <div className="App">
        <FormControl margin="dense">
          <InputLabel htmlFor="continent">Continent</InputLabel>
          <Select
            inputProps={{
              name: 'continent',
              id: 'continent',
            }}>
            <MenuItem value="">
              <em>none</em>
            </MenuItem>
            <MenuItem key="europe" value="europe">
              Europe
            </MenuItem>
            <MenuItem key="america" value="america">
              America
            </MenuItem>
          </Select>
        </FormControl>

        <Autocomplete
          label="Countries"
          options={countries}
          value={this.state.value}
          onChange={this.handleSelect}
        />

        <TextField label="Random text field" margin="dense" />
      </div>
    );
  }
}

export default App;
