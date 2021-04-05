import {
  Card,
  Typography,
  CardHeader,
  makeStyles,
  Slider,
  CardContent,
  Theme,
  CardActions,
} from "@material-ui/core";
import SpeedsChart from "../Charts/SpeedsChart";

import React from "react";
import { SingleVodInfo } from "../../../services/storage";
interface SpeedsChartCardProps {
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
const SpeedsChartCard = ({ vodInfo, elevation }: SpeedsChartCardProps) => {
  const classes = useStyles();
  const [flatten, setFlatten] = React.useState(1);
  return (
    <Card elevation={elevation}>
      <CardHeader
        title={
          <Typography variant="subtitle1">Number of Chat Messages</Typography>
        }
        subheader={
          <Typography variant="subtitle2">
            Zoom in and drag to check out the graph
          </Typography>
        }
        className={classes.header}
      />
      <CardContent className={classes.chart}>
        <SpeedsChart
          data={vodInfo.speeds}
          flatten={flatten}
          vodID={vodInfo.vodID}
        />
      </CardContent>
      <CardActions className={classes.action}>
        <div className={classes.slider}>
          <Slider
            value={flatten}
            marks={[
              { value: 1, label: "Most detailed" },
              { value: 10, label: "Least detailed" },
            ]}
            min={1}
            max={10}
            defaultValue={flatten}
            onChange={(_, newVal: number | number[]) => {
              setFlatten(newVal as number);
            }}
            aria-labelledby="flatten size"
          />
        </div>
      </CardActions>
    </Card>
  );
};
export default SpeedsChartCard;
