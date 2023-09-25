class VertuBanner extends HTMLElement {
    #hrefs = {
        bristolstreet: 'https://www.bristolstreet.co.uk/sell-my-car/?utm_source=aacars&utm_medium=referral&utm_campaign=smc_display',
        macklin: 'https://www.macklinmotors.co.uk/sell-my-car/?utm_source=aacars&utm_medium=referral&utm_campaign=smc_display',
    };

    constructor() {
        super();
        this.name = 'vertu';
        this.href = 'https://www.vertumotors.com/sell-my-car/?utm_source=aacars&utm_medium=referral&utm_campaign=smc_display';
    }

    static get observedAttributes() {
        return ['name'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue === newValue) return;
        this[ name ] = newValue;

        if (newValue !== 'vertu') {
            this.href = this.#hrefs[`${newValue.replace('-', '')}`];
        }
    }

    connectedCallback() {
        const banner = this.attachShadow({ mode: 'closed' });

        banner.innerHTML = `
            <style>
                .vertu-valuation {
                    background: #1c3f77;
                    background-image: url('assets/blue-pig.png'), radial-gradient(circle at top left, #42a8d7, #16599c, #0f1b42);
                    background-position: center top 125px, left top ;
                    background-repeat: no-repeat;
                    color: #fff;
                    font-family: arial;
                    padding: 20px;
                    text-align: center;
                }
                img {
                    height: 40px;
                    margin-bottom: 8px;
                    min-height: 40px;
                    width: auto;
                }
                .vertu-valuation-heading {
                    font-size: 3rem;
                    line-height: 1.2;
                    margin-bottom: 195px;
                    margin-top: 0;
                }
                .vertu-valuation-benefit {
                    display: block;
                    font-size: 1.25rem;
                    line-height: 28px;
                    margin-bottom: 0;
                }
                .vertu-valuation-tagline {
                    font-size: 1.25rem;
                    line-height: 2rem;
                    margin-bottom: 0.5rem;
                    margin-top: 0
                }
                .vertu-valuation-button {
                    background: white;
                    border: none;
                    border-radius: 30px;
                    color: #000;
                    display: inline-block;
                    font-size: 1.125rem;
                    font-weight: bold;
                    padding: 9px 18px;
                    text-decoration: none;
                }
                @media (min-width: 768px) and (max-width: 1100px) {
                    .vertu-valuation {
                        padding: {
                            left: 10px;
                            right: 10px
                        };
                    }
                    .vertu-valuation-benefit,
                    .vertu-valuation-tagline {
                        font-size: 1.125rem;
                    }
                }
                .vertu-valuation.vertu {
                    background: #2d2735;
                    background-image: url('assets/green-pig.png'), linear-gradient(#181723, #34323f, #150815);
                    background-position: center top 115px, left top ;
                    background-repeat: no-repeat;
                }
                .vertu .vertu-valuation-button {
                    background: #02e2c8;
                }
            </style>
            <section class="vertu-valuation ${this.name}">
                <img src="assets/${this.name}-valuation.png") }}" alt="${this.name.replace('-', ' ').toUpperCase()} MOTORS" height="40" loading="lazy">
                <h3 class="vertu-valuation-heading">Sell my car</h3>
                <strong class="vertu-valuation-benefit">Sell your car in 3 simple steps!</strong>
                <p class="vertu-valuation-tagline">Value it, book it, sell it.</p>
                <a href="${this.href}" class="vertu-valuation-button" target="_blank" rel="nofollow noopener">Sell My Car</a>
            </section>
        `;
    }
}

customElements.define('vertu-banner', VertuBanner);