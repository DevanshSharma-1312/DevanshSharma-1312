// import React from 'react';
// import groceryImage from './assets/grocery.png';
// import medicinesImage from './assets/medicines.png';
// import vegetablesImage from './assets/vegetables.png';
// import drinksImage from './assets/drinks.png';
// import bannerImage from './assets/banner.png';

// const HomePage1 = () => {
//   return (
//     <div className="bg-[#eaf4fc] font-'Segoe UI', Tahoma, Geneva, Verdana, sans-serif text-#333">
//       {/* Navigation Bar */}
//       <nav className="flex justify-between items-center py-2.5 px-5 bg- #333 text-white">
//         <div className="flex space-x-6">
//           <a href="#home" className="hover:text-[#03a9f4] transition-colors duration-300 ease text-white text-decoration-line:none">Home</a>
//           <a href="#about" className="hover:text-[#03a9f4] transition-colors duration-300">About Us</a>
//           <a href="#service" className="hover:text-[#03a9f4] transition-colors duration-300">Service</a>
//           <a href="#contact" className="hover:text-[#03a9f4] transition-colors duration-300">Contact Us</a>
//         </div>
//         <div className="flex space-x-4">
//           <button className="bg-[#03a9f4] text-white px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-[#0277bd]">
//             Login
//           </button>
//           <button className="bg-white text-[#03a9f4] px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-[#0277bd] hover:text-white">
//             Sign Up
//           </button>
//         </div>
//       </nav>
  


//       {/* Banner Section */ }
//   <div className="mt-6 mx-auto text-center max-w-full relative">
//     <img
//       src={bannerImage}
//       alt="Market"
//       className="w-full h-96 object-cover rounded-lg transform transition-transform duration-500 hover:scale-105"
//     />
//   </div>

//   {/* Search Bar */ }
//   <div className="flex justify-center mt-6">
//     <input
//       type="text"
//       className="w-72 p-2 rounded-full border-2 border-gray-800 text-lg"
//       placeholder="Search"
//     />
//     <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-700">
//       🔍
//     </button>
//   </div>

//   {/* Category Section */ }
//   <div className="flex justify-evenly mt-8">
//     <div className="text-center bg-white rounded-lg p-4 w-36 transition-transform transform hover:scale-105 hover:shadow-lg">
//       <img src={groceryImage} alt="Grocery" className="w-24 h-24 object-cover mx-auto" />
//       <p className="mt-2 text-lg">Grocery</p>
//     </div>
//     <div className="text-center bg-white rounded-lg p-4 w-36 transition-transform transform hover:scale-105 hover:shadow-lg">
//       <img src={medicinesImage} alt="Medicines" className="w-24 h-24 object-cover mx-auto" />
//       <p className="mt-2 text-lg">Medicines</p>
//     </div>
//     <div className="text-center bg-white rounded-lg p-4 w-36 transition-transform transform hover:scale-105 hover:shadow-lg">
//       <img src={vegetablesImage} alt="Vegetables" className="w-24 h-24 object-cover mx-auto" />
//       <p className="mt-2 text-lg">Vegetables</p>
//     </div>
//     <div className="text-center bg-white rounded-lg p-4 w-36 transition-transform transform hover:scale-105 hover:shadow-lg">
//       <img src={drinksImage} alt="Drinks" className="w-24 h-24 object-cover mx-auto" />
//       <p className="mt-2 text-lg">Drinks & Beverages</p>
//     </div>
//   </div>

