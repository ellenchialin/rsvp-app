import React from 'react'
import PropTypes from 'prop-types'

import Guest from './Guest'
import PendingGuest from './PendingGuest'

const GuestList = ({
  guests,
  isFiltered,
  toggleConfirmation,
  toggleEditing,
  setNameAt,
  removeGuest,
  pendingGuest,
}) => {
  return (
    <ul>
      <PendingGuest name={pendingGuest} />

      {guests
        .filter((guest) => !isFiltered || guest.isConfirmed)
        .map((guest) => (
          <Guest
            key={guest.id}
            name={guest.name}
            isConfirmed={guest.isConfirmed}
            isEditing={guest.isEditing}
            handleConfirmation={() => toggleConfirmation(guest.id)}
            handleEditing={() => toggleEditing(guest.id)}
            handleRemove={() => removeGuest(guest.id)}
            setName={(text) => setNameAt(text, guest.id)}
          />
        ))}
    </ul>
  )
}

GuestList.propTypes = {
  guests: PropTypes.array.isRequired,
  isFiltered: PropTypes.bool.isRequired,
  toggleConfirmation: PropTypes.func.isRequired,
  toggleEditing: PropTypes.func.isRequired,
  removeGuest: PropTypes.func.isRequired,
  setNameAt: PropTypes.func.isRequired,
  pendingGuest: PropTypes.string.isRequired,
}

export default GuestList
