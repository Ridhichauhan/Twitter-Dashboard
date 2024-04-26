export const MENUITEMS = [
  {
    Items: [
      {
        icon: <i className="bi bi-clipboard-data side-menu__icon mb-2"></i>,
        type: "link",
        Name: "",
        active: false,
        selected: false,
        title: "All Data",
        badge: "",
        class: "badge bg-warning-transparent ms-2",
        path: `${import.meta.env.BASE_URL}tweets/tweets`,
      },
    ],
  },
  {
    Items: [
      {
        icon: <i className="bi bi-filter-square side-menu__icon mb-2"></i>,
        type: "link",
        Name: "",
        active: false,
        selected: false,
        title: "Tweets",
        badge: "",
        class: " badge bg-warning-transparent ms-2",
        path: `${import.meta.env.BASE_URL}tweet/tweet`,
      },
    ],
  },
  {
    Items: [
      {
        icon: <i className="bi bi-exclamation-circle side-menu__icon mb-2"></i>,
        type: "link",
        Name: "",
        active: false,
        selected: false,
        title: "Alerts",
        badge: "",
        class: " badge bg-warning-transparent ms-2",
        path: `${import.meta.env.BASE_URL}alert/alert`,
      },
    ],
  },
];