//   {/* Footer Section */ }
//   <footer className="bg-gray-800 text-white mt-8 py-10">
//     <div className="flex justify-around">
//       <div className="w-1/4">
//         <h2 className="text-yellow-400 text-xl mb-4">About Us</h2>
//         <p className="text-sm">
//           We are committed to delivering the freshest groceries and medicines at your doorstep.
//           Shop with us for convenience and quality.
//         </p>
//       </div>
//       <div className="w-1/4">
//         <h2 className="text-yellow-400 text-xl mb-4">Quick Links</h2>
//         <ul className="space-y-2 text-sm">
//           <li><a href="#home" className="hover:text-yellow-400">Home</a></li>
//           <li><a href="#about" className="hover:text-yellow-400">About Us</a></li>
//           <li><a href="#service" className="hover:text-yellow-400">Services</a></li>
//           <li><a href="#contact" className="hover:text-yellow-400">Contact Us</a></li>
//         </ul>
//       </div>
//       <div className="w-1/4">
//         <h2 className="text-yellow-400 text-xl mb-4">Contact Us</h2>
//         <p className="text-sm">Email: support@groceryshop.com</p>
//         <p className="text-sm">Phone: +123 456 7890</p>
//         <p className="text-sm">Address: 123 Market Street, City</p>
//       </div>
//       <div className="w-1/4">
//         <h2 className="text-yellow-400 text-xl mb-4">Follow Us</h2>
//         <div className="flex space-x-4">
//           <a href="https://facebook.com" className="bg-gray-600 hover:bg-gray-700 p-2 rounded">Facebook</a>
//           <a href="https://twitter.com" className="bg-gray-600 hover:bg-gray-700 p-2 rounded">Twitter</a>
//           <a href="https://instagram.com" className="bg-gray-600 hover:bg-gray-700 p-2 rounded">Instagram</a>
//         </div>
//       </div>
//     </div>
//     <div className="text-center mt-8 border-t border-gray-700 pt-4">
//       <p>&copy; 2024 GroceryShop | All Rights Reserved</p>
//     </div>
//   </footer>
//     </div >
//   );
// };

// export default HomePage1;


// import React from 'react';
// import groceryImage from './assets/grocery.png';
// import medicinesImage from './assets/medicines.png';
// import vegetablesImage from './assets/vegetables.png';
// import drinksImage from './assets/drinks.png';
// import bannerImage from './assets/banner.png';

// const HomePage1 = () => {
//     return (
//         <div className="bg-[#eaf4fc] text-[#333]">
//             {/* Navigation Bar */}
//             <nav className="flex justify-between items-center bg-[#333] text-white px-5 py-2.5">
//                 <div className="flex space-x-5">
//                     <a href="#home" className="text-white hover:text-[#03a9f4] transition-colors">Home</a>
//                     <a href="#about" className="text-white hover:text-[#03a9f4] transition-colors">About Us</a>
//                     <a href="#service" className="text-white hover:text-[#03a9f4] transition-colors">Service</a>
//                     <a href="#contact" className="text-white hover:text-[#03a9f4] transition-colors">Contact Us</a>
//                 </div>
//                 <div className="flex space-x-2.5">
//                     <button className="bg-[#03a9f4] text-white rounded-md px-5 py-2.5 hover:bg-[#0277bd] transition-colors">Login</button>
//                     <button className="bg-white text-[#03a9f4] rounded-md px-5 py-2.5 hover:bg-[#0277bd] hover:text-white transition-colors">Sign Up</button>
//                 </div>
//             </nav>

//             {/* Banner Section */}
//             <div className="flex justify-center items-center mt-5 mx-auto max-w-full relative">
//                 <img
//                     src={bannerImage}
//                     alt="Market"
//                     className="w-full h-[400px] object-cover max-w-full rounded-md transition-transform duration-500 ease-in-out hover:scale-105"
//                 />
//             </div>

//             {/* Search Bar */}
//             <div className="flex justify-center my-5">
//                 <input
//                     type="text"
//                     className="w-[300px] text-base p-2.5 rounded-full border-2 border-[#333] outline-none"
//                     placeholder="Search"
//                 />
//                 <button className="ml-[-45px] bg-[#03a9f4] text-white px-5 py-2.5 rounded-full hover:bg-[#0288d1] transition-colors">🔍</button>
//             </div>

