import { Card, CardActionArea, CardActions, CardContent, CardHeader, Chip, Fade, Grid, Hidden, makeStyles, Typography } from "@material-ui/core";
import { RepoForkedIcon, RepoIcon, StarIcon } from '@primer/octicons-react';
import Image from 'next/image'
import { useRef } from "react";
import useAnimate from "./useAnimate";

const useStyles = makeStyles(theme => ({
    cont: {
        minHeight: `calc(100vh - ${theme.spacing(4)}px)`,
    },
    card: {
        height: '100%'
    },
    cardActionArea: {
        height: '100%',
        // display: 'grid'
    }
}))

export default function Projects({ data }) {
    console.log(data)
    const newdata = [
        {
            title:"to do app",
            desc:"simple mern to do app",
            url:"https://github.com/vissnukarthik",
            languages:["javascript","HTML","CSS"]
        }
    ]
    const classes = useStyles()

    const animRef = useRef(null)
    const animate = useAnimate(animRef)

    return (
        <Grid direction="row-reverse" container justify="center" alignItems="center" spacing={10} className={classes.cont}>
            <Grid item xs={12} lg={6}>
                <Typography variant="h2" gutterBottom align="center" innerRef={animRef}>
                    Projects
                </Typography>
                <Hidden mdDown>
                    <Fade in={animate} style={{ transitionDelay: '250ms' }}>
                        <div>
                            <Image
                                alt="Projects"
                                src="/projects.svg"
                                width="1144"
                                height="617.32"
                            />
                        </div>
                    </Fade>
                </Hidden>
            </Grid>
            <Grid container item xs={12} lg={6} direction="row" spacing={1}>
                {
                    !!data && data.map((v, i) =>
                        <Grid item sm={6} xs={12} key={i}>
                            <Fade in={animate} style={{ transitionDelay: `${200 * i}ms` }}>
                                <Card key={i} className={classes.card}>
                                    <CardActionArea
                                        className={classes.cardActionArea}
                                        href={newdata[0].url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <CardHeader
                                            title={<><RepoIcon verticalAlign='middle' />To do App</>}
                                            subheader={
                                                <>
                                                    {
                                                        !!v.value.stargazers_count &&
                                                        <>
                                                            <StarIcon verticalAlign='middle' />
                                                            2
                                                        </>
                                                    }
                                                    {
                                                        !!v.value.forks &&
                                                        <>
                                                            <RepoForkedIcon verticalAlign='middle' />
                                                            1
                                                        </>
                                                    }
                                                </>
                                            }
                                        />
                                        <CardContent>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                Simple Todo App which can be used to 
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Grid container direction="row" spacing={1}>
                                                {
                                                    newdata[0].languages.map((lang, i) =>
                                                        <Grid item key={i}>
                                                            <Chip
                                                                key={i}
                                                                label={lang}
                                                                size="small"
                                                            />
                                                        </Grid>
                                                    )
                                                }
                                            </Grid>
                                        </CardActions>
                                    </CardActionArea>
                                </Card>
                            </Fade>
                        </Grid>
                    )
                }
            </Grid>
        </Grid>
    )
}

