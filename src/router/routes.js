import routesComponent from './routesComponent.js'

//路由配置
export default [
  {
  	path: '/home',
  	name: 'Home',
  	component: routesComponent.Home
  },
  {
		path: '/',
		redirect: "/Main/index"
	},
  {
  	path: '/Main',
  	name: 'Main',
  	component: routesComponent.Main,
	  children: [
			{
				path: 'index',
				name: 'Index',
				component: routesComponent.Index
			},
			{
				path: 'Search',
				name: 'Search',
				component: routesComponent.Search
			},
			{
				path: 'Songtj/:id',
				name: 'Songtj',
				component: routesComponent.Songtj
			},
			{
				path: 'My',
				name: 'My',
				component: routesComponent.My
			},
			{
				path: 'Heart',
				name: 'Heart',
				component: routesComponent.Heart
			}
		]
  },
  {
  	path: '/Do',
  	name: 'Do',
  	component: routesComponent.Do
  },
  {
  	path: '/Musicpage/:uid',
  	name: 'Musicpage',
  	component: routesComponent.Musicpage
  },
  {
  	path: '/Musicsearch',
  	name: 'Musicsearch',
  	component: routesComponent.Musicsearch
  },
  {
  	path: '/Login',
  	name: 'Login',
  	component: routesComponent.Login
  },
  {
  	path: '/Register',
  	name: 'Register',
  	component: routesComponent.Register
  },
  {
  	path: '/Scmusice/:mid',
  	name: 'Scmusice',
  	component: routesComponent.Scmusice
  },
  {
  	path: '/Searmusice/:sid',
  	name: 'Searmusice',
  	component: routesComponent.Searmusice
  }

]
