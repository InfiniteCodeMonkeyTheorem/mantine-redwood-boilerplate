import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const AppPage = () => {
  return (
    <>
      <MetaTags title="App" description="App page" />

      <h1>AppPage</h1>
      <p>
        Find me in <code>./web/src/pages/AppPage/AppPage.tsx</code>
      </p>
      <p>
        My default route is named <code>app</code>, link to me with `
        <Link to={routes.app()}>App</Link>`
      </p>
    </>
  )
}

export default AppPage
