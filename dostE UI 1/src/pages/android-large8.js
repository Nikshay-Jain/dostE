import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./android-large8.module.css";

const AndroidLarge8 = () => {
  const navigate = useNavigate();

  const onVectorIcon2Click = useCallback(() => {
    navigate("/android-large-3");
  }, [navigate]);

  const onVectorIcon6Click = useCallback(() => {
    navigate("/android-large-2");
  }, [navigate]);

  const onVectorIcon7Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onRectangle3Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.androidLarge8}>
      <div className={styles.androidLarge8Child} />
      <div className={styles.div}>5:07</div>
      <div className={styles.informationOnTechsoc}>Information on TechSoc</div>
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
      <div className={styles.androidLarge8Item} />
      <img
        className={styles.vectorIcon7}
        alt=""
        src="/vector10.svg"
        onClick={onVectorIcon7Click}
      />
      <img className={styles.vectorIcon8} alt="" src="/vector8.svg" />
      <div className={styles.androidLarge8Inner} />
      <div className={styles.dosteiitmacin}>dostE.iitm.ac.in</div>
      <img className={styles.vectorIcon9} alt="" src="/vector9.svg" />
      <div className={styles.rectangleDiv} onClick={onRectangle3Click} />
      <div className={styles.canIHave}>Can I have info on techSoc please?</div>
      <img className={styles.iphoto1Icon} alt="" src="/iphoto-1@2x.png" />
    </div>
  );
};

export default AndroidLarge8;
