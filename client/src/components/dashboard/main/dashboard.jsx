import {
	AppBar, Collapse, Container, CssBaseline, Divider, Drawer, Grid, IconButton, List,
	ListItem, ListItemIcon, ListItemText, Paper, Toolbar, Typography
} from '@material-ui/core';
import SwitchMaterialUi from '@material-ui/core/Switch';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AddIcon from '@material-ui/icons/Add';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ClassIcon from '@material-ui/icons/Class';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import HomeIcon from '@material-ui/icons/Home';
import ListIcon from '@material-ui/icons/List';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import MenuIcon from '@material-ui/icons/Menu';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import PostAddIcon from '@material-ui/icons/PostAdd';
import WorkIcon from '@material-ui/icons/Work';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink, Redirect, Switch, useHistory } from 'react-router-dom';
import Swal from "sweetalert2";
import { changeTheme } from "../../../redux/darkModeReducer/actionsDarkMode";
import { stopNotification, userLogout } from "../../../redux/loginReducer/loginAction";
import { PrivateRoute } from '../../ProtectedRoute';
import BoomDetail from "../booms/BoomDetail";
import BoomList from "../booms/BoomList";
import PostBoom from "../booms/PostBoom";
import Cohort from '../cohort/Cohort';
import CohortDetailTable from '../cohort/cohortDetailTable/CohortDetailTable';
import ApplyList from '../jobs/ApplyList';
import JobDetail from '../jobs/JobDetail';
import JobList from '../jobs/JobList';
import PostJob from '../jobs/PostJob';
import AddLecture from '../lecture/AddLecture';
import EditLectures from '../lecture/EditLectures';
import LectureDetail from '../lecture/LectureDetail';
import ListLectures from '../lecture/lecturesTable/listLectures';
import NewsDetail from '../news/NewsDetail';
import NewsList from '../news/NewsList';
import NewsPost from '../news/NewsPost';
import Profile from "../profile/Profile";
import { Register } from '../register/Register';
import StudentLectures from '../studentLectures/StudentLectures';
import { Invite } from '../students/invite/Invite';
import Students from '../students/Students';
import StudentsList from '../students/studentsTable/StudenList';
import { useStyles } from './styles';

const showAlert = (message) => {
	return Swal.fire({
		title: `Feliz cumplañito ${message}.`,
		text: 'De parte de todo el equipo de henry te deseamos un feliz cumpleaños y un prospero año nuevo.',
		width: 550,
		imageUrl:'https://image.freepik.com/vector-gratis/gente-feliz-personajes-celebrando-cumpleanos_82574-6675.jpg',
		imageAlt: "cumplañito",
		imageWidth: 300,
		padding: '3em',
		backdrop: `rgba(182, 179, 179, 0.4)`,
		showConfirmButton: false,
	});
};

