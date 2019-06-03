import React from "react"
import Paper from "@material-ui/core/Paper"

export default function Menu(props) {
  return (
    <Paper
      square
      className={props.selectProps.classes.paper}
      {...props.innerProps}
      data-cy="react-select-menu"
    >
      {props.children}
    </Paper>
  )
}
