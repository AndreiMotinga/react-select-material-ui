/*
 * This select component uses react-select
 *   + it has customizations to make it look consistently with Material-ui
 * */

import React from "react"
import PropTypes from "prop-types"
import Select from "react-select"
import Creatable from "react-select/lib/Creatable"
import AsyncSelect from "react-select/lib/Async"
import AsyncCreatableSelect from "react-select/lib/AsyncCreatable"
import { withStyles } from "@material-ui/core/styles"

/*
 * Custom components required to integrate Material-ui with react-select
 *    more https://react-select.com/components
 */
import Control from "./Control"
import NoOptionsMessage from "./NoOptionsMessage"
import Option from "./Option"
import Placeholder from "./Placeholder"
import SingleValue from "./SingleValue"
import ValueContainer from "./ValueContainer"
import MultiValue from "./MultiValue"
import Menu from "./Menu"

const components = {
  Control,
  Menu,
  NoOptionsMessage,
  Option,
  Placeholder,
  ValueContainer,
  SingleValue,
  MultiValue
}

class Autocomplete extends React.Component {
  state = {
    isFocused: false
  }

  toggleFocus = () => {
    this.setState({ isFocused: !this.state.isFocused })
  }

  render() {
    const { classes, label, helperText, isAsync, isCreatable, value } = this.props
    const { isFocused } = this.state
    const hasValue = Array.isArray(value) ? !!value.length : !!value

    let SelectComponent
    if (isAsync && isCreatable) SelectComponent = AsyncCreatableSelect
    if (isAsync && !isCreatable) SelectComponent = AsyncSelect
    if (!isAsync && isCreatable) SelectComponent = Creatable
    if (!isAsync && !isCreatable) SelectComponent = Select

    return (
      <SelectComponent
        className={classes.wrapper}
        classes={classes}
        components={components}
        onFocus={this.toggleFocus}
        onBlur={this.toggleFocus}
        textFieldProps={{
          label: label,
          helperText: helperText,
          error: !!helperText,
          InputLabelProps: {
            shrink: isFocused || hasValue
          }
        }}
        {...this.props}
      />
    )
  }
}

Autocomplete.defaultProps = {
  isAsync: false,
  placeholder: false
}

// these props are used to connect react-select to mui.
//   for more props supplied to react-select go to https://react-select.com/props
Autocomplete.propTypes = {
  classes: PropTypes.object.isRequired,
  label: PropTypes.string,
  helperText: PropTypes.string,
  isAsync: PropTypes.bool
}

const styles = {
  wrapper: {
    margin: "5px 0 4px"
  },
  paper: {
    position: "absolute",
    zIndex: 1,
    marginTop: 8,
    left: 0,
    right: 0
  }
}

export default withStyles(styles)(Autocomplete)
