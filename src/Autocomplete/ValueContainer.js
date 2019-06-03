import React from "react"
import { withStyles } from "@material-ui/core/styles"

const ValueContainer = props => {
  return <div className={props.classes.valueContainer}>{props.children}</div>
}

const styles = {
  valueContainer: {
    display: "flex",
    flexWrap: "wrap",
    flex: 1,
    alignItems: "center",
    overflow: "hidden"
  }
}

export default withStyles(styles)(ValueContainer)
