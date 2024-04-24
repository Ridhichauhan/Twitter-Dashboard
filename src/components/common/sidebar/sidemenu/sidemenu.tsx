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
          {
            path: `${import.meta.env.BASE_URL}tweet/tweet`,
            type: "link",
            active: false,
            selected: false,
            title: "TWEET",
          },
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
];
