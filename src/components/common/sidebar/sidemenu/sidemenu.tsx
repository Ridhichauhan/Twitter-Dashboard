export const MENUITEMS = [
  {
    menutitle: "TWEETS DASHBOARD",
    Items: [
      {
        icon: <i className="side-menu__icon bx bx-home"></i>,
        type: "sub",
        Name: "",
        active: false,
        selected: false,
        title: "Tweets",
        badge: "",
        class: "badge bg-warning-transparent ms-2",
        children: [
          {
            path: `${import.meta.env.BASE_URL}tweets/tweets`,
            type: "link",
            active: false,
            selected: false,
            title: "TWEETS",
          },
          // {
          //   path: `${import.meta.env.BASE_URL}dms/dms`,
          //   type: "link",
          //   active: false,
          //   selected: false,
          //   title: "DMS",
          // },
          {
            path: `${import.meta.env.BASE_URL}tweet/tweet`,
            type: "link",
            active: false,
            selected: false,
            title: "TWEET",
          },
          // {
          //   path: `${import.meta.env.BASE_URL}dm/dm`,
          //   type: "link",
          //   active: false,
          //   selected: false,
          //   title: "DM",
          // },
          {
            path: `${import.meta.env.BASE_URL}alert/alert`,
            type: "link",
            active: false,
            selected: false,
            title: "ALERTS",
          },
        ],
      },
    ],
  },

  // {
  //   menutitle: "MAPS & ICONS",
  //   Items: [
  //     {
  //       icon: <i className="bx bx-map side-menu__icon"></i>,
  //       type: "sub",
  //       Name: "",
  //       active: false,
  //       selected: false,
  //       badge: "",
  //       badgetxt: "",
  //       class: "",
  //       title: "Maps",
  //       children: [
  //         {
  //           path: `${import.meta.env.BASE_URL}maps/leafletmaps`,
  //           title: "Leaflet Maps",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //         },
  //         {
  //           path: `${import.meta.env.BASE_URL}maps/vectormaps`,
  //           title: "Vector Maps",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //         },
  //       ],
  //     },
  //     {
  //       path: `${import.meta.env.BASE_URL}icons`,
  //       icon: <i className="bx bx-store-alt side-menu__icon"></i>,
  //       type: "link",
  //       selected: false,
  //       active: false,
  //       title: "Icons",
  //     },
  //   ],
  // },
];
