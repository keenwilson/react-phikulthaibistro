const containerFluid = {
  paddingRight: '15px',
  paddingLeft: '15px',
  marginRight: 'auto',
  marginLeft: 'auto',
  width: '100%',
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

const contactHoursStyle = {
  section: {
    padding: '70px 25px',
  },
  container: {
    ...containerFluid,
    textAlign: 'center !important',
    color: '#FFF',
  },
  divider: {
    height: '125px',
  },
  ...imagesStyles,
  link: {
    textDecoration: 'none',
  },
  icons: {
    width: '20px',
    height: '20px',
    marginRight: '3px',
  },
}

export default contactHoursStyle
