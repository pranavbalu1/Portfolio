import Styles from "./SkillComponent.css";

export default function SkillComponent(props) {
  return (
    <span className="skill">
      <button className="skillButton">
          {props.icon}
          {props.name}
      </button>
      {/*}<button className="skills tag"> React</button>{*/}
    </span>
  );
}
