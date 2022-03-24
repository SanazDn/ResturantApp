import React from "react";
import Card from "./UI/Card";
import classes from "./About.module.css";
import ButtonList from "./UI/ButtonList";
import Button from "./UI/Button";

const About = () => {
   
            const buttonList = [
                {
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/in/sanadehghannayyeri/",
                  onclick: null,
                },
        
                {
                  label: "Github",
                  href: "https://github.com/SanazDn",
                  onclick: null,
                },
                {
                  label: "Email",
                  href: "https://mail.google.com/mail/u/0/#inbox",
                  onclick: null,
                },
                
              ];
              return (
                <>
                  <Card>
                    <div>
                      <img
                        src={"a3.jpg"}
                        alt="my profile"
                        className={classes.roundedCircle}
                      />
                    </div>
                    <span className={classes.badge}> Pro </span>
                    <div className={classes.fonts}>
                      <h5>Sanaz Dehghannayyeri</h5>
                      <h6>Interactive Designer & Developer</h6>
                      <p>
                        I am a Full stack developer. I'm excited about web technologies
                        and programming including React,JavaScript, SQL and I always push
                        myself towards excellence. I created projects focused on React,
                        Angular, SQL and C++ materials.{" "}
                      </p>
                    </div>
                    <ButtonList style={classes.socialList}>
                      {buttonList.map((button) => (
                        <Button
                          key={button.label}
                          label={button.label}
                          href={button.href}
                          onclick={button.onclick}
                        />
                      ))}
                    </ButtonList>
                  </Card> 
                  </>
  );
};

export default About;