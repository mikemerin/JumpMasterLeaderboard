# README

This is an API for the fangame I Wanna Be the Jump Master, storing user information and scores for leaderboards.

# To be added:

* About page (as modal)
* X need to route from runs to users and vice versa X (now /u/:u/i/:i)
* * use state, add back "type"

* * Run Leaderboards

* Add comparing data, dataContainer needs to update for it (will happen through new routes)
* Search turns into “back” as context.router.history.push.last?
*  * OR button switches to “back to user” and “back to all runs”
* Change run route to /username/:username/id/:id
* ? If id add to routerprops ?

# Small bugs to fix

* Top: stack if window width < 1200
* * popup scrolls on fixed datacontainer, may need to use hideOnScroll
* Leaderboard not as compact, may have to do with links
