import React from 'react'
import PropTypes from 'prop-types'

import ConfirmedFilter from './ConfirmedFilter'
import Counter from './Counter'
import GuestList from './GuestList/GuestList'

const MainContent = ({
  toggleFilter,
  isFiltered,
  totalInvited,
  numberAttending,
  numberUnconfirmed,
  guests,
  toggleConfirmation,
  toggleEditing,
  removeGuest,
  setNameAt,
  pendingGuest,
}) => {
  return (
    <div className='main'>
      <ConfirmedFilter toggleFilter={toggleFilter} isFiltered={isFiltered} />

      <Counter
        totalInvited={totalInvited}
        numberAttending={numberAttending}
        numberUnconfirmed={numberUnconfirmed}
      />

      <GuestList
        guests={guests}
        toggleConfirmation={toggleConfirmation}
        toggleEditing={toggleEditing}
        removeGuest={removeGuest}
        setNameAt={setNameAt}
        isFiltered={isFiltered}
        pendingGuest={pendingGuest}
      />
    </div>
  )
}

MainContent.propTypes = {
  toggleFilter: PropTypes.func.isRequired,
  isFiltered: PropTypes.bool.isRequired,
  totalInvited: PropTypes.number.isRequired,
  numberAttending: PropTypes.number.isRequired,
  numberUnconfirmed: PropTypes.number.isRequired,
  guests: PropTypes.array.isRequired,
  toggleConfirmation: PropTypes.func.isRequired,
  toggleEditing: PropTypes.func.isRequired,
  setNameAt: PropTypes.func.isRequired,
  removeGuest: PropTypes.func.isRequired,
  pendingGuest: PropTypes.string.isRequired,
}

export default MainContent
