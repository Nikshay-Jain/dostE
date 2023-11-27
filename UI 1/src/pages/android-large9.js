import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./android-large9.module.css";

const AndroidLarge9 = () => {
  const navigate = useNavigate();

  const onVectorIcon2Click = useCallback(() => {
    navigate("/android-large-3");
  }, [navigate]);

  const onVectorIcon6Click = useCallback(() => {
    navigate("/android-large-2");
  }, [navigate]);

  return (
    <div className={styles.androidLarge9}>
      <div className={styles.androidLarge9Child} />
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
      <div className={styles.androidLarge9Item} />
      <img className={styles.vectorIcon7} alt="" src="/vector7.svg" />
      <img className={styles.vectorIcon8} alt="" src="/vector8.svg" />
      <div className={styles.androidLarge9Inner} />
      <div className={styles.dosteiitmacin}>dostE.iitm.ac.in</div>
      <img className={styles.vectorIcon9} alt="" src="/vector9.svg" />
      <div className={styles.rectangleDiv} />
      <div className={styles.canIHave}>Can I have info on techSoc please?</div>
      <img className={styles.iphoto1Icon} alt="" src="/iphoto-1@2x.png" />
      <div className={styles.androidLarge9Child1} />
      <div className={styles.techsocIsTheContainer}>
        <p className={styles.techsocIsThe}>
          TechSoc is the technical society of IIT
        </p>
        <p
          className={styles.techsocIsThe}
        >{`Madras. Founded in 2007 by IIT Madras students to inspire the emotion of building competent technology solutions to solve society’s most problems through a set of competitions and events. `}</p>
        <p className={styles.techsocIsThe}>&nbsp;</p>
        <p className={styles.techsocIsThe}>
          TechSoc holds semester long competitions and events related to
          technology, finance, quant and cases for students of IIT Madras. It
          also holds the inter hostel competitons among all the hostels at IIT
          Madras to inculcate a feeling of unity among the students.
        </p>
        <p className={styles.techsocIsThe}>&nbsp;</p>
        <p className={styles.techsocIsThe}>
          TechSoc also happens to choose the inter iit tech contingents with the
          help of CFI.
        </p>
        <p className={styles.techsocIsThe}>&nbsp;</p>
        <p className={styles.techsocIsThe}>
          Currently TecSoc comprises of the following verticles:
        </p>
        <ul className={styles.veranstaltungBuildschoolCont}>
          <li className={styles.veranstaltung}>Veranstaltung</li>
          <li className={styles.veranstaltung}>Buildschool</li>
          <li className={styles.veranstaltung}>{`Content `}</li>
          <li className={styles.veranstaltung}>Design</li>
          <li>Spons and Publicity</li>
        </ul>
      </div>
      <img className={styles.groupIcon} alt="" src="/group-1.svg" />
      <div className={styles.thumbsUp} />
      <img
        className={styles.whatsappImage20230918At7}
        alt=""
        src="/whatsapp-image-20230918-at-719-2@2x.png"
      />
    </div>
  );
};

export default AndroidLarge9;
