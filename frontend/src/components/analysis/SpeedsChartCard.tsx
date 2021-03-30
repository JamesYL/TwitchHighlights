import {
  Card,
  Typography,
  CardHeader,
  makeStyles,
  Slider,
  CardContent,
  Theme,
} from "@material-ui/core";
import SpeedsChart from "./SpeedsChart";

import React from "react";
import { SingleVodInfo } from "../../services/storage";
interface SpeedsChartCardProps {
  vodInfo: SingleVodInfo;
  elevation: number;
}
const useStyles = makeStyles((theme: Theme) => ({
  slider: {
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
    width: 200,
    margin: 0,
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
      />
      <CardContent>
        <div className={classes.slider}>
          <Slider
            value={flatten}
            marks={[
              { value: 1, label: "More detailed" },
              { value: 10, label: "Less detailed" },
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
        <SpeedsChart
          data={vodInfo.speeds}
          flatten={flatten}
          vodID={vodInfo.vodID}
        />
      </CardContent>
    </Card>
  );
};
export default SpeedsChartCard;
