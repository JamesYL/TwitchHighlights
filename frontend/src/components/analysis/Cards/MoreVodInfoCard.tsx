import {
  makeStyles,
  Theme,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Paper,
} from "@material-ui/core";

import React from "react";
import { VodWithAllInfo } from "../../../services/storage";
interface MoreVodInfoCardProps {
  vodInfo: VodWithAllInfo;
  elevation: number;
}
const useStyles = makeStyles((theme: Theme) => ({
  cell: {
    border: 0,
  },
  container: {
    height: "100%",
  },
}));
interface TableData {
  x: string;
  y: string | number;
}
const displayNice = (num: number) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
const convertToSeconds = (num: number) => {
  const numHours = ~~(num / 3600);
  const numMins = ~~((num - numHours * 3600) / 60);
  const numSecs = num - numHours * 3600 - numMins * 60;
  return `${numHours}h ${numMins}m ${numSecs}s`;
};
const MoreVodInfoCard = ({ vodInfo, elevation }: MoreVodInfoCardProps) => {
  const classes = useStyles();
  const data: TableData[] = [
    {
      x: "Total Chat Messages",
      y: displayNice(vodInfo.comments.length),
    },
    {
      x: "Total Commenters",
      y: displayNice(
        new Set(vodInfo.comments.map((item) => item.commenter)).size
      ),
    },
    {
      x: "Total Views",
      y: displayNice(vodInfo.vodInfo.views),
    },
    {
      x: "Vod Length",
      y: convertToSeconds(vodInfo.vodInfo.length),
    },
    {
      x: "Recorded Time",
      y: `${new Date(vodInfo.vodInfo.recorded_at).toUTCString()}`,
    },
  ];
  return (
    <Paper elevation={elevation} className={classes.container}>
      <Table aria-label="extra vod info">
        <TableBody>
          {data.map(({ x, y }) => {
            return (
              <TableRow key={x}>
                <TableCell component="th" scope="row" className={classes.cell}>
                  {x}
                </TableCell>
                <TableCell align="right" className={classes.cell}>
                  {y}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
};
export default MoreVodInfoCard;
