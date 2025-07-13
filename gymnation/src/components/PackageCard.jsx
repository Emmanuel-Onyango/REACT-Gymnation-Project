import React from 'react'

const PackageCard = ({ type, description, className }) => {
  return (
    <div className={`package-card ${className}`}>
      <h3>{type}</h3>
      <p>{description}</p>
    </div>
  )
}

export default PackageCard