import React from 'react'
import PropTypes from 'prop-types'

import GuestInputForm from './GuestInputForm'

const Header = ({ handleNewGuestSubmit, handleNameInput, pendingGuest }) => {
  return (
    <header>
      <h1>RSVP</h1>
      <p>Join Us</p>
      <GuestInputForm
        handleNewGuestSubmit={handleNewGuestSubmit}
        handleNameInput={handleNameInput}
        pendingGuest={pendingGuest}
      />
    </header>
  )
}

Header.propTypes = {
  handleNewGuestSubmit: PropTypes.func.isRequired,
  handleNameInput: PropTypes.func.isRequired,
  pendingGuest: PropTypes.string.isRequired,
}

export default Header
