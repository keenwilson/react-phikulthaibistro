const containerFluid = {
  paddingRight: '15px',
  paddingLeft: '15px',
  marginRight: 'auto',
  marginLeft: 'auto',
  paddingTop: '60px',
  width: '100%',
}
const container = {
  ...containerFluid,
  '@media (min-width: 576px)': {
    maxWidth: '540px',
  },
  '@media (min-width: 768px)': {
    maxWidth: '720px',
  },
  '@media (min-width: 992px)': {
    maxWidth: '960px',
  },
  '@media (min-width: 1200px)': {
    maxWidth: '1140px',
  },
}

const title = {
  color: '#3C4858',
  margin: '1.75rem 0 0.875rem',
  textDecoration: 'none',
  fontWeight: '700',
  fontFamily: `'Roboto', sans-serif`,
}

const imagesStyles = {
  imgFluid: {
    maxWidth: '100%',
    height: 'auto',
  },
  imgRounded: {
    borderRadius: '6px !important',
  },
  imgRoundedCircle: {
    borderRadius: '50% !important',
  },
  imgRaised: {
    boxShadow: '0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
  },
  imgGallery: {
    width: '100%',
    marginBottom: '2.142rem',
  },
  imgCardTop: {
    width: '100%',
    borderTopLeftRadius: 'calc(.25rem - 1px)',
    borderTopRightRadius: 'calc(.25rem - 1px)',
  },
  imgCardBottom: {
    width: '100%',
    borderBottomLeftRadius: 'calc(.25rem - 1px)',
    borderBottomRightRadius: 'calc(.25rem - 1px)',
  },
  imgCard: {
    width: '100%',
    borderRadius: 'calc(.25rem - 1px)',
  },
  imgCardOverlay: {
    position: 'absolute',
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
    padding: '1.25rem',
  },
}

const lunchMenuPageStyle = {
  container,
  divider: {
    height: '90px',
  },
  profile: {
    textAlign: 'center',
    '& img': {
      maxWidth: '160px',
      width: '100%',
      margin: '0 auto',
      transform: 'translate3d(0, -50%, 0)',
    },
  },
  description: {
    margin: '1.071rem auto 0',
    maxWidth: '600px',
    color: '#999',
    textAlign: 'center !important',
    paddingLeft: '25px',
    paddingRight: '25px',
  },
  nameTop: {
    marginTop: '-80px',
    paddingBottom: '10px',
  },
  name: {
    paddingBottom: '10px',
  },
  ...imagesStyles,
  main: {
    background: '#FFFFFF',
    position: 'relative',
    zIndex: '3',
  },
  mainRaised: {
    margin: '-60px 30px 0px',
    borderRadius: '6px',
    boxShadow:
      '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
  },
  title: {
    ...title,
    display: 'inline-block',
    position: 'relative',
    marginTop: '30px',
    minHeight: '32px',
    textDecoration: 'none',
  },
  pageTitle: {
    ...title,
    color: '#fff',
  },
  socials: {
    marginTop: '0',
    width: '100%',
    transform: 'none',
    left: '0',
    top: '0',
    height: '100%',
    lineHeight: '41px',
    fontSize: '20px',
    color: '#999',
  },
  navWrapper: {
    margin: '20px auto 50px auto',
    textAlign: 'center',
  },
}

export default lunchMenuPageStyle
