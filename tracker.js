class Tracker {
    constructor() {
        this.providers = [];

        this.cookieHubMatomoConsent();
    }

    add(provider) {
        this.providers.push(provider);
    }

    dataLayerPush(data) {
        this.providers.map((provider) => {
            provider.dataLayerPush(data);
        });
    }

    sendEvent(eventCategory, eventAction, eventName, eventValue, eventNonInteraction = false) {
        this.providers.map((provider) => {
            provider.sendEvent(eventCategory, eventAction, eventName, eventValue, eventNonInteraction);
        });
    }

    /**
     * Tell Matomo if Cookiehub consent is set or not.
     * IMPORTANT: Add _paq.push(['requireConsent']); to Matomo script for this to work.
     */
    cookieHubMatomoConsent() {
        /* eslint-disable */
        document.addEventListener('DOMContentLoaded', function () {
            var _paq = window._paq = window._paq || [];

            var cpm = {
                onInitialise: function () {
                    if (!this.hasConsented('analytics')) {
                        _paq.push(['forgetConsentGiven']);
                    }
                },
                onAllow: function (category) {
                    if ('analytics' === category) {
                        _paq.push(['rememberConsentGiven']);
                    }
                },
                onRevoke: function (category) {
                    if ('analytics' === category) {
                        _paq.push(['forgetConsentGiven']);
                    }
                },
            };

            if ('undefined' !== typeof window.cookiehub){
                window.cookiehub.load(cpm);
            }
        });
        /* eslint-enable */
    }
}

export default new Tracker();
