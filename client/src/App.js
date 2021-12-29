import React from "react";

function App() {
  return (
    <div className="App">
      <h1>Git Practice</h1>
      <p>This is "-a" tag used to directly stage all the changes made in the file</p>
      <p>Fixed new bug in the file</p>
<<<<<<< HEAD
      <p>This changes in "Emergency-fix-branch" is going to merege in master branch</p>
=======
      <p>Finally this bug is fixed "Merge Conflict"</p>
>>>>>>> fix-1-bug
    </div>
  );
}

export default App;
