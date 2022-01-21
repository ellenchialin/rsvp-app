import React from 'react'
import PropTypes from 'prop-types'

const GuestInputForm = ({
  handleNewGuestSubmit,
  handleNameInput,
  pendingGuest,
}) => {
  return (
    <form onSubmit={handleNewGuestSubmit}>
      <input
        type='text'
        placeholder='Invite Someone'
        onChange={handleNameInput}
        value={pendingGuest}
      />
      <button type='submit' name='submit' value='submit'>
        Submit
      </button>
    </form>
  )
}

GuestInputForm.propTypes = {
  handleNewGuestSubmit: PropTypes.func.isRequired,
  handleNameInput: PropTypes.func.isRequired,
  pendingGuest: PropTypes.string.isRequired,
}

export default GuestInputForm
