import {
  NotFoundContainer,
  ContentContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundNote,
} from './styledComponent'

const NotFound = () => (
  <NotFoundContainer>
    <ContentContainer>
      <NotFoundImage
        src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
        alt="not found"
      />
      <NotFoundHeading>Page Not Found</NotFoundHeading>
      <NotFoundNote>
        We are sorry, the page you requested could not be found.
      </NotFoundNote>
    </ContentContainer>
  </NotFoundContainer>
)

export default NotFound
