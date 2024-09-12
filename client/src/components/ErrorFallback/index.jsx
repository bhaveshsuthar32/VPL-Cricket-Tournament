import { useLocation, Link } from "react-router-dom";

export default function ErrorFallback({ error }) {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const errorMsg = queryParams.get("msg");

  return (
    <section className="h-screen w-screen flex justify-around items-center overflow-hidden">
      <img
        src="https://cdn.dribbble.com/users/774806/screenshots/3823110/something-went-wrong.gif"
        className="border"
      />

      <div className="flex flex-col gap-5 justify-center items-center h-3/5 w-2/5">
        {/* errors from url */}
        <p className="">{errorMsg}</p>
        {/* thrown errors */}
        {error && (
          <div className="text-black/60 text-lg font-medium">
            <span className="text-black font-semibold">ERROR :</span>{" "}
            {error.message}
          </div>
        )}

        <div className="flex flex-row gap-2">
          <button
            className="bg-black text-white font-medium"
            onClick={() => window.location.reload()}
          >
            Try Again
          </button>
          <a className="bg-black text-white font-medium" href="/">
            Go to Home
          </a>
        </div>
      </div>
    </section>
  );
}