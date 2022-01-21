import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import Header from './components/Header/Header'
import MainContent from './components/MainContent/MainContent'

function App() {
  const [guests, setGuests] = useState([])
  const [isFiltered, setIsFiltered] = useState(false)
  const [pendingGuest, setPendingGuest] = useState('')

  const toggleFilter = () => {
    setIsFiltered((prevIsFilted) => !prevIsFilted)
  }

  const handleNameInput = (e) => {
    setPendingGuest(e.target.value)
  }

  const handleNewGuestSubmit = (e) => {
    e.preventDefault()
    setGuests((prevGuests) => [
      {
        id: uuidv4(),
        name: pendingGuest,
        isConfirmed: false,
        isEditing: false,
      },
      ...prevGuests,
    ])
    setPendingGuest('')
  }

  const toggleGuestProperty = (property, id) => {
    setGuests((prevGuests) => {
      return prevGuests.map((guest) => {
        return guest.id === id
          ? { ...guest, [property]: !guest[property] }
          : guest
      })
    })
  }

  const toggleConfirmation = (id) => toggleGuestProperty('isConfirmed', id)
  const toggleEditing = (id) => toggleGuestProperty('isEditing', id)

  const removeGuest = (id) => {
    setGuests((prevGuests) => {
      return prevGuests.filter((guest) => guest.id !== id)
    })
  }

  const setNameAt = (name, idToChange) => {
    setGuests((prevGuests) => {
      return prevGuests.map((guest) => {
        return guest.id === idToChange ? { ...guest, name } : guest
      })
    })
  }

  const getTotalInvited = () => guests.length
  const getAttendingGuests = () => {
    return guests.reduce(
      (total, guest) => (guest.isConfirmed ? total + 1 : total),
      0
    )
  }
  const totalInvited = getTotalInvited()
  const numberAttending = getAttendingGuests()
  const numberUnconfirmed = totalInvited - numberAttending

  return (
    <div className='App'>
      <Header
        handleNewGuestSubmit={handleNewGuestSubmit}
        handleNameInput={handleNameInput}
        pendingGuest={pendingGuest}
      />

      <MainContent
        toggleFilter={toggleFilter}
        isFiltered={isFiltered}
        totalInvited={totalInvited}
        numberAttending={numberAttending}
        numberUnconfirmed={numberUnconfirmed}
        guests={guests}
        toggleConfirmation={toggleConfirmation}
        toggleEditing={toggleEditing}
        setNameAt={setNameAt}
        removeGuest={removeGuest}
        pendingGuest={pendingGuest}
      />
    </div>
  )
}

export default App
