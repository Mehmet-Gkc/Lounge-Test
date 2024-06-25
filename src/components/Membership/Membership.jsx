import React from "react";

function Membership() {
  return (
    <>
      <div className="welcome-section">
        <h1>Welcome to the World of LoungeMe</h1>
        <p>
          We offer you different entry options so that you can find the perfect
          one to suit your travel needs, regardless of whether you are an
          infrequent, seasoned or regular traveler. Purchase a single entry or
          choose a membership plan with special access to enjoy benefits all
          year long.
        </p>
      </div>

      <div className="membership-section">
        <div className="membership-card explorer">
          <h2>EXPLORER</h2>
          <p>
            Let's guide you to our unique, first-class EXPLORER program and help
            you save time at the airport. Discounted entry rate to all the
            A-class lounges worldwide.
          </p>
          <button>€29 BUY</button>
        </div>
        <div className="membership-card traveler">
          <h2>TRAVELER</h2>
          <p>
            The perfect fit for the mid-tier TRAVELER. Enjoy access to the most
            private lounges and take advantage of all the complimentary
            services.
          </p>
          <button>€49 BUY</button>
        </div>
        <div className="membership-card voyager">
          <h2>VOYAGER</h2>
          <p>
            The cream of the crop, the best of the best. The VOYAGER membership
            gives you VIP access to lounges worldwide.
          </p>
          <button>€69 BUY</button>
        </div>
      </div>
    </>
  );
}

export default Membership;
