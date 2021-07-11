import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { PageLayout } from './pages/page-layout'
import { PageCreate } from './pages/page-create'
import { PageList } from './pages/page-list'
import { PageDetails } from './pages/page-details'
import { HomePage } from './pages/page-home'
import { PageNotFound } from './pages/page-not-found'
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
            <PageLayout header={<Header pageTitle="Create" />}>
              <PageCreate />
            </PageLayout>
          </Route>

          <Route path="/questions" exact>
            <PageLayout header={<Header pageTitle="Questions" />}>
              <PageList />
            </PageLayout>
          </Route>

          <Route path="/questions/:id" exact>
            <PageLayout header={<Header pageTitle="Questions Details" />}>
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
