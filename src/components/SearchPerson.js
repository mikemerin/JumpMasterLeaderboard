import React from 'react';
import { Dropdown, Statistic } from 'semantic-ui-react'

export const SearchPerson = (props) => {

  // possible bug: name is 'all', or resetting to basics, may not matter

  // get unique usernames and sort them
  var person_hash = {}
  var person_list = props.all_data.map(x => x.username)
  person_list.forEach(x => { if (person_hash[x] === undefined) { person_hash[x] = 1 } } )
  person_list = Object.keys(person_hash).sort().map((x, i) => ({key: i+1, value: x, text: x }) )
  person_list.unshift({key: 0, value: "All Users", text: "All Users" })

  if (props.all_data.length > 0) {
    if ( !person_list.map(x => x.text.toLowerCase()).includes(props.username.toLowerCase()) ) {
      alert(`Sorry, no runs for '${props.username}' were found.`)
    }
  }

  return (
    <Statistic.Group widths={3}>
      <Statistic size='mini'>
      </Statistic>
      <Statistic size='mini'>
        <Dropdown fluid search selection labeled

                  placeholder="All Users"
                  selected="custom"
                  defaultValue={ props.username }
                  scrolling={true}
                  compact={true}
                  noResultsMessage="No Users Found"

                  options={ person_list }
                  onChange={ props.handleNameChange }
        />
      </Statistic>
      <Statistic size='mini'>
      </Statistic>
    </Statistic.Group>

  )

}





export default SearchPerson
