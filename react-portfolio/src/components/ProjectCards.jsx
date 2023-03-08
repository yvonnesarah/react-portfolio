import styles from "../styles/ProjectCards.module.css";

export default function ProjectCard(props) {
  return (
    <div className={`card ${styles.cardCustom}`} style={{ width: "40rem" }}>
      <img
        src={props.img}
        className="card-img-top"
        height="140"
        alt={props.name}
      />
      <div className="card-body">
        <h3 className="card-title text-center text-light">{props.name}</h3>
        <br></br>
        <h6 className="card-title text-center text-light">{props.tech}</h6>
        <br></br>
        <h6 className="card-title text-center text-light">{props.descr}</h6>
      </div>
      {props.repo ? (
        <a href={props.repo} >
          <i>
          <button className="btn btn-custom btn-primary">
        Repo
        </button>
          </i>
        </a>
      ) : (
        <p>
          Repo 
        </p>
      )}
      <hr></hr>
      <a href={props.deployed} >
        <i>
        <button className="btn btn-custom btn-primary">
        Live
        </button>
        </i>
      </a>
    </div>
  );
}