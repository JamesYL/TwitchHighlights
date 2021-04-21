import {
  Card,
  Typography,
  CardActions,
  Button,
  CardHeader,
  IconButton,
  Avatar,
  Link,
  CardMedia,
  CardActionArea,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import { VodWithAllInfo } from "../../../services/storage";
import { Comment } from "../../../twitch_api/getComments";
interface VodInfoCardProps {
  elevation: number;
  downloadComments: () => void;
  saveVod: () => void;
  loadComments: () => Promise<Comment[]>;
  vodInfo: VodWithAllInfo;
}
const useStyles = makeStyles({
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  root: {
    height: "100%",
  },
});
const VodInfoCard = ({
  vodInfo,
  elevation,
  downloadComments,
  saveVod,
}: VodInfoCardProps) => {
  const classes = useStyles();
  return (
    <Card elevation={elevation} className={classes.root}>
      <CardHeader
        avatar={
          <IconButton
            onClick={() => {
              window.open(vodInfo.channelInfo.url);
            }}
          >
            <Avatar aria-label="avatar image" src={vodInfo.channelInfo.logo} />
          </IconButton>
        }
        title={
          <Typography variant="subtitle1">{vodInfo.vodInfo.title}</Typography>
        }
        subheader={
          <Typography variant="subtitle2">
            By{" "}
            <Link
              href={vodInfo.channelInfo.url}
              target="_blank"
              rel="noreferrer"
            >
              {vodInfo.channelName}
            </Link>
          </Typography>
        }
      />
      <CardActionArea
        onClick={() => {
          window.open(vodInfo.vodInfo.url);
        }}
      >
        <CardMedia
          image={vodInfo.vodInfo.preview.large}
          title="Go to vod"
          className={classes.media}
        />
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={downloadComments}>
          download comments
        </Button>
        <Button size="small" color="primary" onClick={saveVod}>
          save analytics
        </Button>
      </CardActions>
    </Card>
  );
};
export default VodInfoCard;
