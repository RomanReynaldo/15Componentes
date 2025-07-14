
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/15Componentes/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/15Componentes/button",
    "route": "/15Componentes"
  },
  {
    "renderMode": 2,
    "route": "/15Componentes/date-picker"
  },
  {
    "renderMode": 2,
    "route": "/15Componentes/toolbar"
  },
  {
    "renderMode": 2,
    "route": "/15Componentes/table"
  },
  {
    "renderMode": 2,
    "route": "/15Componentes/slider"
  },
  {
    "renderMode": 2,
    "route": "/15Componentes/side-nav"
  },
  {
    "renderMode": 2,
    "route": "/15Componentes/slide-toggle"
  },
  {
    "renderMode": 2,
    "route": "/15Componentes/radio-button"
  },
  {
    "renderMode": 2,
    "route": "/15Componentes/paginator"
  },
  {
    "renderMode": 2,
    "route": "/15Componentes/icon"
  },
  {
    "renderMode": 2,
    "route": "/15Componentes/grid-list"
  },
  {
    "renderMode": 2,
    "route": "/15Componentes/chips"
  },
  {
    "renderMode": 2,
    "route": "/15Componentes/button"
  },
  {
    "renderMode": 2,
    "route": "/15Componentes/badge"
  },
  {
    "renderMode": 2,
    "route": "/15Componentes/tabs"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23538, hash: 'f365e47fb945f9f41cfc1a957485257fdbc92aaf88fe14e57c7f641743b8f42c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17157, hash: '27a46f2204275dd49d931f489d5d3b4c5df394a33efe8a508588b0037af6dba9', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'toolbar/index.html': {size: 272458, hash: '420f3e8654987083b60434987951c85eb0b21679baf6c0746579dfcaeb02f748', text: () => import('./assets-chunks/toolbar_index_html.mjs').then(m => m.default)},
    'slide-toggle/index.html': {size: 272973, hash: '40993a7114ad27a59808a76c294624ea20bfb085bb2d739bc2c62be94a7fa715', text: () => import('./assets-chunks/slide-toggle_index_html.mjs').then(m => m.default)},
    'radio-button/index.html': {size: 287873, hash: '22651d99bcb9325f3e3ce8a44083db75269041323e3a8b0aafd910ef833bc5b2', text: () => import('./assets-chunks/radio-button_index_html.mjs').then(m => m.default)},
    'date-picker/index.html': {size: 275159, hash: 'ca5e121d1385f5b5f846cb9435723bf50c6d38ddd5575932efdee54593c0f985', text: () => import('./assets-chunks/date-picker_index_html.mjs').then(m => m.default)},
    'chips/index.html': {size: 271738, hash: 'eba30a0e85806d900a932386580fc837f0ad0646add650979dcb405014caa7fb', text: () => import('./assets-chunks/chips_index_html.mjs').then(m => m.default)},
    'table/index.html': {size: 276991, hash: '0a07fa7819df445a1ecc3e2ada34d8d53dc0807bc9ab0ecc232300d9667332fb', text: () => import('./assets-chunks/table_index_html.mjs').then(m => m.default)},
    'badge/index.html': {size: 270827, hash: '25b4d50f2be8e63e36c596649701f00752a6a3243f5474d1a8254f9b78e5e9cb', text: () => import('./assets-chunks/badge_index_html.mjs').then(m => m.default)},
    'button/index.html': {size: 273621, hash: 'f6ef609489d2b9cadcd67c54d61eaaf526e221ee6eda8f2bc9397e1a044b6fd4', text: () => import('./assets-chunks/button_index_html.mjs').then(m => m.default)},
    'slider/index.html': {size: 275532, hash: '8f8fe5a139db515756c9aeec78dc1cd3f4e59e56a96c363513f3443827d98b44', text: () => import('./assets-chunks/slider_index_html.mjs').then(m => m.default)},
    'icon/index.html': {size: 271164, hash: '0a8d9f9345ee4ee4bf469559e499f31e183e296ecba18ab715d0d84772afa337', text: () => import('./assets-chunks/icon_index_html.mjs').then(m => m.default)},
    'side-nav/index.html': {size: 272816, hash: '58ff83033929b1202f308de4d3a37b244341242be4d3d4d60cd41d88937c1082', text: () => import('./assets-chunks/side-nav_index_html.mjs').then(m => m.default)},
    'grid-list/index.html': {size: 273566, hash: '84a0de82c2946996c7bdee751e77093cbf022a9ddb2e0a087357331b80ec3b66', text: () => import('./assets-chunks/grid-list_index_html.mjs').then(m => m.default)},
    'tabs/index.html': {size: 273979, hash: '4f90c802d18002d9e7842f8bf9fe8509b819d8e3ade6eabce1edb34544325eb9', text: () => import('./assets-chunks/tabs_index_html.mjs').then(m => m.default)},
    'paginator/index.html': {size: 280643, hash: 'b84458119ca265cd2a5ab0bff312306c5b7773cf09b0e04ecdd5bb57968238a2', text: () => import('./assets-chunks/paginator_index_html.mjs').then(m => m.default)},
    'styles-Z5UYKNDX.css': {size: 6934, hash: 'VxIyzD7LHG8', text: () => import('./assets-chunks/styles-Z5UYKNDX_css.mjs').then(m => m.default)}
  },
};
