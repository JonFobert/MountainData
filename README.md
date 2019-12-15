# Mountain Data
Mountain Data uses React, React-transition-group and Uber's react-vis for creating graphs.

React-transition-group is used to ensure a smooth transition when the inputs to the graph change.

In order to keep the code organized, a sinlge source of truth is necessary is using a single source of truth. State from the x and y axis dropdown menus is passed up to the app level and then down to the graph. State is also passed down to the dropdown menus themselves. This ensures the graph and the selectors are always in sync.

The size of the circle corresponds to the variable that was not selected from the dropdown menu. If the cursor hovers over an individual data point a "hint" displays with the the value of the that unselected variable.