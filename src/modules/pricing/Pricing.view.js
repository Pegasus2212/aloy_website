import React from "react"
import { Flex, Box, Button } from "rebass"
import styled from "@emotion/styled"
import { Text, Icon } from "../../components"
import { faTimesCircle, faCheckCircle,faCheck,faArrowUp, faPlus } from "@fortawesome/free-solid-svg-icons"

import feature01 from "../../assets/webAsset/feature01.png"

import arrowt from "../../assets/webAsset/arrowt.png"
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';


const CoverSection = styled(Box)`
    flex-direction: column;
`

const StudioQuality = styled(Flex)`
    justify-content: space-between;
    @media only screen and (max-width: 67em) {
    display: none;
  }
`
const StudioQualityMobile = styled(Flex)`
    display: none;
    @media only screen and (max-width: 67em) {
    display: block;
  }
`
const Buttonz = styled(Button)`
    background: none;
    color: #FF5B51;
    border: 1px solid #FF5B51;
    &:hover {
        background: white;
        color: black;
        border: 1px solid white
    }

`


const CreateVideos = styled(Flex)`
    `
const DiverseOptions = styled(Flex)`
`
const AloyFeatures = styled(Flex)`
    flex-direction: column;
`
const AskedQuestions = styled(Flex)`
    flex-direction: column;
`
const PlanForYou = styled(Flex)`
    flex-direction: column;
    @media only screen and (max-width: 67em) {
    display: none;
  }
`
const PlanForYouMobile = styled(Flex)`
    display: none;
    @media only screen and (max-width: 67em) {
    display: block;
  }
`

const StatsSection = styled(Flex)`
    flex-direction: row;
    justify-content: center;
    margin-bottom: 40px;
`
const OwnAvatar = styled(Flex)`
    flexDirection: "row";
    margin-top: 120px;
    @media only screen and (max-width: 67em) {
    display: none;
  }

`
const OwnAvatarMobile = styled(Flex)`
    flexDirection: "column";
    display: none;
    margin-top: 100px;
    @media only screen and (max-width: 67em) {
    display: block;
  } 
`

