import React, { useState } from 'react'
import GuestList from './GuestList.js'

function App() {
  const [guests, setGuests] = useState([
    { name: 'Treasure', isConfirmed: false },
    { name: 'Nic', isConfirmed: true },
    { name: 'Matt K', isConfirmed: false },
  ])

  const toggleConfirmation = (indexToChange) => {
    setGuests((prevGuests) => {
      prevGuests.map((guest, index) => {
        console.log(guest)
        if (index === indexToChange) {
          return { ...guest, isConfirmed: !guest.isConfirmed }
        }
        return guest
      })
    })
  }

  // const getTotalInvited = () => guests.length
  // getAttendingGuests = () =>
  // getUnconfirmedGuests = () =>

  return (
    <div className='App'>
      <header>
        <h1>RSVP</h1>
        <p>A Treehouse App</p>
        <form>
          <input type='text' placeholder='Invite Someone' />
          <button type='submit' name='submit' value='submit'>
            Submit
          </button>
        </form>
      </header>

      <div className='main'>
        <div>
          <h2>Invitees</h2>
          <label>
            <input type='checkbox' /> Hide those who haven't responded
          </label>
        </div>

        <table className='counter'>
          <tbody>
            <tr>
              <td>Attending:</td>
              <td>2</td>
            </tr>
            <tr>
              <td>Unconfirmed:</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Total:</td>
              <td>3</td>
            </tr>
          </tbody>
        </table>

        <GuestList guests={guests} toggleConfirmation={toggleConfirmation} />
      </div>
    </div>
  )
}

export default App
