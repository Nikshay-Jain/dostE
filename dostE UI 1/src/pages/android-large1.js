import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./android-large1.module.css";

const AndroidLarge1 = () => {
  const navigate = useNavigate();

  const onVectorIcon6Click = useCallback(() => {
    navigate("/android-large-2");
  }, [navigate]);

  return (
    <div className={styles.androidLarge1}>
      <div className={styles.androidLarge1Child} />
      <div className={styles.androidLarge1Item} />
      <div className={styles.androidLarge1Inner} />
      <div className={styles.div}>5:06</div>
      <div className={styles.enquiryAboutCs1100}>Enquiry about CS1100</div>
      <div className={styles.iWantInformation}>
        I want information about the course CS1100 offered in the institute.
      </div>
      <div className={styles.ofcourseCs1100IntroductionContainer}>
        <p
          className={styles.ofcourseCs1100Introduction}
        >{`Ofcourse! CS1100 (introduction to programming) is a introduction level course offered to freshers of btech of chemical, mechanical, electrical and metallurgical branch. `}</p>
        <p className={styles.ofcourseCs1100Introduction}>&nbsp;</p>
        <p className={styles.ofcourseCs1100Introduction}>
          Coming to course content-
        </p>
        <ul className={styles.binaryRepresentationIntroduc}>
          <li className={styles.binaryRepresentation}>Binary representation</li>
          <li className={styles.binaryRepresentation}>
            Introduction to C programming
          </li>
          <li className={styles.binaryRepresentation}>Basic I/O</li>
          <li
            className={styles.binaryRepresentation}
          >{`Selection Statement `}</li>
          <li className={styles.binaryRepresentation}>Loops, nums</li>
          <li className={styles.binaryRepresentation}>{`Arrays `}</li>
          <li className={styles.binaryRepresentation}>{`Strings `}</li>
          <li className={styles.binaryRepresentation}>{`Functions `}</li>
          <li className={styles.binaryRepresentation}>{`Structures `}</li>
          <li className={styles.binaryRepresentation}>{`Sorting `}</li>
        </ul>
        <p className={styles.ofcourseCs1100Introduction}>&nbsp;</p>
        <p className={styles.ofcourseCs1100Introduction}>
          This course is offered in the odd semesters. This semester this course
          is offered by the following faculties:
        </p>
        <ul className={styles.binaryRepresentationIntroduc}>
          <li className={styles.binaryRepresentation}>V. Krishna Nandivada</li>
          <li className={styles.binaryRepresentation}>Shweta Agrawal</li>
        </ul>
        <p className={styles.ofcourseCs1100Introduction}>&nbsp;</p>
        <p className={styles.ofcourseCs1100Introduction}>
          The grading patterns and class timings and venues is however different
          for different classes.
        </p>
      </div>
      <div className={styles.div1}>1</div>
      <img className={styles.vectorIcon} alt="" src="/vector.svg" />
      <img className={styles.batteryIcon} alt="" src="/battery.svg" />
      <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
      <img className={styles.vectorIcon2} alt="" src="/vector2.svg" />
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
      <img className={styles.iphoto1Icon} alt="" src="/iphoto-11@2x.png" />
      <div className={styles.rectangleDiv} />
      <img className={styles.vectorIcon7} alt="" src="/vector20.svg" />
      <img className={styles.groupIcon} alt="" src="/group-13.svg" />
      <img className={styles.vectorIcon8} alt="" src="/vector8.svg" />
      <div className={styles.androidLarge1Child1} />
      <div className={styles.dosteiitmacin}>dostE.iitm.ac.in</div>
      <img className={styles.vectorIcon9} alt="" src="/vector9.svg" />
      <img
        className={styles.whatsappImage20230918At7}
        alt=""
        src="/whatsapp-image-20230918-at-719-2@2x.png"
      />
    </div>
  );
};

export default AndroidLarge1;
