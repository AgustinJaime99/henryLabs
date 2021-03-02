import { makeStyles } from '@material-ui/core'

export const chipStyles = {
  backgroundColor: '#d4cfc9',
  borderRadius: '200px 200px 200px 200px',
  width: '35px',
  height: '35px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer'
}

export const useStylesProfile = makeStyles((theme) => ({
    PaperModal: {
      padding: theme.spacing(3),
    },
    large: {
      width: theme.spacing(22),
      height: theme.spacing(22),
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(2),
    },
    medium: {
      width: theme.spacing(6),
      height: theme.spacing(6),
      marginBottom: theme.spacing(1),
      marginRight: theme.spacing(2),
    },
    root: {
      border: 10,
      borderRadius: 20,
      marginTop: theme.spacing(2),
      minWidth: theme.spacing(100),
      fontWeight: "bold"
      
    },
    title: {
      fontSize: 20,
      marginBottom: theme.spacing(3),
      fontWeight: "bold",
    },
    subTitle: {
      fontSize: 18,
      margin: theme.spacing(0,0,3,0),
      fontWeight: "bold",
    },
    pos: {
      margin: theme.spacing(2,0,1,0),
      fontSize: '1rem',
    },
    button: {
      display: "flex",
      justifyContent: "flex-end",
    },
    dataUser: {
      marginLeft: theme.spacing(1),
    },
    info:{
      display:"flex",
      alignItems:"center"
    },
    linked:{
      textDecoration: "none"
    }
  }));

export const useStylesUpdateProfile = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(1),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(2),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    align: {
      display: "flex",
      justifyContent: "flex-end",
    },
  }));