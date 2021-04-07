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
} from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";
import {
  getAllVods,
  getNumVods,
  removeVod as removeVodFromStorage,
  VodWithAllInfo,
} from "../../services/storage";
import Navbar from "../util/Navbar";
const useStyles = makeStyles({
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
});
const Bookmark = () => {
  const [allVods, setAllVods] = React.useState<VodWithAllInfo[] | null>(null);
  const classes = useStyles();
  const [bookmarkNum, setBookmarkNum] = React.useState<number>(0);

  React.useEffect(() => {
    (async () => {
      const vods = await getAllVods();
      setAllVods(vods);
      setBookmarkNum(await getNumVods());
    })();
  }, []);
  const removeVod = (vodID: string, index: number) => () => {
    if (allVods) {
      setAllVods(allVods.filter((_, i) => i !== index));
      removeVodFromStorage(vodID);
      setBookmarkNum(bookmarkNum - 1);
    }
  };
  const elevation = 5;
  const GridItem = ({ cardInner }: { cardInner: React.ReactNode }) => {
    return (
      <Grid item xs={12} sm={12} md={6} lg={4}>
        <Card elevation={elevation}>{cardInner}</Card>
      </Grid>
    );
  };
  const history = useHistory();
  return (
    <>
      <Navbar bookmarkNum={bookmarkNum} />
      <Container maxWidth={"xl"}>
        <br />
        {allVods && (
          <Grid container spacing={3}>
            {allVods.map((vod, i) => {
              return (
                <GridItem
                  key={vod.vodID}
                  cardInner={
                    <>
                      <CardHeader
                        avatar={
                          <IconButton
                            onClick={() => {
                              window.open(allVods[i].channelInfo.url);
                            }}
                          >
                            <Avatar
                              aria-label="avatar image"
                              src={allVods[i].channelInfo.logo}
                            />
                          </IconButton>
                        }
                        title={
                          <Typography variant="subtitle1">
                            {allVods[i].vodInfo.title}
                          </Typography>
                        }
                        subheader={
                          <Typography variant="subtitle2">
                            By{" "}
                            <Link
                              href={allVods[i].channelInfo.url}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {allVods[i].channelName}
                            </Link>{" "}
                            at{" "}
                            {new Date(
                              allVods[i].vodInfo.recorded_at
                            ).toDateString()}
                          </Typography>
                        }
                      />
                      <CardActionArea
                        onClick={() => {
                          window.open(allVods[i].vodInfo.url);
                        }}
                      >
                        <CardMedia
                          image={allVods[i].vodInfo.preview.large}
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
        )}
      </Container>
    </>
  );
};
export default Bookmark;
