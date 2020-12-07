import * as React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ProgressiveImage from "react-progressive-image";
//  import "./Home.css";
import {FaHtml5} from "react-icons/fa";
import {FaCss3} from "react-icons/fa";
import {FaJs} from "react-icons/fa";
import {FaBootstrap} from "react-icons/fa";
import {FaSass} from "react-icons/fa";
import {FaReact} from "react-icons/fa";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const Home = ({ imageDetails, image }) => (
  <>
    <main>
      <div className='container'>
        <div className='row center'>
          <div className='image-container'>
            <div
              className='thumbnail'
              ref={image}
              style={{
                width: imageDetails.width,
                height: imageDetails.height,
              }}>
              <div className='frame'>
                <Link to={`/model/patienceora`}>
                  <ProgressiveImage
                 src={require("../images/patienceora.jpg")} 
                    placeholder={require("../images/patienceoracompressed.jpg")} >
                      {(src) => (
                      <motion.img
                        src={src}
                        alt='Patience Ora'
                        whileHover={{ scale: 1.1 }}
                        transition={transition}
                      />
                    )}
                  </ProgressiveImage>
                </Link>
              </div>
            </div>
            <motion.div
              exit={{ opacity: 0 }}
              transition={transition}
              className='information'>
             {/* I need a arrow for this place */}
             {/* add icons of your skills eg javascript */}
              <div className='title'><FaHtml5/>  </div>  <div><FaCss3/>  </div> <FaBootstrap/><div><FaSass/> </div> <div> <FaReact/> </div>
              <div className='location'>
                <span> <FaJs/>  </span>
            
                
              </div> 
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  </>
);

export default Home;
