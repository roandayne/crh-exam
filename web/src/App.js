import { useEffect } from 'react'

const App = () => {
  useEffect(() => {
    const testAuth = async () => {
      // delete session
      let resp = await fetch('/api/sessions/', { method: 'DELETE' })
      console.log(await resp.json())
      // test session. should be unauthenticated
      resp = await fetch('/api/sessions/')
      console.log(await resp.json())

      // try to authenticate
      resp = await fetch('/api/sessions/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: 'testuser',
          password: 'password'
        })
      })
      console.log(await resp.json())

      // test session again. should be authenticated now
      resp = await fetch('/api/sessions/')
      console.log('wew', await resp.json())
    }

    testAuth()
  }, [])

  return (
    <h1>Hello</h1>
  )
}

export default App