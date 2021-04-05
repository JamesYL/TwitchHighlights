import {
  Card,
  Typography,
  CardHeader,
  makeStyles,
  CardContent,
  Theme,
  CardActions,
} from "@material-ui/core";
import KeywordsChart from "../Charts/KeywordsChart";

import React from "react";
import { SingleVodInfo } from "../../../services/storage";
interface KeywordsChartProps {
  vodInfo: SingleVodInfo;
  elevation: number;
}
const useStyles = makeStyles((theme: Theme) => ({
  slider: {
    paddingLeft: theme.spacing(10),
    paddingRight: theme.spacing(5),
    width: 250,
    margin: 0,
  },
  header: {
    paddingBottom: 0,
  },
  chart: {
    marginTop: -40,
    paddingBottom: 0,
  },
  action: {
    margin: 0,
    padding: 0,
    marginBottom: theme.spacing(1),
  },
}));
const KeywordsCard = ({ vodInfo, elevation }: KeywordsChartProps) => {
  const classes = useStyles();
  return (
    <Card elevation={elevation}>
      <CardHeader
        title={<Typography variant="subtitle1">Keywords</Typography>}
        className={classes.header}
      />
      <CardContent className={classes.chart}>
        <KeywordsChart data={vodInfo.mostCommonKeywords} />
      </CardContent>
      <CardActions className={classes.action}></CardActions>
    </Card>
  );
};
export default KeywordsCard;
