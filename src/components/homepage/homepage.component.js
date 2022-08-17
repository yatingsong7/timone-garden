import "../../App.css";
import Directory from "../directory/directory.component";
import CategoryPreview from "../category-preview/category-preview.component";
import Jumbotron from "../jumbotron/jumbotron.component";

const Homepage = () => {
  const category = [
    {
      id: "1",
      // title: "Indoor plants",
      title: "hats",
      imageUrl:
        "https://images.unsplash.com/photo-1606146350176-804f4c84fb30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=726&q=80",
    },
    {
      id: "2",
      // title: "Succulents & Cacti",
      title: "jackets",
      imageUrl:
        "https://images.unsplash.com/photo-1527642220350-24155bae0505?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1571&q=80",
    },
    {
      id: "3",
      // title: "Outdoor plants",
      title: "mens",
      imageUrl:
        "https://images.unsplash.com/photo-1457530378978-8bac673b8062?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      id: "4",
      // title: "Pots and planters",
      title: "sneakers",
      imageUrl:
        "https://images.unsplash.com/photo-1525247862234-30193931fdf7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=752&q=80",
    },
    {
      id: "5",
      // title: "Garden tools",
      title: "womens",
      imageUrl:
        "https://images.unsplash.com/photo-1601312540057-7234a01baef6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=861&q=80",
    },
  ];

  return (
    <div>
      <Jumbotron />
      <Directory category={category} />
      <CategoryPreview />
    </div>
  );
};

export default Homepage;
