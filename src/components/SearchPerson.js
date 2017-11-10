import React from 'react';
import { Dropdown, Statistic } from 'semantic-ui-react'

export const SearchPerson = (props) => {

  // get unique usernames and sort them
  var user_hash = {}
  var user_list = props.all_data.map(x => x.username)
  user_list.forEach(x => { if (user_hash[x] === undefined) { user_hash[x] = 1 } } )
  user_list = Object.keys(user_hash).sort().map((x, i) => ({key: i+1, value: x, text: x }) )
  user_list.unshift({key: 0, value: "All Users", text: "All Users" })

  if (props.all_data.length > 0) {
    if ( !user_list.map(x => x.text.toLowerCase()).includes(props.username.toLowerCase()) ) {
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
                  value={ props.username }
                  scrolling={true}
                  compact={true}
                  noResultsMessage="No Users Found"

                  options={ user_list }
                  onChange={ props.handleNameChange }
        />
      </Statistic>
      <Statistic size='mini'>
      </Statistic>
    </Statistic.Group>

  )

}





export default SearchPerson
