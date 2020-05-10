import Manager from '@/views/Manager'
import SignIn from '@/views/SignIn'

export default [{
  component: SignIn,
  name: 'sign-in',
  path: '/sign-in',
  meta: {
    logins: ['quest']
  }
}, {
  component: Manager,
  name: 'manager',
  path: '/',
  meta: {
    logins: ['root', 'admin', 'quest']
  }
}]
