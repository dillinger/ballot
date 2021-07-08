import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import { ErrorBoundary } from './components/error-boundary'

import { PageLayout } from './pages/page-layout'
import { Create } from './pages/create'
import { List } from './pages/list'
import { Details } from './pages/details'
import { HomePage } from './pages/home'
import { PageNotFound } from './pages/page-not-found'

type HeaderProps = {
  pageTitle?: string;
}

function Header({pageTitle}: HeaderProps) {
  return (
    <h1>
      <Link to="/">Ballot</Link> | <span>{pageTitle}</span>
    </h1>
  )
}

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <Switch>
          <Route path="/" exact>
            <PageLayout
              header={<Header />}
              main={<HomePage />}
            />
          </Route>

          <Route path="/create" exact>
            <PageLayout
              header={<Header pageTitle="Create" />}
              main={<Create />}
            />
          </Route>

          <Route path="/questions" exact>
            <PageLayout
              header={<Header pageTitle="Questions" />}
              main={<List />}
            />
          </Route>

          <Route path="/questions/:id" exact>
            <PageLayout
              header={<Header pageTitle="Questions Details" />}
              main={<Details />}
            />
          </Route>

          <Route path="*">
            <PageLayout
              header={<Header />}
              main={<PageNotFound />}
            />
          </Route>
        </Switch>
      </ErrorBoundary>
    </Router>
  )
}

export default App
