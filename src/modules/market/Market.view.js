import React from "react"
import { Flex, Box, Button } from "rebass"
import styled from "@emotion/styled"
import { Text, Icon } from "../../components"
import Radium, {StyleRoot} from 'radium';
import { fadeIn } from 'react-animations';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import styledc, { css,keyframes } from "styled-components";
import Img1 from "../../assets/images/video-thumbnails/img1.jpg"
import Img2 from "../../assets/images/video-thumbnails/img2.jpg"
import Img5 from "../../assets/images/video-thumbnails/img5.jpg"
import Img6 from "../../assets/images/video-thumbnails/img6.png"
import Template1 from "../../assets/webAsset/Template1.jpg"
import Template2 from "../../assets/webAsset/Template2.jpg"
import Template3 from "../../assets/webAsset/Template3.jpg"
import test1 from "../../assets/webAsset/test1.jpg"
import Template4 from "../../assets/webAsset/Template4.jpg"


const styles = {
    fadeIn: {
      animation: 'x 3s',
      animationName: Radium.keyframes(fadeIn, 'fadeIn')
    }
  }

const CoverSection = styled(Box)`
    overflow: hidden;
    width: 100%;
    height: 32vw;
`

const VideosSection = styled(Flex)`
    width: 100%;
    flex-direction: row;
    // flex-wrap: wrap;
    margin-top: 80px;
    justify-content: space-between
`

const UseCases = styled(Flex)`
    flex-direction: column;
    margin-top: 80px;
`

const CreateVideos = styled(Flex)`
    flex-direction: column;
    width: 100%;
    text-align: right
    
`

const StatsSection = styled(Flex)`
    flex-direction: row;
    width: 100%;
    margin-top: 80px;
    justify-content: center;
    margin-bottom: 40px;
`

const PersonalisedAvatars = styled(Flex)`
    flex-direction: row;
    width: 100%;
    margin-top: 80px;
    justify-content: center;
`

export const MarketView = () => {
  const rotate = keyframes`
  0%   {left: -400px; top: 0px;}
  
  50%  {left: 0px; top: 0px;}
  
  100% {left: -400px; top: 0px;}
`;

const rotateback = keyframes`
  0%   {left: 0px; top: 0px;}
  
  50%  {left: -400px; top: 0px;}
  
  100% {left: 0px; top: 0px;}
`;
const Scroll = styledc(Flex)`
overflow-x: visible;
  position: relative;
  animation: ${rotate} 8s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;
const Scrollback = styledc(Flex)`
  overflow-x: visible;
  position: relative;
  animation: ${rotateback} 8s linear infinite;
  padding: 2rem 1rem;
`;


        return (
        <>
        <CoverSection >
        {/* <Scroll>
                <img src={Img1} width="30%" style={{ maringRight: "20px",marginBottom: "40px" }} />
                <img src={Template1} width="30%" style={{maringRight: "20px", marginBottom: "40px" }} />
                <img src={Template2} width="30%" style={{maringRight: "20px", marginBottom: "40px" }} />
                <img src={Template3} width="30%" style={{maringRight: "20px", marginBottom: "40px" }} />
                
        </Scroll>
        <Scrollback>
                
                <img src={Template3} width="30%" style={{ marginBottom: "40px" }} />
                <img src={Template4} width="30%" style={{ marginBottom: "40px" }} />
                <img src={Img6} width="30%" style={{ marginBottom: "40px" }} />
                <img src={Img1} width="30%" style={{ marginBottom: "40px" }} />
                
        </Scrollback> */}
            <Box>
                <Text sx={{marginTop: "80px", fontSize: ["50px","80px","110px","130px","150px"] ,textAlign: "center"}}>Coming Soon</Text>
                <Text sx={{marginTop: "80px", fontSize: ["10px","20px","30px","40px","50px"] ,textAlign: "center"}}>Market Place</Text>
            </Box>
           
      {/* <iframe
        src="https://www.youtube.com/embed/YY8tWrLWCM8"
        frameborder="0"
        allow="autoplay"
        allowfullscreen
        title="video"
        width="420" height="345"
      /> */}
    {/* <StyleRoot>
      <div className="test" style={styles.fadeIn}>
      <Box sx={{border: "1px solid red"}}>
        <Text>Hey Im Rohit</Text>
      </Box>
      </div>
    </StyleRoot>
    <AnimationOnScroll animateIn="animate__fadeIn">
  <h2>Some Text</h2>
</AnimationOnScroll> */}
        </CoverSection>

        </>
    )
}