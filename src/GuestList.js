import React from 'react'
import PropTypes from 'prop-types'
import Guest from './Guest'

const GuestList = ({ guests, toggleConfirmation }) => {
  return (
    <ul>
      {guests.map((guest, index) => (
        <Guest
          key={index}
          name={guest.name}
          isConfirmed={guest.isConfirmed}
          handleConfirmation={() => toggleConfirmation(index)}
        />
      ))}
    </ul>
  )
}

GuestList.propTypes = {
  guests: PropTypes.array.isRequired,
  toggleConfirmation: PropTypes.func.isRequired,
}

export default GuestList
