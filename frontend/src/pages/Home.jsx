import { Link } from "react-router-dom";

const categories = [
  { href: "/phones", name: "Phones", imageUrl: "./logo.png" },
  { href: "/consoles", name: "Consoles", imageUrl: "./logo.png" },
  { href: "/laptops", name: "Laptops", imageUrl: "./logo.png" },
  { href: "/computers", name: "Computers", imageUrl: "./logo.png" },
  { href: "/headphones", name: "Headphones", imageUrl: "./logo.png" },
  { href: "/cameras", name: "Cameras", imageUrl: "./logo.png" },
  { href: "/smartwatches", name: "Smartwatches", imageUrl: "./logo.png" },
  { href: "/tablets", name: "Tablets", imageUrl: "./logo.png" },
];

const Home = () => {
  return (
    <div className="categoriesContainer">
      {categories.map((category) => (
        <div className="category" key={category.name}>
          <Link to={`/category${category.href}`} className="categoryLink">
            <div className="categoryImageContainer">
              <img
                className="categoryImage"
                src={category.imageUrl}
                alt={category.name}
              />
            </div>
            <div className="categoryNameContainer">
              <p className="categoryName">{category.name}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
