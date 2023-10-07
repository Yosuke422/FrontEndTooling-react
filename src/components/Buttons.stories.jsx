import React from 'react'
import { Button } from '../stories/Button'
import PropTypes from 'prop-types'
import './button.scss'

export default {
  title: 'Button',
  component: Button,
}

export const Primary = ({onButtonClick }) => (
  <Button className="custom-button"  label="Load New Pokemon" onClick={onButtonClick}>
  </Button>
)

Primary.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
  label:PropTypes.string.isRequired
}