import React from "react"
import { withStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"

const SingleValue = props => {
  return (
    <Typography className={props.classes.singleValue} {...props.innerProps}>
      {props.children}
    </Typography>
  )
}

const styles = {
  singleValue: {
    fontSize: 16
  }
}

export default withStyles(styles)(SingleValue)
