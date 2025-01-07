import React from "react";
import Parallelogram from "@/components/parallelogram/parallelogram";
import "@/styles/globals.css";

function Mission() {
  return (
    <div className="centerContainer">
      <div className="background">
        {/* Header */}
        <h1 className="title" style={{ marginTop: "160px" }}>
          <i className="fa-solid fa-hand-holding-heart"></i> Our Mission
        </h1>

        {/* First Pair */}
        <div className="contentRow">
          <div className="parallelogramContainer">
            <Parallelogram
              width="200px"
              height="200px"
              color="var(--secondary-color)"
              top="0vh"
              left="0vw"
            >
              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  textAlign: "left",
                  transform: "skew(20deg)",
                }}
              >
                <h1
                  style={{
                    color: "var(--foreground-color)",
                    fontSize: "2.6rem",
                    fontStyle: "normal",
                  }}
                >
                  01
                </h1>
              </div>
            </Parallelogram>
          </div>
          <div className="textContainerRight">
            <div>
              <h2>Vulnerability: Acknowledging Brokenness</h2>
              <br />
              <ul>
                <li>
                  LOC acknowledges openly our brokenness because of our sin
                  (Romans 3:10-12 & 7:15-25) and recognizes our need for help.
                </li>
                <li>
                  By being real people with real hurts, we create an environment
                  where authenticity leads to healing through Christ, deepening
                  our faith at the roots.
                  <ul>
                    <li>
                      We hope to do this with an emphasis on mental and
                      emotional health, and helping folks find Christ, the
                      resources they need, and a community of spiritual family
                      to better cope.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Second Pair */}
        <div className="contentRow">
          <div className="parallelogramContainer">
            <Parallelogram
              width="200px"
              height="200px"
              color="var(--secondary-color)"
              top="0vh"
              left="0vw"
            >
              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  textAlign: "left",
                  transform: "skew(20deg)",
                }}
              >
                <h1
                  style={{
                    color: "var(--foreground-color)",
                    fontSize: "2.6rem",
                    fontStyle: "normal",
                  }}
                >
                  02
                </h1>
              </div>
            </Parallelogram>
          </div>
          <div className="textContainerRight">
            <div>
              <h2>Engagement: Impacting Our Community & Beyond</h2>
              <br />
              <ul>
                <li>
                  LOC engages with our community to create positive change,
                  fostering relationships and transcending political and
                  cultural divisions through our focus on Jesus' greatness (Mark
                  12:14-17 & Ephesians 2:13-22).
                </li>
                <li>
                  Our commitment to making a tangible impact in our community
                  helps us address real hurts and build deeper connections,
                  embodying Christ's teachings.
                  <ul>
                    <li>
                      We plan to do this by partnering with local agencies that
                      are already working to build a better Alvin for everybody
                      and giving them the added impact our church can bring.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Third Pair */}
        <div className="contentRow">
          <div className="parallelogramContainer">
            <Parallelogram
              width="200px"
              height="200px"
              color="var(--secondary-color)"
              top="0vh"
              left="0vw"
            >
              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  textAlign: "left",
                  transform: "skew(20deg)",
                }}
              >
                <h1
                  style={{
                    color: "var(--foreground-color)",
                    fontSize: "2.6rem",
                    fontStyle: "normal",
                  }}
                >
                  03
                </h1>
              </div>
            </Parallelogram>
          </div>
          <div className="textContainerRight">
            <div>
              <h2>Pursuit:  Bringing People Closer to Christ</h2>
              <br />
              <ul>
                <li>
                 LOC activly pursues those far from Christ, seeking to bring them closer to Him through acts of love, generosity, justice and compassion (Isaiah 61:4 & James 2:14-18).
                </li>
                <li>
                 By prioritizing our neighbors' needs and demonstrating Christ's love, we help others begin their heling journey and grow deeper in their faith.
                  <ul>
                    <li>
                      We do this through making disciples intentionally in Connect Groups, worshipping and praying together as a church, along with community and personal outreach.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>



        <h1 className="title" style={{ marginTop: "160px" }}>
          <i className="fa-solid fa-location-dot"></i> Why Alvin?
        </h1>

        {/* Content Section 4 */}
        <div className="contentRowSquareLong">
          {/* Square Image */}
          <img
            src="/images/alvinNeighborhood.png"
            alt="Family Perrin"
            className="profileImageSquare"
          />

          {/* Text */}
          <p className="description">
            Simply put, the Northern Brazoria County Area is one of the fastest
            growing areas connected to Houston. The Alvin ISD is the 7th fastest
            growing school district in Texas, with a projection to grow by 7000
            students in the next 10 years.
            <br />
            Alvin is next on TxDOT's plan to expand highway 99, projecting 4000
            new home builds during that time. The fact is, Alvin is going to
            need more Gospel-centered churches.
          </p>
        </div>
       
      </div>
    </div>
  );
}

export default Mission;
