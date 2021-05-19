import useStyles from "./styles";
// import CardsList from "./CardsList";
import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  CssBaseline,
  Grid,
  Toolbar,
  Container
} from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const App = () => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera className={classes.icon} />
          <Typography variant="h6"> Photo Albem</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              aline="center"
              color="textPrimary"
              gutterBottom
            >
              Photo Album
            </Typography>
            <Typography
              variant="h5"
              aline="center"
              color="textSecondary"
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur adipisci facilis nisi deserunt aspernatur, quaerat
              numquam non esse dolorum quos quam nihil est sequi nulla veritatis
              repudiandae reprehenderit alias maxime sint reiciendis iste!
            </Typography>
            <div className={classes.btn}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    See my photos
                  </Button>
                  <Button variant="outlined" color="primary">
                    secondery action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map(cards => (
              <Grid item key={cards} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5 ">
                      Headding
                    </Typography>
                    <Typography>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
        <Typography gutterBottom variant="h6" align="center">
          footer
        </Typography>
        <Typography
          gutterBottom
          variant="subtitle1"
          align="center"
          color="textSecondery"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Typography>
      </footer>
    </>
  );
};

export default App;
