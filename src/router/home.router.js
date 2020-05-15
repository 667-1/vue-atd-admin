import { RouteView, PageView } from '@/layouts'
import { bxAnaalyse } from '@/core/icons'

export default [
  {
    path: 'dashboard',
    name: 'dashboard',
    redirect: '/dashboard/analysis',
    component: RouteView,
    meta: { title: '仪表盘', keepAlive: true, icon: bxAnaalyse, permission: ['super'] },
    children: [
      {
        path: 'analysis',
        name: 'Analysis',
        component: () => import('@/views/dashboard/Analysis'),
        meta: { title: '分析页', keepAlive: false, permission: ['super'] }
      },
      {
        path: 'test',
        name: 'test',
        redirect: '/dashboard/test/form',
        component: PageView,
        hideChildrenInMenu: true,
        meta: { title: '测试', keepAlive: false, permission: ['super'] },
        children: [
          {
            path: 'form',
            name: 'form',
            component: () => import('@/views/home/index'),
            meta: { title: '测试form', keepAlive: false, permission: ['super'] }
          }
        ]
      }
    ]
  }
]
