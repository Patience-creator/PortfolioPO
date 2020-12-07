import React, { useEffect, useState } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import useWindowSize from "./useWindowSize";
import {FaGithub} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";

//Components
import ScrollForMore from "../components/scrollForMore";
import "./layout.css";




 
//Ease



const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const firstName = {
  // initial: {
  //   y: 0,
  // },
  animate: {
    // y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const lastName = {
  // initial: {
  //   y: 0,
  // },
  animate: {
    // y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: 1,
    },
  },
};

const letter = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: { duration: 1, ...transition },
  },
};

const Model = ({ imageDetails }) => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const windowSize = useWindowSize();
  const [canScroll, setCanScroll] = useState(false);

  useEffect(() => {
    if (canScroll === false) {
      document.querySelector("body").classList.add("no-scroll");
    } else {
      document.querySelector("body").classList.remove("no-scroll");
    }
  }, [canScroll]);

  return (
    <motion.div
      onAnimationComplete={() => setCanScroll(true)}
      className='single'
      initial='initial'
      animate='animate'
      exit='exit'>
      <div className='container fluid'>
        <div className='row center top-row'>
          <div className='top'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 1.2, ...transition },
              }}
              className='details'>
              <div className='location'>
                <span>Front-End Developer In Belgium </span>
                
            
              </div>
              {/* social handles github/linkedin links */}
             <div className="mua"> 
            <FaGithub/> 
             <FaLinkedin/>  
             </div>
            </motion.div>
            <motion.div className='model'>
              <motion.span className='first' variants={firstName}>
                <motion.span variants={letter}>P</motion.span>
                <motion.span variants={letter}>a</motion.span>
                <motion.span variants={letter}>t</motion.span>
                <motion.span variants={letter}>i</motion.span>
                <motion.span variants={letter}>e</motion.span>
                <motion.span variants={letter}>n</motion.span>
                <motion.span variants={letter}>c</motion.span>
                <motion.span variants={letter}>e</motion.span>
              </motion.span>
              <motion.span className='last' variants={lastName}>
                <motion.span variants={letter}>O</motion.span>
                <motion.span variants={letter}>r</motion.span>
                <motion.span variants={letter}>a</motion.span>
              </motion.span>
            </motion.div>
          </div>
        </div>
        <div className='row bottom-row'>
          <div className='bottom'>
            <motion.div className='image-container-single'>
              <motion.div
                initial={{
                  y: "-50%",
                  width: imageDetails.width,
                  height: imageDetails.height,
                }}
                animate={{  
                  y: 0,
                  width: "100%",
                  // resize hook needs to be put here.
                  // useWindowSize code will go here
                  height: useWindowSize
                  > 1024 ? 800 : 400,
                  transition: { delay: 0.2, ...transition },
                }}
                className='thumbnail-single'>
                <motion.div
                  className='frame-single'
                  whileHover='hover'
                  transition={transition}>
                  <motion.img
                    src={require("../images/patienceora.jpg")}
                    alt='an image'
                    style={{ scale: scale }}
                    initial={{ scale: 1.0 }}
                    animate={{
                      transition: { delay: 0.2, ...transition },
                      y: {useWindowSize}
                      > 1440 ? -1200 : -600,
                      
                      // add more sizing options
                      // dont forget to add each sizing option
                    }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
          <ScrollForMore />
          
        </div>
      </div>
      <div className='row'>
      <h1 className='title'>
             Latest Works
              </h1></div>
              {/* dont forget to make a buttoms for the view code and spreading the cards over the page */}
      <div className="wrapper">
    <div className="item">
      <div className="polaroid"><img src="https://www.dictionary.com/e/wp-content/uploads/2019/07/Aesthetic_800x800-300x300.jpg" />
        <div className="caption">View code</div> <p className="para"> jsqajskaskkasksjkas </p>
      </div>
    </div>
    <div className="item">
      <div className="polaroid"><img src="https://pm1.narvii.com/6946/0b2fc71bda96ee32fcd13ccae789bd29383f8056r1-500-500v2_00.jpg" />
        <div className="caption">View code</div>  <p className="para"> jsqajskaskkasksjkas </p>
      </div>
    </div>
    <div className="item">
      <div className="polaroid"><img src="https://i.pinimg.com/originals/7c/ac/c8/7cacc8066f224d4af35b292bbfb15e6d.jpg"/>
        <div className="caption">View code</div>  <p className="para"> jsqajskaskkasksjkas </p>
      </div>
    </div>
    <div className="item">
      <div className="polaroid"><img src="https://lh3.googleusercontent.com/proxy/g0PdzbhPPFmLJFjS90ojMTt0s0N5PgobN5MyLJmH7VdNU_Bvhpqfu8OFrp8jGU9V0aFoS5T5tcibsn4McPhXz05GAeZtpafcMzAdAc_mh13DaBFq6boZjY6u7vzNgcXfmhnKgdVHnVqx67ao1Yk" />
        <div className="caption">View code</div>  <p className="para"> jsqajskaskkasksjkas </p>
      </div>
    </div>
    <div className="item">
      <div className="polaroid"><img src="https://cdn.shopify.com/s/files/1/0273/3562/2709/products/L002-29-0000.1.AESTHETIC_800x.jpg?v=1582577635" />
        <div className="caption">View code</div>  <p className="para"> jsqajskaskkasksjkas </p>
      </div>
    </div>
    <div className="item">
      <div className="polaroid"><img src="https://cdn.theatlantic.com/thumbor/52pWe_0_rC0BUbccEq2XTGMagPU=/875x0:2000x1125/500x500/media/img/mt/2019/04/PinkWall/original.jpg" />
        <div className="caption">View code</div>  <p className="para"> jsqajskaskkasksjkas </p>
      </div>
    </div>
    <div className="item">
      <div className="polaroid"><img src="https://data.whicdn.com/images/350662912/original.jpg" />
        <div className="caption">View code</div>  <p className="para"> jsqajskaskkasksjkas </p>
      </div>
    </div>
  
  </div>
    
     
     
     
     
     {/* Footer needs to be made */}
     
     
     
     
     
     
     
     
     
     
     
     
     
      {/* <div className='detailed-information'>
        <div className='container'>
          <div className='row'>
            <h1 className='title'>
             .
              </h1>
               <layout/>







          </div>
        </div>
      </div> */}
     {/* 
              <p> I'm always open to discuss projects and connect!</p> */}
            
            {/* <div className="mail-me">
            <p className="title">Contact me <a href="mailto:patienceora@hotmail.com">patienceora@hotmail.com</a></p>
         
            </div>

          */}

</motion.div>
  );
};


// add footer to this page/  add some social links to it.

export default Model;