//             {/* Category Section */}
//             <div className="flex justify-evenly mt-5">
//                 <div className="text-center bg-white rounded-md p-4 hover:shadow-lg hover:scale-105 transition-transform">
//                     <img src={groceryImage} alt="Grocery" className="w-[100px] h-[100px] object-cover" />
//                     <p className="mt-2.5 text-base text-[#333]">Grocery</p>
//                 </div>
//                 <div className="text-center bg-white rounded-md p-4 hover:shadow-lg hover:scale-105 transition-transform">
//                     <img src={medicinesImage} alt="Medicines" className="w-[100px] h-[100px] object-cover" />
//                     <p className="mt-2.5 text-base text-[#333]">Medicines</p>
//                 </div>
//                 <div className="text-center bg-white rounded-md p-4 hover:shadow-lg hover:scale-105 transition-transform">
//                     <img src={vegetablesImage} alt="Vegetables" className="w-[100px] h-[100px] object-cover" />
//                     <p className="mt-2.5 text-base text-[#333]">Vegetables</p>
//                 </div>
//                 <div className="text-center bg-white rounded-md p-4 hover:shadow-lg hover:scale-105 transition-transform">
//                     <img src={drinksImage} alt="Drinks" className="w-[100px] h-[100px] object-cover" />
//                     <p className="mt-2.5 text-base text-[#333]">Drinks and Beverages</p>
//                 </div>
//             </div>

//             {/* Footer Section */}
//             <footer className="bg-[#333] text-white mt-10 py-10">
//                 <div className="flex justify-around items-start">
//                     <div>
//                         <h2 className="text-lg text-[#ffd700] mb-4">About Us</h2>
//                         <p>
//                             We are committed to delivering the freshest groceries and medicines at your doorstep.
//                             Shop with us for convenience and quality.
//                         </p>
//                     </div>
//                     <div>
//                         <h2 className="text-lg text-[#ffd700] mb-4">Quick Links</h2>
//                         <ul className="list-none">
//                             <li className="mb-2.5"><a href="#home" className="hover:text-[#ffd700]">Home</a></li>
//                             <li className="mb-2.5"><a href="#about" className="hover:text-[#ffd700]">About Us</a></li>
//                             <li className="mb-2.5"><a href="#service" className="hover:text-[#ffd700]">Services</a></li>
//                             <li className="mb-2.5"><a href="#contact" className="hover:text-[#ffd700]">Contact Us</a></li>
//                         </ul>
//                     </div>
//                     <div>
//                         <h2 className="text-lg text-[#ffd700] mb-4">Contact Us</h2>
//                         <p>Email: support@groceryshop.com</p>
//                         <p>Phone: +123 456 7890</p>
//                         <p>Address: 123 Market Street, City</p>
//                     </div>
//                     <div>
//                         <h2 className="text-lg text-[#ffd700] mb-4">Follow Us</h2>
//                         <div className="flex space-x-2.5">
//                             <a href="https://facebook.com" className="bg-[#444] text-white px-4 py-2 rounded-md hover:bg-[#555]">Facebook</a>
//                             <a href="https://twitter.com" className="bg-[#444] text-white px-4 py-2 rounded-md hover:bg-[#555]">Twitter</a>
//                             <a href="https://instagram.com" className="bg-[#444] text-white px-4 py-2 rounded-md hover:bg-[#555]">Instagram</a>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="text-center mt-5 pt-5 border-t border-[#555]">
//                     <p>&copy; 2024 GroceryShop | All Rights Reserved</p>
//                 </div>
//             </footer>
//         </div>
//     );
// };

// export default HomePage1;





// import React from 'react';
// import './HomePage.css'; // Import custom CSS for styling if needed
// // Import images from the repository
// import groceryImage from './assets/grocery.png';
// import medicinesImage from './assets/medicines.png';
// import vegetablesImage from './assets/vegetables.png';
// import drinksImage from './assets/drinks.png';
// import bannerImage from './assets/banner.png'; // Assuming a banner image exists

