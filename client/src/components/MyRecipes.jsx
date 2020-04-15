import React, { Component } from 'react'
import { verifyUser } from '../services/user'

class MyRecipes extends Component {
  constructor() {
    super()

    this.state = {
      user: undefined
    }
  }

  componentDidMount = async () => {
    const user = await verifyUser()
    this.setState({ user })
  }

  render() {
    return (
      <div>
        <h1>hello</h1>
        {/* {this.state.user.recipes[0].map((recipe, id) =>
          <div>
            <h1>{recipe.name}</h1>
          </div>
        )} */}
      </div>
    )
  }
}

export default MyRecipes