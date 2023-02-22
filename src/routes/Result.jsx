import { useLoaderData } from "react-router-dom";

export const loader = async ({ params }) => {
  const word = params.word;
  // const res = await fetch(
  //   `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
  // );
  // const status = res.status;
  // const data = await res.json();
  // return { word, status, data };
  return { word };
};

const Result = () => {
  const { word } = useLoaderData();
  // const { word, status, data } = useLoaderData();
  // console.log(data);
  // if (status === 404) {
  //   return <p>{data.title}</p>;
  // } else {
  //   return (
  //     <>
  //       <h1 className={`font-${themeFont} font-b text-3xl capitalize`}>Dog</h1>
  //     </>
  //   );
  // }

  return (
    <>
      <div className="mb-7 flex items-center justify-between md:mb-10">
        <div className="grow">
          <h1 className="mb-2 text-3xl font-bold capitalize md:text-6xl md:leading-tight">
            {word}
          </h1>
          <p className="font-sans text-lg text-accent md:text-2xl">
            {"/ˈkiːbɔːd/"}
          </p>
        </div>
        <button className="inline-block h-12 w-12 shrink-0 rounded-full md:h-[75px] md:w-[75px]">
          <svg
            className="h-12 w-12 md:h-[75px] md:w-[75px]"
            xmlns="http://www.w3.org/2000/svg"
            width="75"
            height="75"
            viewBox="0 0 75 75"
          >
            <g fill="#A445ED" fillRule="evenodd">
              <circle cx="37.5" cy="37.5" r="37.5" opacity=".25" />
              <path d="M29 27v21l21-10.5z" />
            </g>
          </svg>
        </button>
      </div>
      <section className="mb-7 md:mb-10">
        <h2 className="mb-7 flex items-center gap-4 text-lg font-bold italic after:inline-block after:h-px after:w-full after:bg-secondary-300 after:transition-colors after:duration-300 after:content-[''] dark:after:bg-primary-300 md:mb-10 md:text-2xl">
          noun
        </h2>

        <article className="mb-6 md:mb-10">
          <h3 className="mb-4 text-secondary-400 md:mb-6 md:text-xl">
            Meaning
          </h3>
          <ul className="flex list-none flex-col gap-3">
            <li className="flex items-baseline before:mr-5 before:inline-block before:aspect-square before:h-1.5 before:rounded-full before:bg-accent before:content-['']">
              <div>
                <p>
                  (etc.) A set of keys used to operate a typewriter, computer
                  etc.
                </p>
              </div>
            </li>
            <li className="flex items-baseline before:mr-5 before:inline-block before:aspect-square before:h-1.5 before:rounded-full before:bg-accent before:content-['']">
              <div>
                <p>
                  A component of many instruments including the piano, organ,
                  and harpsichord consisting of usually black and white keys
                  that cause different tones to be produced when struck.
                </p>
              </div>
            </li>
            <li className="flex items-baseline before:mr-5 before:inline-block before:aspect-square before:h-1.5 before:rounded-full before:bg-accent before:content-['']">
              <div>
                <p>
                  A device with keys of a musical keyboard, used to control
                  electronic sound-producing devices which may be built into or
                  separate from the keyboard
                </p>
              </div>
            </li>
          </ul>
        </article>
        <article className="flex gap-6">
          <h3 className="text-secondary-400 md:text-xl">Synonyms</h3>
          <p className="font-bold text-accent">electronic keyboard</p>
        </article>
      </section>
      <section className="mb-7 md:mb-10">
        <h2 className="mb-7 flex items-center gap-4 text-lg font-bold italic after:inline-block after:h-px after:w-full after:bg-secondary-300 after:transition-colors after:duration-300 after:content-[''] dark:after:bg-primary-300 md:mb-10 md:text-2xl">
          verb
        </h2>
        <article className="mb-6 md:mb-10">
          <h3 className="mb-4 text-secondary-400 md:mb-6 md:text-xl">
            Meaning
          </h3>
          <ul className="flex list-none flex-col gap-3">
            <li className="flex items-baseline before:mr-5 before:inline-block before:aspect-square before:h-1.5 before:rounded-full before:bg-accent before:content-['']">
              <div>
                <p>To type on a computer keyboard</p>
                <p className="mt-3 text-secondary-400">
                  “Keyboarding is the part of this job I hate the most.”
                </p>
              </div>
            </li>
          </ul>
        </article>
      </section>
      <footer className="border-t border-secondary-300 pt-6 transition-colors duration-300 dark:border-primary-300">
        <span className="mb-3 mr-4 text-secondary-400">Source</span>
        <a href="https://en.wiktionary.org/wiki/keyboard" target="_blank">
          <span className="text-sm underline decoration-secondary-400">
            https://en.wiktionary.org/wiki/keyboard
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
    </>
  );
};

export default Result;
