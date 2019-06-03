import React from "react"
import { withStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"

const NoOptionsMessage = props => {
  return (
    <Typography
      color="textSecondary"
      className={props.classes.noOptionsMessage}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  )
}

const styles = theme => ({
  noOptionsMessage: {
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`
  }
})

export default withStyles(styles)(NoOptionsMessage)
