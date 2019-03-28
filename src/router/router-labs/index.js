import { LayoutEmpty } from '@/layouts';

export default [
  {
    path: '/labs',
    name: 'Labs',
    component: LayoutEmpty,
    redirect: '/labs/nav',
    meta: {
      icon: 'labs',
      title: '实验室',
    },
    children: [
      {
        path: 'nav',
        name: 'LabsNav',
        component: () => import('@/views/labs/nav'),
        meta: {
          title: 'Labs 导航',
        },
      },
      {
        path: 'flex',
        name: 'LabsFlex',
        component: () => import('@/views/labs/flex'),
        meta: {
          title: 'Flex 弹性布局',
        },
      },
      {
        path: 'white-space',
        name: 'LabsWhiteSpace',
        component: () => import('@/views/labs/white-space'),
        meta: {
          title: 'WhiteSpace 上下留白',
        },
      },
      {
        path: 'wing-blank',
        name: 'LabsWingBlank',
        component: () => import('@/views/labs/wing-blank'),
        meta: {
          title: 'WingBlank 两翼留白',
        },
      },
      {
        path: 'icon',
        name: 'LabsIcon',
        component: () => import('@/views/labs/icon'),
        meta: {
          title: 'Icon 图标',
        },
      },
      {
        path: 'grid',
        name: 'LabsGrid',
        component: () => import('@/views/labs/grid'),
        meta: {
          title: 'Grid 宫格',
        },
      },
      {
        path: 'filter',
        name: 'LabsFilter',
        component: () => import('@/views/labs/filter'),
        meta: {
          title: 'Filter 过滤器',
        },
      },
      {
        path: 'request',
        name: 'LabsRequest',
        component: () => import('@/views/labs/request'),
        meta: {
          title: 'Request 请求',
        },
      },
      {
        path: 'precision',
        name: 'LabsPrecision',
        component: () => import('@/views/labs/precision'),
        meta: {
          title: 'Precision 小数精准度',
        },
      },
      {
        path: 'skeleton',
        name: 'LabsSkeleton',
        component: () => import('@/views/labs/skeleton'),
        meta: {
          title: 'Skeleton 骨架',
        },
      },
      {
        path: 'validator',
        name: 'LabsValidator',
        component: () => import('@/views/labs/validator'),
        meta: {
          title: 'Validator 验证',
        },
      },
    ],
  },
];
