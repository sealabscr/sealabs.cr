import { Box, Grid, } from '@mui/material';
import clsx from 'clsx';
import styles from './styles';
import fontsStyles from '../../styles/fontStyles';
import TeamCard from '../../components/TeamCard'
import ItemWithIcon from '../../components/ItemWithIcon'
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';

const AboutUs = () => {
    const classes = styles()
    const fontClasses = fontsStyles()
    
    const WhoWeAre = () => {
        return (
            <Box className={classes.whoWeAreWrapper}>
                <Box className={classes.whoWeAreContentWrapper}>
                    <Box>
                        <h2 className={fontClasses.h2}>Who whe are</h2>
                        <p className={clsx(fontClasses.p, classes.headerSubtitle)}>We are a software development startup located in Limón, Costa Rica. Our goal is to position ourselves in the technology industry and strive to be recognized for providing quality services in a transparent and efficient manner.</p>
                    </Box>   
                    <Box className={classes.whoWeAreBoxContent}>
                        <Grid container spacing={8}>
                            <Grid item sm={12} md={6}>
                                <h2 className={fontClasses.h2}>Mision</h2>
                                <p className={clsx(fontClasses.p, classes.headerSubtitle)}>We are passionate about local growth, so that through an exceptional service in software development we can expand and facilitate our customers’ tasks efficiently, safely and reliably.</p>
                            </Grid>
                            <Grid item sm={12} md={6}>
                                <h2 className={fontClasses.h2}>Vision</h2>
                                <p className={clsx(fontClasses.p, classes.headerSubtitle)}>We want to promote the growth of Limón province through new technologies by involving businesses to improve and streamline processes.</p>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Box>
        );
    }
    const OurValues = () => {
        return (
            <Box className={classes.ourValuesWrapper}>
                <Box className={classes.ourValuesContentWrapper}>
                    <Box>
                        <h2 className={fontClasses.h2}>Our Values</h2>
                        <Box className={classes.ourValuesContent}>
                            <Grid container spacing={8}>
                                <Grid item sm={12} md={4}>  
                                    <ItemWithIcon 
                                        icon={<EngineeringOutlinedIcon className={classes.buttonIcon} /> } 
                                        title="Teamwork"
                                        content="Working efficiently as a team is valued by us, so we ensure that all of our team is capable of working with a larger group of people."
                                    />
                                </Grid>
                                <Grid item sm={12} md={4}>
                                    <ItemWithIcon 
                                        icon={<EngineeringOutlinedIcon className={classes.buttonIcon} /> } 
                                        title="Quality"
                                        content="We ensure that anything associated with us is delivered with the best possible quality, to ensure a great product for our clients."
                                    />
                                </Grid>
                                <Grid item sm={12} md={4}>
                                <ItemWithIcon 
                                        icon={<EngineeringOutlinedIcon className={classes.buttonIcon} /> } 
                                        title="Transparency"
                                        content="From beginning to end we provide our clients documentation and availability to share our work."
                                />
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Box> 
            </Box>
        );
    }

    const OurTeam = () => {
        return (
            <Box className={classes.teamCardsWrapper}>
                <Box className={classes.teamCardsContentWrapper}>
                    <h1 className={fontClasses.h1}>Our Team</h1>
                    <p className={clsx(fontClasses.p, classes.headerSubtitle)} >We build personalized software solutions to suit your business needs ensuring quality and transparency.</p>
                    <Grid container>                   
                        <Grid items md={6} >
                            <TeamCard 
                                name= "Jean Vega"
                                image= "https://ichef.bbci.co.uk/news/976/cpsprodpb/877B/production/_126038643_gettyimages-1048896140.jpg"
                                title="Software Engineers"
                                content="Lorem Ipsum es un texto de marcador de posición comúnmente utilizado en las industrias gráficas, gráficas y editoriales para previsualizar diseños y maquetas visuales."
                            />
                        </Grid>
                        <Grid items md={6} >
                            <TeamCard 
                                name= "Josh Johnson"
                                image= "https://ichef.bbci.co.uk/news/976/cpsprodpb/877B/production/_126038643_gettyimages-1048896140.jpg"
                                title="Software Engineers"
                                content="Lorem Ipsum es un texto de marcador de posición comúnmente utilizado en las industrias gráficas, gráficas y editoriales para previsualizar diseños y maquetas visuales."
                            />
                        </Grid>
                        <Grid items md={6}>
                            <TeamCard 
                                name= "gilbert"
                                image= "https://ichef.bbci.co.uk/news/976/cpsprodpb/877B/production/_126038643_gettyimages-1048896140.jpg"
                                title="Software Engineers"
                                content="Lorem Ipsum es un texto de marcador de posición comúnmente utilizado en las industrias gráficas, gráficas y editoriales para previsualizar diseños y maquetas visuales."
                            />
                        </Grid>
                        <Grid items md={6}>
                            <TeamCard 
                                name= "Axel el mas saico Mairena"
                                image= "https://ichef.bbci.co.uk/news/976/cpsprodpb/877B/production/_126038643_gettyimages-1048896140.jpg"
                                title="Software Engineers"
                                content="Lorem Ipsum es un texto de marcador de posición comúnmente utilizado en las industrias gráficas, gráficas y editoriales para previsualizar diseños y maquetas visuales."
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        );
    }


    return (
        <Box>
            <WhoWeAre/>
            <OurValues/>
            <OurTeam/>
        </Box>
      );

}
export default AboutUs