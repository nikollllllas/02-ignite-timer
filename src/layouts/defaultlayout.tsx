import { Outlet } from 'react-router-dom'
import { Header } from '../components/header'

import { LayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <div>
      <LayoutContainer>
        <Header />

        <Outlet />
      </LayoutContainer>
    </div>
  )
}
