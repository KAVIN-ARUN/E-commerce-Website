import React from "react";
import { Typography, Container, Grid, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import MetaData from "../component/layouts/MataData/MataData";
import TermsImage from "../Image/about/tc.jpg";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  about_us: {
    paddingTop: "8rem",
    paddingBottom: "4rem",
    backgroundColor: "white !important",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  container_12: {
    padding: "2rem",
    textAlign: "center",

    backgroundColor: "white !important",
    maxWidth: "100%",
  },
  image_about: {
    width: "100%",
    height: "auto",
    marginTop: "3rem",
    marginBottom: "2rem",
  },
  title_about: {
    color: "#414141",
    fontSize: "14px",
    padding: "2rem 1rem 2rem",
    fontFamily: "Roboto",
    fontWeight: "500 !important",
  },
  heading12_about: {
    fontSize: "1rem",
    padding: "2rem 1rem 2rem",
    fontWeight: "400 !important",
    color: "#414141",
    textAlign: "center",
  },
  introText_about: {
    maxWidth: "800px",

    lineHeight: "1.5",
    margin: "1.5rem 0",
    color: "#292929",
    fontSize: "1.2rem",
    fontWeight: "400 !important",
    textAlign: "justify",
    padding: "0.8rem 1rem",
  },
  infoText_about: {
    lineHeight: "1.5",
    margin: "2rem 0",
    color: "#292929",
    fontSize: "1rem",
    fontWeight: "400 !important",
    textAlign: "justify",
    padding: "0.8rem 1rem",
  },
  buttonContainer_about: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "1rem 0",
    width: "100%",
    marginTop: "1rem",
  },
  button1_about: {
    backgroundColor: "#000000 !important",
    color: "white !important",
    width: "fit-content !important",
    padding: "0.8rem 2rem   !important",
    marginLeft: "3.3rem !important",
    borderRadius: "5px !important",
    "&:hover": {
      backgroundColor: "#ed1c24 !important",
      color: "white !important",
    },
  },
  button2_about: {
    backgroundColor: "#292929 !important",
    color: "white   !important",
    width: "fit-content     !important",
    padding: "0.8rem 2rem   !important",
    marginLeft: "1.3rem !important",
    borderRadius: "5px !important",
    "&:hover": {
      backgroundColor: "#ed1c24 !important",
      color: "white !important",
    },
  },
}));

const About_UsPage = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.about_us}>
        <MetaData title={"About Us"} />
        <Container className={classes.container_12}>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6}>
              <img
                src={TermsImage}
                alt="Luxe Fashions"
                className={classes.image_about}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography
                variant="h2"
                component="h1"
                className={classes.title_about}
              >
                Welcome to Luxe Fashions - Where Style Meets Elegance
              </Typography>
              <Typography variant="body1" className={classes.introText_about}>
                At Luxe Fashions, we believe that fashion is not just about clothing;
                 it's a statement, an expression, and a reflection of individuality. 
                 Our passion for style and our commitment to quality form the foundation of 
                 Luxe Fashions – your ultimate destination for chic, contemporary clothing.
              </Typography>
              <Typography variant="body1" className={classes.introText_about}>
                Founded in 2023, Luxe Fashions emerged with a vision to redefine the way you
                experience fashion. Our journey began with the aspiration to curate a collection
                that seamlessly blends sophistication, comfort, and trendsetting designs. We strive
                to empower individuals to embrace their unique style, making a statement that resonates with confidence.
              </Typography>
            </Grid>
          </Grid>
        </Container>
        <Container className={classes.container_12}>
          <Typography
            variant="h3"
            component="h1"
            className={classes.heading12_about}
          >
            What Sets Us Apart?
          </Typography>
          <Typography variant="body1" className={classes.infoText_about}>
            Curated Collections: Luxe Fashions brings you carefully curated collections that cater to diverse tastes and preferences.
            Whether you're a trendsetter, a classic enthusiast, or someone seeking comfort in style, our range of clothing has something for everyone.
            Quality Craftsmanship: We are committed to delivering excellence in craftsmanship. Each piece in our collection is crafted with precision,
            attention to detail, and a commitment to quality materials. Luxe Fashions garments are designed to not only elevate your style but also stand the test of time.
            *Fashion Forward: *At Luxe Fashions, we keep a keen eye on the latest trends in the fashion world. Our designers are dedicated to bringing you fresh and innovative
            designs, ensuring that you are always ahead of the fashion curve.
          </Typography>
        </Container>
        <Container className={classes.container_12}>
          <Typography
            variant="h3"
            component="h1"
            className={classes.heading12_about}
          >
            Connect with Luxe Fashions
          </Typography>
          <Typography variant="body1" className={classes.infoText_about}>
            Explore our online store, discover the latest trends, and make a statement with Luxe Fashions.
            Join our community on social media to stay updated on new arrivals, style tips, and exclusive offers.
          </Typography>
          <Typography variant="body1" className={classes.infoText_about}>
            Thank you for being a part of the Luxe Fashions family. Elevate your style, 
            embrace your uniqueness, and indulge in the luxury of fashion with 
            Luxe Fashions – Where Style Meets Elegance.
          </Typography>

          <div className={classes.buttonContainer_about}>
            <Link
              to="/products"
              style={{ textDecoration: "none", color: "none" }}
            >
              <Button variant="contained" className={classes.button1_about}>
                Our Products
              </Button>
            </Link>
            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "none" }}
            >
              <Button variant="contained" className={classes.button2_about}>
                Contact Us
              </Button>
            </Link>
          </div>
        </Container>
      </div>
    </>
  );
};

export default About_UsPage;
