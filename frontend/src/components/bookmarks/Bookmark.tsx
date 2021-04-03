import {
  Avatar,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardHeader,
  CardMedia,
  Container,
  IconButton,
  Typography,
  Link,
  Grid,
  makeStyles,
  CardContent,
} from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";
import {
  getAllVods,
  removeVod as removeVodFromStorage,
} from "../../services/storage";
import getVodInfo, { VodInfo } from "../../twitch_api/getVodInfo";
import Navbar from "../util/Navbar";
const useStyles = makeStyles({
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
});
const Bookmark = () => {
  const history = useHistory();
  const [allVods, setAllVods] = React.useState(getAllVods());
  const [vodInfo, setVodInfo] = React.useState<(VodInfo | null | number)[]>(
    Array(allVods.length).fill(-1)
  );
  const classes = useStyles();
  React.useEffect(() => {
    (async () => {
      const info = allVods.map((item) => getVodInfo(item.vodID));
      setVodInfo(await Promise.all(info));
    })();
  }, [allVods]);
  const removeVod = (vodID: string | number, index: number) => () => {
    setVodInfo(vodInfo.filter((_, i) => i !== index));
    setAllVods(allVods.filter((_, i) => i !== index));
    removeVodFromStorage(vodID);
  };
  const elevation = 5;
  const GridItem = ({ cardInner }: { cardInner: React.ReactNode }) => {
    return (
      <Grid item xs={12} sm={12} md={6} lg={4}>
        <Card elevation={elevation}>{cardInner}</Card>
      </Grid>
    );
  };
  return (
    <>
      <Navbar />
      <Container maxWidth={"xl"}>
        <br />
        <Grid container spacing={3}>
          {allVods.map((vod, i) => {
            if (vodInfo[i] === null) {
              return (
                <GridItem
                  key={vod.vodID}
                  cardInner={
                    <>
                      <CardContent>
                        <Typography variant="subtitle1">
                          Could not find vod with vod id {vod.vodID} (Vod might
                          have expired)
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button
                          size="small"
                          color="primary"
                          onClick={removeVod(vod.vodID, i)}
                        >
                          Remove vod
                        </Button>
                      </CardActions>{" "}
                    </>
                  }
                />
              );
            } else if (vodInfo[i] === -1)
              return (
                <GridItem
                  key={vod.vodID}
                  cardInner={
                    <CardContent>
                      <Typography variant="subtitle1">
                        Loading {vod.vodID}
                      </Typography>
                    </CardContent>
                  }
                />
              );
            return (
              <GridItem
                key={vod.vodID}
                cardInner={
                  <>
                    <CardHeader
                      avatar={
                        <IconButton
                          onClick={() => {
                            window.open((vodInfo[i] as VodInfo).channel.url);
                          }}
                        >
                          <Avatar
                            aria-label="avatar image"
                            src={(vodInfo[i] as VodInfo).channel.logo}
                          />
                        </IconButton>
                      }
                      title={
                        <Typography variant="subtitle1">
                          {(vodInfo[i] as VodInfo).title}
                        </Typography>
                      }
                      subheader={
                        <Typography variant="subtitle2">
                          By{" "}
                          <Link
                            href={(vodInfo[i] as VodInfo).channel.url}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {(vodInfo[i] as VodInfo).channel.display_name}
                          </Link>{" "}
                          at{" "}
                          {new Date(
                            (vodInfo[i] as VodInfo).recorded_at
                          ).toDateString()}
                        </Typography>
                      }
                    />
                    <CardActionArea
                      onClick={() => {
                        window.open((vodInfo[i] as VodInfo).url);
                      }}
                    >
                      <CardMedia
                        image={(vodInfo[i] as VodInfo).preview.large}
                        title="Go to vod"
                        className={classes.media}
                      />
                    </CardActionArea>
                    <CardActions>
                      <Button
                        size="small"
                        color="primary"
                        onClick={() => {
                          history.push(`/search/${vod.vodID}`);
                          history.go(0);
                        }}
                      >
                        Analytics
                      </Button>
                      <Button
                        size="small"
                        color="primary"
                        onClick={removeVod(vod.vodID, i)}
                      >
                        Remove vod
                      </Button>
                    </CardActions>
                  </>
                }
              />
            );
          })}
        </Grid>
      </Container>
    </>
  );
};
export default Bookmark;