export const PricingView = () => {
    return (
        <>
           <CoverSection sx={{marginX: ["40px","50px","60px","70px","80px"], marginY: "80px"}}>


                <PlanForYou sx={{mb: "80px"}}>
                <AnimationOnScroll animateIn="animate__zoomIn">
                    <Text sx={{ pb: "50px",textAlign:"center", fontSize: ["35px","40px","43px","46px","50px"] ,color: "#FF5B51"}}>Choose the right plan <br></br><span style={{ color: "#E9E8E8" }}>for you</span></Text>
                </AnimationOnScroll>
                <Flex sx={{ justifyContent: "space-evenly",flexDirection: ["row"]}}>
                <AnimationOnScroll animateIn="animate__fadeInLeft">
                    <Box sx={{width: "380px",padding: "20px 80px",border: "1px solid #FF5B51"}}>
                        <Text sx={{textAlign: "center",mb: "20px",fontSize: "22px",color: "#FF5B51"}}>Starter</Text>
                        <Text sx={{textAlign: "center",mb: "20px",fontSize: "50px"}}>Free</Text>
                        <Text sx={{textAlign: "center",mb: "20px",fontSize: "14px", color: "#FF5B51"}}>To create awesome videos</Text>
                        <Flex sx={{py: "10px"}}>
                        <Icon   mr= "10px"
                                icon={faCheckCircle}
                                size="sm"
                                color="#E9E8E8"/>
                            <Text>15 minutes/month</Text>
                        </Flex>
                        <Flex sx={{py: "10px"}}>
                        <Icon   mr= "10px"
                                icon={faCheckCircle}
                                size="sm"
                                color="#E9E8E8"/>
                            <Text>1080p Full HD Videos</Text>
                        </Flex>
                        <Flex sx={{py: "10px"}}>
                        <Icon   mr= "10px"
                                icon={faCheckCircle}
                                size="sm"
                                color="#E9E8E8"/>
                            <Text>Share videos privately</Text>
                        </Flex>
                        <Flex sx={{py: "10px"}}>
                        <Icon   mr= "10px"
                                icon={faTimesCircle}
                                size="sm"
                                color="#FF5B51"/>
                            <Text sx={{color: "#FF5B51"}}>Remove Watermark</Text>
                        </Flex>
                        <Flex sx={{py: "10px"}}>
                        <Icon   mr= "10px"
                                icon={faTimesCircle}
                                size="sm"
                                color="#FF5B51"/>
                            <Text sx={{color: "#FF5B51"}}>Premium Templates</Text>
                        </Flex>
                        <Flex sx={{py: "10px"}}>
                        <Icon   mr= "10px"
                                icon={faTimesCircle}
                                size="sm"
                                color="#FF5B51"/>
                            <Text sx={{color: "#FF5B51"}}>Access to stock library</Text>
                        </Flex>
                        <Flex sx={{py: "10px"}}>
                        <Icon   mr= "10px"
                                icon={faTimesCircle}
                                size="sm"
                                color="#FF5B51"/>
                            <Text sx={{color: "#FF5B51"}}>Upload custom voice</Text>
                        </Flex>
                        <Flex sx={{py: "10px"}}>
                        <Icon   mr= "10px"
                                icon={faTimesCircle}
                                size="sm"
                                color="#FF5B51"/>
                            <Text sx={{color: "#FF5B51"}}>Auto captions/subtitles</Text>
                        </Flex>
                        <Flex sx={{ mt: "20px",justifyContent: "center"}}>
                        <Buttonz>Get Started</Buttonz></Flex>
                    </Box>
                    </AnimationOnScroll><AnimationOnScroll animateIn="animate__fadeInUp">
                    <Box sx={{width: "380px",padding: "20px 80px",border: "1px solid #E9E8E8"}}>
                        
                        <Text sx={{textAlign: "center",mb: "20px",fontSize: "22px",color: "#FF5B51"}}>Personal</Text>
                        <Text sx={{textAlign: "center",mb: "20px",fontSize: "50px"}}>£ 29</Text>
                        <Text sx={{textAlign: "center",mb: "20px",fontSize: "14px", color: "#FF5B51"}}>For personalisation and advanced features</Text>
                        <Flex sx={{py: "10px"}}>
                        <Icon   mr= "10px"
                                icon={faCheckCircle}
                                size="sm"
                                color="#E9E8E8"/>
                            <Text>15 minutes/month</Text>
                        </Flex>
                        <Flex sx={{py: "10px"}}>
                        <Icon   mr= "10px"
                                icon={faCheckCircle}
                                size="sm"
                                color="#E9E8E8"/>
                            <Text>1080p Full HD Videos</Text>
                        </Flex>
                        <Flex sx={{py: "10px"}}>
                        <Icon   mr= "10px"
                                icon={faCheckCircle}
                                size="sm"
                                color="#E9E8E8"/>
                            <Text>Share videos privately</Text>
                        </Flex>
                        <Flex sx={{py: "10px"}}>
                        <Icon   mr= "10px"
                                icon={faCheckCircle}
                                size="sm"
                                color="#E9E8E8"/>
                            <Text sx={{color: "#E9E8E8"}}>Remove Watermark</Text>
                        </Flex>
                        <Flex sx={{py: "10px"}}>
                        <Icon   mr= "10px"
                                icon={faCheckCircle}
                                size="sm"
                                color="#E9E8E8"/>
                            <Text sx={{color: "#E9E8E8"}}>Premium Templates</Text>
                        </Flex>
                        <Flex sx={{py: "10px"}}>
                        <Icon   mr= "10px"
                                icon={faCheckCircle}
                                size="sm"
                                color="#E9E8E8"/>
                            <Text sx={{color: "#E9E8E8"}}>Access to stock library</Text>
                        </Flex>
                        <Flex sx={{py: "10px"}}>
                        <Icon   mr= "10px"
                                icon={faTimesCircle}
                                size="sm"
                                color="#FF5B51"/>
                            <Text sx={{color: "#FF5B51"}}>Upload custom voice</Text>
                        </Flex>
                        <Flex sx={{py: "10px"}}>
                        <Icon   mr= "10px"
                                icon={faTimesCircle}
                                size="sm"
                                color="#FF5B51"/>
                            <Text sx={{color: "#FF5B51"}}>Auto captions/subtitles</Text>
                        </Flex>
                        <Flex sx={{ mt: "20px",justifyContent: "center"}}>
                        <Buttonz>Get Started</Buttonz></Flex>
                    </Box>
                    </AnimationOnScroll><AnimationOnScroll animateIn="animate__fadeInRight">
                    <Box sx={{width: "380px",padding: "20px 80px",border: "1px solid #FF5B51"}}>
                        <Text sx={{textAlign: "center",mb: "20px",fontSize: "22px",color: "#FF5B51"}}>Corporate</Text>
                        <Text sx={{textAlign: "center",mb: "20px",fontSize: "50px"}}>£ 299</Text>
                        <Text sx={{textAlign: "center",mb: "20px",fontSize: "14px", color: "#FF5B51"}}>Scale your company training <br></br>& marketing videos</Text>
                        <Flex sx={{py: "10px"}}>
                        <Icon   mr= "10px"
                                icon={faCheckCircle}
                                size="sm"
                                color="#E9E8E8"/>
                            <Text>15 minutes/month</Text>
                        </Flex>
                        <Flex sx={{py: "10px"}}>
                        <Icon   mr= "10px"
                                icon={faCheckCircle}
                                size="sm"
                                color="#E9E8E8"/>
                            <Text>1080p Full HD Videos</Text>
                        </Flex>
                        <Flex sx={{py: "10px"}}>
                        <Icon   mr= "10px"
                                icon={faCheckCircle}
                                size="sm"
                                color="#E9E8E8"/>
                            <Text>Share videos privately</Text>
                        </Flex>
                        <Flex sx={{py: "10px"}}> 
                        <Icon   mr= "10px"
                                icon={faCheckCircle}
                                size="sm"
                                color="#E9E8E8"/>
                            <Text>Remove Watermark</Text>
                        </Flex>
                        <Flex sx={{py: "10px"}}>
                        <Icon   mr= "10px"
                                icon={faCheckCircle}
                                size="sm"
                                color="#E9E8E8"/>
                            <Text>Premium Templates</Text>
                        </Flex>
                        <Flex sx={{py: "10px"}}>
                        <Icon   mr= "10px"
                                icon={faCheckCircle}
                                size="sm"
                                color="#E9E8E8"/>
                            <Text>Access to stock library</Text>
                        </Flex>
                        <Flex sx={{py: "10px"}}>
                        <Icon   mr= "10px"
                                icon={faCheckCircle}
                                size="sm"
                                color="#E9E8E8"/>
                            <Text>Upload custom voice</Text>
                        </Flex>
                        <Flex sx={{py: "10px"}}>
                        <Icon   mr= "10px"
                                icon={faCheckCircle}
                                size="sm"
                                color="#E9E8E8"/>
                            <Text>Auto captions/subtitles</Text>
                        </Flex>
                        <Flex sx={{ mt: "20px",justifyContent: "center"}}>
                        <Buttonz>Get Started</Buttonz></Flex>
                    </Box></AnimationOnScroll>
                </Flex>
                </PlanForYou>

            <AnimationOnScroll animateIn="animate__fadeInUp">
                <PlanForYouMobile>
                <Text sx={{textAlign:"center", fontSize: ["35px","40px","43px"] ,color: "#FF5B51"}}>Choose the right plan <br></br><span style={{ color: "#E9E8E8" }}>for you</span></Text>
                <Box sx={{my: "60px",padding: "30px 15px",border: "1px solid #FF5B51"}}>
                <Flex sx={{pb: "10px",justifyContent: "space-between"}}>
                    <Flex sx={{flexDirection: "column"}}>
                        <Text sx={{textAlign: "left",fontSize: ["22px","24px","26px"],color: "#FF5B51"}}>Starter</Text>
                        <Text sx={{fontSize: ["14px","16px","18px"],color:"#FF5B51"}}>create awesome videos</Text>
                    </Flex>
                    <Text sx={{fontSize: "40px"}}>Free</Text>
                </Flex>
                <hr color="#FF5B51"></hr>
                <Flex sx={{justifyContent: "space-between"}}>
                    <Box>
                    <Flex sx={{py: "10px"}}>
                        <Icon   mr= "10px"
                                icon={faCheckCircle}
                                size="sm"
                                color="#E9E8E8"/>
                            <Text sx={{fontSize: ["14px","16px","18px"]}}>15 minutes/month</Text>
                        </Flex>
                        <Flex sx={{py: "10px"}}>
                        <Icon   mr= "10px"
                                icon={faCheckCircle}
                                size="sm"
                                color="#E9E8E8"/>
                            <Text sx={{fontSize: ["14px","16px","18px"]}}>1080p Full HD Videos</Text>
                        </Flex>
                        <Flex sx={{py: "10px"}}>
                        <Icon   mr= "10px"
                                icon={faCheckCircle}
                                size="sm"
                                color="#E9E8E8"/>
                            <Text sx={{fontSize: ["14px","16px","18px"]}}>Share videos privately</Text>
                        </Flex>
                        <Flex sx={{py: "10px"}}>
                        <Icon   mr= "10px"
                                icon={faTimesCircle}
                                size="sm"
                                color="#FF5B51"/>
                            <Text sx={{fontSize: ["14px","16px","18px"],color: "#FF5B51"}}>Remove Watermark</Text>
                        </Flex>
                    </Box>
                    <Box>
                    <Flex sx={{py: "10px"}}>
                        <Icon   mr= "10px"
                                icon={faTimesCircle}
                                size="sm"
                                color="#FF5B51"/>
                            <Text sx={{fontSize: ["14px","16px","18px"], color: "#FF5B51"}}>Premium Templates</Text>
                        </Flex>
                        <Flex sx={{py: "10px"}}>
                        <Icon   mr= "10px"
                                icon={faTimesCircle}
                                size="sm"
                                color="#FF5B51"/>
                            <Text sx={{fontSize: ["14px","16px","18px"], color: "#FF5B51"}}>Access to stock library</Text>
                        </Flex>
                        <Flex sx={{py: "10px"}}>
                        <Icon   mr= "10px"
                                icon={faTimesCircle}
                                size="sm"
                                color="#FF5B51"/>
                            <Text sx={{fontSize: ["14px","16px","18px"], color: "#FF5B51"}}>Upload custom voice</Text>
                        </Flex>
                        <Flex sx={{py: "10px"}}>
                        <Icon   mr= "10px"
                                icon={faTimesCircle}
                                size="sm"
                                color="#FF5B51"/>
                            <Text sx={{fontSize: ["14px","16px","18px"], color: "#FF5B51"}}>Auto captions/subtitles</Text>
                        </Flex>
                    </Box>
                </Flex>
                <hr color="#FF5B51"></hr>
                <Flex sx={{ mt: "20px",justifyContent: "center"}}>
                    <Buttonz>Get Started</Buttonz></Flex>
                </Box>
                <Box sx={{my: "60px",padding: "30px 15px",border: "1px solid #FF5B51"}}>
                <Flex sx={{pb: "10px",justifyContent: "space-between"}}>
                    <Flex sx={{flexDirection: "column"}}>
                        <Text sx={{textAlign: "left",fontSize: ["22px","24px","26px"],color: "#FF5B51"}}>Personal</Text>
                        <Text sx={{fontSize: ["14px","16px","18px"],color:"#FF5B51"}}>personalisation and advanced features</Text>
                    </Flex>
                    <Text sx={{fontSize: "40px"}}>£ 29</Text>
                </Flex>
                <hr color="#FF5B51"></hr>
                <Flex sx={{justifyContent: "space-between"}}>
                    <Box>
                    <Flex sx={{py: "10px"}}>
                        <Icon   mr= "10px"
                                icon={faCheckCircle}
                                size="sm"
                                color="#E9E8E8"/>
                            <Text sx={{fontSize: ["14px","16px","18px"]}}>15 minutes/month</Text>
                        </Flex>
                        <Flex sx={{py: "10px"}}>
                        <Icon   mr= "10px"
                                icon={faCheckCircle}
                                size="sm"
                                color="#E9E8E8"/>
                            <Text sx={{fontSize: ["14px","16px","18px"]}}>1080p Full HD Videos</Text>
                        </Flex>
                        <Flex sx={{py: "10px"}}>
                        <Icon   mr= "10px"
                                icon={faCheckCircle}
                                size="sm"
                                color="#E9E8E8"/>
                            <Text sx={{fontSize: ["14px","16px","18px"]}}>Share videos privately</Text>
                        </Flex>
                        <Flex sx={{py: "10px"}}>
                        <Icon   mr= "10px"
                                icon={faCheckCircle}
                                size="sm"
                                color="#E9E8E8"/>
                            <Text sx={{fontSize: ["14px","16px","18px"],color: "#E9E8E8"}}>Remove Watermark</Text>
                        </Flex>
                    </Box>
                    <Box>
                    <Flex sx={{py: "10px"}}>
                        <Icon   mr= "10px"
                                icon={faCheckCircle}
                                size="sm"
                                color="#E9E8E8"/>
                            <Text sx={{fontSize: ["14px","16px","18px"], color: "#E9E8E8"}}>Premium Templates</Text>
                        </Flex>
                        <Flex sx={{py: "10px"}}>
                        <Icon   mr= "10px"
                                icon={faCheckCircle}
                                size="sm"
                                color="#E9E8E8"/>
                            <Text sx={{fontSize: ["14px","16px","18px"], color: "#E9E8E8"}}>Access to stock library</Text>
                        </Flex>
                        <Flex sx={{py: "10px"}}>
                        <Icon   mr= "10px"
                                icon={faTimesCircle}
                                size="sm"
                                color="#FF5B51"/>
                            <Text sx={{fontSize: ["14px","16px","18px"], color: "#FF5B51"}}>Upload custom voice</Text>
                        </Flex>
                        <Flex sx={{py: "10px"}}>
                        <Icon   mr= "10px"
                                icon={faTimesCircle}
                                size="sm"
                                color="#FF5B51"/>
                            <Text sx={{fontSize: ["14px","16px","18px"], color: "#FF5B51"}}>Auto captions/subtitles</Text>
                        </Flex>
                    </Box>
                </Flex>
                <hr color="#FF5B51"></hr>
                <Flex sx={{ mt: "20px",justifyContent: "center"}}>
                    <Buttonz>Get Started</Buttonz></Flex>
                </Box>
                <Box sx={{my: "60px",padding: "30px 15px",border: "1px solid #FF5B51"}}>
                <Flex sx={{pb: "10px",justifyContent: "space-between"}}>
                    <Flex sx={{flexDirection: "column"}}>
                        <Text sx={{textAlign: "left",fontSize: ["22px","24px","26px"],color: "#FF5B51"}}>Corporate</Text>
                        <Text sx={{fontSize: ["14px","16px","18px"],color:"#FF5B51"}}>Company & marketing videos</Text>
                    </Flex>
                    <Text sx={{fontSize: "40px"}}>£ 299</Text>
                </Flex>
                <hr color="#FF5B51"></hr>
                <Flex sx={{justifyContent: "space-between"}}>
                    <Box>
                    <Flex sx={{py: "10px"}}>
                        <Icon   mr= "10px"
                                icon={faCheckCircle}
                                size="sm"
                                color="#E9E8E8"/>
                            <Text sx={{fontSize: ["14px","16px","18px"]}}>15 minutes/month</Text>
                        </Flex>
                        <Flex sx={{py: "10px"}}>
                        <Icon   mr= "10px"
                                icon={faCheckCircle}
                                size="sm"
                                color="#E9E8E8"/>
                            <Text sx={{fontSize: ["14px","16px","18px"]}}>1080p Full HD Videos</Text>
                        </Flex>
                        <Flex sx={{py: "10px"}}>
                        <Icon   mr= "10px"
                                icon={faCheckCircle}
                                size="sm"
                                color="#E9E8E8"/>
                            <Text sx={{fontSize: ["14px","16px","18px"]}}>Share videos privately</Text>
                        </Flex>
                        <Flex sx={{py: "10px"}}>
                        <Icon   mr= "10px"
                                icon={faCheckCircle}
                                size="sm"
                                color="#E9E8E8"/>
                            <Text sx={{fontSize: ["14px","16px","18px"],color: "#E9E8E8"}}>Remove Watermark</Text>
                        </Flex>
                    </Box>
                    <Box>
                    <Flex sx={{py: "10px"}}>
                        <Icon   mr= "10px"
                                icon={faCheckCircle}
                                size="sm"
                                color="#E9E8E8"/>
                            <Text sx={{fontSize: ["14px","16px","18px"], color: "#E9E8E8"}}>Premium Templates</Text>
                        </Flex>
                        <Flex sx={{py: "10px"}}>
                        <Icon   mr= "10px"
                                icon={faCheckCircle}
                                size="sm"
                                color="#E9E8E8"/>
                            <Text sx={{fontSize: ["14px","16px","18px"], color: "#E9E8E8"}}>Access to stock library</Text>
                        </Flex>
                        <Flex sx={{py: "10px"}}>
                        <Icon   mr= "10px"
                                icon={faCheckCircle}
                                size="sm"
                                color="#E9E8E8"/>
                            <Text sx={{fontSize: ["14px","16px","18px"], color: "#E9E8E8"}}>Upload custom voice</Text>
                        </Flex>
                        <Flex sx={{py: "10px"}}>
                        <Icon   mr= "10px"
                                icon={faCheckCircle}
                                size="sm"
                                color="#E9E8E8"/>
                            <Text sx={{fontSize: ["14px","16px","18px"], color: "#E9E8E8"}}>Auto captions/subtitles</Text>
                        </Flex>
                    </Box>
                </Flex>
                <hr color="#FF5B51"></hr>
                <Flex sx={{ mt: "20px",justifyContent: "center"}}>
                    <Buttonz>Get Started</Buttonz></Flex>
                </Box>
                </PlanForYouMobile>
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeInDown">
            <Box sx={{ width: "100%", color: "#FF5B51", textAlign: "center" }}>
                <Text sx={{ fontSize: ["35px","40px","43px","46px","50px"] }}>Create <span style={{ color: "#E9E8E8" }}>studio-quality</span> Al videos</Text>
            </Box>
            </AnimationOnScroll>

            <StudioQuality sx={{flexDirection: "row", wordWrap:"break-word", mt:["50px","50px","60px","70px","80px"]}}>
                
                <Flex sx={{flexDirection: "column"}}>
                <AnimationOnScroll animateIn="animate__fadeInLeft">
                    <Text sx={{fontSize: "70px", color: "#E9E8E8"}}>100+</Text></AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeInUp">
                    <Text sx={{color: "#FF5851"}}>Curated Templates<br></br>for every user</Text></AnimationOnScroll>
                </Flex>
                <Flex sx={{flexDirection: "column"}}>
                <AnimationOnScroll animateIn="animate__fadeInLeft">
                    <Text sx={{fontSize: "70px", color: "#E9E8E8"}}>60+</Text></AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeInUp">
                    <Text sx={{color: "#FF5851"}}>NFT Avatars &amp;<br></br> ∞ Integration</Text></AnimationOnScroll>
                </Flex>
                <Flex sx={{flexDirection: "column"}}>
                <AnimationOnScroll animateIn="animate__fadeInLeft">
                    <Text sx={{fontSize: "70px", color: "#E9E8E8"}}>60+</Text></AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeInUp">
                    <Text sx={{color: "#FF5851"}}>Languages to<br></br> choose from</Text></AnimationOnScroll>
                </Flex>
                <Flex sx={{flexDirection: "column"}}>
                <AnimationOnScroll animateIn="animate__fadeInLeft">
                    <Text sx={{fontSize: "70px", color: "#E9E8E8"}}>20+</Text></AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeInUp">
                    <Text sx={{color: "#FF5851"}}>Ready to use<br></br> Celebrity Videos</Text></AnimationOnScroll>
                </Flex>
                <Flex sx={{flexDirection: "column"}}>
                <AnimationOnScroll animateIn="animate__fadeInLeft">
                    <Text sx={{fontSize: "70px", color: "#E9E8E8"}}>40+</Text></AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeInUp">
                    <Text sx={{color: "#FF5851"}}>AI Avatars to act<br></br> as presenters</Text></AnimationOnScroll>
                </Flex>
                
                
                
            </StudioQuality>

            <AnimationOnScroll animateIn="animate__fadeInUp">

            <StudioQualityMobile sx={{flexDirection: "column", wordWrap:"break-word", mt:["50px","50px","60px","70px","80px"]}}>
                <Flex sx={{justifyContent: "space-between"}}>
                <Flex sx={{flexDirection: "column"}}>
                    <Text sx={{fontSize: ["46px","50px","56px"], color: "#E9E8E8"}}>100+</Text>
                    <Text sx={{fontSize: ["13px","14px","16px"],color: "#FF5851"}}>Curated<br></br> Templates</Text>
                </Flex>
                <Flex sx={{flexDirection: "column"}}>
                    <Text sx={{fontSize: ["46px","50px","56px"], color: "#E9E8E8"}}>60+</Text>
                    <Text sx={{fontSize: ["13px","14px","16px"],color: "#FF5851"}}>NFT Avatars &amp;<br></br> ∞ Integration</Text>
                </Flex>
                <Flex sx={{flexDirection: "column"}}>
                    <Text sx={{fontSize: ["46px","50px","56px"], color: "#E9E8E8"}}>60+</Text>
                    <Text sx={{fontSize: ["13px","14px","16px"],color: "#FF5851"}}>Languages to<br></br> choose from</Text>
                </Flex>
                </Flex>
                <Flex sx={{justifyContent: "space-evenly"}}>
                <Flex sx={{flexDirection: "column"}}>
                    <Text sx={{fontSize: ["46px","50px","56px"], color: "#E9E8E8"}}>20+</Text>
                    <Text sx={{fontSize: ["13px","14px","16px"],color: "#FF5851"}}>Ready to use<br></br> Celebrity Videos</Text>
                </Flex>
                <Flex sx={{flexDirection: "column"}}>
                    <Text sx={{fontSize: ["46px","50px","56px"], color: "#E9E8E8"}}>40+</Text>
                    <Text sx={{fontSize: ["13px","14px","16px"],color: "#FF5851"}}>AI Avatars to act<br></br> as presenters</Text>
                </Flex>
                </Flex>
                
                
            </StudioQualityMobile></AnimationOnScroll>

            <DiverseOptions sx={{ flexDirection: ["column","column","column","row","row"],my : ["110px","120px","130pxpx","140px","150px"]}}>
                <Box sx={{width: ["100%","100%","100%","50%","50%"]}}>
                <AnimationOnScroll animateIn="animate__fadeInLeft">
                    <img src={feature01} width="100%" /></AnimationOnScroll>
                </Box>
                <Box sx={{mt: ["50px","30px","20px","0","0"],width: ["100%","100%","100%","60%","60%"]}}>
                    <Flex sx={{pl: ["0","0","0px","70px","80px"],flexDirection: "column"}}>
                    <AnimationOnScroll animateIn="animate__fadeInRight">
                        <Text sx={{ textAlign: ["center","center","center","left","left"],color: "#FF5851", fontSize: ["35px","40px","43px","46px","50px"], mb: "40px"}}>Make a <span style={{ color: "#E9E8E8" }}>professional video</span> in minutes</Text>
                        </AnimationOnScroll>
                        <Flex sx={{margin: ["auto","auto","auto","0","0"]}}>
                        <AnimationOnScroll animateIn="animate__fadeInUp"><Icon size={15}
                                ml="20px"
                                mr="10px"
                                icon={faCheck}
                                sx={{ cursor: "pointer" }}
                            /></AnimationOnScroll>
                            <AnimationOnScroll animateIn="animate__fadeInUp">
                            <Text sx={{mb:"15px", color: "#FF5B51", fontSize: ["13px","14px","16px"] }}>Simple web-based application for beginers</Text></AnimationOnScroll></Flex>
                        
                    <Flex sx={{margin: ["auto","auto","auto","0","0"]}}><AnimationOnScroll animateIn="animate__fadeInUp">
                    <Icon size={15}
                                ml="20px"
                                mr="10px"
                                icon={faCheck}
                                sx={{ cursor: "pointer" }}
                            /></AnimationOnScroll>
                            <AnimationOnScroll animateIn="animate__fadeInUp">
                            <Text sx={{mb:"15px", color: "#FF5B51", fontSize: ["13px","14px","16px"] }}>Average time to produce a video: 5minutes</Text></AnimationOnScroll></Flex>
                    <Flex sx={{margin: ["auto","auto","auto","0","0"]}}><AnimationOnScroll animateIn="animate__fadeInUp"><Icon size={15}
                                ml="20px"
                                mr="10px"
                                icon={faCheck}
                                sx={{ cursor: "pointer" }}
                            /></AnimationOnScroll><AnimationOnScroll animateIn="animate__fadeInUp"><Text sx={{ color: "#FF5B51", fontSize: ["13px","14px","16px"] }}>Affordable video production at £29/ month</Text></AnimationOnScroll></Flex>
                    </Flex>
                </Box>
            </DiverseOptions>

            <AnimationOnScroll animateIn="animate__fadeIn">         
                <AskedQuestions sx={{mt: ["40px","50px","60px","70px","80px"]}}>
            <Text sx={{pb: "60px",textAlign: "center", fontSize: ["35px","40px","43px","46px","50px"], color: "#FF5B51" }}>Frequently Asked <span style={{ color: "#E9E8E8" }}>Questions</span></Text>
                <Box>
                <AnimationOnScroll animateIn="animate__fadeInUp">
                    <hr></hr>
                    </AnimationOnScroll>
                    <Flex sx={{justifyContent: "space-between"}}>
                    <AnimationOnScroll animateIn="animate__fadeInUp">
                        <Text sx={{fontSize: ["20px","21px","22px","23px","24px"]}}>What kind of videos can I make with Aloy.ai?</Text>
                        </AnimationOnScroll>
                        <AnimationOnScroll animateIn="animate__fadeInUp">
                        <Icon
                                ml="20px"
                                mr="20px"
                                icon={faPlus}
                                size="lg"
                                color="#FF5B51"
                                sx={{ cursor: "pointer" }}
                            /></AnimationOnScroll>
                    </Flex>
                    <AnimationOnScroll animateIn="animate__fadeInUp">
                    <hr></hr></AnimationOnScroll>
                    <Flex sx={{justifyContent: "space-between"}}>
                    <AnimationOnScroll animateIn="animate__fadeInUp">
                        <Text sx={{fontSize: ["20px","21px","22px","23px","24px"]}}>What are the prices or plans I can avail?</Text>
                        </AnimationOnScroll>
                        <AnimationOnScroll animateIn="animate__fadeInUp">
                        <Icon
                                ml="20px"
                                mr="20px"
                                icon={faPlus}
                                size="lg"
                                color="#FF5B51"
                                sx={{ cursor: "pointer" }}
                            /></AnimationOnScroll>
                    </Flex>
                    <AnimationOnScroll animateIn="animate__fadeInUp"><hr></hr></AnimationOnScroll>
                    <Flex sx={{justifyContent: "space-between"}}>
                    <AnimationOnScroll animateIn="animate__fadeInUp">
                        <Text sx={{fontSize: ["20px","21px","22px","23px","24px"]}}>Are these videos true?</Text>
                        </AnimationOnScroll>
                        <AnimationOnScroll animateIn="animate__fadeInUp">
                        <Icon
                                ml="20px"
                                mr="20px"
                                icon={faPlus}
                                size="lg"
                                color="#FF5B51"
                                sx={{ cursor: "pointer" }}
                            /></AnimationOnScroll>
                    </Flex>
                    <AnimationOnScroll animateIn="animate__fadeInUp"><hr></hr></AnimationOnScroll>
                </Box>
                </AskedQuestions>
            </AnimationOnScroll>
          </CoverSection> 
        </>
    )
}