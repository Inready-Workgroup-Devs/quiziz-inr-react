import { Link } from "react-router";

function HomePage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="max-w-4xl w-full flex flex-col items-center gap-10 shadow-xl py-10 rounded-xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold underline decoration-2 underline-offset-8">
            Konfigurasi Quiz mu!
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <fieldset>
            <legend className="flex items-center gap-2 text-sm font-medium mb-3">
              <span aria-hidden>⚡</span> Tingkat Kesusahan
            </legend>

            <div className="flex flex-col gap-3"></div>
          </fieldset>
        </div>

        <Link to={"/quiz"} className="">
          Mulai Quiz
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
