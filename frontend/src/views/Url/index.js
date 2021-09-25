import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core";

import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import actions from "src/store/actions";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    padding: 36,
  },
  table: {},
}));

const Url = () => {
  const classes = useStyles();
  const { url } = useParams();
  const dispatch = useDispatch();
  const current = useSelector((state) => state.url.current);
  const history = useHistory();

  useEffect(() => {
    dispatch(actions.urlAction.getUrlRequest(url));
  }, []);

  useEffect(() => {
    if (current) {
      history.push(`/${current.longUrl}`)
    }
  }, [current]);

  return (
    <div className={classes.root}>
      {current ? (
        <>
          <span>Redirected Route</span>
        </>
      ) : (
        <div>Url is invalid</div>
      )}
    </div>
  );
};

export default Url;
