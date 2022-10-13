import React, { useEffect ,useState} from 'react'
import { MarketView } from './Market.view'

export const MarketContainer = (props) => {
  return (
    <>
      <MarketView props={props}/>
    </>
  )
}
