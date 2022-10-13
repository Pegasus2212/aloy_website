import React, { useState, useEffect, useRef} from "react"
import { Link, Box, Button, Flex } from "rebass"
import  styled from "@emotion/styled"
import { Text, Icon } from "../../components"
import Logo from "../../assets/images/logo.png"
import {  faEdit } from "@fortawesome/free-solid-svg-icons"
import { useHistory } from "react-router"

const Wrapper = styled(Flex)`
  padding: 0px 0;
  width: 100%;
  margin: 0px auto;
  // max-width: 1366px; 
  height: auto;
  background: #0C0C0C url(background-image.png) 0% 0% repeat padding-box;
  color: #FFF;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

const HeaderBox = styled(Flex)`
  margin-top: 40px;
  flex-direction: row;
`

const NavItems = styled(Flex)`
  text-align: ${({ openDrawer }) =>
  openDrawer ? "center" : "right"};
  justify-content: ${({ openDrawer }) =>
  openDrawer ? "center" : "right"};
  margin: auto;
  font: normal normal medium 18px/24px Baloo Da 2;
  flex-grow: 1;
  display: flex;
  @media only screen and (max-width: 67em) {
    position: relative;
    right: ${({ openDrawer }) =>
    openDrawer ? "17px" : "0px"};
    top: 40px;
    display: ${({ openDrawer }) =>
      openDrawer ? "flex" : "none"}
  }
` 

const Humburger = styled(Button)`
  height: 30px:
  widht: 30px;
  display: none;
  background: none;
  @media only screen and (max-width: 67em) {
    display: block;
  }
`
const Humburgerline = styled(Text)`
  // width: 30px;
  height: 2px;
  background-color: #fff;
  margin: 4px 0px;
  transition: 0.4s;   
`

const FooterBox = styled(Flex)`
  background: #FF5B51 0% 0% no-repeat padding-box;
  @media only screen and (max-width: 67em) {
    display: none;
  }
`
const FooterBoxPhone = styled(Flex)`
  background: #FF5B51 0% 0% no-repeat padding-box;
  display: none;
  @media only screen and (max-width: 67em){
    display: block;
  }