// const HomePage1 = () => {
//     return (
//         <div className="bg-[#eaf4fc] text-[#333] font-sans">
//             {/* Navigation Bar */}
//             <nav className="flex justify-between items-center bg-gray-800 text-white px-5 py-2.5">
//                 <div className="nav-links">
//                     <a href="#home" className="text-white no-underline transition-colors duration-300 ease-in-out mx-3 hover:text-[#03a9f4]">Home</a>
//                     <a href="#about" className="text-white no-underline transition-colors duration-300 ease-in-out mx-3 hover:text-[#03a9f4]">About Us</a>
//                     <a href="#service" className="text-white no-underline transition-colors duration-300 ease-in-out mx-3 hover:text-[#03a9f4]">Service</a>
//                     <a href="#contact" className="text-white no-underline transition-colors duration-300 ease-in-out mx-3 hover:text-[#03a9f4]">Contact Us</a>
//                 </div>
//                 <div className="auth-buttons flex">
//                     <button className="bg-[#03a9f4] text-white rounded-5px ml-2.5 px-4 py-2 transition-bg duration-300 ease-in-out hover:bg-[#0277bd]">Login</button>
//                     <button className="bg-white text-[#03a9f4] rounded-5px ml-2.5 px-4 py-2 transition-bg duration-300 ease-in-out hover:bg-[#0277bd]">Sign Up</button>
//                 </div>
//             </nav>

//             {/* Banner Section */}
//             <div className="flex justify-center items-center mt-5 text-center max-w-full mx-auto my-5">
//                 <img src={bannerImage} alt="Market" className="w-full h-400px object-cover max-w-full transition-transform duration-500 ease-in-out rounded-10px hover:scale-105" />
//             </div>

//             {/* Search Bar */}
//             <div className="flex justify-center mx-0 my-5">
//                 <input type="text" className="w-300px text-base p-2.5 rounded-25px border-2 border-solid border-[#333] outline-none" placeholder="Search" />
//                 <button className="bg-[#03a9f4] text-white cursor-pointer ml-[-45px] transition-bg duration-300 ease-in-out px-5 py-2.5 rounded-25px border-none hover:bg-[#0288d1]">🔍</button>
//             </div>

//             {/* Category Section */}
//             <div className="flex justify-evenly mt-5">
//                 <div className="text-center bg-white w-150px p-4 rounded-10px hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
//                     <img src={groceryImage} alt="Grocery" className="w-100px h-100px object-cover" />
//                     <p className="text-base text-[#333] mt-2.5">Grocery</p>
//                 </div>
//                 <div className="text-center bg-white w-150px p-4 rounded-10px hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
//                     <img src={medicinesImage} alt="Medicines" className="w-100px h-100px object-cover" />
//                     <p className="text-base text-[#333] mt-2.5">Medicines</p>
//                 </div>
//                 <div className="text-center bg-white w-150px p-4 rounded-10px hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
//                     <img src={vegetablesImage} alt="Vegetables" className="w-100px h-100px object-cover" />
//                     <p className="text-base text-[#333] mt-2.5">Vegetables</p>
//                 </div>
//                 <div className="text-center bg-white w-150px p-4 rounded-10px hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
//                     <img src={drinksImage} alt="Drinks" className="w-100px h-100px object-cover" />
//                     <p className="text-base text-[#333] mt-2.5">Drinks and Beverages</p>
//                 </div>
//             </div>

//             {/* Footer Section */}
//             <footer className="bg-[#333] text-white relative w-full mt-10 px-0 py-10 bottom-0">
//                 <div className="flex justify-around items-start">
//                     <div className="footer-section">
//                         <h2 className="text-lg text-[#ffd700] mb-4">About Us</h2>
//                         <p className="text-sm">We are committed to delivering the freshest groceries and medicines at your doorstep. Shop with us for convenience and quality.</p>
//                     </div>

