import Home from '@/views/Home'
import Manager from '@/views/Manager'
import SignIn from '@/views/SignIn'
import Shell from '@/views/Shell'

export default [{
  component: Home,
  meta: { logins: ['quest', 'user', 'admin', 'root'] },
  name: 'home',
  path: '/'
}, {
  component: Manager,
  meta: { logins: ['admin', 'root'] },
  name: 'manager',
  path: '/manager'
}, {
  component: SignIn,
  meta: { logins: ['quest'] },
  name: 'sign-in',
  path: '/sign-in'
}, {
  component: Shell,
  meta: { logins: ['quest', 'user'] },
  name: 'shell',
  path: '/shell'
}]
