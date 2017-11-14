import React from 'react';
import { Dropdown, Statistic } from 'semantic-ui-react'

export const SearchPerson = (props) => {

  var { user_list, all_data, username, handleNameChange } = props

  // map keys/values/text for user_list
  user_list = user_list.map((x, i) => ({key: i+1, value: x, text: x }) )
  user_list.unshift({key: 0, value: "All Users", text: "All Users" })

  if (all_data.length > 0 && !user_list.map(x => x.text.toLowerCase()).includes(username.toLowerCase()) )
      { alert(`Sorry, no runs for '${username}' were found.\n\nPlease choose another name from the dropdown menu.`) }

  if (all_data.length > 0 && all_data[0].username === "Sorry, no data was found")
    { return ( <div /> ) }
  else
    { return (
    <Statistic.Group widths={3}>
      <Statistic size='mini'>
      </Statistic>
      <Statistic size='mini'>
        <Dropdown fluid search selection labeled

                  placeholder="All Users"
                  selected="custom"
                  value={ username }
                  scrolling={true}
                  compact={true}
                  noResultsMessage="No Users Found"

                  options={ user_list }
                  onChange={ handleNameChange }
        />
      </Statistic>
      <Statistic size='mini'>
      </Statistic>
    </Statistic.Group>
  )
}

}





export default SearchPerson
