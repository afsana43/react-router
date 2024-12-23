import Option from "../Option/Option";

const PriceOption = () => {
    const gymItems = [
        {
          id: 1,
          name: "Dumbbells (Set)",
          price: 50,
          features: ["Anti-slip grip", "Durable cast iron", "Variety of weights"]
        },
        {
          id: 2,
          name: "Yoga Mat",
          price: 20,
          features: ["Non-slip surface", "Lightweight and portable", "Eco-friendly material"]
        },
        {
          id: 3,
          name: "Resistance Bands (Pack)",
          price: 15,
          features: ["Multiple resistance levels", "Durable elastic material", "Compact and portable"]
        },
        {
          id: 4,
          name: "Treadmill",
          price: 500,
          features: ["Digital display", "Multiple speed settings", "Foldable design"]
        },
        {
          id: 5,
          name: "Kettlebell (20 lbs)",
          price: 30,
          features: ["Ergonomic handle", "Rust-resistant coating", "Versatile for many workouts"]
        },
        {
          id: 6,
          name: "Pull-Up Bar",
          price: 25,
          features: ["Adjustable width", "Foam grip handles", "Supports up to 300 lbs"]
        },
        {
          id: 7,
          name: "Exercise Bike",
          price: 300,
          features: ["LCD display", "Adjustable resistance", "Compact design"]
        },
        {
          id: 8,
          name: "Foam Roller",
          price: 10,
          features: ["High-density foam", "Textured surface", "Lightweight"]
        },
        {
          id: 9,
          name: "Jump Rope",
          price: 8,
          features: ["Adjustable length", "Anti-slip handles", "Durable rope material"]
        }
      ];
      
  return (
    <div className="pt-28 "> 
      <h2 className="text-2xl ml-8">Best prices in the town</h2>
     <div className="grid grid-cols-3 gap-6 ">
     {
        gymItems.map(option => <Option key={option.id} option={option}></Option>)
      }
     </div>
    </div>
  );
};

export default PriceOption;