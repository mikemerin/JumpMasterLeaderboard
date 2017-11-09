import React from 'react';
import { Dropdown } from 'semantic-ui-react'

export const SearchPerson = (props) => {

  // possible bug: name is 'all', or resetting to basics, may not matter

  // get unique usernames and sort them
  var person_hash = {}
  var person_list = props.all_data.map(x => x.username)
  person_list.forEach(x => { if (person_hash[x] === undefined) { person_hash[x] = 1 } } )
  person_list = Object.keys(person_hash).sort().map((x, i) => ({key: i+1, value: x, text: x }) )
  person_list.unshift({key: 0, value: "All Users", text: "All Users" })

  return (
    <Dropdown fluid search selection labeled

              placeholder="All Users"
              selected="custom"
              scrolling={true}
              compact={true}
              noResultsMessage="No Users Found"

              options={ person_list }
              onChange={ props.handleNameChange } />
  )

}





export default SearchPerson
