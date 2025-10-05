import { Globe, Target, Zap } from "lucide-react";

const Mission = () => {
  return (
    <>
      <style>{`
        /* Section Container */
        .mission-vision {
          background-color: #0b1120;
          padding: 6rem 5%;
          text-align: center;
        }

        /* Section Title */
        .mv-heading {
          font-size: 2.5rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 1rem;
        }

        .mv-heading span {
          color: #00e0ff; /* Accent color same as site buttons */
        }

        .mv-subtext {
          color: hsl(210, 20%, 70%);
          font-size: 1.125rem;
          max-width: 800px;
          margin: 0 auto 4rem;
          line-height: 1.8;
        }

        /* Grid Layout */
        .mv-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 3rem;
          align-items: start;
        }

        /* Left Column - Vision & Mission Text */
        .mv-content {
          text-align: left;
          display: flex;
          flex-direction: column;
          gap: 3rem;
          background: linear-gradient(135deg, rgba(15, 25, 40, 0.9), rgba(10, 20, 30, 0.8));
          border: 1px solid rgba(0, 224, 255, 0.2);
          border-radius: 0.75rem;
          padding: 3rem;
        }

        .mv-content h2 {
          font-size: 1.75rem;
          font-weight: 600;
          color: #00e0ff;
          margin-bottom: 1rem;
        }

        .mv-content p {
          font-size: 1.1rem;
          color: hsl(210, 20%, 75%);
          line-height: 1.8;
        }

        /* Right Column - Cards */
        .mv-features {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .mv-card {
          background: linear-gradient(135deg, rgba(15, 25, 40, 0.9), rgba(10, 20, 30, 0.8));
          border: 1px solid rgba(0, 224, 255, 0.2);
          border-radius: 0.75rem;
          padding: 2.5rem;
          text-align: left;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .mv-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0, 224, 255, 0.1);
        }

        .mv-icon {
          width: 3.5rem;
          height: 3.5rem;
          border-radius: 0.75rem;
          background: rgba(0, 224, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.25rem;
        }

        .mv-icon svg {
          color: #00e0ff;
          width: 1.75rem;
          height: 1.75rem;
        }

        .mv-card-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #fff;
          margin-bottom: 0.75rem;
        }

        .mv-card-text {
          color: hsl(210, 20%, 75%);
          line-height: 1.7;
        }

        @media (max-width: 768px) {
          .mission-vision {
            padding: 4rem 1.5rem;
          }

          .mv-heading {
            font-size: 2rem;
          }
        }
      `}</style>

      <section className="mission-vision">
        {/* Section Heading */}
        <h2 className="mv-heading">
          Our <span>Mission & Vision</span>
        </h2>
        <p className="mv-subtext">
          We believe in creating digital experiences that empower businesses to stand out, grow faster,
          and build meaningful connections with their audience.
        </p>

        <div className="mv-grid">
          {/* Left Side - Vision & Mission */}
          <div className="mv-content">
            <div>
              <h2>Our Vision</h2>
              <p>
                To empower every business — from startups to growing brands — with a strong and lasting
                digital identity. We envision a world where every brand looks professional online, connects
                deeply with its audience, and grows confidently in the digital space.
              </p>
            </div>

            <div>
              <h2>Our Mission</h2>
              <p>
                Our mission is to craft high-performing websites and smart digital strategies that help
                businesses attract, engage, and convert their audience. We combine design, technology, and
                strategy to turn your online presence into your strongest growth engine — creating not just
                a website, but a powerful brand experience.
              </p>
            </div>
          </div>

          {/* Right Side - Cards */}
          <div className="mv-features">
            <div className="mv-card">
              <div className="mv-icon">
                <Globe />
              </div>
              <h3 className="mv-card-title">Modern Web Design</h3>
              <p className="mv-card-text">
                Responsive, visually stunning websites that reflect your brand identity and engage your audience.
              </p>
            </div>

            <div className="mv-card">
              <div className="mv-icon">
                <Zap />
              </div>
              <h3 className="mv-card-title">Digital Innovation</h3>
              <p className="mv-card-text">
                Blending creativity and technology to deliver cutting-edge digital experiences that make a difference.
              </p>
            </div>

            <div className="mv-card">
              <div className="mv-icon">
                <Target />
              </div>
              <h3 className="mv-card-title">Growth Strategy</h3>
              <p className="mv-card-text">
                Data-driven marketing strategies that help your business reach the right audience and grow sustainably.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Mission;
