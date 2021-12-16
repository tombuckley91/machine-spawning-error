# machine-spawning-error

Demonstration of machines respawning

Press the search button to trigger a search that will throw an error.

This causes the "SearchMachine" to send an event to its parent, the "RootMachine". The "RootMachine" then forwards this on to a sibling of Search, called the "EventsMachine". If the search machine does not error, then multiple machines are not spawned, but as soon as the search does error, it spawns a new set of child machines from the parent.
