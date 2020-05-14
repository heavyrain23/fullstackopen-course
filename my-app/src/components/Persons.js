import React from 'react'
import Person from './Person'


const Persons = ({persons, newFilter, deletePerson }) => {
    let personsToShow = persons;
    if (newFilter) {
        personsToShow = persons.filter(person => person.name.toLocaleLowerCase().includes(newFilter.toLocaleLowerCase()))
    };

    const rows = () => personsToShow.map(person =>
        <Person key={person.name} name={person.name} number={person.number} deletePerson={() => deletePerson(person.id)} />
    )

    return (
		<ul>
			{rows()}
		</ul>
	)
}

export default Persons