import React from 'react'

const App = () => {
  return (
    <>
    <div>AI Blogs</div>

    <ol>
      <li>AI HELTHCARE</li>
      <li>AI SPORT</li>
    </ol>
    <form>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name ="name" /><br/>
      <label htmlFor="email">email:</label>
      <input type="text" id="email" name ="email" /><br/>
      <label htmlFor="message">Message:</label>
      <input type="text" id="message" name ="message" /><br/>
      <button type="submit">Submit</button>
    </form>
    </>
  )
}

export default App