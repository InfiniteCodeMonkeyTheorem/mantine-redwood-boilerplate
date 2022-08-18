import { MetaTags } from '@redwoodjs/web'

import ArticlesCell from 'src/components/ArticlesCell'
import MarketingHero from 'src/components/organisms/MarketingHero'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <MarketingHero />
      <ArticlesCell />
    </>
  )
}

export default HomePage
