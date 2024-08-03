import "./Card.css";
import Description from "../Description/Description";
import ProfileSection from "../ProfileSection/ProfileSection";

export function Card() {
  return (
    <div className="card">
      <div className="image-wrapper">
        <img
          src="./images/image-equilibrium.jpg"
          alt=""
          className="nft-image"
        />
      </div>
      <Description />
      <ProfileSection />
    </div>
  );
}