export default function Dashboard() {
	const dispatch = useDispatch();
	const classes = useStyles();
	const history = useHistory();
	const [openClasses, setOpenClasses] = useState(false);
	const user = useSelector(store => store.userLoggedIn.userInfo) || "";
	const type = useSelector(state => state.darkModeReducer.palette.type)
	const cumplañito = useSelector(store => store.userLoggedIn.cumplañito)
	const force = sessionStorage.getItem('force')
	const [state, setState] = useState({
		checkedA: false,
		checkedB: false,
	});
	const [open, setOpen] = useState(true);
  
	const handleDrawerOpen = () => {
		setOpen(true);
	};
	const handleDrawerClose = () => {
		setOpen(false);
		setOpenClasses(false)
	};

	const handleChange = (event) => {
		setState({ ...state, [event.target.name]: event.target.checked });
		dispatch(changeTheme(event.target.checked))
	};

	const logOutHandler = () => {
		dispatch(userLogout())
		history.push('/')
	};

	const handleClick = () => {
		setOpenClasses(!openClasses);
	};
	
	let roles = [];
	user.roles && user.roles.forEach(role => {
		return roles.push(role.name)
	})
  
	useEffect(() => {
		if (user && force) {
		history.push('/complete_profile')
		}
		if(user && !force){
		cumplañito && showAlert(user.firstName)
		dispatch(stopNotification())
		// history.push('/dashboard')
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [history, user]);

  	return (
    	<div className={classes.root}>
      		<CssBaseline />
      		<AppBar
        		position="absolute"
        		className={clsx(classes.appBar, open && classes.appBarShift)}
      		>
        	<Toolbar className={classes.toolbar}>
				<IconButton
					edge="start"
					color="primary"
					aria-label="open drawer"
					onClick={handleDrawerOpen}
					className={clsx(
					classes.menuButton,
					open && classes.menuButtonHidden
					)}
				>
					<MenuIcon />
				</IconButton>
				<Typography
					component="h1"
					variant="h6"
					color="primary"
					noWrap
					className={classes.title}
				>
					Admin Panel
				</Typography>
				{ type === 'dark' ? <Brightness7Icon color="primary" /> : <Brightness2Icon color="primary"/> }
			
				<SwitchMaterialUi
					checked={state.checkedB}
					onChange={handleChange}
					color="primary"
					name="checkedB"
					inputProps={{ 'aria-label': 'primary checkbox' }}
				/>
        	</Toolbar>
      	</AppBar>
      	<Drawer
			variant="permanent"
			classes={{
			paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
			}}
			open={open}
		>
			<div className={classes.toolbarIcon}>
				<IconButton onClick={handleDrawerClose}>
					<ChevronLeftIcon />
				</IconButton>
			</div>
			<Divider />
			<List>
				<div>
					<ListItem button component={RouterLink} to="/">
						<ListItemIcon>
							<HomeIcon />
						</ListItemIcon>
						<ListItemText primary="Home" />
					</ListItem>
					<ListItem button component={RouterLink} to={`/dashboard/perfil/${user.id}`}>
						<ListItemIcon>
							<AccountCircleIcon />
						</ListItemIcon>
						<ListItemText primary="Perfil" />
					</ListItem>
					{
						user && roles.includes("student") ?
						<ListItem button component={RouterLink} to="/dashboard/misClases/">
							<ListItemIcon>
								<AccountBalanceIcon/>
							</ListItemIcon>
							<ListItemText primary="Mis Clases"/>
						</ListItem>
						: ""
					}
					{
						user && roles.includes("instructor") && !roles.includes("staff") ?
							< >
								<ListItem button onClick={handleClick} >
									<ListItemIcon>
										<ClassIcon />
									</ListItemIcon>
									<ListItemText primary="Clases" />
									{openClasses ? <ExpandLess /> : <ExpandMore />}
								</ListItem>
								<Collapse in={openClasses} timeout="auto" unmountOnExit>
									<List component="div" disablePadding>
										<ListItem button className={classes.nested} component={RouterLink} to="/dashboard/lista_clases">
											<ListItemIcon>
												<ListIcon />
											</ListItemIcon>
											<ListItemText primary="Todas las Clases" />
										</ListItem>
										<ListItem button className={classes.nested} component={RouterLink} to="/dashboard/agregar_clase">
											<ListItemIcon>
												<AddIcon />
											</ListItemIcon>
											<ListItemText primary="Subir Clase" />
										</ListItem>
									</List>
								</Collapse>
								<ListItem button component={RouterLink} to="/dashboard/cohortes">
									<ListItemIcon>
										<GroupWorkIcon />
									</ListItemIcon>
									<ListItemText primary="Cohortes" />
								</ListItem>
								<ListItem button component={RouterLink} to="/dashboard/alumnos">
									<ListItemIcon>
										<PeopleAltIcon />
									</ListItemIcon>
									<ListItemText primary="Alumnos" />
								</ListItem>
								<ListItem button component={RouterLink} to="/dashboard/postboom">
									<ListItemIcon>
										<FlightTakeoffIcon />
									</ListItemIcon>
									<ListItemText primary="Publicar Boom" />
								</ListItem>
								<ListItem button component={RouterLink} to="/dashboard/misClases/">
									<ListItemIcon>
										<GroupWorkIcon />
									</ListItemIcon>
									<ListItemText primary="Cohortes" />
								</ListItem>
								<ListItem button component={RouterLink} to="/dashboard/joblist/">
									<ListItemIcon>
										<WorkIcon />
									</ListItemIcon>
									<ListItemText primary="Ofertas de Trabajo" />
								</ListItem>
								<ListItem button component={RouterLink} to="/dashboard/newslist/">
									<ListItemIcon>
										<AnnouncementIcon />
									</ListItemIcon>
									<ListItemText primary="Noticias" />
								</ListItem>
							</>
						: null	
					}
					{ 
						user && roles.includes("staff") 
						? 	<>
								<ListItem button component={RouterLink} to="/dashboard/cohortes">
									<ListItemIcon>
										<GroupWorkIcon />
									</ListItemIcon>
									<ListItemText primary="Cohortes" />
								</ListItem>
								<ListItem button component={RouterLink} to="/dashboard/alumnos">
									<ListItemIcon>
										<PeopleAltIcon />
									</ListItemIcon>
									<ListItemText primary="Alumnos" />
								</ListItem>
								<ListItem button component={RouterLink} to="/dashboard/register">
									<ListItemIcon>
										<LockOpenIcon />
									</ListItemIcon>
									<ListItemText primary="Registrar usuario" />
								</ListItem>
								<ListItem button component={RouterLink} to="/dashboard/lista_clases">
									<ListItemIcon>
										<ListIcon />
									</ListItemIcon>
									<ListItemText primary="Todas las Clases" />
								</ListItem>
								<ListItem button component={RouterLink} to="/dashboard/newspost">
									<ListItemIcon>
										<PostAddIcon />
									</ListItemIcon>
									<ListItemText primary="Publicar Noticias" />
								</ListItem>
								<ListItem button component={RouterLink} to="/dashboard/newslist/">
									<ListItemIcon>
										<AnnouncementIcon />
									</ListItemIcon>
									<ListItemText primary="Noticias" />
								</ListItem>
								<ListItem button component={RouterLink} to="/dashboard/postjob">
									<ListItemIcon>
										<WorkIcon />
									</ListItemIcon>
									<ListItemText primary="Publicar Trabajo" />
								</ListItem>
								<ListItem button component={RouterLink} to="/dashboard/joblist/">
									<ListItemIcon>
										<WorkIcon />
									</ListItemIcon>
									<ListItemText primary="Ofertas de Trabajo" />
								</ListItem>
								<Divider />
								<ListItem button onClick={logOutHandler}>
									<ListItemIcon>
										<ExitToAppIcon />
									</ListItemIcon>
									<ListItemText primary="Cerrar sesión" />
								</ListItem>
						  	</>
						: null
					}
				</div>
        	</List>
    	</Drawer>
      		<main className={classes.content}>
            	<div className={classes.appBarSpacer} />
            	<Container maxWidth="lg" className={classes.container}>
					<Grid container spacing={3}>
						<Grid item xs={12} md={12} lg={12}>
							<Paper className={classes.paper} >
								<Switch>
									<PrivateRoute roles={['staff', 'instructor', 'student']} path='/dashboard/perfil/:id' component={Profile}/>
									<PrivateRoute roles={['staff', 'instructor', 'student']} path="/dashboard/newslist" component={NewsList}/>
									<PrivateRoute roles={['staff', 'instructor', 'student']} exact path="/dashboard/joblist/:id" component={JobDetail}/>
									<PrivateRoute roles={['staff', 'instructor', 'student']} exact path="/dashboard/boomlist/:id" component={BoomDetail}/>
									<PrivateRoute roles={['staff', 'instructor', 'student']} exact path="/dashboard/news/list/:id" component={NewsDetail}/>
									<PrivateRoute roles={['staff', 'instructor']} exact path="/dashboard/cohortes" component={Cohort} />
									<PrivateRoute roles={['staff', 'instructor']} exact path="/dashboard/cohortes/:id" component={CohortDetailTable} />
									<PrivateRoute roles={['staff', 'instructor']} path="/dashboard/alumnos" component={Students} />
									<PrivateRoute roles={['staff', 'instructor']} path="/dashboard/invite" component={Invite} />
									<PrivateRoute roles={['staff', 'instructor']} path='/dashboard/lista_clases' component={ListLectures} />
									<PrivateRoute roles={['staff', 'instructor']} path="/dashboard/studentslist" component={StudentsList} />
									<PrivateRoute roles={['staff', 'student']} path="/dashboard/joblist" component={JobList}/>
									<PrivateRoute roles={['instructor']} path='/dashboard/agregar_clase' component={AddLecture} />
									<PrivateRoute roles={['instructor']} path='/dashboard/clase/:idLecture/edit' component={EditLectures} />
									<PrivateRoute roles={['student']} path='/dashboard/misClases' component={StudentLectures} />
									<PrivateRoute roles={['student']} path="/dashboard/postboom" component={PostBoom} />
									<PrivateRoute roles={['student']} path='/dashboard/clase/:id/detalle' component={LectureDetail} />
									<PrivateRoute roles={['staff']} exact path="/dashboard/applylist/:id" component={ApplyList}/>
									<PrivateRoute roles={['staff']} path="/dashboard/register" component={Register} />
									<PrivateRoute roles={['staff']} path="/dashboard/postjob" component={PostJob} />
									<PrivateRoute roles={['staff']} path="/dashboard/newspost" component={NewsPost} />
									<PrivateRoute roles={['staff']} path="/dashboard/boomlist" component={BoomList} />
									{force === 'pending' && <Redirect to='/complete_profile'/>}
								</Switch>
							</Paper>
						</Grid>
					</Grid>
            	</Container>
        	</main>
    	</div>
  	);
};
