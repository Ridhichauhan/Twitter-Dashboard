
export const MENUITEMS = [
  {
    menutitle: 'MAIN',
    Items: [
      {
        icon: (<i className="side-menu__icon bx bx-home"></i>),
        type: 'sub',
        Name: '',
        active: false,
        selected: false,
        title: 'Dashboards',
        badge: '',
        badgetxt: '12',
        class: 'badge bg-warning-transparent ms-2',
        children: [
          { path: `${import.meta.env.BASE_URL}dashboards/crm`, type: 'link', active: false, selected: false, title: 'CRM' },
          { path: `${import.meta.env.BASE_URL}dashboards/ecommerce`, type: 'link', active: false, selected: false, title: 'Ecommerce' },
          { path: `${import.meta.env.BASE_URL}dashboards/crypto`, type: 'link', active: false, selected: false, title: 'Crypto' },
          { path: `${import.meta.env.BASE_URL}dashboards/jobs`, type: 'link', active: false, selected: false, title: 'Jobs' },
          { path: `${import.meta.env.BASE_URL}dashboards/nft`, type: 'link', active: false, selected: false, title: 'NFT' },
          { path: `${import.meta.env.BASE_URL}dashboards/sales`, type: 'link', active: false, selected: false, title: 'Sales' },
          { path: `${import.meta.env.BASE_URL}dashboards/analytics`, type: 'link', active: false, selected: false, title: 'Analytics' },
          { path: `${import.meta.env.BASE_URL}dashboards/projects`, type: 'link', active: false, selected: false, title: 'Projects' },
          { path: `${import.meta.env.BASE_URL}dashboards/hrm`, type: 'link', active: false, selected: false, title: 'HRM' },
          { path: `${import.meta.env.BASE_URL}dashboards/stocks`, type: 'link', active: false, selected: false, title: 'Stocks' },
          { path: `${import.meta.env.BASE_URL}dashboards/courses`, type: 'link', active: false, selected: false, title: 'Courses' },
          { path: `${import.meta.env.BASE_URL}dashboards/personal`, type: 'link', active: false, selected: false, title: 'Personal' }
        ]
      }
    ]
  },

  {
    menutitle: "MAPS & ICONS",
    Items: [
      {
        icon: (<i className="bx bx-map side-menu__icon"></i>),
        type: "sub",
        Name: '',
        active: false,
        selected: false,
        badge: '',
        badgetxt: '',
        class: '',
        title: "Maps",
        children: [
          {
            path: `${import.meta.env.BASE_URL}maps/leafletmaps`,
            title: "Leaflet Maps",
            type: "link",
            active: false,
            selected: false,
          },
          {
            path: `${import.meta.env.BASE_URL}maps/vectormaps`,
            title: "Vector Maps",
            type: "link",
            active: false,
            selected: false,
          },
        ],
      },
      {
        path: `${import.meta.env.BASE_URL}icons`,
        icon: (<i className="bx bx-store-alt side-menu__icon"></i>),
        type: "link",
        selected: false,
        active: false,
        title: "Icons",
      },

    ],
  },
];
