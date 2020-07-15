const containerFluid = {
  paddingRight: '15px',
  paddingLeft: '15px',
  marginRight: 'auto',
  marginLeft: 'auto',
  width: '100%',
}

const imagesStyles = {
  imgRoundedCircle: {
    borderRadius: '50% !important',
  },
  imgRaised: {
    boxShadow: '0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
  },
  imgFooter: {
    width: '50%',
    marginTop: '1rem',
    marginBottom: '1rem',
  },
}

const contactHoursStyle = {
  section: {
    padding: '50px 25px',
  },
  container: {
    ...containerFluid,
    textAlign: 'center !important',
    color: '#FFF',
    zIndex: '3',
  },
  divider: {
    height: '5px',
  },
  dividerTop: {
    height: '100px',
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
