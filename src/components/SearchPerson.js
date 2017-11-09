import React from 'react';
import { Dropdown } from 'semantic-ui-react'

export const SearchPerson = (props) => {

  // possible bug: name is 'all', or resetting to basics, may not matter

  // get unique usernames and sort them
  var person_hash = {}
  var person_list = props.all_data.map(x => x.username)
  person_list.forEach(x => { if (person_hash[x] === undefined) { person_hash[x] = 1 } } )
  person_list = Object.keys(person_hash).sort().map((x, i) => ({key: i, value: x, text: x }) )

  return (
    <Dropdown placeholder='Choose a Person'
              selected="custom"
              fluid search selection options={ person_list }
              onChange={ props.handleNameChange } />
  )

}





export default SearchPerson
