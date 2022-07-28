import { Box, Grid, } from '@mui/material';
import clsx from 'clsx';
import styles from './styles';
import fontsStyles from '../../styles/fontStyles';
import TeamCard from '../../components/TeamCard'
import ItemWithIcon from '../../components/ItemWithIcon'
import GroupsIcon from '@mui/icons-material/Groups';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import PolicyIcon from '@mui/icons-material/Policy';
import { URL_IMAGES } from '../../constants';

const AboutUs = () => {
    const classes = styles()
    const fontClasses = fontsStyles()
    
    const WhoWeAre = () => {
        return (
            <Box className={classes.whoWeAreWrapper}>
                <Box className={classes.whoWeAreContentWrapper}>
                    <Box className={classes.whoWeAreBoxContent}>
                        <Grid container spacing={4}>
                             <Grid item sm={12} md={12}>
                                <h2 className={fontClasses.h2}>Who whe are</h2>
                                <p className={clsx(fontClasses.p, classes.headerSubtitle)}>We are a software development startup located in Limón, Costa Rica. Our goal is to position ourselves in the technology industry and strive to be recognized for providing quality services in a transparent and efficient manner.</p>
                            </Grid>
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
                        <h2 className={fontClasses.h2}>We Believe In <b className={fontClasses.colorBlue}>Our Values</b></h2>
                        <Box className={classes.ourValuesContent}>
                            <Grid container spacing={8}>
                                <Grid item sm={12} md={4}>  
                                    <ItemWithIcon 
                                        icon={<GroupsIcon className={classes.buttonIcon} /> } 
                                        title="Teamwork"
                                        content="Working efficiently as a team is valued by us, so we ensure that all of our team is capable of working with a larger group of people."
                                    />
                                </Grid>
                                <Grid item sm={12} md={4}>
                                    <ItemWithIcon 
                                        icon={<WorkspacePremiumIcon className={classes.buttonIcon} /> } 
                                        title="Quality"
                                        content="We ensure that anything associated with us is delivered with the best possible quality, to ensure a great product for our clients."
                                    />
                                </Grid>
                                <Grid item sm={12} md={4}>
                                <ItemWithIcon 
                                        icon={<PolicyIcon className={classes.buttonIcon} /> } 
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
                    <h2 className={fontClasses.h2}>Meet <b className={fontClasses.colorBlue}>Our Team</b></h2>
                    <p className={clsx(fontClasses.p, classes.headerSubtitle)}>We are young developers with experience in web applications and modern development tools.</p>
                    <Box  className={classes.teamContent}>
                        <Box className={classes.insideContent}>
                            <Grid container spacing={4}>                   
                                <Grid item md={6} >
                                    <TeamCard 
                                        name= "Jean Vega Díaz"
                                        image= {URL_IMAGES.TEAM_MEMBER_JEAN}
                                        linkedIn = "www.linkedin.com/in/jeanvegad"
                                        title="Software Engineer"
                                        content="I enjoy learning and experimenting with new technologies, especially those that allow me to acquire knowledge in different application areas thanks to working in multidisciplinary teams."
                                    />
                                </Grid>
                                <Grid item md={6} >
                                    <TeamCard 
                                        name= "Josh Johnson"
                                        image= {URL_IMAGES.TEAM_MEMBER_JOSS}
                                        linkedIn = "https://www.linkedin.com/in/jossjohnson"
                                        title="Software Engineer"
                                        content="I am a software engineer with 1+year developing software solutions using modern tools, familiar with continuous integration and delivery of software products. Ability to adapt to any circumstance and able to work in a dynamic team."
                                    />
                                </Grid>
                                <Grid item md={6}>
                                    <TeamCard 
                                        name= "Gilbert Ching Phanton"
                                        image= {URL_IMAGES.TEAM_MEMBER_SAMUEL}
                                        linkedIn = "https://www.linkedin.com/in/gsching/"
                                        title="Software Engineer"
                                        content="I’ve been a software engineer for almost 2 years and it’s has given me great experience in optimizing tasks for clients throughout solutions in the best technologies in the market. I’m always willing to learn, teach and give my 100% to any project."
                                    />
                                </Grid>
                                <Grid item md={6}>
                                    <TeamCard 
                                        name= "Axel Mairena Arauz"
                                        image= {URL_IMAGES.TEAM_MEMBER_AXEL}
                                        linkedIn = "https://www.linkedin.com/in/axmairena/"
                                        title="Software Engineer"
                                        content="Young software engineer, with ambition to be better everyday. Experienced in web development using modern tools and frameworks."
                                    />
                                </Grid>
                            </Grid>
                        </Box>  
                    </Box>
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