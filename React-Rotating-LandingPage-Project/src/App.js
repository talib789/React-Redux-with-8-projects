import HomePage from "./Components/HomePage";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init({
  duration: 1000,
});

function App() {
  return (
    <div>
      <HomePage />
    </div>
  );
}

export default App;
