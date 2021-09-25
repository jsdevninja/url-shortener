import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, TextField, makeStyles } from "@material-ui/core";
import actions from "src/store/actions";
import { BASE_URL } from "src/constants";

const useStyles = makeStyles(() => ({
  root: {
    margin: 12,
    display: "flex",
    flexDirection: "column",
  },
  urlContainer: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    marginTop: 24,
    marginBottom: 24,
  },
  baseUrl: {
    background: "lightgray",
    borderRadius: 2,
    padding: 4,
    marginRight: 8,
  },
  textField: {
    flex: 1,
  },
}));

const CreateGame = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const created = useSelector((state) => state.url.created);
  const [longUrl, setLongUrl] = useState("");

  const handleInputChange = (event) => {
    setLongUrl(event.target.value);
  };

  const createShortUrl = () => {
    dispatch(actions.urlAction.createUrlRequest(longUrl));
  };

  return (
    <div className={classes.root}>
      <div className={classes.urlContainer}>
        <span className={classes.baseUrl}>{BASE_URL}</span>
        <TextField
          onChange={handleInputChange}
          className={classes.textField}
          value={longUrl}
          type="text"
          placeholder="Long Url"
        />
      </div>
      <Button
        variant="contained"
        color="primary"
        onClick={createShortUrl}
        disabled={!longUrl}
      >
        Create Short Url
      </Button>
      {created && (
        <div className={classes.urlContainer}>
          <span className={classes.baseUrl}>Generated Short Url:</span>
          <Link to={`/${created.shortUrl}`} target="_blank">
            {BASE_URL}
            {created.shortUrl}
          </Link>
        </div>
      )}
    </div>
  );
};

export default CreateGame;
