import React from "react"
import { withStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"

const Placeholder = props => {
  return (
    <Typography color="textSecondary" className={props.classes.placeholder} {...props.innerProps}>
      {props.children}
    </Typography>
  )
}

const styles = {
  placeholder: {
    position: "absolute",
    left: 2,
    fontSize: 16
  }
}

export default withStyles(styles)(Placeholder)
