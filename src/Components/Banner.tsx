import bannerMain from "../assets/banner-main.png";
import bgShadow from "../assets/bg-shadow.png";

interface BannerProps {
  onClaimCredit?: () => void;
}

const Banner = ({ onClaimCredit }: BannerProps) => {
  return (
    <div className="max-w-7xl mx-auto px-4 my-8">
      <section
        className="w-full rounded-3xl overflow-hidden flex flex-col items-center justify-center p-10 md:p-20 text-center gap-6 shadow-lg"
        style={{
          backgroundImage: `url(${bgShadow})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#131313",
        }}
      >
        <img
          src={bannerMain}
          alt="Cricket Game"
          className="w-56 md:w-64 object-contain mb-2"
        />

        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-white leading-snug">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h1>
          <p className="text-gray-300 md:text-lg font-medium tracking-wide">
            Beyond Boundaries Beyond Limits
          </p>
        </div>

        <div className="border-2 border-[#E7FE29] p-1.5 rounded-2xl mt-4">
          <button
            onClick={onClaimCredit}
            className="bg-[#E7FE29] text-gray-900 font-bold py-3 px-6 rounded-xl hover:bg-yellow-400 transition-colors shadow-inner"
          >
            Claim Free Credit
          </button>
        </div>
      </section>
    </div>
  );
};

export default Banner;