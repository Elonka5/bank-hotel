import { Ticker } from "../../../../../entities/ticker";

const TickerText: React.FC<Ticker> = ({
  tickerText,
  count,
  highlightEveryNth,
}) => {
  const textArray = new Array(count).fill(tickerText);

  return (
    <p className="ticker-text">
      {textArray.map((text, i) => (
        // <span
        //   key={i}
        //   className={
        //     highlightEveryNth && (i + 1) % highlightEveryNth === 0
        //       ? "highlight"
        //       : ""
        //   }
        // >
        //   {highlightEveryNth && (i + 1) % highlightEveryNth === 0
        //     ? `${text} &#xa9; `
        //     : `${text} `}
        // </span>

        <span
          key={i}
          className={
            highlightEveryNth && (i + 1) % highlightEveryNth === 0
              ? "highlight"
              : ""
          }
          dangerouslySetInnerHTML={{
            __html:
              highlightEveryNth && (i + 1) % highlightEveryNth === 0
                ? "Bank__hotel&#xa9; "
                : `${text} `,
          }}
        />
      ))}
    </p>
  );
};

export default TickerText;