//                     <div className="footer-section">
//                         <h2 className="text-lg text-[#ffd700] mb-4">Quick Links</h2>
//                         <ul className="p-0 list-none">
//                             <li className="mb-2.5"><a href="#home" className="text-white no-underline hover:text-[#ffd700] transition-colors duration-300 ease-in-out">Home</a></li>
//                             <li className="mb-2.5"><a href="#about" className="text-white no-underline hover:text-[#ffd700] transition-colors duration-300 ease-in-out">About Us</a></li>
//                             <li className="mb-2.5"><a href="#service" className="text-white no-underline hover:text-[#ffd700] transition-colors duration-300 ease-in-out">Services</a></li>
//                             <li className="mb-2.5"><a href="#contact" className="text-white no-underline hover:text-[#ffd700] transition-colors duration-300 ease-in-out">Contact Us</a></li>
//                         </ul>
//                     </div>

//                     <div className="footer-section">
//                         <h2 className="text-lg text-[#ffd700] mb-4">Contact Us</h2>
//                         <p className="text-sm">Email: support@groceryshop.com</p>
//                         <p className="text-sm">Phone: +123 456 7890</p>
//                         <p className="text-sm">Address: 123 Market Street, City</p>
//                     </div>

//                     <div className="footer-section">
//                         <h2 className="text-lg text-[#ffd700] mb-4">Follow Us</h2>
//                         <div className="flex gap-2.5">
//                             <a href="https://facebook.com" className="bg-[#444] text-white no-underline inline-block px-4 py-2.5 rounded-5px hover:bg-[#555] transition-bg duration-300 ease-in-out">Facebook</a>
//                             <a href="https://twitter.com" className="bg-[#444] text-white no-underline inline-block px-4 py-2.5 rounded-5px hover:bg-[#555] transition-bg duration-300 ease-in-out">Twitter</a>
//                             <a href="https://instagram.com" className="bg-[#444] text-white no-underline inline-block px-4 py-2.5 rounded-5px hover:bg-[#555] transition-bg duration-300 ease-in-out">Instagram</a>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="text-center mt-5 pt-5 border-t border-solid border-[#555]">
//                     <p className="text-sm">&copy; 2024 GroceryShop | All Rights Reserved</p>
//                 </div>
//             </footer>
//         </div>
//     );
// };

// export default HomePage1;



// import React from 'react';
// import groceryImage from './assets/grocery.png';
// import medicinesImage from './assets/medicines.png';
// import vegetablesImage from './assets/vegetables.png';
// import drinksImage from './assets/drinks.png';
// import bannerImage from './assets/banner.png';

// const HomePage1 = () => {
//   return (
//     <div className="bg-blue-100 min-h-screen">
//       {/* Navigation Bar */}
//       <nav className="bg-black text-white p-4 flex justify-between">
//         <div className="flex space-x-4">
//           <a href="#home" className=" text-white px-4 py-2 rounded  transition-colors duration-300 ease-in-out mx-3 hover:text-blue">Home</a>
//           <a href="#about" className="bg-white text-black px-4 py-2 rounded">About Us</a>
//           <a href="#service" className="bg-white text-black px-4 py-2 rounded">Service</a>
//           <a href="#contact" className="bg-white text-black px-4 py-2 rounded">Contact Us</a>
//         </div>
//         <div className="flex space-x-4">
//           <button className="bg-white text-black px-4 py-2 rounded">Login</button>
//           <button className="bg-white text-black px-4 py-2 rounded">Sign Up</button>
//         </div>
//       </nav>

//       {/* Banner Section */}
//       <div className="p-4">
//         <img
//           src={bannerImage}
//           alt="Market"
//           className="w-full h-64 object-cover rounded"
//         />

//         {/* Search Bar */}
//         <div className="flex justify-center mt-4">
//           <input
//             type="text"
//             placeholder="Search"
//             className="border rounded px-4 py-2 w-1/2"
//           />
//         </div>

