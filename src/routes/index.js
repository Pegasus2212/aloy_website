/**
 * Contains the application routes configuration.
 */

 import React from "react"
 import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"
 import {
   Shell,
   HomeContainer,
   FeaturesContainer,
   PricingContainer,
   MarketContainer,
   ResourceContainer,
 } from "../modules"

 
 const ROUTES = [
   { path: "/", key: "HOME", exact: true, component: HomeContainer },
   { path: "/features", key: "FEATURES", exact: true, component: FeaturesContainer },
   { path: "/pricing", key: "PRICING", exact: true, component: PricingContainer },
   { path: "/market", key: "MARKET PLACE", exact: true, component: MarketContainer },
   { path: "/resources", key: "RESOURCES", exact: true, component: ResourceContainer},
 ]
 
 export function RenderRoutes({ }) {
     return (
         <Router>
       {/* <Switch> */}
         <Shell>
           <Switch>
             {ROUTES.map((route, i) => {
                console.log("Render Routes ?? ", route)
               return (
                 <Route
                   exact
                   key={route.key}
                   path={route.path}
                   render={props => <route.component {...props} routes={route.routes} />}
                 />
               )
             })}
             <Route path="*">
               <Redirect to="/logout" />
             </Route>
           </Switch>
         </Shell>
       {/* </Switch> */}
     </Router>
   )
 }
 