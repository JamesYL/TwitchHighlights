import {
  Card,
  Typography,
  CardHeader,
  makeStyles,
  Slider,
  CardContent,
  Theme,
  CardActions,
  TextField,
  Button,
  Grid,
} from "@material-ui/core";
import SpeedsChart from "../Charts/SpeedsChart";

import React, { BaseSyntheticEvent } from "react";
import { VodWithAllInfo } from "../../../services/storage";
import { getSpeeds, Speed } from "../../../services/speeds";
import { useForceUpdate } from "../../../util/util";
interface SpeedsChartCardProps {
  vodInfo: VodWithAllInfo;
  elevation: number;
}
const useStyles = makeStyles((theme: Theme) => ({
  slider: {
    paddingLeft: theme.spacing(10),
    paddingRight: theme.spacing(8),
    width: 250,
    margin: 0,
    paddingTop: theme.spacing(0.5),
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
  form: {
    display: "flex",
    marginBottom: theme.spacing(2),
    paddingRight: theme.spacing(2),
    alignItems: "flex-start",
  },
  filter: {
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(3),
    width: "100%",
  },
  updateButton: {
    padding: theme.spacing(2),
  },
}));
const SpeedsChartCard = ({ vodInfo, elevation }: SpeedsChartCardProps) => {
  const classes = useStyles();
  const [flatten, setFlatten] = React.useState(1);
  const [data, setData] = React.useState<Speed>(getSpeeds(vodInfo.comments));
  const onUpdate = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    const target = e.currentTarget;
    const filter = target.elements["filter"].value as string;
    setData(getSpeeds(vodInfo.comments, filter.split("\n")));
  };
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
        <SpeedsChart data={data} flatten={flatten} vodID={vodInfo.vodID} />
      </CardContent>
      <CardActions className={classes.action}>
        <Grid container>
          <Grid item xs={12} md={4} xl={3} className={classes.slider}>
            <Slider
              name="slider"
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
          </Grid>
          <Grid item xs={12} md xl={6}>
            <form
              className={classes.form}
              noValidate
              autoComplete="off"
              onSubmit={onUpdate}
            >
              <div className={classes.filter}>
                <TextField
                  variant="filled"
                  label="Filter by keywords (Put each keyword on a new line)"
                  name="filter"
                  multiline
                  fullWidth
                />
              </div>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.updateButton}
              >
                Update
              </Button>
            </form>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};
export default SpeedsChartCard;