//         {/* Category Section */}
//         <div className="grid grid-cols-4 gap-4 mt-4">
//           <div className="bg-white p-4 rounded shadow">
//             <img
//               src={groceryImage}
//               alt="Grocery"
//               className="w-full h-32 object-cover rounded"
//             />
//             <p className="text-center mt-2">Grocery</p>
//           </div>
//           <div className="bg-white p-4 rounded shadow">
//             <img
//               src={medicinesImage}
//               alt="Medicines"
//               className="w-full h-32 object-cover rounded"
//             />
//             <p className="text-center mt-2">Medicines</p>
//           </div>
//           <div className="bg-white p-4 rounded shadow">
//             <img
//               src={vegetablesImage}
//               alt="Vegetables"
//               className="w-full h-32 object-cover rounded"
//             />
//             <p className="text-center mt-2">Vegetables</p>
//           </div>
//           <div className="bg-white p-4 rounded shadow">
//             <img
//               src={drinksImage}
//               alt="Drinks"
//               className="w-full h-32 object-cover rounded"
//             />
//             <p className="text-center mt-2">Drinks and Beverages</p>
//           </div>
//         </div>
//       </div>

//       {/* Footer Section */}
//       <footer className="bg-black text-white p-4 mt-8">
//         <div className="flex justify-between">
//           <div className="space-y-2">
//             <h2 className="text-lg font-semibold">About Us</h2>
//             <p>We are committed to delivering the freshest groceries and medicines at your doorstep. Shop with us for convenience and quality.</p>
//           </div>
//           <div className="space-y-2">
//             <h2 className="text-lg font-semibold">Quick Links</h2>
//             <ul className="list-none space-y-1">
//               <li><a href="#home" className="hover:underline">Home</a></li>
//               <li><a href="#about" className="hover:underline">About Us</a></li>
//               <li><a href="#service" className="hover:underline">Services</a></li>
//               <li><a href="#contact" className="hover:underline">Contact Us</a></li>
//             </ul>
//           </div>
//           <div className="space-y-2">
//             <h2 className="text-lg font-semibold">Contact Us</h2>
//             <p>Email: support@groceryshop.com</p>
//             <p>Phone: +123 456 7890</p>
//             <p>Address: 123 Market Street, City</p>
//           </div>
//           <div className="space-y-2">
//             <h2 className="text-lg font-semibold">Follow Us</h2>
//             <div className="flex space-x-2">
//               <a href="https://facebook.com" className="bg-gray-700 p-2 rounded hover:bg-gray-600">Facebook</a>
//               <a href="https://twitter.com" className="bg-gray-700 p-2 rounded hover:bg-gray-600">Twitter</a>
//               <a href="https://instagram.com" className="bg-gray-700 p-2 rounded hover:bg-gray-600">Instagram</a>
//             </div>
//           </div>
//         </div>
//         <div className="text-center mt-4">
//           <p>&copy; 2024 GroceryShop | All Rights Reserved</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default HomePage1;





import React from 'react';
import groceryImage from './assets/grocery.png';
import medicinesImage from './assets/medicines.png';
import vegetablesImage from './assets/vegetables.png';
import drinksImage from './assets/drinks.png';
import bannerImage from './assets/banner.png';
import bannerImage2 from './assets/banner2.jpg'

