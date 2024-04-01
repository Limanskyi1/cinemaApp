import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
  <ContentLoader 
    speed={2}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#d3c5c5"
    foregroundColor="#fff"
  >
    <rect x="17" y="29" rx="0" ry="0" width="271" height="256" /> 
    <rect x="17" y="293" rx="0" ry="0" width="138" height="18" /> 
    <rect x="112" y="331" rx="0" ry="0" width="4" height="0" /> 
    <rect x="17" y="322" rx="0" ry="0" width="138" height="20" />
  </ContentLoader>
)

export default Skeleton