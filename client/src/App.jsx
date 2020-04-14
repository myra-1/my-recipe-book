import React, { Component } from 'react'
import './App.css'
import Home from './components/Home'
import Recipes from './components/Recipes'
import RecipeCreate from './components/RecipeCreate'
import RecipeEdit from './components/RecipeEdit'
import RecipeDetail from './components/RecipeDetail'
import { Route, Switch, Redirect } from 'react-router-dom'
import { verifyUser } from './services/user'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import SignOut from './components/SignOut'
import MyRecipes from './components/MyRecipes'

class App extends Component {
  constructor() {
    super()
    this.state = {
      user: null
    }
  }

  async componentDidMount() {
    const user = await verifyUser()
    if (user) {
      this.setState({ user })
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  render() {
    const { setUser, clearUser } = this
    const { user } = this.state
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" render={() => <Home user={user} />} />
          <Route exact path="/sign-up" render={props => <SignUp setUser={setUser} history={props.history} />} />
          <Route exact path="/sign-in" render={props => <SignIn setUser={setUser} history={props.history} />} />
          <Route exact path="/sign-out" render={props => <SignOut user={user} clearUser={clearUser} history={props.history} />} />
          <Route exact path="/recipes" render={() => <Recipes user={user} />} />
          <Route exact path="/my-recipes/:username" render={() => <MyRecipes user={user} />} />
          <Route exact path="/add-recipe" render={() => user ? <RecipeCreate user={user} /> : <Redirect to='/signup' />} />
          <Route exact path="/recipes/:id/edit" render={(props) => user ? <RecipeEdit {...props} user={user} /> : <Redirect to='/' />} />
          <Route exact path="/recipes/:id" render={(props) => <RecipeDetail {...props} history={props.history} user={user} />} />
        </Switch>
      </div>
    )
  }
}

export default App