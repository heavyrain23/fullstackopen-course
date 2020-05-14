import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonsForm from './components/PersonForm'
import Persons from './components/Persons'
import PersonService from './components/PersonService'
import Notification from './components/Notification'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [notification, setNotification] = useState({message: null, type: null})

  useEffect(() => {
    PersonService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const addNewPerson = (event) => {
    event.preventDefault()
    if (persons.findIndex(person => person.name === newName) > -1) {
      if (window.confirm(` user ${newName} already added on the list, replace it`)) {
        const id = persons.find(p => p.name === newName).id
        const nameObj = {
          name: newName,
          number: newNumber,
        }
        PersonService
          .update(id, nameObj)
          .then(newPerson => {
            const newMessage = {
              message: "Person is updated"}   

            setNotification(newMessage)
            setTimeout(() => {
              setNotification({...notification, message: null})
            }, 5000)

            const newPersons = persons.map(person => person.id !== id ? person : newPerson)
            setPersons(newPersons)

          })       

      }
    }
    else {
      const nameObj = {
        name: newName,
        number: newNumber,
      }

      PersonService
        .create(nameObj)
        .then(newPerson => {
          const newMessage = {
            message: "Person is added"}   
                       
          setNotification(newMessage)
          setTimeout(() => {
            setNotification({...notification, message: null})
          }, 5000)

          setPersons(persons.concat(newPerson))
          setNewName('')
          setNewNumber('')
        })
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  const deletePersonHandler = (id) => {
    const person = persons.find(p => p.id === id)
    if (window.confirm(`Delete this user ${person.name}?`)) {
      PersonService
        .deletePerson(id)
        .then(response => {
          setPersons(persons.filter(p => p.id !== id))
        })
    }

  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification state={notification} />
      <Filter value={newFilter} changeEvent={handleFilterChange} />
      <PersonsForm submitEvent={addNewPerson} nameValue={newName} nameChange={handleNameChange}
        valueNumber={newNumber} numberChange={handleNumberChange} />

      <h2>Numbers</h2>
      <Persons persons={persons} newFilter={newFilter} deletePerson={deletePersonHandler} />
    </div>
  )

}

export default App



