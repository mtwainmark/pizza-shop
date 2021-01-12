import React from 'react'
import ContentLoader from "react-content-loader"

function LoadingBlock() {
  return (
    <ContentLoader 
      className="pizza-block"
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
  >
    <circle cx="139" cy="121" r="109" /> 
    <rect x="0" y="246" rx="3" ry="3" width="280" height="26" /> 
    <rect x="0" y="281" rx="6" ry="6" width="280" height="84" /> 
    <rect x="0" y="376" rx="3" ry="3" width="91" height="31" /> 
    <rect x="102" y="376" rx="15" ry="15" width="174" height="31" />
  </ContentLoader>
  )
}

export default LoadingBlock

