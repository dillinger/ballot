import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { PageLayout } from './pages/PageLayout'
import { PageCreate } from './pages/PageCreate'
import { PageList } from './pages/pageList'
import { PageDetails } from './pages/PageDetails'
import { HomePage } from './pages/PageHome'
import { PageNotFound } from './pages/PageNotFound'
import { Header } from './components/Header'

import { themeClass } from './theme.css'

function App() {
  return (
    <div className={themeClass}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <PageLayout header={<Header />}>
              <HomePage />
            </PageLayout>
          </Route>

          <Route path="/create" exact>
            <PageLayout header={<Header title="Create" />}>
              <PageCreate />
            </PageLayout>
          </Route>

          <Route path="/questions" exact>
            <PageLayout header={<Header title="Questions" />}>
              <PageList />
            </PageLayout>
          </Route>

          <Route path="/questions/:id" exact>
            <PageLayout header={<Header title="Details" />}>
              <PageDetails />
            </PageLayout>
          </Route>

          <Route path="*">
            <PageLayout header={<Header />}>
              <PageNotFound />
            </PageLayout>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
