# README

This is an API for the fangame I Wanna Be the Jump Master, storing user information and scores for leaderboards.

# To be added:

* larger icon for modal
* Stack if window width < 1200
*
* About page (as modal)
* X need to route from runs to users and vice versa X (now /u/:u/i/:i)
* * use state, add back "type"

* * Run Leaderboards
* use routerProps and: if (!!id) use other data

* Add comparing data, dataContainer needs to update for it (will happen through new routes)
* Search turns into “back” as context.router.history.push.last?
*  * OR button switches to “back to user” and “back to all runs”


# Small bugs to fix

* Run to Score routes don't update state

# Unfixable for now

* Leaderboard not as compact, semantic-ui-react selectable bug on their end
* popup scrolls on fixed datacontainer, may need to use hideOnScroll




important:


CWRP handles the re-rendering so:


for runs: this.setState({ username: "N/A" })

this triggers CWRP and allows the re-rendering of the component in and out, including in App.js
