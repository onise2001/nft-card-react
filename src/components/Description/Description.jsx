import "./Description.css";

export default function Description() {
  return (
    <div className="nft-info">
      <h2 className="nft-name">Equilibrium #3429</h2>
      <p className="nft-description">
        Our Equilibrium collection promotes balance and calm.
      </p>
      <div className="nft-auction">
        <div className="nft-price">
          <img src="./images/icon-ethereum.svg" alt="" />
          <p className="price-text">0.041 ETH</p>
        </div>
        <div className="time-left">
          <img src="./images/icon-clock.svg" alt="" />
          <p className="time-text">3 days left</p>
        </div>
      </div>
    </div>
  );
}
