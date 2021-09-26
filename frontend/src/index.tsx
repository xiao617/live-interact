import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { store } from './app/store'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'
import MainPage from './pages/MainPage'
import { MockServer } from './service/MockServer'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import CreateRoom from './pages/CreateRoom'
import QuestionRoom from './pages/QuestionRoom'
import Dashboard from './pages/Dashboard'
import LoginPage from './pages/LoginPage'

const environment = process.env.NODE_ENV

// if (environment !== 'production') {
//   MockServer({ environment })
// }

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainPage}></Route>
          <Route exact path="/create-room" component={CreateRoom}></Route>
          <Route exact path="/login" component={LoginPage}></Route>
          <Route path="/question-room/:roomId" component={QuestionRoom}></Route>
          <Route exact path="/dashboard" component={Dashboard}></Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
