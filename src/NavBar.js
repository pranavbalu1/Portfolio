import styles from "./NavBar.css";
import {
  AiFillHome,
  AiOutlineProject,
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineFilePdf,
} from "react-icons/ai";
import { MdOutlineWavingHand } from "react-icons/md";


export default function NavBar(props) {


  const goToThanks = () => {
    window.scrollTo({
      top: 3000,
      behavior: "smooth",
    });
    console.log("scrolling");
  };

  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };



  return (
    <div id="navBar">
      <span id="buttonGroup">
        <button classname="icon" onClick={props.goToHome}>
          <AiFillHome />
        </button>
        <button className="icon" onClick={props.goToProfile}>
          <AiOutlineProject />
        </button>
        {/*
        <button className="icon" onClick={goToThanks}>
          <MdOutlineWavingHand />
        </button>
  */}
        <button className="icon" onClick={() => openInNewTab('https://www.linkedin.com/in/pranavbalu')}>
            <AiOutlineLinkedin />
        </button>
        <button className="icon" onClick={() => openInNewTab('https://github.com/pranavbalu1')}>
            <AiOutlineGithub />
        </button>
        {/*
        <button className="icon" onClick={() => openInNewTab('https://www.linkedIn/pranavbalu1')}>
            <AiOutlineFilePdf />
        </button>
       */}
      </span>
    </div>
  );
}

// Path: src/NavBar.css
