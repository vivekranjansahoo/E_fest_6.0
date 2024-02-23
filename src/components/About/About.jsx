// import Button from "../common/Button/Button";
import classes from "./About.module.css";
import about from "./about.svg";
import ab from "./apc.png";
import car from "./car.png";
import cc from "./back.jpeg";

const About = () => {
  return (
    <>
      <section id="about" className={classes.aboutSec}>
        <div className={classes.about}>
          <div className={classes.details}>
            <h3 className={classes.heading}>About</h3>
            <h2 className={classes.heading1}>
              Entrepreneurship <br />
              Development Cell
            </h2>
            <p className={classes.para}>
              The Entrepreneurship Development Cell (ED Cell) at SiliconTech,
              was established in 2011 to encourage and promote entrepreneurship
              among students. The cell is supported by the All India Council for
              Technical Education (AICTE) and the Department of Science &
              Technology (DST), Government of India. Its mission is to create an
              enabling environment for entrepreneurial innovation, provide
              opportunities for selfemployment, and train students to have an
              intrapreneurial mindset for future workplaces. The EDC offers
              access to affordable co-working spaces, mentoring, training, and
              funding to incubatees. It also hosts various entrepreneurship
              development programs, including the Women Entrepreneurship
              Development Program and the Technology Entrepreneurship
              Development Program. The E-FEST is its flagship event that
              celebrates entrepreneurship and honors entrepreneurs. The EDC's
              work is anchored by SiliconTech's Business Incubator and Institute
              Innovation Council, which promote entrepreneurship within the
              institute and in Odisha.
            </p>

            {/* <p className={classes.para}>
            Spectacular talent stretches boundaries to inspire the participating
            students and the rapt audience alike. A gigantic range of events
            from advanced robotics challenges to entrepreneurship hunts
            promising to zap up the cranial indices of participants. Skill,
            genius and knowledge trading infused with a handful of fun, and a
            titanic prize money sum of above half a million rupees to make Karma
            one of the most unique tech carnivals of the country.
          </p> */}
            {/* <div className={classes.btn}>
            <Button label="Explore" />
          </div> */}
          </div>

          <div className={classes.composition}>
            <img className={classes.images} src={about} alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
