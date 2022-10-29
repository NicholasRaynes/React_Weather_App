import "./styles.css";

const api = {
  key: "b7214983211ca378df507c10506cbac8",
  base: "https://api.openweathermap.org/data/2.5/"
};

export default function App() {
  return (
    <div className="App">
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="Search..." />
        </div>
      </main>
    </div>
  );
}
