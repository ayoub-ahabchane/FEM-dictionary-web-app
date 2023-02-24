import { useLoaderData } from "react-router-dom";
import { motion } from "framer-motion";
import NotFound from "./NotFound";
import { useState } from "react";
export const loader = async ({ params }) => {
  const word = params.word;
  const res = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
  );
  const status = res.status;
  const data = await res.json();

  const result = res.ok ? data[0] : data;
  return { word, status, result };
};

const Result = () => {
  const { status, result } = useLoaderData();
  const [buttonState, setButtonState] = useState("idle");

  if (status === 404) {
    const { title } = result;
    document.title = title;
    return <NotFound result={result} />;
  } else {
    const { word, phonetic, phonetics, meanings, sourceUrls } = result;
    const audio = phonetics.find((item) => item.audio)
      ? new Audio(phonetics.find((item) => item.audio).audio)
      : null;

    const firstletter = word.charAt(0).toUpperCase();
    const restOfWord = word.slice(1);
    const capitalizedWord = firstletter + restOfWord;

    document.title = `${capitalizedWord} | Dictionnary`;

    return (
      <motion.div
        key={"result"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeIn" }}
      >
        <div className="mb-7 flex items-center justify-between md:mb-10">
          <div className="grow">
            <h1 className="mb-2 text-3xl font-bold capitalize md:text-6xl md:leading-tight">
              {word}
            </h1>
            <p className="font-sans text-lg text-accent md:text-2xl">
              {phonetic}
            </p>
          </div>
          <button
            title={audio ? `Listen to the pronunciation` : "Audio unavailable"}
            className={`inline-block h-12 w-12 shrink-0 rounded-full md:h-[75px]  md:w-[75px] ${
              audio
                ? "cursor-pointer fill-accent"
                : "cursor-not-allowed fill-secondary-400"
            } `}
            onClick={() => {
              audio && audio.play();
            }}
            onMouseEnter={() => {
              setButtonState("hovered");
            }}
            onFocus={() => {
              setButtonState("hovered");
            }}
            onMouseLeave={() => {
              setButtonState("idle");
            }}
            onBlur={() => {
              setButtonState("idle");
            }}
          >
            <svg
              className="h-12 w-12 md:h-[75px] md:w-[75px]"
              xmlns="http://www.w3.org/2000/svg"
              width="75"
              height="75"
              viewBox="0 0 75 75"
            >
              <g>
                <circle
                  cx="37.5"
                  cy="37.5"
                  r="37.5"
                  className={`${
                    audio && buttonState === "idle"
                      ? "opacity-25"
                      : audio && buttonState === "hovered"
                      ? "opacity-100"
                      : null
                  } transition-all duration-300`}
                />
                <path
                  d="M29 27v21l21-10.5z"
                  className={`opacity-100 ${
                    audio && buttonState === "idle"
                      ? "fill-accent"
                      : audio && buttonState === "hovered"
                      ? "fill-white"
                      : "fill-secondary-300"
                  } transition-colors duration-300`}
                />
              </g>
            </svg>
          </button>
        </div>
        {meanings.map(({ partOfSpeech, definitions, synonyms }) => {
          return (
            <section key={Math.random()} className="mb-7 md:mb-10">
              <h2 className="mb-7 flex items-center gap-4 whitespace-nowrap text-lg font-bold italic after:inline-block after:h-px after:w-full after:bg-secondary-300 after:transition-colors after:duration-300 after:content-[''] dark:after:bg-primary-300 md:mb-10 md:text-2xl">
                {partOfSpeech}
              </h2>

              <article className="mb-6 md:mb-10">
                <h3 className="mb-4 text-secondary-400 md:mb-6 md:text-xl">
                  Meaning
                </h3>
                <ul className="flex list-none flex-col gap-3 md:gap-5">
                  {definitions.map(({ definition, example }) => {
                    return (
                      <li
                        key={Math.random()}
                        className="flex items-baseline before:mr-5 before:inline-block before:aspect-square before:h-1.5 before:rounded-full before:bg-accent before:content-['']"
                      >
                        <div>
                          <p>{definition}</p>
                          {example && (
                            <q className="mt-3 text-secondary-400">{example}</q>
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </article>
              {synonyms.length > 0 && (
                <article className="mb-6  md:mb-10">
                  <h3 className="mr-4 mb-4 inline-block text-secondary-400 md:text-xl">
                    Synonyms
                  </h3>
                  {synonyms.map((synonym) => {
                    return (
                      <span
                        key={Math.random()}
                        className="mr-4 mb-4 inline-block font-bold text-accent"
                      >
                        {synonym}
                      </span>
                    );
                  })}
                </article>
              )}
              <footer className="border-t border-secondary-300 pt-6 transition-colors duration-300 dark:border-primary-300">
                <span className="mb-3 mr-4 text-secondary-400">Source</span>
                <a href={sourceUrls[0]} target="_blank">
                  <span className="text-sm underline decoration-secondary-400">
                    {sourceUrls[0]}
                  </span>
                  <svg
                    className="ml-1 inline-block h-5 w-5 stroke-secondary-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    // class="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </a>
              </footer>
            </section>
          );
        })}
      </motion.div>
    );
  }
};

export default Result;

const circleVariants = {
  hovered: {
    opacity: "1",
    fill: "white",
  },
  idle: {
    opacity: "0.25",
  },
};
