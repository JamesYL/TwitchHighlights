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
import { VodWithAllInfo } from "../../../services/storage";
import { getKeywords, Keyword } from "../../../services/keywords";
interface KeywordsChartProps {
  vodInfo: VodWithAllInfo;
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
  action: {
    margin: 0,
    padding: 0,
    marginBottom: theme.spacing(1),
  },
  pie: {
    maxWidth: "23vw",
  },
  content: { display: "flex" },
  info: {
    alignSelf: "center",
    marginLeft: theme.spacing(3),
  },
  root: {
    height: "100%",
  },
}));
const KeywordsCard = ({ vodInfo, elevation }: KeywordsChartProps) => {
  const [selectedData, setSelectedData] = React.useState<null | Keyword>(null);
  const [data, setData] = React.useState<Keyword[]>([]);
  React.useEffect(() => {
    (async () => {
      setData(await getKeywords(vodInfo));
    })();
  }, [vodInfo]);
  const classes = useStyles();
  return (
    <Card elevation={elevation} className={classes.root}>
      <CardHeader
        title={
          <Typography variant="subtitle1">Most Frequent Emotes</Typography>
        }
        subheader={
          <Typography variant="subtitle2">Hover over for info</Typography>
        }
        className={classes.header}
      />
      <CardContent className={classes.content}>
        <div className={classes.pie}>
          <KeywordsChart data={data} setHoveredData={setSelectedData} />
        </div>
        <div className={classes.info}>
          {selectedData && (
            <div>
              <Typography component="h4" variant="h6">
                {selectedData.title} ({Math.round(selectedData.value)}%)
              </Typography>
              {selectedData.url && (
                <img src={selectedData.url} alt={`${selectedData.title}`} />
              )}
            </div>
          )}
        </div>
      </CardContent>
      <CardActions className={classes.action}></CardActions>
    </Card>
  );
};
export default KeywordsCard;
