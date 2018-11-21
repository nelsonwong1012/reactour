import React, { Component, createContext, createRef } from 'react'
import { getNodeRect } from './helpers'

const { Provider, Consumer } = createContext(0)

const getDocWidth = () => {
  return Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
}
const getDocHeight = () => {
  return Math.max(
    document.documentElement.clientHeight,
    window.innerHeight || 0
  )
}

class TourContext extends Component {
  w = getDocWidth()
  h = getDocHeight()

  state = {
    current: 0,
    target: {
      top: this.h + 10,
      right: this.w / 2 + 9,
      bottom: this.h / 2 + 9,
      left: this.w / 2 - 10 / 2,
      width: 0,
      height: 0,
    },
    doc: {
      width: this.w,
      height: this.h,
    },
    closeTour: () => this.props.onRequestClose(),
  }

  componentDidMount() {
    const { isOpen, startAt } = this.props

    this.showStep()
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(this.props)
  }

  showStep = step => {
    const { steps } = this.props
    const { current } = this.state

    const { selector, position } = steps[current]
    const node = selector ? document.querySelector(selector) : null
    this.makeCalculations(node, position)
  }

  makeCalculations = (node, position) => {
    const doc = {
      width: getDocWidth(),
      height: getDocHeight(),
    }

    const target = getNodeRect(node)

    this.setState({ target, doc })
  }

  render() {
    const { children } = this.props

    return <Provider value={this.state}>{children}</Provider>
  }
}

export const TourConsumer = Consumer

export default TourContext
