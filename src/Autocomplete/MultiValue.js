import React from "react"
import { withStyles } from "@material-ui/core/styles"
import classNames from "classnames"
import { emphasize } from "@material-ui/core/styles/colorManipulator"
import Chip from "@material-ui/core/Chip"
import CancelIcon from "@material-ui/icons/Cancel"

const MultiValue = props => {
  return (
    <Chip
      tabIndex={-1}
      label={props.children}
      className={classNames(props.classes.chip, {
        [props.classes.chipFocused]: props.isFocused
      })}
      onDelete={props.removeProps.onClick}
      deleteIcon={<CancelIcon {...props.removeProps} />}
    />
  )
}

const styles = theme => ({
  chip: {
    height: 30,
    marginTop: 1,
    marginRight: 1
  },
  chipFocused: {
    backgroundColor: emphasize(
      theme.palette.type === "light" ? theme.palette.grey[300] : theme.palette.grey[700],
      0.08
    )
  }
})

export default withStyles(styles)(MultiValue)
