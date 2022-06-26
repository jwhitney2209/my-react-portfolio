import React from "react";
import AnimatePage from "../AnimatePage/AnimatePage";
import headshot from "../../assets/jason_thumbsup.png";

const About = () => {
  return (
    <AnimatePage>
      <div className="my-4 is-fluid is-mobile m-4">
        <div className="content">
          <div className="columns">
            <div className="column is-one-third">
              <figure className="image">
                <img className="is-rounded" src={headshot} alt="jason" />
              </figure>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Temporibus at reiciendis nobis odio excepturi assumenda
                voluptates sequi quisquam corrupti ducimus aperiam omnis magni,
                dignissimos neque aliquid laboriosam quas voluptatibus. Quam.
              </p>
            </div>
            <div className="column">
              <h2>About Me</h2>
              <p>
                Hello and welcome to my website! My name is Jason Whitney and I
                am a fullstack developer! I began coding simple HTML around
                2003-2004 to build small websites for gaming groups I was apart
                of. This was also during the age of myspace where I specialized
                in giving all my friends nice custom profiles.
                <br />
                <br />
                I am a musician in my free time and love to play the guitar,
                record and produce music with other musicians. As well as write
                and record my own music. I love all genres especially classical
                music, choral music and barbershop music. I also love today's
                pop hits as well as heavy metal! (Fun fact! In 2015 my band won
                a battle of the bands and got to play on Warped Tour!).
                <br />
                <br />
                Currently, I am a high school head choir director and lead a
                program of 100+ students alongside my two assistant directors.
                My students have achieved numerous prestigious awards at the
                district, regional, state and national level and have been
                invited to perform for music educator conventions as exemplary
                performers.
                <br />
                <br />
                So how did we get here you might be thinking? Fullstack
                Development? Well, the pandemic took a toll on many people and
                teachers were certainly no exception. In a matter of weeks we
                had to scramble to learn new platforms and technologies we'd
                never thought we'd ever use to the extents that we did. I
                thrived during this time period, many of my colleagues did not.
                Learning new platforms really intrigued me. Being around all of
                these platforms and learning how they operate brought me back to
                those older memories of teaching myself HTML at the age of 13.
                <br />
                <br />
                However there were many times where I felt the technology was
                clunky and hard to use, and very poorly designed for the
                technologically-challenged. So I set out with a goal to learn
                what goes into applications such as these systems we used. I
                enrolled in a 6 month fullstack coding bootcamp and here I am
                today! So I say:
              </p>
              <h1 className="has-text-centered">Dream it! Develop it!</h1>
            </div>
          </div>
        </div>
      </div>
    </AnimatePage>
  );
};

export default About;
