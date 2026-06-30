import { Link } from "react-router";

export default function QuizPage() {
  return (
    <div className="flex justify-center items-center min-h-screen flex-col gap-8">
      <p className="text-3xl font-bold">Halaman Quiz</p>
      <Link
        to={"/"}
        className="text-white bg-blue-700 hover:bg-blue-500 px-6 py-2 rounded-lg font-medium"
      >
        Kembali
      </Link>
    </div>
  );
}
