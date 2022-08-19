const SHOP_DATA = [
  {
    title: "Indoor plants",
    items: [
      {
        id: 1,
        name: "monstera deliciosa",
        imageUrl:
          "https://images.unsplash.com/photo-1604907899106-bdbf31469ae9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
        price: 25,
      },
      {
        id: 2,
        name: "peacock plant",
        imageUrl:
          "https://images.unsplash.com/photo-1597306200021-f8e16b12fb45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
        price: 20,
      },
      {
        id: 3,
        name: "fiddle leaf fig",
        imageUrl:
          "https://images.unsplash.com/photo-1545239705-1564e58b9e4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        price: 35,
      },
      {
        id: 4,
        name: "sansevieria cylindrica",
        imageUrl:
          "https://images.unsplash.com/photo-1646667687331-e06974a7fda2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
        price: 50,
      },
      {
        id: 5,
        name: "peace lily",
        imageUrl:
          "https://images.unsplash.com/photo-1620311497344-bce841c9c060?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
        price: 18,
      },
      {
        id: 6,
        name: "alocasia zebrina",
        imageUrl:
          "https://images.unsplash.com/photo-1655382355596-7bf7012a92f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
        price: 18,
      },
      {
        id: 7,
        name: "alocasia black velvet",
        imageUrl:
          "https://images.unsplash.com/photo-1632320209415-a6b634ccaede?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YWxvY2FzaWElMjBibGFjayUyMHZlbHZldHxlbnwwfDF8MHx8&auto=format&fit=crop&w=600&q=60",
        price: 40,
      },
      {
        id: 8,
        name: "aglaonema kiwi",
        imageUrl:
          "https://images.unsplash.com/photo-1659100056606-f745ce8cd83f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
        price: 45,
      },
      {
        id: 9,
        name: "aglaonema jungle red",
        imageUrl:
          "https://images.unsplash.com/photo-1658309833607-4de9956d0bbd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
        price: 30,
      },
    ],
  },
  {
    title: "Succulents & Cacti",
    items: [
      {
        id: 10,
        name: "succulent in cement mixture pot",
        imageUrl:
          "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
        price: 22,
      },
      {
        id: 11,
        name: "succulent pack",
        imageUrl:
          "https://images.unsplash.com/photo-1620955206264-a5b902a907fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
        price: 18,
      },
      {
        id: 12,
        name: "kaya cactus",
        imageUrl:
          "https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=413&q=80",
        price: 110,
      },
      {
        id: 13,
        name: "assorted succulent",
        imageUrl:
          "https://images.unsplash.com/photo-1623667596999-48a96b93c3e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
        price: 20,
      },
      {
        id: 14,
        name: "small succulents in pots",
        imageUrl:
          "https://images.unsplash.com/photo-1548587449-2c1dcd68cecd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=403&q=80",
        price: 5.85,
      },
      {
        id: 15,
        name: "assorted cactus",
        imageUrl:
          "https://images.unsplash.com/photo-1519336056116-bc0f1771dec8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        price: 18,
      },
      {
        id: 16,
        name: "small succulent in pot",
        imageUrl:
          "https://images.unsplash.com/photo-1636035539163-6589e1331c5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        price: 7.99,
      },
    ],
  },
  {
    title: "Orchids",
    items: [
      {
        id: 17,
        name: "orchid white",
        imageUrl:
          "https://images.unsplash.com/photo-1583846712268-a77d97b7fd68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
        price: 40,
      },
      {
        id: 18,
        name: "orchid pink",
        imageUrl:
          "https://images.unsplash.com/photo-1615703771490-5d6cb8c1071a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        price: 60,
      },
      {
        id: 19,
        name: "orchid purple",
        imageUrl:
          "https://images.unsplash.com/photo-1593513061107-be87d9ea19b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=392&q=80",
        price: 60,
      },
    ],
  },
  {
    title: "Pots and planters",
    items: [
      {
        id: 20,
        name: "white plastic pot -- 130MM",
        imageUrl:
          "https://images.unsplash.com/photo-1609062111394-0427aa22d6c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=451&q=80",
        price: 10,
      },
      {
        id: 21,
        name: "ceramic pot",
        imageUrl:
          "https://images.unsplash.com/photo-1597055181187-1f9b726e2d66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
        price: 10,
      },
      {
        id: 22,
        name: "decorated pots",
        imageUrl:
          "https://images.unsplash.com/photo-1604759280982-6f84e05a27bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=452&q=80",
        price: 8.99,
      },
      {
        id: 23,
        name: "hanging plastic pots",
        imageUrl:
          "https://images.unsplash.com/photo-1623804102454-9acfeaadc811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        price: 25,
      },
    ],
  },
  {
    title: "Garden tools",
    items: [
      {
        id: 24,
        name: "hand trowels",
        imageUrl:
          "https://images.unsplash.com/photo-1598851418241-f52c34b6e4c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        price: 6.99,
      },
      {
        id: 25,
        name: "watering can",
        imageUrl:
          "https://images.unsplash.com/photo-1626047876082-9a54bf80daa3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        price: 15,
      },
    ],
  },
];

export default SHOP_DATA;
