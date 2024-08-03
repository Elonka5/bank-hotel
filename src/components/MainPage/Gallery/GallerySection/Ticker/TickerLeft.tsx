import TickerText from "./TickerText";

const TickerLeft: React.FC = () => {
  return (
    <div className="ticker--container">
      <div className="ticker--wrapper__left">
        <TickerText tickerText="Bank hotel" count={10} />
      </div>
    </div>
  );
};

export default TickerLeft;
