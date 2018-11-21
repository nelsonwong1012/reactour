import React, { Component, createRef } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { TourConsumer } from './TourContext'
import { Guide } from './components/index'
import { getNodeRect } from './helpers'

class TouristGuide extends Component {
  guide = createRef()

  render() {
    const { className, isOpen } = this.props
    console.log(this.guide.current)
    const { width: helperWidth, height: helperHeight } = this.guide.current
      ? getNodeRect(this.guide.current)
      : { width: 100, height: 100 }

    return isOpen ? (
      <TourConsumer>
        {({ doc, target, closeTour, current }) => (
          <Guide
            ref={this.guide}
            targetHeight={target.height}
            targetWidth={target.width}
            targetTop={target.top}
            targetRight={target.right}
            targetBottom={target.bottom}
            targetLeft={target.left}
            windowWidth={doc.width}
            windowHeight={doc.height}
            helperWidth={helperWidth}
            helperHeight={helperHeight}
            helperPosition={'center'}
            padding={10}
            tabIndex={-1}
            current={current}
            rounded={3}
          >
            hola que tal
          </Guide>
        )}
      </TourConsumer>
    ) : null
  }
}

TouristGuide.propTypes = {
  isOpen: PropTypes.bool.isRequired,
}

TouristGuide.defaultProps = {}

export default TouristGuide
