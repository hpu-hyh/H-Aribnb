import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { EnirtWrapper } from './style'

const Entire = memo((props) => {
  return (
    <EnirtWrapper>
      <div className="filter">filter</div>
      <div className="rooms">rooms</div>
      <div className="pagination">pagination</div>
    </EnirtWrapper>
  )
})

Entire.propTypes = {}

export default Entire