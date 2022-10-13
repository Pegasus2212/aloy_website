import React, {useState, useEffect, useRef} from "react"
import {Button,Flex, Box } from "rebass"
import styled from "@emotion/styled"
import { Text, Icon } from "../../components"
import { faCheck, faPlus, faArrowUp } from "@fortawesome/free-solid-svg-icons"
import Img1 from "../../assets/images/video-thumbnails/img1.jpg"
import Img6 from "../../assets/images/video-thumbnails/img6.png"
import Template1 from "../../assets/webAsset/Template1.jpg"
import Template2 from "../../assets/webAsset/Template2.jpg"
import Template3 from "../../assets/webAsset/Template3.jpg"
import test1 from "../../assets/webAsset/test1.jpg"
import Template4 from "../../assets/webAsset/Template4.jpg"
import Script from "../../assets/webAsset/Script.png"
import feature01 from "../../assets/webAsset/feature01.png"
import sad from "../../assets/webAsset/1.png"
import UseCaseImg2 from "../../assets/images/use-cases/img2.png"
import UseCaseImg3 from "../../assets/images/use-cases/img.jpg"
import arrowt from "../../assets/webAsset/arrowt.png"
import ListArrowIcon from "../../assets/images/list-arrow-icon.png"
import CreateVideosBanner from "../../assets/images/create-videos-today-banner.png"
import PersonalisedAvatar from "../../assets/images/personalised-avatar.png"
import Slider from 'react-carousel-responsive';
import 'react-carousel-responsive/dist/styles.css';
import { fadeIn } from 'react-animations';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import styledc, { keyframes } from "styled-components";

const CoverSection = styled(Box)`
    overflow: hidden;
    flex-direction: column;
`

const AskedQuestions = styled(Flex)`
    flex-direction: column;
`

const UseCases = styled(Box)`
margin-top : 120px;
margin-bottom : 140px;
@media only screen and (max-width: 67em) {
    display: none;
  } 
`
const UseCasesMobile = styled(Flex)`
    flex-direction: column;
    display: none;
    margin-top: 80px;
    @media only screen and (max-width: 67em) {
    display: block;
  } 
`

const CreateVideosMobile = styled(Flex)`
    flex-direction: column;
    width: 100%;
    margin-top: 50px;
    display: none;
    @media only screen and (max-width: 67em) {
    display: flex;
  } 
`
const CreateVideos = styled(Flex)`
    flex-direction: column;
    @media only screen and (max-width: 67em) {
    display: none;
  }
    `

const Carousel = styled(Flex)`
    display: none;
    // margin-top: 80px;
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
const PersonaliseAvatar = styled(Flex)`
@media only screen and (max-width: 67em) {
    display: none;
  } 
`

const Testo = styled(Box)`
margin-top: 120px;
@media only screen and (max-width: 67em) {
    display: none;
  }
`
const PersonaliseAvatarMobile = styled(Flex)`
display: none;
@media only screen and (max-width: 67em) {
    display: flex;
  } 
`

const StatsSectionMobile = styled(Flex)`
    width: 100%;
    display: none;
    margin-top: 80px;
    justify-content: center;
    @media only screen and (max-width: 67em) {
    display: flex;
  } 
`
const StatsSection = styled(Flex)`
    width: 100%;
    margin-top: 80px;
    justify-content: center;
    @media only screen and (max-width: 67em) {
    display: none;
  } 
`
const ProVideo = styled(Flex)`
margin-top: 120px;
@media only screen and (max-width: 67em) {
    display: none;
  } 
`
const ProVideoMobile = styled(Flex)`
display: none;
@media only screen and (max-width: 67em) {
    display: flex;
  } 
`

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
    width: 100%;
    margin-top: 80px;
    justify-content: space-between;
    @media only screen and (max-width: 67em) {
        display: none;
      }   
    overflow-x: visible;
    position: relative;
    animation: ${rotate} 8s linear infinite;
`;

const Scrollback = styledc(Flex)`
    width: 100%;
    justify-content: space-between;
    @media only screen and (max-width: 67em) {
        display: none;
      }   
    overflow-x: visible;
    position: relative;
    animation: ${rotateback} 8s linear infinite;
`;


