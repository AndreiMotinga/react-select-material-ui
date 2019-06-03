import React from "react"
import { withStyles } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"

function inputComponent({ inputRef, ...props }) {
  return <div ref={inputRef} {...props} />
}

class Control extends React.Component {
  render() {
    const props = this.props

    return (
      <TextField
        fullWidth
        InputProps={{
          inputComponent,
          inputProps: {
            className: props.classes.input,
            inputRef: props.innerRef,
            children: props.children,
            ...props.innerProps
          }
        }}
        {...props.selectProps.textFieldProps}
      />
    )
  }
}

const styles = {
  input: {
    display: "flex",
    padding: 0,

    "& div[aria-hidden]": {
      padding: 6
    }
  }
}

export default withStyles(styles)(Control)
