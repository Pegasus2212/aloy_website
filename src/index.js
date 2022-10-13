/**
 * Main entry point into the APp
 * Contains the App config for Redux, Theme & Routes
 */

 import React from "react"
 import ReactDOM from "react-dom"
 import { RenderRoutes } from "./routes"
 import { ThemeProvider } from "emotion-theming"
 import { themed } from "./theme/theme"
//  import 'react-toastify/dist/ReactToastify.css';
 import 'react-responsive-modal/styles.css'


  ReactDOM.render(
       <ThemeProvider theme={themed}>
           <RenderRoutes />
       </ThemeProvider>,
      document.getElementById("app")
   )
 // eslint-disable-next-line