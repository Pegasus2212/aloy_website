import React, { useEffect ,useState} from 'react'
import { PricingView } from './Pricing.view'

export const PricingContainer = (props) => {
  return (
    <>
      <PricingView props={props}/>
    </>
  )
}