const HomePage1 = () => {
  const images = [bannerImage, bannerImage2, bannerImage,bannerImage2]; // Add more banner images if needed

  return (
    <div className="bg-[#eaf4fc] text-[#333] font-sans">
      {/* Navigation Bar */}
      <nav className="flex justify-between items-center bg-gray-800 text-white px-5 py-2.5">
        <div className="flex space-x-4">
          <a href="#home" className="text-white no-underline transition-colors duration-300 ease-in-out mx-3 hover:text:underline">Home</a>
          <a href="#about" className="text-white no-underline transition-colors duration-300 ease-in-out mx-3 hover:text-[#03a9f4]">About Us</a>
          <a href="#service" className="text-white no-underline transition-colors duration-300 ease-in-out mx-3 hover:text-[#03a9f4]">Service</a>
          <a href="#contact" className="text-white no-underline transition-colors duration-300 ease-in-out mx-3 hover:text-[#03a9f4]">Contact Us</a>
        </div>
        <div className="flex space-x-4">
          <button className="bg-[#03a9f4] text-white rounded-lg px-4 py-2 transition-bg duration-300 ease-in-out hover:bg-[#0277bd]">Login</button>
          <button className="bg-blue-500 text-white rounded-lg px-4 py-2 transition-bg duration-300 ease-in-out hover:bg-[#0277bd]">Sign Up</button>
        </div>
      </nav>

      {/* Banner Section */}
      <div className="relative w-full h-64 overflow-hidden mt-5">
        <div className="absolute w-full h-full flex animate-marquee space-x-4">
          {images.map((image, index) => (
            <img key={index} src={image} alt="Market" className="w-full h-64 object-cover rounded-lg transition-transform duration-500 ease-in-out hover:scale-105" />
          ))}
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex justify-center mx-0 my-5">
        <input type="text" className="w-[90%] md:w-1/2 text-base p-2.5 rounded-full border-2 border-solid border-[#333] outline-none" placeholder="Search" />
        <button className="bg-[#03a9f4] text-white cursor-pointer ml-[-45px] transition-bg duration-300 ease-in-out px-5 py-2.5 rounded-full border-none hover:bg-[#0288d1]">🔍</button>
      </div>

      {/* Category Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5">
        <div className="text-center bg-white p-4 rounded-lg hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
          <img src={groceryImage} alt="Grocery" className="w-full h-32 object-cover rounded-lg" />
          <p className="text-base text-[#333] mt-2.5">Grocery</p>
        </div>
        <div className="text-center bg-white p-4 rounded-lg hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
          <img src={medicinesImage} alt="Medicines" className="w-full h-32 object-cover rounded-lg" />
          <p className="text-base text-[#333] mt-2.5">Medicines</p>
        </div>
        <div className="text-center bg-white p-4 rounded-lg hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
          <img src={vegetablesImage} alt="Vegetables" className="w-full h-32 object-cover rounded-lg" />
          <p className="text-base text-[#333] mt-2.5">Vegetables</p>
        </div>
        <div className="text-center bg-white p-4 rounded-lg hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
          <img src={drinksImage} alt="Drinks" className="w-full h-32 object-cover rounded-lg" />
          <p className="text-base text-[#333] mt-2.5">Drinks and Beverages</p>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white relative w-full mt-10 px-0 py-10 bottom-0">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="space-y-2">
            <h2 className="text-lg text-blue mb-4">About Us</h2>
            <p className="text-sm">We are committed to delivering the freshest groceries and medicines at your doorstep. Shop with us for convenience and quality.</p>
          </div>
          <div className="space-y-2">
            <h2 className="text-lg text-[#ffd700] mb-4">Quick Links</h2>
            <ul className="list-none space-y-1">
              <li><a href="#home" className="hover:underline text-blue">Home</a></li>
              <li><a href="#about" className="hover:underline">About Us</a></li>
              <li><a href="#service" className="hover:underline">Services</a></li>
              <li><a href="#contact" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>
          <div className="space-y-2">
            <h2 className="text-lg text-[#ffd700] mb-4">Contact Us</h2>
            <p className="text-sm">Email: support@groceryshop.com</p>
            <p className="text-sm">Phone: +123 456 7890</p>
            <p className="text-sm">Address: 123 Market Street, City</p>
          </div>
          <div className="space-y-2">
            <h2 className="text-lg text-[#ffd700] mb-4">Follow Us</h2>
            <div className="flex space-x-2">
              <a href="https://facebook.com" className="bg-gray-700 p-2 rounded hover:bg-gray-600">Facebook</a>
              <a href="https://twitter.com" className="bg-gray-700 p-2 rounded hover:bg-gray-600">Twitter</a>
              <a href="https://instagram.com" className="bg-gray-700 p-2 rounded hover:bg-gray-600">Instagram</a>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <p>&copy; 2024 GroceryShop | All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage1;
