import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./android-large6.module.css";

const AndroidLarge6 = () => {
  const navigate = useNavigate();

  const onVectorIcon3Click = useCallback(() => {
    navigate("/android-large-1");
  }, [navigate]);

  const onVectorIcon7Click = useCallback(() => {
    navigate("/android-large-2");
  }, [navigate]);

  const onVectorIcon10Click = useCallback(() => {
    navigate("/android-large-1");
  }, [navigate]);

  return (
    <div className={styles.androidLarge6}>
      <div className={styles.androidLarge6Child} />
      <div className={styles.androidLarge6Item} />
      <div className={styles.div}>5:06</div>
      <div className={styles.enquiryAboutCs1100}>Enquiry about CS1100</div>
      <div className={styles.iWantInformation}>
        I want information about the course CS1100 offered in the institute.
      </div>
      <div className={styles.div1}>1</div>
      <img className={styles.vectorIcon} alt="" src="/vector8.svg" />
      <img className={styles.vectorIcon1} alt="" src="/vector.svg" />
      <img className={styles.batteryIcon} alt="" src="/battery.svg" />
      <img className={styles.vectorIcon2} alt="" src="/vector1.svg" />
      <img
        className={styles.vectorIcon3}
        alt=""
        src="/vector2.svg"
        onClick={onVectorIcon3Click}
      />
      <div className={styles.androidLarge6Inner} />
      <img className={styles.vectorIcon4} alt="" src="/vector3.svg" />
      <img className={styles.vectorIcon5} alt="" src="/vector12.svg" />
      <img className={styles.layer2Icon} alt="" src="/layer-2.svg" />
      <img className={styles.vectorIcon6} alt="" src="/vector5.svg" />
      <img
        className={styles.vectorIcon7}
        alt=""
        src="/vector13.svg"
        onClick={onVectorIcon7Click}
      />
      <img className={styles.iphoto1Icon} alt="" src="/iphoto-1@2x.png" />
      <div className={styles.rectangleDiv} />
      <img className={styles.vectorIcon8} alt="" src="/vector14.svg" />
      <img className={styles.groupIcon} alt="" src="/group-11.svg" />
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.ofcourseCs1100IntroductionContainer}>
          <p
            className={styles.ofcourseCs1100Introduction}
          >{`Ofcourse! CS1100 (introduction to programming) is a introduction level course offered to freshers of btech of chemical, mechanical, electrical and metallurgical branch. `}</p>
          <p className={styles.ofcourseCs1100Introduction}>&nbsp;</p>
          <p className={styles.ofcourseCs1100Introduction}>
            Coming to course content-
          </p>
          <ul className={styles.binaryRepresentationIntroduc}>
            <li className={styles.binaryRepresentation}>
              Binary representation
            </li>
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
            This course is offered in the odd semesters. This semester this
            course is offered by the following faculties:
          </p>
          <ul className={styles.binaryRepresentationIntroduc}>
            <li className={styles.binaryRepresentation}>
              V. Kriishna Nandivada
            </li>
            <li className={styles.binaryRepresentation}>Shweta Agrawal</li>
          </ul>
          <p className={styles.ofcourseCs1100Introduction}>&nbsp;</p>
          <p className={styles.ofcourseCs1100Introduction}>
            The grading patterns and class timings and venues is however
            different for different classes.
          </p>
        </div>
        <div className={styles.groupItem} />
        <div className={styles.thumbsUp} />
        <div className={styles.settings}>Settings</div>
        <div className={styles.profile}>Profile</div>
        <div className={styles.themes}>Themes</div>
        <div className={styles.dataControls}>Data controls</div>
        <div className={styles.clearChatHistory}>Clear chat history</div>
      </div>
      <div className={styles.dosteiitmacinsettings}>
        dostE.iitm.ac.in/settings
      </div>
      <img className={styles.vectorIcon9} alt="" src="/vector9.svg" />
      <div className={styles.lineDiv} />
      <img
        className={styles.vectorIcon10}
        alt=""
        src="/vector15.svg"
        onClick={onVectorIcon10Click}
      />
      <img className={styles.mediumIcons} alt="" src="/medium-icons@2x.png" />
      <img className={styles.mediumIcons1} alt="" src="/medium-icons1@2x.png" />
      <img
        className={styles.dataQualityIcon}
        alt=""
        src="/data-quality@2x.png"
      />
      <img className={styles.eraseIcon} alt="" src="/erase@2x.png" />
      <div className={styles.rectangleGroup}>
        <div className={styles.groupInner} />
        <b className={styles.clear}>Clear</b>
      </div>
      <img className={styles.vectorIcon11} alt="" src="/vector16.svg" />
      <img
        className={styles.whatsappImage20230918At7}
        alt=""
        src="/whatsapp-image-20230918-at-719-2@2x.png"
      />
    </div>
  );
};

export default AndroidLarge6;
