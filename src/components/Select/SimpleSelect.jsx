import React, { Component }  from 'react';
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export default function SimpleSelect() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    university: ""
  });

  function handleChange(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value
    }));
  }

  return (
    <form className={classes.root} autoComplete="off">
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="university-simple" shrink>
          Universidade
        </InputLabel>
        <Select
          value={values.university}
          displayEmpty
          onChange={handleChange}
          inputProps={{
            name: "university",
            id: "university-simple"
          }}
        >
          <MenuItem value={""}>Selecione sua Universidade</MenuItem>
          <MenuItem value={0}>UFABC</MenuItem>
          <MenuItem value={1}>USP</MenuItem>
          <MenuItem value={2}>UNIP</MenuItem>
        </Select>
      </FormControl>
    </form>
  );
}
