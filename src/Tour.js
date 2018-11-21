import React from 'react'
import Portal from './Portal'
import PropTypes from 'prop-types'
import TourContent from './TourContent'
import Mask from './Mask'
import Guide from './Guide'
import TourContext from './TourContext'

const Tour = props => {
  const { closeWithMask, isOpen } = props
  return (
    <Portal>
      {/* <TourContent {...props} /> */}
      <TourContext {...props}>
        <Mask isOpen={isOpen} closeWithMask={closeWithMask} />
        <Guide isOpen={isOpen} />
      </TourContext>
    </Portal>
  )
}

Tour.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  maskClassName: PropTypes.string,
  closeWithMask: PropTypes.bool,
  startAt: PropTypes.number,
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      selector: PropTypes.string,
      content: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.element,
        PropTypes.func,
      ]).isRequired,
      position: PropTypes.oneOf(['top', 'right', 'bottom', 'left', 'center']),
      action: PropTypes.func,
      style: PropTypes.object,
      stepInteraction: PropTypes.bool,
    })
  ),
}

Tour.defaultProps = {
  startAt: 0,
}

export default Tour
