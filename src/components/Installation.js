import React, { useState } from "react";
import step_1 from "./../media/installation/step_1.png";
import step_2 from "./../media/installation/step_2.png";
import step_3 from "./../media/installation/step_3.png";
import step_4 from "./../media/installation/step_4.png";
import { mongoImages } from "./../util/data";
import Collapsible from "react-collapsible";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

function Installation() {
  const [mongoOpen, setMongoOpen] = useState(false);
  return (
    <div>
      <h2>How To Get Started</h2>
      <p className="docs_desc">
        To get started you need to jump over to this github repo and download the project
        to your local enviroment or you can use this command{" "}
        <div className="hilight">
          git clone https://github.com/Abd-Alwahab/auth-system.git
        </div>
        <p className="docs_desc">
          Now, you have the project localy on your OS, its time for you to open it in your
          code editor (I use VSCode)
          <img src={step_1} alt="open folder" className="docs__img" />
        </p>
        <p className="docs_desc">
          Now, once you open the project in your code editor, we need to run the following
          command to install some npm packages that we need, so open your terminal in your
          code editor and run the following command
          <div className="hilight">npm install</div>
          <p className="docs_desc">That will ahead and add the node_modules </p>
          <img src={step_2} alt="open folder" className="docs__img" />
        </p>
        <p className="docs_desc">
          Once you have the node_modules added to your porject, now we need to create a
          file to store the environment variables that we need in order for our
          application to run, now if you are wondering why we are using environment
          variables here, well the answer is very simple its just to store secure and
          important information
          <p className="docs_desc">
            To create the environment variables you need to run the follwoing command{" "}
          </p>
          <div className="hilight">touch .env</div>
          <p className="docs_desc">
            That will ahead and add new file called .env to your project tree{" "}
          </p>
          <img src={step_3} alt="open folder" className="docs__img" />
          <p className="docs_desc">
            Now We need to add the following environment variables to our file so our
            application cloud run
          </p>
          <div className="hilight">
            mongodb_url <br />
            token_secret
            <br /> token_date
            <br />
            email_user <br />
            email_password <br />
            cloud_name <br />
            cloud_api
            <br />
            cloud_secrit
          </div>
          <img src={step_4} alt="open folder" className="docs__img" />
        </p>
      </p>

      <div className="note_danger">
        <div className="note">Note</div>
        <p className="docs_desc">
          <ul>
            <li>Do not be confuse becuase of the number of the environment variables </li>
            <li>
              Make sure to use the exact same name as shown in the screeshot otherwise
              thing will not work for you.
            </li>
          </ul>
        </p>
      </div>

      <p className="docs_desc">
        Now let us undersatand what values to add to these environment variables, the
        first one is mongo_db , its your contection string that you will use to contect
        your api to mongoDB atlas
      </p>

      <p className="docs_desc">
        To get you contection string, you need to create an account here and{" "}
        <a href="https://www.mongodb.com/cloud/atlas">MongoDB Atlas</a> , Once you have
        your account created then you need to follow these steps to get your contection
        string
      </p>

      <div className="steps_container">
        <Collapsible
          // tabIndex={0}
          lazyRender
          open={mongoOpen}
          transitionTime={900}
          transitionCloseTime={300}
          onClick={() => setMongoOpen(!mongoOpen)}
          trigger={
            <button className="btn-collaps">
              <div>
                {!mongoOpen ? (
                  <FaArrowDown size="2em" color="#fff" />
                ) : (
                  <FaArrowUp size="2em" color="green" />
                )}
              </div>
              <h3>Show MondoDB Steps</h3>
            </button>
          }
          triggerStyle={{
            backgroundColor: mongoOpen ? "green" : "tomato",
            color: "#fff",
            cursor: "pointer",
            padding: "1rem .6rem",
            outlineStyle: "none",
            display: "block",
          }}
        >
          {mongoImages.map((img) => (
            <img src={img} alt="mongo steps" className="docs__img img_step" />
          ))}
        </Collapsible>

        <Collapsible
          // tabIndex={0}
          lazyRender
          open={mongoOpen}
          transitionTime={900}
          transitionCloseTime={300}
          onClick={() => setMongoOpen(!mongoOpen)}
          trigger={
            <button className="btn-collaps">
              <div>
                {!mongoOpen ? (
                  <FaArrowDown size="2em" color="#fff" />
                ) : (
                  <FaArrowUp size="2em" color="green" />
                )}
              </div>
              <h3>Show JSON Web Token Steps</h3>
            </button>
          }
          triggerStyle={{
            backgroundColor: mongoOpen ? "green" : "tomato",
            color: "#fff",
            cursor: "pointer",
            padding: "1rem .6rem",
            outlineStyle: "none",
            display: "block",
          }}
        >
          <p className="docs_desc">
            If you followed the mongoDB steps then you should get you conection string ,
            let us move to the next two environment variables, which will be the{" "}
            <div className="hilight">
              token_secret
              <br /> token_date
              <br />
            </div>
          </p>

          <p className="docs_desc">
            These are very simple once , for the{" "}
            <span className="dark">token_secret</span>, just give it any long text , juts
            make sure that is at least <span className="dark"> 32 charcters</span>, and
            for the <span className="dark"> token_date</span>, just give it any number
            plus the letter d, this will be used for as expire date for the json web
            token, in my case I used 90d, you can use the same as me.
          </p>

          <p className="docs_desc">
            Now Let us move to the next once which are:
            <div className="hilight">
              email_user <br />
              email_password <br />
            </div>
          </p>
        </Collapsible>

        <Collapsible
          // tabIndex={0}
          lazyRender
          open={mongoOpen}
          transitionTime={900}
          transitionCloseTime={300}
          onClick={() => setMongoOpen(!mongoOpen)}
          trigger={
            <button className="btn-collaps">
              <div>
                {!mongoOpen ? (
                  <FaArrowDown size="2em" color="#fff" />
                ) : (
                  <FaArrowUp size="2em" color="green" />
                )}
              </div>
              <h3>Show SendGrid Steps</h3>
            </button>
          }
          triggerStyle={{
            backgroundColor: mongoOpen ? "green" : "tomato",
            color: "#fff",
            cursor: "pointer",
            padding: "1rem .6rem",
            outlineStyle: "none",
            display: "block",
          }}
        >
          <ol>
            <li>
              Create an Account With <a href="https://sendgrid.com/">SendGrid</a>{" "}
            </li>

            <li>Login in your account</li>
            <li>From your dashboard page , Expand The Email API Tap</li>
            <li>From the Email API Tap, select Integration Guide</li>
            <li>Now Click on the SMTP Relay</li>
            <li>
              Chosse a name for you key and click create key, this will create an api key
              for you{" "}
            </li>
            <li>Now, you will see username and password </li>
            <li>
              Copy the user name and the password and use them in the environment
              variables{" "}
            </li>
            <li>
              Use the username for the <span className="dark">email_user</span>{" "}
            </li>
            <li>
              Use the password for the <span className="dark">email_password</span>{" "}
            </li>
          </ol>
        </Collapsible>
      </div>
    </div>
  );
}

export default Installation;
