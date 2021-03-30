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
import getVodInfo, { VodInfo } from "../../twitch_api/getVodInfo";
interface VodInfoCardProps {
  vodID: string | number;
  elevation: number;
  downloadComments: () => void;
  saveVod: () => void;
}
const useStyles = makeStyles({
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
});
const VodInfoCard = ({
  vodID,
  elevation,
  downloadComments,
  saveVod,
}: VodInfoCardProps) => {
  const classes = useStyles();
  const [vodInfo, setVodInfo] = React.useState<VodInfo | null>(null);
  React.useEffect(() => {
    (async () => {
      setVodInfo(await getVodInfo(vodID));
    })();
  }, [vodID]);
  if (!vodInfo) {
    return (
      <Card elevation={elevation}>
        <CardHeader
          title={<Typography variant="subtitle1">Loading...</Typography>}
        />
      </Card>
    );
  }
  return (
    <Card elevation={elevation}>
      <CardHeader
        avatar={
          <IconButton
            onClick={() => {
              window.open((vodInfo as VodInfo).channel.url);
            }}
          >
            <Avatar
              aria-label="avatar image"
              src={(vodInfo as VodInfo).channel.logo}
            />
          </IconButton>
        }
        title={
          <Typography variant="subtitle1">
            {(vodInfo as VodInfo).title}
          </Typography>
        }
        subheader={
          <Typography variant="subtitle2">
            By{" "}
            <Link
              href={(vodInfo as VodInfo).channel.url}
              target="_blank"
              rel="noreferrer"
            >
              {(vodInfo as VodInfo).channel.display_name}
            </Link>{" "}
            at {new Date((vodInfo as VodInfo).recorded_at).toDateString()}
          </Typography>
        }
      />
      <CardActionArea
        onClick={() => {
          window.open((vodInfo as VodInfo).url);
        }}
      >
        <CardMedia
          image={(vodInfo as VodInfo).preview.large}
          title="Go to vod"
          className={classes.media}
        />
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={downloadComments}>
          download comments
        </Button>
        <Button size="small" color="primary" onClick={saveVod}>
          save vod
        </Button>
      </CardActions>
    </Card>
  );
};
export default VodInfoCard;
