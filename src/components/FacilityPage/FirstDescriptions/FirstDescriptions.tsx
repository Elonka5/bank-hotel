import ResponsiveImage from "../../ResponsiveImg/ResponsiveImg";

const FirstDescriptions = () => {
  return (
    <section className="first-descriptions container">
      <div className="first-descriptions__images">
        <div className="first-image--wrapper">
          <ResponsiveImage srcImg="facility1" alt="facility1" path="facility" />
        </div>
        <div className="second-image--wrapper">
          {" "}
          <ResponsiveImage srcImg="facility2" alt="facility2" path="facility" />
        </div>
      </div>
      <div className="first-descriptions__texts">
        <div className="description1">
          <p className="title">At your service</p>
          <p className="text">
            The team of the Safe Restaurant aims to exceed all expectations of
            our guests. Our chef worked hard to develop a unique menu that
            features the best meals of the European cuisine that will match the
            tastes of the most demanding clients. Friendly and attentive waiters
            will ensure that you will enjoy your time in our restaurant.
          </p>
        </div>
        <p className="description2">
          Once you try our cuisine and service, you shall never want to visit
          another restaurant.
        </p>
      </div>
    </section>
  );
};

export default FirstDescriptions;
