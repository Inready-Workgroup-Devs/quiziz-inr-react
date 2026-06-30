import { Link } from "react-router";

function HomePage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
        <p className="text-bold text-6xl">website quiz inready</p>

      <Link to={"/quiz"}>Mulai Quiz</Link>
    </div>
  );
}

export default HomePage;
