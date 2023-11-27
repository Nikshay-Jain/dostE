import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./android-large3.module.css";

const AndroidLarge3 = () => {
  const navigate = useNavigate();

  const onVectorIcon2Click = useCallback(() => {
    navigate("/android-large-1");
  }, [navigate]);

  const onVectorIcon6Click = useCallback(() => {
    navigate("/android-large-2");
  }, [navigate]);

  const onVectorIcon7Click = useCallback(() => {
    navigate("/android-large-7");
  }, [navigate]);

  return (
    <div className={styles.androidLarge3}>
      <div className={styles.androidLarge3Child} />
      <div className={styles.div}>5:06</div>
      <div className={styles.untitled}>Untitled</div>
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
      <img className={styles.vectorIcon4} alt="" src="/vector4.svg" />
      <img className={styles.layer2Icon} alt="" src="/layer-2.svg" />
      <img className={styles.vectorIcon5} alt="" src="/vector5.svg" />
      <img
        className={styles.vectorIcon6}
        alt=""
        src="/vector6.svg"
        onClick={onVectorIcon6Click}
      />
      <div className={styles.androidLarge3Item} />
      <img
        className={styles.vectorIcon7}
        alt=""
        src="/vector7.svg"
        onClick={onVectorIcon7Click}
      />
      <img className={styles.vectorIcon8} alt="" src="/vector8.svg" />
      <div className={styles.androidLarge3Inner} />
      <div className={styles.dosteiitmacin}>dostE.iitm.ac.in</div>
      <img className={styles.vectorIcon9} alt="" src="/vector9.svg" />
      <div className={styles.dosteWrapper}>
        <b className={styles.doste}>dostE</b>
      </div>
      <img className={styles.rectangleIcon} alt="" src="/rectangle-201.svg" />
      <div className={styles.introducingYourUltimate}>
        Introducing your ultimate campus companion: An AI-powered guide
        simplifying campus life at IIT Madras. Access course info, clubs info,
        and more, all at one place and just a click!
      </div>
      <img
        className={styles.whatsappImage20230918At7}
        alt=""
        src="/whatsapp-image-20230918-at-719-3@2x.png"
      />
    </div>
  );
};

export default AndroidLarge3;
