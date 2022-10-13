import React from "react"
import { Flex, Box, Button } from "rebass"
import styled from "@emotion/styled"
import { Text, Icon } from "../../components"
import { faCheck,faArrowUp, faPlus } from "@fortawesome/free-solid-svg-icons"

import feature01 from "../../assets/webAsset/feature01.png"
import featureface1 from "../../assets/webAsset/featureface1.jpg"
import featureface2 from "../../assets/webAsset/featureface2.jpg"
import featureface3 from "../../assets/webAsset/featureface3.jpg"
import featureface4 from "../../assets/webAsset/featureface4.jpg"
import arrowt from "../../assets/webAsset/arrowt.png"
import mark from "../../assets/webAsset/Mark.png"
import jane from "../../assets/webAsset/jane.png"
import cathorine from "../../assets/webAsset/cathrine.png"
import michel from "../../assets/webAsset/michel.png"
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

export const FeaturesView = () => {
    return (
        <>
           <CoverSection sx={{marginX: ["40px","50px","60px","70px","80px"], marginY: "80px"}}>
            <Box sx={{ width: "100%", textAlign: "center" }}>
              <Flex sx={{ flexDirection: "column" }}>
              <AnimationOnScroll animateIn="animate__zoomIn">
                <Text sx={{ fontSize: ["35px","40px","43px","46px","50px"], color: "#FF5B51" }}>An <span style={{color: "#E9E8E8"}}>all-in-one</span> video</Text>
                <Text sx={{ fontSize: ["35px","40px","43px","46px","50px"], color: "#FF5B51" }}>production tool</Text>
                </AnimationOnScroll>
              </Flex>
            </Box>

            <StatsSection sx={{mt: ["50px","50px","60px","70px","80px"]}}>
            <AnimationOnScroll animateIn="animate__zoomInUp">
                <img src={feature01} style={{width:["100%"], marginBottom: "40px" }} /></AnimationOnScroll>
            </StatsSection>

            <Box sx={{ width: "100%", color: "#FF5B51", textAlign: "center" }}><AnimationOnScroll animateIn="animate__zoomIn">
                <Text sx={{ fontSize: ["35px","40px","43px","46px","50px"] }}>Create <span style={{ color: "#E9E8E8" }}>studio-quality</span> Al videos</Text>
                </AnimationOnScroll>
            </Box>

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
                <AnimationOnScroll animateIn="animate__fadeInDown">
                    <Text sx={{fontSize: "70px", color: "#E9E8E8"}}>60+</Text></AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeInUp">
                    <Text sx={{color: "#FF5851"}}>Languages to<br></br> choose from</Text></AnimationOnScroll>
                </Flex>
                <Flex sx={{flexDirection: "column"}}>
                <AnimationOnScroll animateIn="animate__fadeInRight">
                    <Text sx={{fontSize: "70px", color: "#E9E8E8"}}>20+</Text></AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeInUp">
                    <Text sx={{color: "#FF5851"}}>Ready to use<br></br> Celebrity Videos</Text></AnimationOnScroll>
                </Flex>
                <Flex sx={{flexDirection: "column"}}>
                <AnimationOnScroll animateIn="animate__fadeInRight">
                    <Text sx={{fontSize: "70px", color: "#E9E8E8"}}>40+</Text></AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeInUp">
                    <Text sx={{color: "#FF5851"}}>AI Avatars to act<br></br> as presenters</Text></AnimationOnScroll>
                </Flex>
                
                
                
            </StudioQuality>

            <AnimationOnScroll animateIn="animate__zoomIn">
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
                
                
                </StudioQualityMobile>
            </AnimationOnScroll>
            
            <OwnAvatar>
                <Box sx={{pr: "150px", width: "80%"}}>
                <AnimationOnScroll animateIn="animate__zoomIn">
                <Flex sx={{flexDirection: "row"}}>
                    <Flex sx={{position: "relative", bottom: "30px", mr: "60px",flexDirection: "column"}}>
                        <Flex sx={{ flexDirection: "column"}}>
                            <Flex sx={{mb: "8px",justifyContent: "space-between"}}>
                                <Text>Michel</Text>
                                <Icon sx={{ml: "15px", transform: "rotate(45deg)"}} icon={faArrowUp} size={15} color= "#FF5851" />
                            </Flex>
                            <img src={michel}  />
                        </Flex>
                        <Flex sx={{mt: "20px",flexDirection: "column"}}>
                            <Flex sx={{mb: "8px",justifyContent: "space-between"}}>
                                <Text>Cathorine</Text>
                                <Icon sx={{ml: "15px", transform: "rotate(45deg)"}} icon={faArrowUp} size={15} color= "#FF5851" />
                            </Flex>
                            <img src={cathorine} />
                        </Flex>
                    </Flex>
                    <Flex sx={{position: "relative", top: "30px",flexDirection: "column"}}>
                        <Flex sx={{flexDirection: "column"}}>
                            <Flex sx={{mb: "8px",justifyContent: "space-between"}}>
                                <Text>Mark</Text>
                                <Icon sx={{ml: "15px", transform: "rotate(45deg)"}} icon={faArrowUp} size={15} color= "#FF5851" />
                            </Flex>
                            <img src={mark} />
                        </Flex>
                        <Flex sx={{mt: "20px",flexDirection: "column"}}>
                            <Flex sx={{mb: "8px",justifyContent: "space-between"}}>
                                <Text>Jane</Text>
                                <Icon sx={{ml: "15px", transform: "rotate(45deg)"}} icon={faArrowUp} size={15} color= "#FF5851" />
                            </Flex>
                            <img src={jane} />
                        </Flex>
                    </Flex>
                    </Flex>
                    </AnimationOnScroll>
                </Box>
                <Box sx={{margin: "auto 0",width: "60%"}}>
                    <Flex sx={{flexDirection: "column"}}>
                    <AnimationOnScroll animateIn="animate__fadeInRight">
                        <Text sx={{color: "#FF5851", fontSize: ["30px","40px","43px","46px","50px"], mb: "40px"}}>Use our avatars or create <span style={{ color: "#E9E8E8" }}>your own</span></Text>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeInDown">
                        <Text sx={{fontSize: ["14px","15px","16px","17px","18px"], mb: "40px", color: "#FF5851"}}>Aloy comes with 40+ built-in avatars. Alternatively, you can also easily create your own for an even more personalized experience</Text>
                    </AnimationOnScroll>
                        <Flex>
                        <AnimationOnScroll animateIn="animate__fadeInLeft">
                            <Text>View All Avatars</Text></AnimationOnScroll>
                            <Icon sx={{ml: "15px", transform: "rotate(45deg)"}} icon={faArrowUp} size={15} color= "white" />
                        </Flex>
                    </Flex>
                </Box>
            </OwnAvatar>

            <AnimationOnScroll animateIn="animate__zoomIn">
                <OwnAvatarMobile>
                <Box sx={{textAlign: "center"}}>
                    <Text sx={{color: "#FF5851", fontSize: ["35px","40px","43px"], mb: "40px"}}>Use our avatars or create <span style={{ color: "#E9E8E8" }}>your own</span></Text>
                    <Text sx={{fontSize: ["14px","15px","16px"], mb: "80px", color: "#FF5851"}}>Aloy comes with 40+ built-in avatars. Alternatively, you can also easily create your own for an even more personalized experience</Text>
                </Box>
                <Box>
                <Flex sx={{flexDirection: "row"}}>
                    <Flex sx={{position: "relative", bottom: "30px", mr: "60px",flexDirection: "column"}}>
                        <Flex sx={{ flexDirection: "column"}}>
                            <Flex sx={{mb: "8px",justifyContent: "space-between"}}>
                                <Text>Michel</Text>
                                <Icon sx={{ml: "15px", transform: "rotate(45deg)"}} icon={faArrowUp} size={15} color= "#FF5851" />
                            </Flex>
                            <img src={michel}  />
                        </Flex>
                        <Flex sx={{mt: "20px",flexDirection: "column"}}>
                            <Flex sx={{mb: "8px",justifyContent: "space-between"}}>
                                <Text>Cathorine</Text>
                                <Icon sx={{ml: "15px", transform: "rotate(45deg)"}} icon={faArrowUp} size={15} color= "#FF5851" />
                            </Flex>
                            <img src={cathorine} />
                        </Flex>
                    </Flex>
                    <Flex sx={{position: "relative", top: "30px",flexDirection: "column"}}>
                        <Flex sx={{flexDirection: "column"}}>
                            <Flex sx={{mb: "8px",justifyContent: "space-between"}}>
                                <Text>Mark</Text>
                                <Icon sx={{ml: "15px", transform: "rotate(45deg)"}} icon={faArrowUp} size={15} color= "#FF5851" />
                            </Flex>
                            <img src={mark} />
                        </Flex>
                        <Flex sx={{mt: "20px",flexDirection: "column"}}>
                            <Flex sx={{mb: "8px",justifyContent: "space-between"}}>
                                <Text>Jane</Text>
                                <Icon sx={{ml: "15px", transform: "rotate(45deg)"}} icon={faArrowUp} size={15} color= "#FF5851" />
                            </Flex>
                            <img src={jane} />
                        </Flex>
                    </Flex>
                    </Flex>
                </Box>
                <Flex sx={{justifyContent: "center", m: "80px auto 0px"}}>
                    <Text>View All Avatars</Text>
                    <Icon sx={{ml: "15px", transform: "rotate(45deg)"}} icon={faArrowUp} size={15} color= "white" />
                </Flex>
                </OwnAvatarMobile>
            </AnimationOnScroll>

            <CreateVideos sx={{ flexDirection: ["column","column","column","row","row"],my : ["110px","120px","130px","140px","150px"]}}>
                <Box sx={{width: ["100%","100%","100%","50%","50%"]}}>
                    <Flex sx={{flexDirection: "column"}}>
                    <AnimationOnScroll animateIn="animate__fadeInLeft">
                    <Text sx={{ textAlign: ["center","center","center","left","left"],color: "#FF5851", fontSize: ["35px","40px","43px","46px","50px"], mb: "40px"}}>Easily create Videos in<br></br><span style={{ color: "#E9E8E8" }}>local languages</span></Text>
                    </AnimationOnScroll>
                    <Flex><Icon size={15}
                                ml="20px"
                                mr="10px"
                                icon={faCheck}
                                sx={{ cursor: "pointer" }}
                            />
                            <AnimationOnScroll animateIn="animate__fadeInUp">
                            <Text sx={{mb:"15px", color: "#FF5B51", fontSize: ["13px","14px","16px"] }}>60+ languages supported at the click of a button</Text>
                            </AnimationOnScroll>
                    </Flex>
                    <Flex><Icon size={15}
                                ml="20px"
                                mr="10px"
                                icon={faCheck}
                                sx={{ cursor: "pointer" }}
                            />
                            <AnimationOnScroll animateIn="animate__fadeInUp">
                            <Text sx={{mb:"15px", color: "#FF5B51", fontSize: ["13px","14px","16px"] }}>Quickly test out languages here</Text>
                            </AnimationOnScroll>
                    </Flex>
                    <Flex sx={{justifyContent: ["center","center","center","left","left"],ml: "20px", my: "20px"}}>
                    <AnimationOnScroll animateIn="animate__fadeInUp"><Text>Create Free Video</Text></AnimationOnScroll>
                            <Icon sx={{ml: "15px", transform: "rotate(45deg)"}} icon={faArrowUp} size={15} color= "white" />
                    </Flex>  
                    </Flex>
                </Box>
                <Box sx={{width: ["100%","100%","100%","50%","50%"]}}><AnimationOnScroll animateIn="animate__zoomIn">
                <img src={cathorine} width="100%" /></AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__zoomIn">
                    <Flex sx={{mt: "10px",justifyContent: "space-between"}}>
                        <Buttonz>English</Buttonz>
                        <Buttonz>German</Buttonz>
                        <Buttonz>Italian</Buttonz>
                        <Buttonz>Spanish</Buttonz>
                        <Buttonz>French</Buttonz>
                    </Flex></AnimationOnScroll>
                </Box>
            </CreateVideos>
            
            <DiverseOptions sx={{ flexDirection: ["column","column","column","row","row"],my : ["110px","120px","130pxpx","140px","150px"]}}>
                <Box sx={{width: ["100%","100%","100%","50%","50%"]}}>
                <AnimationOnScroll animateIn="animate__zoomIn">
                    <img src={feature01} width="100%" /></AnimationOnScroll>
                </Box>
                <Box sx={{mt: ["50px","30px","20px","0","0"],width: ["100%","100%","100%","60%","60%"]}}>
                    <Flex sx={{pl: ["0","0","0px","70px","80px"],flexDirection: "column"}}>
                        <AnimationOnScroll animateIn="animate__fadeInRight">
                            <Text sx={{ textAlign: ["center","center","center","left","left"],color: "#FF5851", fontSize: ["35px","40px","43px","46px","50px"], mb: "40px"}}>Make use of diverse<br></br><span style={{ color: "#E9E8E8" }}>edit options</span></Text>
                        </AnimationOnScroll>
                    <Flex>
                        <AnimationOnScroll animateIn="animate__fadeInUp">
                        <Text sx={{textAlign: ["center","center","center","left","left"],color: "#FF5851"}}>Text, photos and shapes can all be added and customized. You may also include some Lottie animations to make your video even better.</Text>
                        </AnimationOnScroll>
                    </Flex>
                    <Flex sx={{justifyContent: ["center","center","center","left","left"],mt: "20px"}}>
                    <AnimationOnScroll animateIn="animate__fadeInUp">
                            <Text>Create Free Video</Text></AnimationOnScroll>
                            <Icon sx={{ml: "15px", transform: "rotate(45deg)"}} icon={faArrowUp} size={15} color= "white" />
                    </Flex>  
                    </Flex>
                </Box>
            </DiverseOptions>

            <AloyFeatures>
                <AnimationOnScroll animateIn="animate__zoomIn">
                    <Text sx={{mb: ["20px","20px","20px","60px","70px"],textAlign: "center",color: "#FF5851", fontSize: ["35px","40px","43px","46px","50px"] }}>More <span style={{ color: "#E9E8E8" }}>Aloy</span> Features</Text>
                </AnimationOnScroll>
                <Flex sx={{flexDirection: ["column","column","column","row","row"], justifyContent: "space-between"}}>
                    <Flex sx={{justifyContent: ["center","center","center","left","left"], my: ["25px","25px","25px","0","0"]}}>
                    <AnimationOnScroll animateIn="animate__tada"><img src={arrowt} width="80px" height="80px"/></AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__zoomIn"><Box sx={{pl: "20px",width: "300px"}}>
                            <Text sx={{fontSize: ["20px","22px","24px"]}}>Audio uploads</Text>
                            <Text sx={{fontSize: ["13px","14px","16px"],color: "#FF5851"}}>Record real voice clips and upload them to create video clips with your Al presenter. Available in paid version.</Text>
                        </Box></AnimationOnScroll>
                    </Flex>
                    <Flex sx={{justifyContent: ["center","center","center","left","left"],my: ["25px","25px","25px","0","0"]}}>
                    <AnimationOnScroll animateIn="animate__tada"><img src={arrowt} width="80px" height="80px"/></AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__zoomIn"><Box sx={{pl: "20px",width: "300px"}}>
                            <Text sx={{fontSize: ["20px","22px","24px"]}}>Custom background</Text>
                            <Text sx={{fontSize: ["13px","14px","16px"],color: "#FF5851"}}>Easily upload any image or video as a background to your videos. Ideal resolution is 1920x1080.</Text>
                        </Box></AnimationOnScroll>
                    </Flex>
                    <Flex sx={{justifyContent: ["center","center","center","left","left"],my: ["25px","25px","25px","0","0"]}}>
                    <AnimationOnScroll animateIn="animate__tada"><img src={arrowt} width="80px" height="80px"/></AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__zoomIn">
                        <Box sx={{pl: "20px",width: "300px"}}>
                            <Text sx={{fontSize: ["20px","22px","24px"]}}>Background Music</Text>
                            <Text sx={{fontSize: ["13px","14px","16px"],color: "#FF5851"}}>We have prepared a selection of backgroubd music that you can freely add as a back-ground sound to your videos.</Text>
                        </Box></AnimationOnScroll>
                    </Flex>
                </Flex>
                <Flex sx={{mt: ["0","0","0","40px","40px"],flexDirection: ["column","column","column","row","row"], justifyContent: "space-between"}}>
                    <Flex sx={{justifyContent: ["center","center","center","left","left"],my: ["25px","25px","25px","0","0"]}}>
                    <AnimationOnScroll animateIn="animate__tada"><img src={arrowt} width="80px" height="80px"/></AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__zoomIn"><Box sx={{pl: "20px",width: "300px"}}>
                            <Text sx={{fontSize: ["20px","22px","24px"]}}>MP4 Downloads</Text>
                            <Text sx={{fontSize: ["13px","14px","16px"],color: "#FF5851"}}>Each video comes in Full HD (1920x1080) resolution and you can freely download them from the platform.</Text>
                        </Box></AnimationOnScroll>
                    </Flex>
                    <Flex sx={{justifyContent: ["center","center","center","left","left"],my: ["25px","25px","25px","0","0"]}}>
                    <AnimationOnScroll animateIn="animate__tada"><img src={arrowt} width="80px" height="80px"/></AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__zoomIn"><Box sx={{pl: "20px",width: "300px"}}>
                            <Text sx={{fontSize: ["20px","22px","24px"]}}>Multi-side Videos</Text>
                            <Text sx={{fontSize: ["13px","14px","16px"],color: "#FF5851"}}>Combine several Aloy videos into one video. Now you can create rick slide deck video experiences in minutes.</Text>
                        </Box></AnimationOnScroll>
                    </Flex>
                    <Flex sx={{justifyContent: ["center","center","center","left","left"],my: ["25px","25px","25px","0","0"]}}>
                    <AnimationOnScroll animateIn="animate__tada"><img src={arrowt} width="80px" height="80px"/></AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__zoomIn"> <Box sx={{pl: "20px",width: "300px"}}>
                            <Text sx={{fontSize: ["20px","22px","24px"]}}>Text to Video</Text>
                            <Text sx={{fontSize: ["13px","14px","16px"],color: "#FF5851"}}>Tranform simple text into professional-looking video for the first time ever. Videos can be up to 30 minutes long.</Text>
                        </Box></AnimationOnScroll>
                    </Flex>
                </Flex>
            </AloyFeatures>

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