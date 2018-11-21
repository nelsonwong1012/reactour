import React, { Component, createRef } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { TourConsumer } from './TourContext'
import { SvgMask } from './components/index'

class Mask extends Component {
  mask = createRef()

  render() {
    const { className, isOpen, closeWithMask } = this.props

    return isOpen ? (
      <TourConsumer>
        {({ doc, target, closeTour }) => {
          const onClick = () => (closeWithMask ? closeTour() : null)
          return (
            <div
              ref={this.mask}
              onClick={onClick}
              className={cn('reactour__mask', {
                'reactour__mask--is-open': isOpen,
              })}
            >
              <SvgMask
                windowWidth={doc.width}
                windowHeight={doc.height}
                targetWidth={target.width}
                targetHeight={target.height}
                targetTop={target.top}
                targetLeft={target.left}
                padding={10}
                rounded={3}
                className={className}
                disableInteraction={true}
                disableInteractionClassName={`h`}
              />
            </div>
          )
        }}
      </TourConsumer>
    ) : null
  }
}

Mask.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  className: PropTypes.string,
  closeWithMask: PropTypes.bool,
}

Mask.defaultProps = {}

export default Mask
