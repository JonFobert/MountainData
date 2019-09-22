# Mountain Data
Mountain data uses React, React-transition-group and Uber's react-vis for creating graphs.

React-transition-group is used to ensure a smooth transition when the inputs to the graph change.

One of the most important aspects of getting this right is using a single source of truth. State from the x and y axis selectors is passed up to the app level and then down to the graph. State is also passed down to the selectors themselves. This ensures the graph and the selectors are always in sync.