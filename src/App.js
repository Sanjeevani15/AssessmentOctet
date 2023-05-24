import ActiveJobs from "./components/ActiveJobs";
import AppChart from "./components/AppChart";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div id="dashboard" className="h-full w-full flex flex-col">
      <Navbar />
      <Header />
      <AppChart />
      <ActiveJobs />
      <Footer />
    </div>
  );
}

export default App;
