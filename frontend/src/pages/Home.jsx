
import  Category  from "../components/Category";

const categories = [
  { href: "/phones", name: "Phones", imageUrl: "./phone.jpg" },
  { href: "/consoles", name: "Consoles", imageUrl: "./console.jpg" },
  { href: "/laptops", name: "Laptops", imageUrl: "./laptop.jpg" },
  { href: "/computers", name: "Computers", imageUrl: "./computer.jpg" },
  { href: "/headphones", name: "Headphones", imageUrl: "./headphone.jpg" },
  { href: "/cameras", name: "Cameras", imageUrl: "./camera.jpg" },
  { href: "/smartwatches", name: "Smartwatches", imageUrl: "./smartwatch.jpg" },
  { href: "/tablets", name: "Tablets", imageUrl: "./tablet.jpg" },
];

const Home = () => {

  

  
  return (
    <div className="categoriesContainer">
   
   
      
        {categories.map((category) => (

          <Category key={category.name} category={category} />

        ))}
      
     
      

    

      
      
    

    </div>
   
  );
};

export default Home;
