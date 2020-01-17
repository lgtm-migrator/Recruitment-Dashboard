import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/applicantDashboard.vue'
import register from '../views/signup.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/register',
    name:'register',
    component: register,
    meta: {
      requiresGuest: true
    }
  },
  {
    path: '/login',
    name:'login',
    component: () => import(/* webpackChunkName: "signUp" */ '../views/login.vue'),
    meta: {
      requiresGuest: true
    }
  },
  {
    path: '/applicantSidebar',
    name:'applicantSidebar ',
    component: () => import(/* webpackChunkName: "applicantSidebar" */ '../components/applicantSidebar.vue')
  },
  {
    path: '/applicantdashboard',
    name:'applicantDashboard',
    component: () => import(/* webpackChunkName: "applicantDashboard" */ '../views/applicantDashboard.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/entries',
    name:'entries',
    component: () => import(/* webpackChunkName: "entries" */ '../views/entries.vue')
  },
  {
    path: '/Create',
    name:'Create',
    component: () => import(/* webpackChunkName: "Create" */ '../views/Create.vue')
  },
  {
    path: '/Assessment',
    name:'Assessment',
    component: () => import(/* webpackChunkName: "Assessment" */ '../components/Assessment.vue')
  },
  {
    path: '/createPage',
    name:'createPage ',
    component: () => import(/* webpackChunkName: "createPage" */ '../components/createPage.vue')
  },
  {
    path: '/ComposePage',
    name:'ComposePage',
    component: () => import(/* webpackChunkName: "ComposePage" */ '../components/ComposePage.vue')
  },
  {
    path: '/adminsidebar',
    name:'adminsidebar',
    component: () => import(/* webpackChunkName: "adminsidebar" */ '../components/AdminSidebar.vue')
  },
  {
    path: '/takeAssessment',
    name:'takeAssessment',
    component: () => import(/* webpackChunkName: "takeAssessment" */ '../views/takeAssessment.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/composeAssessment',
    name:'composeAssessment',
    component: () => import(/* webpackChunkName: "composeAssessment" */ '../views/composeAssessment.vue')
  },
  {
    path: '/question',
    name:'question',
    component: () => import(/* webpackChunkName: "question" */ '../views/question.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/successfulPage',
    name:'successfulPage',
    component: () => import(/* webpackChunkName: "successfulPage" */ '../views/successfulPage.vue')
  },
  {
    path: '/applicantSignup',
    name:'applicantSignup',
    component: () => import(/* webpackChunkName: "applicantSignup" */ '../views/applicantSignup.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/questionPage',
    name:'QuestionPage',
    component: () => import(/* webpackChunkName: "QuestionPage" */ '../components/QuestionPage.vue')
  },
  {
    path: '/success',
    name:'success',
    component: () => import(/* webpackChunkName: "Success" */ '../components/Success.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/test',
    name:'test',
    component: () => import(/* webpackChunkName: "Success" */ '../components/TestTester.vue'),
    meta: {
      requiresAuth: true
    }
  },

  {
    path: '/admindashboard',
    name:'admindashboard',
    component: () => import(/* webpackChunkName: "Success" */ '../components/adminDashboard.vue')
  },

  {
    path: '/adminapplication',
    name:'adminapplication',
    component: () => import(/* webpackChunkName: "Success" */ '../components/CreateApplication.vue')
  },

  {
    path: '/adminquestion',
    name:'adminquestion',
    component: () => import(/* webpackChunkName: "Success" */ '../components/CreateQstn.vue')
  },

  {
    path: '/adminlogin',
    name:'adminlogin',
    component: () => import(/* webpackChunkName: "Success" */ '../components/AdminLogin.vue')
  },

  {
    path: '/adminentries',
    name:'adminentries',
    component: () => import(/* webpackChunkName: "Success" */ '../components/EntriesTable.vue')
  },

  {
    path: '/adminresult',
    name:'adminresult',
    component: () => import(/* webpackChunkName: "Success" */ '../components/ResultsTable.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
