import TickerText from "./TickerText";

const TickerRight: React.FC = () => {
  return (
    <div className="ticker--container">
      {/* <div className="ticker--wrapper"> */}
      <div className="ticker--wrapper__right">
        <TickerText tickerText="Bank hotel" count={10} highlightEveryNth={3} />
        {/* <TickerText tickerText="Bank hotel" count={8} /> */}
      </div>
      {/* </div> */}
    </div>
  );
};

export default TickerRight;
