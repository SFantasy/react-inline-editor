import React, { Component, PropTypes } from 'react'

export default class Editor extends Component {

  constructor (props) {
    super(props)
  }

  static propTypes = {
    html: PropTypes.string
  }

  static defaultProps = {
    html: ''
  }

  componentDidMount () {

  }

  shouldComponentUpdate (nextProps, nextStates) {

  }

  componentWillReceiveProps (nextProps) {

  }

  componentDidUpdate () {

  }

  componentWillUnmount () {

  }

  render () {
    return React.createElement(
      'div',
      Object.assign({}, this.props, {
        dangerouslySetInnerHTML: {__html: this.props.html},
        contentEditable: true
      }),
      this.props.children)
  }
}