`

const menuItems = [
  {
    key: 1,
    label: "Home",
    route: "/",
  },
  {
    key: 2,
    label: "Features",
    route: "/features",
  },
  {
    key: 3,
    label: "Pricing",
    route: "/pricing",
  },
  {
    key: 4,
    label: "Market Place",
    route: "/market",
  },
  {
    key: 5,
    label: "Resources",
    route: "/resources",
  }
]

export const Shell = ({ children, props }) => {
  const history = useHistory();
  const [isActive, setIsActive] = useState(false)
  const [selected, setSelected] = useState(window.location.pathname)
  const handleClick=()=>{}
  const [openDrawer, toggleDrawer] = useState(false);

  
  return (
    <>
      <Wrapper flexDirection={"column"}>
          <Box  sx={{width: "100%", height: "75px"}}>

            <HeaderBox sx={{marginX: ["40px","50px","60px","70px","80px"]}}>
              <Flex sx={{
                width: ["34px","36px","38px","40px","42px","44px"],
                height: ["31px","33px","35px","37px","39px","41px"]
              }}>
                <img src={Logo}/>
                <Text sx={{ ml: "10px", fontSize: ["22px","24px","26px","28px","30px"], color: "#FF5B51" }}>Aloy<span style={{ color: "#E9E8E8" }}>.ai</span></Text>
              </Flex>
              <NavItems sx={{
                mr: isActive ? "20px" : "0px", 
                flexDirection: isActive ? "column" : "row"}} openDrawer={openDrawer}>
                {menuItems.map(menu=>(
                  <Link 
                    onClick={()=>{
                      history.push(menu.route);
                      handleClick()
                    }}
                    key={menu.key}
                    to={menu.route}
                    sx={{cursor: "pointer"}}
                  >
                    <Button 
                    className={selected === menu.route ? "selected" : ""}
                    onClick={() => setSelected(menu.route)}
                      sx={{ 
                        background: 'none', 
                        border: "0px", 
                        color: "#FF5B51", 
                        letterSpacing: "0.72px", 
                        fontSize: ["14px","15px","16px","17px","18px"], 
                        fontWeight: "normal", 
                        mx: ["6px","7px","8px","9px","10px"], 
                        boxShadow: "none",
                        "&:hover": {
                          color: "#E9E8E8",
                          background: 'none'
                        },
                        "&.selected": {
                          color: "#E9E8E8",
                          background: 'none'
                        }
                      }}
                    >
                    {menu.label}
                    </Button>
                    </Link>
                    ))}
                    <Button  sx={{ 
                  background: "#FF5B51 0% 0% no-repeat padding-box", 
                  color: "#0D0D0D", 
                  letterSpacing: "0.72px", 
                  fontSize: ["14px","15px","16px","17px","18px"], 
                  fontWeight: "normal", 
                  ml: isActive ? "60px" : "20px",
                  mr: isActive ? "60px" : "0px",
                  mt: isActive ? "10px" : "0px",
                  "&:hover": {
                    color: "#E9E8E8",
                    background: 'none'
                  },
                }}>
                  Create Account
                    </Button>
              </NavItems>

              <Humburger onClick={() =>{ 
                toggleDrawer(current => !current);
                setIsActive(current => !current);
              } }
                  sx={{ position: "absolute",
                    right: ["40px","50px","60px","70px","80px"],
                    top: "40px",
                    "&:hover" : {
                      background: "none"
                    }}}>
                <Humburgerline sx={{
                  width: ["22px","24px","26px","28px","30px"],
                  mb:"5px",
                  transition: "all 0.59s ease",
                  transform: isActive ? "rotate(45deg)" : "",
                  transformOrigin: "20% 40%"
                  }}/>
                <Humburgerline sx={{
                  width: ["22px","24px","26px","28px","30px"],
                  opacity : isActive ? "0":"1",
                  mb:"2px"}}/>
                <Humburgerline sx={{
                  width: ["22px","24px","26px","28px","30px"],
                  mt:"2px",
                  transition: "all 0.59s ease",
                  transform: isActive ? "rotate(-45deg)" : "",
                  transformOrigin: "20% 40%"
                  }}/>
              </Humburger>
            </HeaderBox>
            
          </Box>
          <Flex sx={{ transition: "all 0.29s ease" }} 
              paddingTop={isActive ? { _: '140px', sm: '140px', md: '150px', lg: '220px', xl: '220px' } : { _: '2px', sm: '4px', md: '6px', lg: '8px', xl: '10px' }}>
            {children}
          </Flex>

          <FooterBox>
            <Flex sx={{ margin: "2%", width: "100%", flexDirection: "column" }}>
              <Flex sx={{ flexDirection: ["column","column","column","row","row"], width: "100%", justifyContent: "space-between" }}>
                <Flex sx={{ flexDirection: "row" }}>
                <Flex sx={{mr: "80px",flexDirection: ["row","row","row","column","column"]}}>
                  <Flex sx={{ flexDirection: "row", alignItems: "center" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="38" height="35" viewBox="0 0 38 35">
                    <path id="path0" d="M10.108,17.44C4.915,27.017.736,34.923.822,35.009S5.18,30.7,10.315,25.231s9.417-9.9,9.514-9.849,1.885,1.85,3.974,4.007l3.8,3.921-2.206-.14c-4.583-.292-10.569,1.353-13.267,3.644-1.514,1.285-1.339,1.379,1.378.736,6.915-1.637,15.626.585,22.741,5.8a14.431,14.431,0,0,0,2.574,1.678c.174-.175-18.77-34.992-19.041-35-.125,0-4.477,7.833-9.67,17.409" transform="translate(-0.82 -0.031)" fill="#0d0d0d" fill-rule="evenodd"/>
                  </svg>
                  <Text sx={{ fontSize: "40px", ml: "10px", font: "normal normal medium 40px/65px Clash Display", color: "#0D0D0D" }}>ALOY.ai</Text>
                  </Flex>
                  <Flex sx={{ mt: "20px", flexDirection: "row", justifyContent: "space-between", color: "#0D0D0D" }}>
                    <Flex sx={{mr:"20px", cursor: "pointer" }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path id="iconmonstr-twitter-3" d="M19,0H5A5,5,0,0,0,0,5V19a5,5,0,0,0,5,5H19a5,5,0,0,0,5-5V5A5,5,0,0,0,19,0Zm-.139,9.237A9.336,9.336,0,0,1,4.5,17.527a6.6,6.6,0,0,0,4.86-1.359,3.285,3.285,0,0,1-3.066-2.28,3.3,3.3,0,0,0,1.482-.056,3.286,3.286,0,0,1-2.633-3.26,3.266,3.266,0,0,0,1.486.411A3.289,3.289,0,0,1,5.612,6.6a9.32,9.32,0,0,0,6.766,3.43,3.285,3.285,0,0,1,5.594-2.993,6.583,6.583,0,0,0,2.086-.8,3.3,3.3,0,0,1-1.443,1.816A6.578,6.578,0,0,0,20.5,7.54a6.66,6.66,0,0,1-1.639,1.7Z"/>
                      </svg>
                    </Flex>
                    <Flex sx={{ mr:"20px",cursor: "pointer" }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path id="iconmonstr-linkedin-3" d="M19,0H5A5,5,0,0,0,0,5V19a5,5,0,0,0,5,5H19a5,5,0,0,0,5-5V5A5,5,0,0,0,19,0ZM8,19H5V8H8ZM6.5,6.732A1.764,1.764,0,1,1,8.25,4.968,1.758,1.758,0,0,1,6.5,6.732ZM20,19H17V13.4c0-3.368-4-3.113-4,0V19H10V8h3V9.765c1.4-2.586,7-2.777,7,2.476Z"/>
                      </svg>
                    </Flex>
                    <Flex sx={{ mr:"20px",cursor: "pointer" }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path id="iconmonstr-facebook-3" d="M19,0H5A5,5,0,0,0,0,5V19a5,5,0,0,0,5,5H19a5,5,0,0,0,5-5V5A5,5,0,0,0,19,0ZM16,7H14.076C13.461,7,13,7.252,13,7.889V9h3l-.238,3H13v8H10V12H8V9h2V7.077C10,5.055,11.064,4,13.461,4H16Z"/>
                      </svg>
                    </Flex>
                    <Flex sx={{ mr:"20px",cursor: "pointer" }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path id="iconmonstr-youtube-8" d="M10,9.333l5.333,2.662L10,14.667ZM24,5V19a5,5,0,0,1-5,5H5a5,5,0,0,1-5-5V5A5,5,0,0,1,5,0H19A5,5,0,0,1,24,5Zm-4,7c-.02-4.123-.323-5.7-2.923-5.877-2.4-.164-7.754-.163-10.153,0C4.326,6.3,4.02,7.87,4,12c.02,4.123.323,5.7,2.923,5.877,2.4.163,7.75.164,10.153,0C19.674,17.7,19.98,16.13,20,12Z"/>
                      </svg>
                    </Flex>
                  </Flex>
                </Flex>
                <Flex sx={{ flexDirection: "column"}}>
                  <Text sx={{ fontSize: "14px", fontFamily: "Baloo Da 2, SemiBold", width: "148px", color: "#0D0D0D" }}>
                    #05 Nanjappa Building, 2nd Cross, Suggatta Road, Hunasamaranahalli, Bangalore, Karnataka, India 562157
                  </Text>
                </Flex>
              </Flex>
                <Flex sx={{ flexDirection: "column", color: "#0D0D0D" }}>
                  <Text sx={{ fontSize: "18px", mb: "15px" }}>Road Map</Text>
                  <Text sx={{ fontSize: "18px", mb: "15px" }}>Privacy Policy</Text>
                  <Text sx={{ fontSize: "18px", mb: "15px" }}>Cookie Policy</Text>
                </Flex>
                <Flex sx={{ flexDirection: "column", color: "#0D0D0D" }}>
                  <Text sx={{ fontSize: "18px", mb: "15px" }}>Docs</Text>
                  <Text sx={{ fontSize: "18px", mb: "15px" }}>T & C</Text>
                  <Text sx={{ fontSize: "18px", mb: "15px" }}>Support</Text>
                </Flex>
                <Flex sx={{ flexDirection: "column", color: "#0D0D0D" }}>
                  <Text sx={{ fontSize: "18px", mb: "15px" }}>Blog</Text>
                  <Text sx={{ fontSize: "18px", mb: "15px" }}>Apps</Text>
                </Flex>
                
                <Flex sx={{ flexDirection: ["row","row","row","column","column"], color: "#0D0D0D" }}>
                
                  <Flex sx={{ width: ["90%","90%","90%","",""], flexDirection: "column"}}>
                    <Text sx={{ fontSize: "24px", mb: ["5px","5px","5px","15px","15px"] }}>Stay Connected</Text>
                    <Text sx={{ fontSize: "14px", mb: "15px" }}>Join Our Exclusive Group</Text>
                  </Flex>
                  <Flex sx={{textAlign: "right"}}>
                    <Button sx={{backgroundColor: "#000000", color: "#FF5B51" }}>Join Now</Button>
                </Flex>
              </Flex>
              </Flex>
              <Flex sx={{ flexDirection: "column" }}>
                <hr width="100%" style={{ borderColor: "#0D0D0D" }} />
                <Flex sx={{ flexDirection: ["column","column","column","row","row"], justifyContent: "space-between", color: "#0D0D0D", alignItems: "center", my: "15px" }}>
                  <Text sx={{ fontSize: ["12px","13px","14px","16px","18px"], fontFamily: "Baloo Da 2, Bold", pb: ["20px","20px","10px","0px","0px"] }}>Copyright @ Aloy.ai 2022 | All Rights Reserved</Text>
                </Flex>
              </Flex>
            </Flex> 
          </FooterBox>
          <FooterBoxPhone>
            <Flex sx={{ padding: ["5%","4%","3%"], width: "100%", flexDirection: "column"}}>
              <Flex sx={{marginX: "3%", justifyContent: "space-between", flexDirection: ["row"]}}>
                <Flex sx={{ flexDirection: "column", color: "#0D0D0D" }}>
                  <Text sx={{ fontSize: ["16px","17px","18px"], mb: "15px" }}>Road Map</Text>
                  <Text sx={{ fontSize: ["16px","17px","18px"], mb: "15px" }}>Privacy Policy</Text>
                  <Text sx={{ fontSize: ["16px","17px","18px"], mb: "15px" }}>Cookie Policy</Text>
                </Flex>
                <Flex sx={{ flexDirection: "column", color: "#0D0D0D" }}>
                  <Text sx={{ fontSize: ["16px","17px","18px"], mb: "15px" }}>Docs</Text>
                  <Text sx={{ fontSize: ["16px","17px","18px"], mb: "15px" }}>T & C</Text>
                  <Text sx={{ fontSize: ["16px","17px","18px"], mb: "15px" }}>Support</Text>
                </Flex>
                <Flex sx={{ flexDirection: "column", color: "#0D0D0D" }}>
                  <Text sx={{ fontSize: ["16px","17px","18px"], mb: "15px" }}>Blog</Text>
                  <Text sx={{ fontSize: ["16px","17px","18px"], mb: "15px" }}>Apps</Text>
                </Flex>
              </Flex>
                <hr width="100%" style={{ border: " 1px solid #0D0D0D" }} />
                <Flex sx={{ my: "10px" , justifyContent: "space-between",flexDirection: ["row",], color: "#0D0D0D" }}>
                  <Flex sx={{   flexDirection: "column"}}>
                    <Text sx={{ fontSize: "24px", mb: ["5px"] }}>Stay Connected</Text>
                    <Text sx={{ fontSize: "14px"}}>Join Our Exclusive Group</Text>
                  </Flex>
                  <Flex sx={{  textAlign: "right"}}>
                    <Button sx={{margin: "auto",width: "100%", height: "55%", backgroundColor: "#000000", color: "#FF5B51" }}>Join Now</Button>
                </Flex>
              </Flex>
              <hr width="100%" style={{ border: "1px solid #0D0D0D" }} />
              <Flex sx={{ my: "10px", flexDirection: ["column"], width: "100%", justifyContent: "space-between" }}>
                <Flex sx={{justifyContent: "space-between", flexDirection: ["row"]}}>
                  <Flex sx={{ flexDirection: "row", alignItems: "center" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="35" viewBox="0 0 38 35">
                      <path id="path0" d="M10.108,17.44C4.915,27.017.736,34.923.822,35.009S5.18,30.7,10.315,25.231s9.417-9.9,9.514-9.849,1.885,1.85,3.974,4.007l3.8,3.921-2.206-.14c-4.583-.292-10.569,1.353-13.267,3.644-1.514,1.285-1.339,1.379,1.378.736,6.915-1.637,15.626.585,22.741,5.8a14.431,14.431,0,0,0,2.574,1.678c.174-.175-18.77-34.992-19.041-35-.125,0-4.477,7.833-9.67,17.409" transform="translate(-0.82 -0.031)" fill="#0d0d0d" fill-rule="evenodd"/>
                    </svg>
                    <Text sx={{ fontSize: "40px", ml: "10px", font: "normal normal medium 40px/65px Clash Display", color: "#0D0D0D" }}>ALOY.ai</Text>
                  </Flex>
                  <Flex sx={{ marginY: "auto", textAlign: "center", flexDirection: "row", justifyContent:"space-center", color: "#0D0D0D" }}>
                  <Flex sx={{ ml:"20px", mr:"20px", cursor: "pointer" }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path id="iconmonstr-twitter-3" d="M19,0H5A5,5,0,0,0,0,5V19a5,5,0,0,0,5,5H19a5,5,0,0,0,5-5V5A5,5,0,0,0,19,0Zm-.139,9.237A9.336,9.336,0,0,1,4.5,17.527a6.6,6.6,0,0,0,4.86-1.359,3.285,3.285,0,0,1-3.066-2.28,3.3,3.3,0,0,0,1.482-.056,3.286,3.286,0,0,1-2.633-3.26,3.266,3.266,0,0,0,1.486.411A3.289,3.289,0,0,1,5.612,6.6a9.32,9.32,0,0,0,6.766,3.43,3.285,3.285,0,0,1,5.594-2.993,6.583,6.583,0,0,0,2.086-.8,3.3,3.3,0,0,1-1.443,1.816A6.578,6.578,0,0,0,20.5,7.54a6.66,6.66,0,0,1-1.639,1.7Z"/>
                      </svg>
                    </Flex>
                    <Flex sx={{ mr:"20px",cursor: "pointer" }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path id="iconmonstr-linkedin-3" d="M19,0H5A5,5,0,0,0,0,5V19a5,5,0,0,0,5,5H19a5,5,0,0,0,5-5V5A5,5,0,0,0,19,0ZM8,19H5V8H8ZM6.5,6.732A1.764,1.764,0,1,1,8.25,4.968,1.758,1.758,0,0,1,6.5,6.732ZM20,19H17V13.4c0-3.368-4-3.113-4,0V19H10V8h3V9.765c1.4-2.586,7-2.777,7,2.476Z"/>
                      </svg>
                    </Flex>
                    <Flex sx={{ mr:"20px",cursor: "pointer" }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path id="iconmonstr-facebook-3" d="M19,0H5A5,5,0,0,0,0,5V19a5,5,0,0,0,5,5H19a5,5,0,0,0,5-5V5A5,5,0,0,0,19,0ZM16,7H14.076C13.461,7,13,7.252,13,7.889V9h3l-.238,3H13v8H10V12H8V9h2V7.077C10,5.055,11.064,4,13.461,4H16Z"/>
                      </svg>
                    </Flex>
                    <Flex sx={{ cursor: "pointer" }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path id="iconmonstr-youtube-8" d="M10,9.333l5.333,2.662L10,14.667ZM24,5V19a5,5,0,0,1-5,5H5a5,5,0,0,1-5-5V5A5,5,0,0,1,5,0H19A5,5,0,0,1,24,5Zm-4,7c-.02-4.123-.323-5.7-2.923-5.877-2.4-.164-7.754-.163-10.153,0C4.326,6.3,4.02,7.87,4,12c.02,4.123.323,5.7,2.923,5.877,2.4.163,7.75.164,10.153,0C19.674,17.7,19.98,16.13,20,12Z"/>
                      </svg>
                    </Flex>
                  </Flex>
                </Flex>
                <Flex sx={{mt: "12px", textAlign: ["center","left","left"]}}>
                  <Text sx={{fontSize: ["14px","16px","18px"], fontFamily: "Baloo Da 2, SemiBold", width: ["100%"], color: "#0D0D0D" }}>
                    #05 Nanjappa Building, 2nd Cross, Suggatta Road, Hunasamaranahalli, Bangalore, Karnataka, India 562157
                  </Text>
                </Flex>
              </Flex> 
              <Flex sx={{ flexDirection: "column" }}>
                <hr width="100%" style={{ border: "1px solid #0D0D0D" }} />
                <Flex sx={{ flexDirection: "column", justifyContent: "space-between", color: "#0D0D0D", alignItems: "center", my: "10px" }}>
                  <Text sx={{ fontSize: ["14px","16px","18px"], fontFamily: "Baloo Da 2, Bold", pb: ["20px","20px","10px","0px","0px"] }}>Copyright @ Aloy.ai 2022 | All Rights Reserved</Text>
                </Flex>
              </Flex>
              </Flex>
          </FooterBoxPhone>
      </Wrapper>
    </>
  )
}
