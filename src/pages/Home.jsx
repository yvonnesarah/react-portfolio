import styles from "../styles/SkillCards.module.css";
import face from "../styles/Home.module.css";
import Layout from "../components/Layout";

import SkillCards from "../components/SkillCards";

import skills from "../data/skill.json";


export default function Home() {
  return (
    <Layout>
      {/* HERO */}
      <div className={styles.hero}>
        <h1 className="text-center my-5">Yvonne Adedeji React Portfolio</h1>
      </div>
      <br></br>
        <h1 className="text-center my-5">About Me</h1>
        <center><img
            className={face.face}
            src="../images/yvonne's picture.jpg"
            width={200}
            height={200}
            alt="Yvonne Avatar"
          /></center>
          <br></br>
        <p className="justify-text">
        I'm a Web Developer based in Chelmsford. I graduated in July 2021 with a bachelor’s degree in BSC(Hons) Computer Science from University Of Essex - Colchester Campus. My passion is to be a Front-End Developer as my career.
        I also have a background of back-end technologies such as PHP and Mysql for the database side. I love creating dynamic and beautiful web pages. In my spare time I like listening to music and playing games.
       </p> 
      <br></br>
        <h1 className="text-center my-5">Skills</h1>
      <div className="container-fluid">
        <div class="row">
          {skills.map((skill) => {
            return (
              <div key={skill.id} class="col-md-4 d-flex justify-content-center mb-5">
                <SkillCards
                  skills={skill.skills}
                  img={skill.img}
                />
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}