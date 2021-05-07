import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  green: {
    background:
      "linear-gradient(90deg, rgba(71,194,115,1) 8%, rgba(51,155,96,1) 35%, rgba(33,113,76,1) 56%, rgba(28,102,71,1) 70%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 1px 1px 1px #57C84D",
    color: "white",
    height: 28,
    width: 150,
    padding: "0 30px",
  },
  red: {
    background:
      "linear-gradient(90deg, rgba(232,2,67,1) 8%, rgba(232,2,67,1) 38%, rgba(212,10,67,1) 53%, rgba(203,5,61,1) 71%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 1px 1px 1px rgba(255, 105, 135, .3)",
    color: "white",
    height: 28,
    width: 150,
    padding: "0 30px",
  },
});

export default function Hook(props) {
  const classes = useStyles();
  return (
    <Button className={props.dChange ? classes.green : classes.red}>
      {props.bankName}
    </Button>
  );
}
