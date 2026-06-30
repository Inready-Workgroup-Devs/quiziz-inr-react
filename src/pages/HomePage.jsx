import { Link } from "react-router";
import { DIFFICULTIES } from "../lib/utils";
import { useState } from "react";

function HomePage() {
  const [difficultySelected, setDifficultySelected] = useState();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="max-w-4xl w-full flex flex-col items-center gap-10 shadow-xl py-10 rounded-xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold underline decoration-2 underline-offset-8">
            Konfigurasi Quiz mu!
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8"></div>

        <Link to={"/quiz"} className="">
          Mulai Quiz
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
