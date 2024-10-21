import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class unSdg extends DDDSuper(LitElement) {
  static get tag() {
    return "un-sdg";
  }
  static get properties() {
    return {
      goal: { type: String },
      colorOnly: { type: Boolean },
      itemWidth: { type: String },
      itemHeight: { type: String }, 
    };
  }
  
  constructor() {
    super();
    this.goal = "all";
    this.colorOnly = false;
    this.itemWidth = "600px"; 
    this.itemHeight = "200px"; 
    this.goals = [
      {
        imgUrl: "https://unf.imgix.net/2019/09/E-WEB-Goal-01.png?auto=compress%2Cformat&fit=scale&h=170&ixlib=php-3.3.1&w=170&wpsize=gallery&dpr=3",
        link: "https://unfoundation.org/blog/post/reversal-and-resilience-sdg-progress-after-a-year-of-covid-19/",
        title: "Reversal and Resilience: SDG Progress After a Year of COVID-19",
      },
      {
        imgUrl: "https://unf.imgix.net/2019/09/E-WEB-Goal-02.png?auto=compress%2Cformat&fit=scale&h=170&ixlib=php-3.3.1&w=170&wpsize=gallery&dpr=3",
        link: "https://unfoundation.org/blog/post/hungrier-than-ever-generations-of-undernourished-and-overlooked-mothers-women-and-girls/",
        title: "Hungrier Than Ever: Generations Of Undernourished And Overlooked Mothers Women And Girls",
      },
      {
        imgUrl: "https://unf.imgix.net/2019/09/E-WEB-Goal-03.png?auto=compress%2Cformat&fit=scale&h=170&ixlib=php-3.3.1&w=170&wpsize=gallery&dpr=3",
        link: "https://unfoundation.org/blog/post/health-for-all-our-experts-reflect-on-whos-75-years-of-impact/",
        title: "Health For All: Our Experts Reflect On WHOs 75 Years Of Impact",
      },
      {
        imgUrl: "https://unf.imgix.net/2019/09/E-WEB-Goal-04.png?auto=compress%2Cformat&fit=scale&h=170&ixlib=php-3.3.1&w=170&wpsize=gallery&dpr=3",
        link: "https://unfoundation.org/blog/post/7-innovative-ways-american-universities-are-driving-progress-on-the-sdgs/",
        title: "7 Innovative Ways American Universities are Driving Progress on the SDGs",
      },

      {
        imgUrl: "https://unf.imgix.net/2019/09/E-WEB-Goal-05.png?auto=compress%2Cformat&amp;fit=scale&amp;h=170&amp;ixlib=php-3.3.1&amp;w=170&amp;wpsize=gallery&amp;dpr=3",
        link: "https://unfoundation.org/blog/post/stand-with-her-6-women-led-organizations-tackling-gender-based-violence/",
        title: "Stand With Her: 6 Women-Led Organizations Tackling Gender-Based Violence",
      },
      {
        imgUrl: "https://unf.imgix.net/2019/09/E-WEB-Goal-06.png?auto=compress%2Cformat&fit=scale&h=170&ixlib=php-3.3.1&w=170&wpsize=gallery&dpr=3",
        link: "https://unfoundation.org/blog/post/the-last-straw-how-you-can-beat-plastic-pollution/",
        title: "The Last Straw: How You Can Beat Plastic Pollution",
      },
      {
        imgUrl: "https://unf.imgix.net/2019/09/E-WEB-Goal-07.png?auto=compress%2Cformat&fit=scale&h=170&ixlib=php-3.3.1&w=170&wpsize=gallery&dpr=3",
        link: "https://unfoundation.org/blog/post/in-india-a-cleaner-way-of-cooking-fuels-climate-action-in-the-home/",
        title: "In India, a Cleaner Way of Cooking Fuels Climate Action in the Home",
      },
      {
        imgUrl: "https://unf.imgix.net/2019/09/E-WEB-Goal-08.png?auto=compress%2Cformat&fit=scale&h=170&ixlib=php-3.3.1&w=170&wpsize=gallery&dpr=3",
        link: "http://unfoundation.org/blog/post/protectors-of-progress-manyang-redefines-refugees/",
        title: "Protectors of Progress: Manyang Redefines Refugees",
      },
      {
        imgUrl: "https://unf.imgix.net/2019/09/E-WEB-Goal-09.png?auto=compress%2Cformat&fit=scale&h=170&ixlib=php-3.3.1&w=170&wpsize=gallery&dpr=3",
        link: "https://unfoundation.org/blog/post/key-takeaways-from-act-accelerator-platform-for-sharing-pandemic-countermeasures/",
        title: "Key Takeaways From The ACT- Accelerator: A First-Of-Its-Kind Platform For Sharing Pandemic Countermeasur",
      },
      {
        imgUrl: "https://unf.imgix.net/2019/09/E-WEB-Goal-10.png?auto=compress%2Cformat&fit=scale&h=170&ixlib=php-3.3.1&w=170&wpsize=gallery&dpr=3",
        link: "https://unfoundation.org/blog/post/breakdown-or-breakthrough-the-high-stakes-in-our-common-agenda/",
        title: "Breakdown or Breakthrough? The High Stakes in Our Common Agenda",
      },
      {
        imgUrl: "https://unf.imgix.net/2019/09/E-WEB-Goal-11.png?auto=compress%2Cformat&fit=scale&h=170&ixlib=php-3.3.1&w=170&wpsize=gallery&dpr=3",
        link: "https://unfoundation.org/blog/post/how-5-community-foundations-in-kansas-are-bringing-the-sdgs-home/",
        title: "How 5 Community Foundations in Kansas are Bringing the SDGs Home",
      },
      {
        imgUrl: "https://unf.imgix.net/2019/09/E-WEB-Goal-12.png?auto=compress%2Cformat&fit=scale&h=170&ixlib=php-3.3.1&w=170&wpsize=gallery&dpr=3",
        link: "https://unfoundation.org/blog/post/these-companies-leading-climate-race-against-time/",
        title: "These Companies Leading Climate Race Against Time",
      },
      {
        imgUrl: "https://unf.imgix.net/2019/09/E-WEB-Goal-13.png?auto=compress%2Cformat&fit=scale&h=170&ixlib=php-3.3.1&w=170&wpsize=gallery&dpr=3",
        link: "https://unfoundation.org/blog/post/3-recent-diplomatic-wins-for-climate-justice-and-what-comes-next/",
        title: "3 Recent Diplomatic Wins For Climate Justice — And What Comes Next",
      },
      {
        imgUrl: "https://unf.imgix.net/2019/09/E-WEB-Goal-14.png?auto=compress%2Cformat&fit=scale&h=170&ixlib=php-3.3.1&w=170&wpsize=gallery&dpr=3",
        link: "https://unfoundation.org/blog/post/climate-energy-and-food-crises-loom-heres-why-the-ocean-could-be-the-solution/",
        title: "Climate Energy And Food Crises Loom. Heres Why The Ocean Could Be The Solution",
      },
      {
        imgUrl: "https://unf.imgix.net/2019/09/E-WEB-Goal-15.png?auto=compress%2Cformat&fit=scale&h=170&ixlib=php-3.3.1&w=170&wpsize=gallery&dpr=3",
        link: "https://unfoundation.org/blog/post/meet-3-women-in-brazil-who-are-protecting-the-amazon-rainforest-and-indigenous-rights/",
        title: "Meet 3 Women In Brazil Who Are Protecting The Amazon Rainforest And Indigenous Rights",
      },
      {
        imgUrl: "https://unf.imgix.net/2019/09/E-WEB-Goal-16.png?auto=compress%2Cformat&fit=scale&h=170&ixlib=php-3.3.1&w=170&wpsize=gallery&dpr=3",
        link: "https://unfoundation.org/blog/post/reimagining-a-multilateral-future-with-by-and-for-young-people/",
        title: "Reimagining A Multilateral Future With, By, And For Young People",
      },
      {
        imgUrl: "https://unf.imgix.net/2019/09/E-WEB-Goal-17.png?auto=compress%2Cformat&fit=scale&h=170&ixlib=php-3.3.1&w=170&wpsize=gallery&dpr=3",
        link: "https://unfoundation.org/blog/post/a-city-rising-how-phoenix-is-harnessing-the-power-of-sdg-17/",
        title: "A City Rising: How Phoenix Is Harnessing The Power Of SDG 17",
      },
    ];
  }  
  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          color: var(--ddd-theme-primary);
          background-color: var(--ddd-theme-accent);
          font-family: var(--ddd-font-navigation);
          font-size: var(--un-sdg-font-size, var(--ddd-font-size-s));
          padding: var(--ddd-spacing-4);
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
  
        .wrapper {
          margin: var(--ddd-spacing-2);
          display: flex;
          flex-direction: column;
          align-items: center;
        }
  
        .calendar-item {
          width: var(--un-sdg-item-width, auto);
          height: auto;
          overflow: hidden;
          border-radius: 10px;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
  
        .calendar-item:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }
  
        .calendar-item-img {
          width: 100%;
          height: auto;
          max-height: 500px;
          background-size: cover; /* Use cover for full background */
          background-repeat: no-repeat;
          background-position: center;
          border-radius: 10px;
          overflow: hidden;
          position: relative; /* For positioning the link */
        }
  
        .calendar-item-img.color-only {
          background-size: 10000% !important; /* Zoom effect */
          background-position: 0 0 !important;
        }
  
        .calendar-item-link {
          text-decoration: none;
          background: rgba(0, 0, 0, 0.5);
          color: white;
          padding: 10px;
          border-radius: 0 0 10px 10px;
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
        }
  
        .calendar-item-title {
          font-weight: bold;
          margin-bottom: 5px;
        }
  
        .calendar-item-team {
          font-size: 0.9em;
        }
  
        .row.no-gutters {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }
      `,
    ];
  }
  
  


  render() {
    // Set CSS variables for item width and height
    this.style.setProperty('--un-sdg-item-width', this.itemWidth);
    this.style.setProperty('--un-sdg-item-height', this.itemHeight);
  
    // Check if the goal is "all" to render all calendar items
    if (this.goal === "all") {
      return html`
        <section class="interactive-calendar-block container plain pt-0 pb-5">
          <div class="row no-gutters">
            ${this.goals.map((goal, index) => html`
              <div class="col-12 col-sm-3 calendar-item px-2 color-${this.colorOnly ? 'only' : 'img'}"> <!-- Change here -->
                <div
                  class="calendar-item-img ${this.colorOnly ? 'color-only' : ''}"
                  style="background-image: url('${goal.imgUrl}');"
                >
                  <a
                    class="d-flex flex-column justify-content-end calendar-item-link"
                    href="${goal.link}"
                    target=""
                  >
                    <div class="calendar-item-link-container">
                      <div class="calendar-item-title"></div>
                      <div class="calendar-item-team">
                        ${goal.title}
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            `)}
          </div>
        </section>
        <head>
          <link rel="stylesheet" href="https://unfoundation.org/app/themes/unf/dist/styles/main.css">
        </head>
        <script src="https://unfoundation.org/app/themes/unf/dist/scripts/main.js" async></script>
      `;
    }
  
    
    // Check for "circle" goal
    if (this.goal === "circle") {
      return html`
        <section class="interactive-calendar-block container plain pt-0 pb-5">
          <div class="row no-gutters">
            <div class="col-12 col-sm-3 calendar-item px-2">
              <div
                class="calendar-item-img ${this.colorOnly ? 'color-only' : ''}"
                style="background-image: url('/lib/svgs/circle.png');"
              >
                <a
                  class="d-flex flex-column justify-content-end calendar-item-link"
                  href="#"
                  target=""
                >
                  <div class="calendar-item-link-container">
                    <div class="calendar-item-title"></div>
                    <div class="calendar-item-team">Circle Image</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <head>
          <link rel="stylesheet" href="https://unfoundation.org/app/themes/unf/dist/styles/main.css">
        </head>
        <script src="https://unfoundation.org/app/themes/unf/dist/scripts/main.js" async></script>
      `;
    }

    // For individual goals
    const goal = this.goals[this.goal]; 
    if (!goal) {
      console.log("Invalid goal");
      return;
    }

    return html`
    <section class="interactive-calendar-block container plain pt-0 pb-5">
      <div class="row no-gutters">
        <div class="col-12 col-sm-3 calendar-item px-2">
          <img
            src="/lib/svgs/goal-${this.goal}.svg"
            alt="SDG ${this.goal} Image"
            style="width: 100%; height: auto;"
          />
          <a href="${goal.link}" target="">
            <div class="calendar-item-title"></div>
            <div class="calendar-item-team">${goal.title}</div>
          </a>
        </div>
      </div>
    </section>
  `;
  
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url).href;
  }
}

globalThis.customElements.define(unSdg.tag, unSdg);