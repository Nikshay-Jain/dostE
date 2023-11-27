import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./android-large5.module.css";

const AndroidLarge5 = () => {
  const navigate = useNavigate();

  const onVectorIcon2Click = useCallback(() => {
    navigate("/android-large-1");
  }, [navigate]);

  const onLineClick = useCallback(() => {
    navigate("/android-large-1");
  }, [navigate]);

  return (
    <div className={styles.androidLarge5}>
      <div className={styles.div}>5:06</div>
      <div className={styles.div1}>1</div>
      <img className={styles.vectorIcon} alt="" src="/vector.svg" />
      <img className={styles.batteryIcon} alt="" src="/battery.svg" />
      <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
      <img
        className={styles.vectorIcon2}
        alt=""
        src="/vector2.svg"
        onClick={onVectorIcon2Click}
      />
      <img className={styles.vectorIcon3} alt="" src="/vector3.svg" />
      <img className={styles.layer2Icon} alt="" src="/layer-2.svg" />
      <img className={styles.vectorIcon4} alt="" src="/vector5.svg" />
      <img className={styles.vectorIcon5} alt="" src="/vector8.svg" />
      <div className={styles.androidLarge5Child} />
      <div className={styles.dosteiitmacinfaq}>dostE.iitm.ac.in/faq</div>
      <img className={styles.vectorIcon6} alt="" src="/vector9.svg" />
      <div className={styles.androidLarge5Item} />
      <div className={styles.faqs}>FAQ’s</div>
      <div className={styles.androidLarge5Inner} onClick={onLineClick} />
      <b className={styles.howCanThe}>
        How can the chatbot assist me on the campus?
      </b>
      <b className={styles.isTheChatbot}>Is the chatbot available 24/7?</b>
      <b className={styles.howDoI}>How do I access the chatbot?</b>
      <b className={styles.isMyData}>
        Is my data secure when using the chatbot?
      </b>
      <b className={styles.whatHappensIf}>
        What happens if the chatbot can’t answer my questions?
      </b>
      <b className={styles.howCanI}>
        How can I stay updated about changes to the chatbot’s services or hours
        of operation
      </b>
      <b className={styles.canIUse}>
        Can I use the chatbot as a prospective student or visitor to IIT Madras?
      </b>
      <b className={styles.isTheChatbot1}>
        Is the chatbot accessible to people with disabilities
      </b>
      <b className={styles.whatDoIContainer}>
        <p
          className={styles.whatDoI}
        >{`What do I do if I encounter technical issues with `}</p>
        <p className={styles.whatDoI}>the chatbot</p>
      </b>
      <div className={styles.lineDiv} />
      <div className={styles.androidLarge5Child1} />
      <div className={styles.androidLarge5Child2} />
      <div className={styles.androidLarge5Child3} />
      <div className={styles.androidLarge5Child4} />
      <div className={styles.androidLarge5Child5} />
      <div className={styles.androidLarge5Child6} />
      <div className={styles.androidLarge5Child7} />
      <div className={styles.androidLarge5Child8} />
      <img className={styles.vectorIcon7} alt="" src="/vector17.svg" />
      <img className={styles.vectorIcon8} alt="" src="/vector17.svg" />
      <img className={styles.vectorIcon9} alt="" src="/vector17.svg" />
    </div>
  );
};

export default AndroidLarge5;
