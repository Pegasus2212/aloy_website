import React from "react"
import { Flex, Box, Button } from "rebass"
import styled from "@emotion/styled"
import { Text, Icon } from "../../components"
import Radium, {StyleRoot} from 'radium';
import { fadeIn } from 'react-animations';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

const styles = {
    fadeIn: {
      animation: 'x 3s',
      animationName: Radium.keyframes(fadeIn, 'fadeIn')
    }
  }

const CoverSection = styled(Box)`
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

export const ResourceView = () => {
        return (
        <>
        <CoverSection >
            <Box>
                <Text sx={{marginTop: "80px", fontSize: ["50px","80px","110px","130px","150px"] ,textAlign: "center"}}>Coming Soon</Text>
                <Text sx={{marginTop: "80px", fontSize: ["10px","20px","30px","40px","50px"] ,textAlign: "center"}}>Resources</Text>
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