export const HomeView = () => {
    const [openDrawer, toggleDrawer] = useState(false);
    const [isActive, setIsActive] = useState(false);
    

    return (
        <>
        
            <CoverSection sx={{marginX: ["40px","60px","80px","100px","120px"], marginTop: "80px"}}>
       
                <AnimationOnScroll animateIn="animate__fadeInUp">
                <Flex sx={{ justifyContent: "space-between" }}>
                    <Flex sx={{ flexDirection: "column" }}>
                        <AnimationOnScroll animateIn="animate__fadeInLeft">
                            <Text sx={{ fontSize: ["32px","36px","46px","56px","66px"], color: "#FF5B51" }}>Welcome to</Text>
                            <Text sx={{ fontSize: ["32px","36px","46px","56px","66px"], color: "#E9E8E8" }}>the Future of</Text>
                            <Text sx={{ fontSize: ["32px","36px","46px","56px","66px"], color: "#FF5B51" }}>Video Content</Text>
                        </AnimationOnScroll>
                    </Flex>
                    <Box sx={{ alignSelf: "center"}}>
                    <AnimationOnScroll animateIn="animate__fadeInRight">
                        <Flex sx={{ width: ["130px","160px","190px","220px","250px"]}}>
                            <img src={arrowt} 
                                alt="CoverLogo" 
                                width="100%"
                            />
                        </Flex>
                    </AnimationOnScroll>
                    </Box>
                </Flex>
                </AnimationOnScroll>

                <AnimationOnScroll animateIn="animate__fadeIn">
                <Scroll sx={{flexDirection: ["column","column","row", "row","row"]}}>
                    <img src={Img1} width="30%" style={{ marginBottom: "40px" }} />
                    <img src={Template1} width="30%" style={{ marginBottom: "40px" }} />
                    <img src={Template2} width="30%" style={{ marginBottom: "40px" }} />
                    <img src={Template3} width="30%" style={{ marginBottom: "40px" }} />
                </Scroll>
                <Scrollback sx={{flexDirection: ["column","column","row", "row","row"]}}>
                    <img src={Template3} width="30%" style={{ marginBottom: "40px" }} />
                    <img src={Template4} width="30%" style={{ marginBottom: "40px" }} />
                    <img src={Img6} width="30%" style={{ marginBottom: "40px" }} />
                    <img src={Img1} width="30%" style={{ marginBottom: "40px" }} />
                </Scrollback>
                </AnimationOnScroll>

                <AnimationOnScroll animateIn="animate__fadeIn">
                <Carousel sx={{mt: ["80px"]}}>
                    <Slider>
                        <div className="slide"><img src={Img1} width="100%" alt="img1"/></div>
                        <div className="slide"><img src={Template1} width="100%" alt="img1"/></div>
                        <div className="slide"><img src={Template2} width="100%" alt="img1"/></div>
                        <div className="slide"><img src={Template3} width="100%" alt="img1"/></div>
                        <div className="slide"><img src={Template4} width="100%" alt="img1"/></div>
                        <div className="slide"><img src={Img6} width="100%" alt="img1"/></div>
                    </Slider>
                </Carousel>
                </AnimationOnScroll>

                <UseCases>
                <Flex sx={{flexDirection: "row"}}>
                    <Flex sx={{width: "50%",position: "relative", bottom: "30px",  ml: "90px",mr: "60px",flexDirection: "column"}}>
                        <Flex sx={{flexDirection: "column"}}>
                        <AnimationOnScroll animateIn="animate__fadeInLeft">
                            <Text sx={{ pb: "70px",textAlign: ["center","center","center","left", "left"],fontSize: ["16px","18px","24px","50px","66px"], fontFamily: "Baloo Da 2", color: "#FF5B51" }}>Our<span style={{ color: "#E9E8E8" }}> Use Cases</span></Text>
                            </AnimationOnScroll>
                            <AnimationOnScroll animateIn="animate__fadeInUp">
                                <Flex sx={{width:"80%", mb: "8px",justifyContent: "space-between"}}>
                                    <Text>Corporate Communication</Text>
                                    <Icon sx={{ml: "15px", transform: "rotate(45deg)"}} icon={faArrowUp} size={15} color= "#FF5851" />
                                </Flex>
                            
                                <img src={Template3} width="80%"/></AnimationOnScroll>
                                </Flex>
                                
                        <Flex sx={{mt: "20px",flexDirection: "column"}}>
                        <AnimationOnScroll animateIn="animate__fadeInUp">
                            <Flex sx={{width:"80%",mb: "8px",justifyContent: "space-between"}}>
                                <Text>Explainers & Presentations</Text>
                                <Icon sx={{ml: "15px", transform: "rotate(45deg)"}} icon={faArrowUp} size={15} color= "#FF5851" />
                            </Flex>
                            <img src={Template1} width="80%"/></AnimationOnScroll>
                        </Flex>
                    </Flex>
                    <Flex sx={{width: "50% ",position: "relative", top: "30px",flexDirection: "column"}}>
                        <Flex sx={{flexDirection: "column"}}>
                        <AnimationOnScroll animateIn="animate__fadeInRight">
                            <Text sx={{mb: "70px",width: "80%", fontSize: ["13px","13px","14px","16px","18px"], textAlign: ["center","center","center","right","right"], color: "#FF5B51", fontFamily: "Baloo Da 2" }}>With Aloy.ai, you can humanize your entire customer journey by adding a personal touch to it without having to sit in front of a camera and record every single video!</Text>
                            </AnimationOnScroll>
                            <AnimationOnScroll animateIn="animate__fadeInUp">
                            <Flex sx={{width:"80%",mb: "8px",justifyContent: "space-between"}}>
                                <Text>Tutorials & Developement</Text>
                                <Icon sx={{ml: "15px", transform: "rotate(45deg)"}} icon={faArrowUp} size={15} color= "#FF5851" />
                            </Flex>
                            <img src={UseCaseImg2} width="80%" /></AnimationOnScroll>
                        </Flex>
                        
                        <Flex sx={{mt: "20px",flexDirection: "column"}}>
                        <AnimationOnScroll animateIn="animate__fadeInUp">
                            <Flex sx={{width:"80%",mb: "8px",justifyContent: "space-between"}}>
                                <Text>Marketing & Personal Messages</Text>
                                <Icon sx={{ml: "15px", transform: "rotate(45deg)"}} icon={faArrowUp} size={15} color= "#FF5851" />
                            </Flex>
                            <img src={UseCaseImg3} width="80%" /></AnimationOnScroll>
                        </Flex>
                    </Flex>
                </Flex>
                </UseCases>

                <AnimationOnScroll animateIn="animate__fadeIn">
                <UseCasesMobile>
                <Text sx={{ 
                    textAlign: "center",
                    fontSize: ["32px","36px","46px"], 
                    fontFamily: "Baloo Da 2", 
                    color: "#FF5B51" 
                    }}>Our<span style={{ color: "#E9E8E8" }}> Use Cases</span>
                </Text>
                <Flex sx={{mt: "30px", width: "100%", justifyContent: "right" }}>
                    <Text sx={{
                        fontSize: ["14px","16px","18px"], 
                        textAlign: "center", 
                        width: "100%", 
                        color: "#FF5B51", 
                        fontFamily: "Baloo Da 2" 
                        }}>With Aloy.ai, you can humanize your entire customer journey by adding a personal touch to it without having to sit in front of a camera and record every single video!
                    </Text>
                </Flex>
                <Flex sx={{ flexDirection: "row", mt: "50px", flexWrap: "wrap", width: "100%", justifyContent: "center" }}>
                    <Flex sx={{flexDirection: "column"}}>
                        <Flex sx={{ mb: "10px", flexDirection: "row", width: "100%"}}>
                            <Text sx={{ 
                                fontSize: ["18px","22px","24px"], 
                                width: "60%" }}>Corporate Communication</Text>
                            <Text sx={{
                                fontSize: ["18px","22px","24px"],  
                                margin: "0 auto", 
                                color: "#FF5B51" }}>20+</Text>
                            <Icon sx={{transform: "rotate(45deg)", transformOrigin: "0% 40%"}} icon={faArrowUp} size={30} color= "#FF5B51" />
                        </Flex>
                        <img src={Template3} width="100%" style={{ marginBottom: "40px" }} />
                    </Flex>
                    <Flex sx={{mt: "10px", flexDirection: "column"}}>
                        <Flex sx={{ mb: "10px",flexDirection: "row", width: "100%"}}>
                            <Text sx={{ 
                                fontSize: ["18px","22px","24px"],  
                                width: "60%" }}>Tutorials & Development</Text>
                            <Text sx={{
                                fontSize: ["18px","22px","24px"], 
                                margin: "0 auto", 
                                color: "#FF5B51" }}>20+</Text>
                            <Icon sx={{transform: "rotate(45deg)", transformOrigin: "0% 40%"}} icon={faArrowUp} size={30} color= "#FF5B51" />
                        </Flex>
                        <img src={UseCaseImg2} width="100%" style={{ marginBottom: "40px" }} />
                    </Flex>
                    <Flex sx={{mt:"10px", flexDirection: "column"}}>
                        <Flex sx={{ mb: "10px",flexDirection: "row", width: "100%"}}>
                            <Text sx={{ 
                                fontSize: ["18px","22px","24px"], 
                                width: "60%" }}>Explainers & Presentations</Text>
                            <Text sx={{
                                fontSize: ["18px","22px","24px"], 
                                margin: "0 auto", 
                                color: "#FF5B51" }}>20+</Text>
                            <Icon sx={{transform: "rotate(45deg)", transformOrigin: "0% 40%"}} icon={faArrowUp} size={30} color= "#FF5B51" />
                        </Flex>
                        <img src={Template1} width="100%" style={{ marginBottom: "40px" }} />
                    </Flex>
                    <Flex sx={{mt:"10px", flexDirection: "column"}}>
                        <Flex sx={{ mb: "10px",flexDirection: "row", width: "100%"}}>
                            <Text sx={{ 
                                fontSize: ["18px","22px","24px"], 
                                width: "60%" }}>Marketing & Personal Messages</Text>
                            <Text sx={{
                                fontSize: ["18px","22px","24px"], 
                                margin: "0 auto", 
                                color: "#FF5B51" }}>20+</Text>
                            <Icon sx={{transform: "rotate(45deg)", transformOrigin: "0% 40%"}} icon={faArrowUp} size={30} color= "#FF5B51" />
                        </Flex>
                        <img src={UseCaseImg3} width="100%" style={{ marginBottom: "40px" }} />
                    </Flex>
                </Flex>
                </UseCasesMobile>
                </AnimationOnScroll>

            
                <CreateVideos>
            <AnimationOnScroll animateIn="animate__fadeIn">
                <Text sx={{fontSize: ["24px","50px","66px"],textAlign: "center", color: "#E9E8E8"}}>Creating Videos <span style={{color: "#FF5B51"}}>on Aloy</span></Text>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__fadeIn">
                <Text sx={{textAlign: "center", color: "#FF5B51"}}>For beginners and pros alike - it's never been easier to create professional <br></br>videos, Point, click, create. Edit anytime.</Text>
                </AnimationOnScroll>
                
                <Flex sx={{ flexDirection: "row", my: "80px", textAlign: "left" }}>
                
                    <Flex sx={{margin: "auto", flexDirection: "column", width: "50%" }}>
                        <Flex sx={{ flexDirection: "row", alignItems: "center" }}>
                        <AnimationOnScroll animateIn="animate__fadeInLeft">
                            <img src={ListArrowIcon} width="34px" height="27px" /></AnimationOnScroll>
                            <AnimationOnScroll animateIn="animate__fadeInLeft">
                            <Text sx={{ fontSize: "24px", color: "#E9E8E8" }}>Choose a Template</Text>
                            </AnimationOnScroll>
                        </Flex>
                        <Box sx={{ ml: "35px", color: "#FF5B51" }}>
                        <AnimationOnScroll animateIn="animate__fadeInLeft">
                            <Text sx={{ fontSize: "18px" }}>Choose from 25+ templates and start creating<br></br>videos instantly.</Text>
                            </AnimationOnScroll>
                        </Box>
                        <Flex sx={{ flexDirection: "row", alignItems: "center", mt: "20px" }}>
                        <AnimationOnScroll animateIn="animate__fadeInLeft">
                            <img src={ListArrowIcon} width="34px" height="27px" /></AnimationOnScroll>
                            <AnimationOnScroll animateIn="animate__fadeInLeft">
                            <Text sx={{ fontSize: "24px", color: "#FF5B51" }}>Select an avatar</Text>
                            </AnimationOnScroll>
                        </Flex>
                        <Flex sx={{ flexDirection: "row", alignItems: "center", mt: "20px" }}>
                        <AnimationOnScroll animateIn="animate__fadeInLeft">
                            <img src={ListArrowIcon} width="34px" height="27px" /></AnimationOnScroll>
                            <AnimationOnScroll animateIn="animate__fadeInLeft">
                            <Text sx={{ fontSize: "24px", color: "#FF5B51" }}>Type in text</Text>
                            </AnimationOnScroll>
                        </Flex>
                        <Flex sx={{ flexDirection: "row", alignItems: "center", mt: "20px" }}>
                        <AnimationOnScroll animateIn="animate__fadeInLeft">
                            <img src={ListArrowIcon} width="34px" height="27px" /></AnimationOnScroll>
                            <AnimationOnScroll animateIn="animate__fadeInLeft">
                            <Text sx={{ fontSize: "24px", color: "#FF5B51" }}>Generate Video</Text>
                            </AnimationOnScroll>
                        </Flex>
                    </Flex>
                    {/* </AnimationOnScroll> */}
                    {/* <AnimationOnScroll animateIn="animate__fadeIn"> */}
                    <Box sx={{ width: "50%" }}>
                    <AnimationOnScroll animateIn="animate__fadeInRight">
                        <img src={Script} width="100%" /></AnimationOnScroll>
                    </Box>
                    {/* </AnimationOnScroll> */}
                </Flex>
                </CreateVideos>

                <AnimationOnScroll animateIn="animate__fadeIn">
            <CreateVideosMobile>
            
                <Box sx={{ width: "100%", textAlign: "center" }}>
                    <Text sx={{ fontSize: ["32px","36px","46px"]}}>Creating videos <span style={{ color: "#FF5B51" }}>on Aloy</span></Text>
                </Box>
                <Box sx={{ mt: "30px",width: "100%", textAlign: "center" }}>
                    <Text sx={{ fontSize: ["14px","16px","18px"], color: "#FF5B51", font: "normal normal medium 18px/24px Baloo Da 2" }}>For beginners and pros alike — it's never been easier to create professional videos. Point, click, create. Edit anytime.</Text>
                </Box>
                <Flex sx={{mt: "40px", justifyContent: "space-between"}}>
                    <Buttonz sx={{fontSize: ["14px","16px","18px"] }} onClick={() =>{ 
                toggleDrawer(current => !current);
                setIsActive(current => !current);
              } }>Choose a Template</Buttonz>
              
                    <Buttonz sx={{fontSize: ["14px","16px","18px"] }} onClick={() =>{ 
                toggleDrawer(current => !current);
                setIsActive(current => !current);
              } }>Select an Avatar</Buttonz>
                </Flex>
                
                <Flex paddingTop={isActive ? { _: '140px', sm: '140px', md: '150px', lg: '220px', xl: '220px' } : { _: '2px', sm: '4px', md: '6px', lg: '8px', xl: '10px' }} sx={{ transition: "all 0.29s ease" ,mt: "20px", mb: "40px", justifyContent: "space-between"}}>
                    <Buttonz sx={{fontSize: ["14px","16px","18px"] }} onClick={() =>{ 
                toggleDrawer(current => !current);
                setIsActive(current => !current);
              } }>Type in Text</Buttonz>
                    <Buttonz sx={{fontSize: ["14px","16px","18px"] }} onClick={() =>{ 
                toggleDrawer(current => !current);
                setIsActive(current => !current);
              } }>Generate Video</Buttonz>
                </Flex>
                <img src={Script}/>
                
            </CreateVideosMobile>
                </AnimationOnScroll>

                <AnimationOnScroll animateIn="animate__fadeIn">
            <StatsSectionMobile>
            <Flex sx={{ flexDirection: "column", textAlign: "center" }}>
                    <Flex sx={{justifyContent: "center"}}>
                        <Text sx={{ 
                            fontSize: ["32px","36px","46px"],
                            color: "#E9E8E8", 
                            textAlign: "center" }}>
                                <span style={{ color: "#FF5B51" }}>Start 
                                </span> Creating <span style={{ color: "#FF5B51" }}>videos
                                </span>
                        </Text>
                        {/* <Icon sx={{transform: "rotate(45deg)", transformOrigin: "60% 40%"}} icon={faArrowUp} size={30} color= "#FF5B51" /> */}
                    </Flex>
                    <Flex sx={{ mt:"30px",flexDirection: "row", justifyContent: "space-between" }}>
                        <Box sx={{ mx: "20px", textAlign: "center" }}>
                            <Text sx={{ fontSize: ["14px","16px","18px"], color: "#FF5B51" }}>Thousands of companies use Aloy.ai to create training, how-to, or product explainer videos.</Text>
                        </Box>
                    </Flex>
                    <Flex sx={{mt: "30px" ,textAlign: "left", justifyContent: "space-between"}}>
                    <Box>
                        <Text sx={{ fontSize: ["40px","45px","50px"], color: "#E9E8E8" }}>100+</Text>
                        <Text sx={{ fontSize: ["14px","16px","18px"], color: "#FF5B51" }}>Templates</Text>
                    </Box>
                    <Box>
                        <Text sx={{ fontSize: ["40px","45px","50px"], color: "#E9E8E8" }}>60+</Text>
                        <Text sx={{ fontSize: ["14px","16px","18px"], color: "#FF5B51" }}>Languages</Text>
                    </Box>
                    <Box>
                        <Text sx={{ fontSize: ["40px","45px","50px"], color: "#E9E8E8" }}>40+</Text>
                        <Text sx={{ fontSize: ["14px","16px","18px"], color: "#FF5B51" }}>Avatars</Text>
                    </Box>
                    </Flex>
                    <Box sx={{ my: "30px" }}>
                        <img src={CreateVideosBanner} width="100%" />
                    </Box>
            </Flex>
            </StatsSectionMobile> 
                </AnimationOnScroll> 
        
                <StatsSection>
                <Flex sx={{ flexDirection: "column", width: "20%" }}>
                    <Flex sx={{ flexDirection: "column", mb: "40px" }}>
                    <AnimationOnScroll animateIn="animate__fadeInLeft"> 
                        <Text sx={{ fontSize: "66px", color: "#E9E8E8" }}>100+</Text>
                        </AnimationOnScroll>
                        <AnimationOnScroll animateIn="animate__fadeInUp">
                        <Text sx={{ fontSize: "18px", color: "#FF5B51" }}>Templates</Text>
                        </AnimationOnScroll>
                    </Flex>
                    <Flex sx={{ flexDirection: "column", mb: "40px" }}>
                    <AnimationOnScroll animateIn="animate__fadeInLeft"> 
                        <Text sx={{ fontSize: "66px", color: "#E9E8E8" }}>60+</Text>
                        </AnimationOnScroll>
                        <AnimationOnScroll animateIn="animate__fadeInUp">
                        <Text sx={{ fontSize: "18px", color: "#FF5B51" }}>Languages</Text>
                        </AnimationOnScroll>
                    </Flex>
                    <Flex sx={{ flexDirection: "column", mb: "40px" }}>
                    <AnimationOnScroll animateIn="animate__fadeInLeft">
                        <Text sx={{ fontSize: "66px", color: "#E9E8E8" }}>40+</Text>
                        </AnimationOnScroll>
                        <AnimationOnScroll animateIn="animate__fadeInUp">
                        <Text sx={{ fontSize: "18px", color: "#FF5B51" }}>Avatars</Text>
                        </AnimationOnScroll>
                    </Flex>
                    <Flex sx={{ flexDirection: "column", mb: "40px" }}>
                    <AnimationOnScroll animateIn="animate__fadeInLeft">
                        <Text sx={{ fontSize: "18px", color: "#FF5B51" }}>+ much more...</Text>
                        </AnimationOnScroll>
                    </Flex>
                </Flex>
                <Flex sx={{ flexDirection: "column", width: "80%", textAlign: "center" }}>
                    <Box sx={{ width: "100%" }}>
                    <AnimationOnScroll animateIn="animate__fadeInRight">
                        <Text sx={{ fontSize: "50px", color: "#E9E8E8" }}>Start Creating <span style={{ color: "#FF5B51" }}>videos today</span></Text>
                        </AnimationOnScroll>
                    </Box>
                    <AnimationOnScroll animateIn="animate__fadeInRight">
                    <Flex sx={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Box sx={{ mx: "20px", textAlign: "left" }}>
                            <Text sx={{ fontSize: "18px", color: "#FF5B51" }}>Thousands of companies use Aloy to create training, how- to, or product explainer videos.</Text>
                        </Box>
                        <hr />
                        <Box sx={{ mx: "20px", textAlign: "left" }}>
                            <Text sx={{ fontSize: "18px", color: "#FF5B51" }}>People retain 90% of a message when they watch a video compared.</Text>
                        </Box>
                    </Flex>
                    </AnimationOnScroll>
                    <Box sx={{ my: "30px" }}>
                    <AnimationOnScroll animateIn="animate__fadeInRight">
                        <img src={CreateVideosBanner} width="100%" />
                        </AnimationOnScroll>
                    </Box>
                </Flex> 
                </StatsSection>

                <AnimationOnScroll animateIn="animate__fadeIn">        
            <PersonaliseAvatar>
                <Flex sx={{ flexDirection: ["column", "row"], width: "100%", mt: "80px", justifyContent: "space-between" }}>
                <Flex sx={{ flexDirection: "column", width: "30%" }}>
                    <Box>
                    <AnimationOnScroll animateIn="animate__fadeInLeft">
                        <Text sx={{ fontSize: ["30px","40px","43px","46px","50px"], color: "#FF5B51" }}>Personalised <span style={{ color: "#E9E8E8" }}>Celebrity</span> & <span style={{ color: "#E9E8E8" }}>NFT Avatars</span></Text>
                        </AnimationOnScroll>
                    </Box>
                    <AnimationOnScroll animateIn="animate__fadeInLeft">
                    <Flex sx={{ flexDirection: "row", width: "100%", mt: "80px" }}>
                    
                        <Text sx={{ fontSize: "24px", width: "80%", color: "#FF5B51" }}>Buy or Integrate <span style={{ color: "#E9E8E8" }}>NFT avatars</span> & create videos</Text>
                        
                        <Flex sx={{ flexDirection: "column", justifyContent: "right", width: "20%" }}>
                            <Box sx={{ alignSelf: "flex-end" }}><Icon sx={{ml: "15px", transform: "rotate(45deg)"}} icon={faArrowUp} size={15} color= "#FF5851" /></Box>
                        </Flex>
                        
                    </Flex>
                    </AnimationOnScroll>
                    <Box sx={{ mt: "15px"}}>
                    <AnimationOnScroll animateIn="animate__fadeInUp">
                        <img src={PersonalisedAvatar} width="100%" />
                        </AnimationOnScroll>
                    </Box>
                </Flex>
                <Flex sx={{ flexDirection: "column", width: "60%" }}>
                <AnimationOnScroll animateIn="animate__fadeInLeft">
                    <Flex sx={{ flexDirection: "row", width: "100%", textAlign: "left" }}>
                        <Text sx={{ fontSize: "24px", width: "80%", color: "#FF5B51" }}><span style={{ color: "#E9E8E8" }}>David Beckham</span> <br/> speak 9 languages</Text>
                        <Flex sx={{ flexDirection: "column", justifyContent: "right", width: "20%" }}>
                            <Box sx={{ alignSelf: "flex-end" }}><Icon sx={{ml: "15px", transform: "rotate(45deg)"}} icon={faArrowUp} size={15} color= "#FF5851" /></Box>
                        </Flex>
                    </Flex>
                    </AnimationOnScroll>
                    <Box sx={{ width: "100%"}}>
                    <AnimationOnScroll animateIn="animate__fadeInUp">
                        <img src={Img1} width="100%" style={{ marginBottom: "40px" }} />
                        </AnimationOnScroll>
                    </Box>
                    <Flex sx={{ flexDirection: "row", mt: "40px", width: "100%" }}>
                    
                        <Flex sx={{ flexDirection: "column", width: "50%" }}>
                        <AnimationOnScroll animateIn="animate__fadeInUp">
                            <Text sx={{ fontSize: "66px", color: "#E9E8E8" }}>20+</Text>
                            <Text sx={{ fontSize: "18px", color: "#FF5B51" }}>Ready to use Celebrity Campaigns</Text>
                            </AnimationOnScroll>
                        </Flex>
                        <Flex sx={{ flexDirection: "column", width: "50%" }}>
                        <AnimationOnScroll animateIn="animate__fadeInUp">
                            <Text sx={{ fontSize: "66px", color: "#E9E8E8" }}>60+</Text>
                            <Text sx={{ fontSize: "18px", color: "#FF5B51" }}>NFT Avatars & Unlimited Integration</Text>
                            </AnimationOnScroll>
                        </Flex>
                        
                    </Flex>
                </Flex>
            </Flex>
            </PersonaliseAvatar>
                </AnimationOnScroll>    

                <AnimationOnScroll animateIn="animate__fadeIn">          
            <PersonaliseAvatarMobile>
            <Flex sx={{ flexDirection: ["column"], width: "100%", mt: "50px", justifyContent: "space-between" }}>
                <Flex sx={{ flexDirection: "column", textAlign: "center"}}>
                    <Box sx={{mb: "50px"}}>
                        <Text sx={{ 
                            fontSize: ["32px","36px","46px"], 
                            color: "#FF5B51" }}>Personalised <span style={{ color: "#E9E8E8" }}>Celebrity</span> & <span style={{ color: "#E9E8E8" }}>NFT Avatars</span></Text>
                    </Box>
                    <Flex sx={{mb: "10px", flexDirection: "row", width: "100%", textAlign: "left", justifyContent: "space-between" }}>
                        <Text sx={{ fontSize: ["18px","22px","24px"],  color: "#FF5B51" }}><span style={{ color: "#E9E8E8" }}>David Beckham</span> <br/> speak 9 languages</Text>
                        <Icon sx={{transform: "rotate(45deg)", transformOrigin: "30% 40%"}} icon={faArrowUp} size={30} color= "#FF5B51" /> 
                    </Flex>
                    <Box sx={{ width: "100%"}}>
                        <img src={Img1} width="100%" style={{ marginBottom: "40px" }} />
                    </Box>
                    <Flex sx={{ flexDirection: "row",  textAlign: "left", justifyContent: "space-between" }}>
                        <Text sx={{ width: ["60%","70%","80%"],fontSize: ["18px","22px","24px"],   color: "#FF5B51" }}>Buy or Integrate<span style={{ color: "#E9E8E8" }}> NFT avatars </span> & create videos</Text>
                        <Icon sx={{transform: "rotate(45deg)", transformOrigin: "30% 40%"}} icon={faArrowUp} size={30} color= "#FF5B51" /> 
                    </Flex>
                    <Box sx={{ mt: "10px",width: "100%"}}>
                        <img src={sad} width="100%" style={{ marginBottom: "20px" }} />
                    </Box>
                </Flex>
                <Flex sx={{px: "20px", mt: "20px" ,textAlign: "left", justifyContent: "space-between"}}>
                    <Box>
                        <Text sx={{ fontSize: ["40px","45px","50px"], color: "#E9E8E8" }}>20+</Text>
                        <Text sx={{ fontSize: ["14px","16px","18px"], color: "#FF5B51" }}>Ready to use <br/>Celebrity Campaigns</Text>
                    </Box>
                    <Box>
                        <Text sx={{ fontSize: ["40px","45px","50px"], color: "#E9E8E8" }}>60+</Text>
                        <Text sx={{ fontSize: ["14px","16px","18px"], color: "#FF5B51" }}>NFT Avatars & <br/>unlimited Integration</Text>
                    </Box>
                </Flex>
            </Flex>
            </PersonaliseAvatarMobile>
                </AnimationOnScroll>


                <ProVideoMobile>
            <Flex sx={{mt: "80px",  flexDirection: "column"}}>
                <Box sx={{mb: "20px",textAlign: "center"}}>
                    <Text sx={{ fontSize: ["32px","36px","46px"], color: "#FF5B51" }}>Make a <span style={{ color: "#E9E8E8" }}>Professional <br></br>Video </span>in minutes</Text>
                </Box>
                <Box sx={{margin: "0 auto",mb: "30px",textAlign: "left"}}>
                    <Flex><Icon size={15}
                                ml="20px"
                                mr="10px"
                                icon={faCheck}
                                sx={{ cursor: "pointer" }}
                            />
                            <Text sx={{mb:"15px", color: "#FF5B51", fontSize: ["14px","16px","18px"] }}>Simple web-based application for beginers</Text></Flex>
                    <Flex><Icon size={15}
                                ml="20px"
                                mr="10px"
                                icon={faCheck}
                                sx={{ cursor: "pointer" }}
                            /><Text sx={{mb:"15px", color: "#FF5B51", fontSize: ["14px","16px","18px"] }}>Average time to produce a video: 5mins</Text></Flex>
                    <Flex><Icon size={15}
                                ml="20px"
                                mr="10px"
                                icon={faCheck}
                                sx={{ cursor: "pointer" }}
                            /><Text sx={{ color: "#FF5B51", fontSize: ["14px","16px","18px"] }}>Affordable video production at £29/month</Text></Flex> 
                </Box>
                <img src={feature01} width="100%" />
            </Flex>
                </ProVideoMobile>

                <AnimationOnScroll animateIn="animate__fadeIn">    
            <ProVideo>
            <Flex sx={{ flexDirection: "row", mt: "80px", justifyContent: "space-evenly" }}>
                <Box sx={{ pr: "50px",width: "50%" }}>
                <AnimationOnScroll animateIn="animate__fadeInLeft">
                <img src={feature01} width="100%" /></AnimationOnScroll>
                </Box>
                <Flex sx={{ width: "50%", flexDirection: "column" }}>
                <AnimationOnScroll animateIn="animate__fadeInRight">
                    <Text sx={{ fontSize: ["30px","40px","43px","46px","50px"], color: "#FF5B51" }}>Make a <span style={{ color: "#E9E8E8" }}>Professional Video </span>in minutes</Text>
                    </AnimationOnScroll>
                    <Flex sx={{ flexDirection: "row", mt: "30px" }}>
                        <Box>
                            <Icon
                                ml="20px"
                                mr="20px"
                                icon={faCheck}
                                sx={{ cursor: "pointer" }}
                            />
                        </Box>
                        <Box>
                            <Text sx={{ color: "#FF5B51", fontSize: "18px" }}>Simple web-based application for beginers</Text>
                        </Box>
                    </Flex>
                    <Flex sx={{ flexDirection: "row", mt: "10px" }}>
                        <Box>
                            <Icon
                                ml="20px"
                                mr="20px"
                                icon={faCheck}
                                sx={{ cursor: "pointer" }}
                            />
                        </Box>
                        <Box>
                            <Text sx={{ color: "#FF5B51", fontSize: "18px" }}>Average time to produce a video: 5 mins</Text>
                        </Box>
                    </Flex>
                    <Flex sx={{ flexDirection: "row", mt: "10px" }}>
                        <Box>
                            <Icon
                                ml="20px"
                                mr="20px"
                                icon={faCheck}
                                sx={{ cursor: "pointer" }}
                            />
                        </Box>
                        <Box>
                            <Text sx={{ color: "#FF5B51", fontSize: "18px" }}>Affordable video production at £29/month</Text>
                        </Box>
                    </Flex>
                </Flex>
            </Flex>
            </ProVideo>
                </AnimationOnScroll>   

                    {/* Client Testimonials section */}
                <AnimationOnScroll animateIn="animate__fadeInUp"> 
            <Testo>  
            <Slider>    
            <Flex sx={{margin: "auto", flexDirection: "row"}}>
                <Flex sx={{px: "40px"}}>
                    <img  src={test1} width="200px" height="300px"/>
                    <Flex sx={{px: "30px",flexDirection: "column"}}>
                        <Text sx={{fontSize: "70px"}}>"</Text>
                        <Text sx={{position: "relative", bottom: "50px", fontSize: ["18px","19px","20px","21px","22px"], color: "#FF5B51"}}>Our +380,000 employees, no matter in which country, must have the same skills profile. Aloy STUDIO helps us create training videos in 16 languages, fast.</Text>
                        <Text sx={{position: "relative", bottom: "50px",fontSize: ["50px","55px","60px","65px","70px"], alignSelf: "end"}}>"</Text>
                        <Text sx={{position: "relative", bottom: "120px", fontSize: ["14px","15px","16px","17px","18px"]}}>Sarak Kirby, Global SVP Learning and Developement</Text>
                    </Flex>
                </Flex>
            </Flex>        
            <Flex sx={{margin: "auto", flexDirection: "row"}}>
                <Flex sx={{px: "40px"}}>
                    <img  src={test1} width="200px" height="300px"/>
                    <Flex sx={{px: "30px",flexDirection: "column"}}>
                        <Text sx={{fontSize: "70px"}}>"</Text>
                        <Text sx={{position: "relative", bottom: "50px", fontSize: "22px", color: "#FF5B51"}}>Our +380,000 employees, no matter in which country, must have the same skills profile. Aloy STUDIO helps us create training videos in 16 languages, fast.</Text>
                        <Text sx={{position: "relative", bottom: "50px",fontSize: "70px", alignSelf: "end"}}>"</Text>
                        <Text sx={{position: "relative", bottom: "120px"}}>Sarak Kirby, Global SVP Learning and Developement</Text>
                    </Flex>
                </Flex>
            </Flex>
            <Flex sx={{margin: "auto", flexDirection: "row"}}>
                <Flex sx={{px: "40px"}}>
                    <img  src={test1} width="200px" height="300px"/>
                    <Flex sx={{px: "30px",flexDirection: "column"}}>
                        <Text sx={{fontSize: "70px"}}>"</Text>
                        <Text sx={{position: "relative", bottom: "50px", fontSize: "22px", color: "#FF5B51"}}>Our +380,000 employees, no matter in which country, must have the same skills profile. Aloy STUDIO helps us create training videos in 16 languages, fast.</Text>
                        <Text sx={{position: "relative", bottom: "50px",fontSize: "70px", alignSelf: "end"}}>"</Text>
                        <Text sx={{position: "relative", bottom: "120px"}}>Sarak Kirby, Global SVP Learning and Developement</Text>
                    </Flex>
                </Flex>
            </Flex>
            <Flex sx={{margin: "auto", flexDirection: "row"}}>
                <Flex sx={{px: "40px"}}>
                    <img  src={test1} width="200px" height="300px"/>
                    <Flex sx={{px: "30px",flexDirection: "column"}}>
                        <Text sx={{fontSize: "70px"}}>"</Text>
                        <Text sx={{position: "relative", bottom: "50px", fontSize: "22px", color: "#FF5B51"}}>Our +380,000 employees, no matter in which country, must have the same skills profile. Aloy STUDIO helps us create training videos in 16 languages, fast.</Text>
                        <Text sx={{position: "relative", bottom: "50px",fontSize: "70px", alignSelf: "end"}}>"</Text>
                        <Text sx={{position: "relative", bottom: "120px"}}>Sarak Kirby, Global SVP Learning and Developement</Text>
                    </Flex>
                </Flex>
            </Flex>
            </Slider>
            </Testo>
                </AnimationOnScroll>    

                <AnimationOnScroll animateIn="animate__fadeIn">         
            <AskedQuestions sx={{my: "80px"}}>
            <Text sx={{pb: ["20px","30px","40px","50px","60px"],textAlign: "center", fontSize: ["32px","36px","46px","56px","66px"], color: "#FF5B51" }}>Frequently Asked <span style={{ color: "#E9E8E8" }}>Questions</span></Text>
                <Box>
                <AnimationOnScroll animateIn="animate__fadeInUp">
                    <hr></hr>
                    </AnimationOnScroll>
                    <Flex sx={{justifyContent: "space-between"}}>
                    <AnimationOnScroll animateIn="animate__fadeInUp">
                        <Text sx={{fontSize: ["16px","18px","20px","22px","24px"]}}>What kind of videos can I make with Aloy.ai?</Text>
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
                        <Text sx={{fontSize: ["16px","18px","20px","22px","24px"]}}>What are the prices or plans I can avail?</Text>
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
                        <Text sx={{fontSize: ["16px","18px","20px","22px","24px"]}}>Are these videos true?</Text>
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

