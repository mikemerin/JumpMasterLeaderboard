# README

This is an interactive leaderboard for the game I Wanna Be the Jump Master. This site was built with React.js, React Chart.js 2, and Semantic-UI-React.

![Main](https://imgur.com/PJLS8Gh.png)

Connecting to the [API](https://github.com/mikemerin/JumpMasterLeaderboardAPI) which collects all data from the game, this site can be used to data from view all runs, runs from a single user, and a in-depth info on a single run.

The left graph displays information on each individual jump, the right graph displays info on each run, the center has cumulative/average text data and more, and the bottoms are the leaderboard table which can be sorted across all columns.

![User](https://imgur.com/L6fcmNN.png)

Clicking on a user's name either in the leaderboard table or in the dropdown shows you the same data but filtered for that user. Global averages are added to the run graph for comparing.

![Run](https://imgur.com/cRSDYv3.png)

Finally you can click on an individual run to view complete data for it, including all jump points, totals, and streaks, along with highlighting any personal bests (PBs) or world records (WRs) that belong to this run.

# To be added:

* Stack if window width < 1200
* Once API is updated: easy/medium/hard/hardest jump totals will have PBs/WRs

# Unfixable for now

* Leaderboard not as compact, semantic-ui-react selectable bug on their end
* popup scrolls on fixed datacontainer, may need to use hideOnScroll
