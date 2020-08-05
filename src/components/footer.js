import React from "react"

import {Link} from "gatsby"

function Footer() {
  return (
    <footer>
      <div>
        <details>
          <summary>Disclaimer</summary>
          <p>
            This site is not managed or influenced by any official member of
            BBNAIJA.
          </p>
          <p>
            It is a fun project by kelvin together with some {" "}
            <Link to="/awesomepeople"><span className="blue">asewome</span> {" "}
            <span className="yellow">people</span></Link>.
          </p>
          <p>Tho...you can send a DM on twitter to join the list of awesome People. We will LOVE you.</p>
        </details>
        <hr />
        <details>
          <summary>Privacy</summary>
          <p>
            Aside the use of few google analytics tricks, we do not collect any
            information be it name, gmail not to mention tracking your previous
            activities online.
          </p>
          <p>
            BBNAIJAOCTOPUS is just a safe place for BBNAIJA fans to have fun and
            get rewarded for their BBNAIJA passion.
          </p>
        </details>
        <details>
          <summary>How To Win</summary>
          <p>
            Visit the <Link to="/octopus">octopus page</Link> on this website, see the three exiters for the week.
          </p>
          <p>
            Move to the octopus twitter page, you will see the vote tweet...then vote.
          </p>
          <p>
            If your vote matches who leaves the house, you stand a chance together with other three voters to get gift from our <Link to="/awesomepeople"><span className="blue">asewome</span> {" "}
            <span className="yellow">people</span></Link>.
          </p>
        </details>
        <hr />
        <div>
          <aside>Maintained with love together with kelvinsekx </aside>
        </div>
      </div>
    </footer>
  )
}

export default Footer
