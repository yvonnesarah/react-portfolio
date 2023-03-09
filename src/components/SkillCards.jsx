import styles from "../styles/SkillCards.module.css";

export default function SkillCard(props) {
  return (
    <div className={`card ${styles.cardCustom}`} style={{ width: "15rem" }}>
      <img
        src={process.env.PUBLIC_URL +props.img}
        className="card-img-top"
        height="80"
        alt={props.img}
      />
      <div className="card-body">
        <center><h6 className="card-title text-center text-light">{props.skills}</h6></center>
      </div>
    </div>
  );
}