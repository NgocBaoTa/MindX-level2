import React from 'react'
import { useParams } from 'react-router-dom'

function Invoice() {
  const params = useParams ()
  return (
    <div>
        Invoice {params.id}
    </div>
  )
}

export default Invoice