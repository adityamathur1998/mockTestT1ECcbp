import {withRouter} from 'react-router-dom'

import {HeaderContainer, LinkItem, WebsiteLogo} from './styledComponent'

const Header = () => (
  <HeaderContainer>
    <LinkItem to="/">
      <WebsiteLogo
        src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
        alt="website logo"
      />
    </LinkItem>
  </HeaderContainer>
)

export default withRouter(Header)
