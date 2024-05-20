import React from "react";
import TodoContainer from "./components/TodoContainer";

function App() {
  return (
    <>
      <header id='header'>
        <div className='container'>
          <h1>My To-Do List</h1>
        </div>
      </header>
      <main id='main'>
        <div className='container'>
          <TodoContainer />
        </div>
      </main>
    </>
  );
}

export default App;
