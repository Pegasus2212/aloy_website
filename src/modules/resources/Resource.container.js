import React, { useEffect ,useState} from 'react'
import { ResourceView } from './Resource.view'

export const ResourceContainer = (props) => {
  return (
    <>
      <ResourceView props={props}/>
    </>
  )
}
