/**
 * Tracking service.
 */
export default class TrackerGoogle {
    dataLayerPush(data) {
        /* eslint-disable */
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push(data);
        /* eslint-enable */
    }

    // Helpful article: https://www.optimizesmart.com/event-tracking-guide-google-analytics-simplified-version/.
    sendEvent(
        eventCategory = '',
        eventAction = '',
        eventName = '',
        eventValue = '',
        eventNonInteraction = ''
    ) {
        const ga = window[window['GoogleAnalyticsObject'] || 'ga'];

        if ('function' !== typeof ga) {
            return;
        }

        ga('send', {
            'hitType': 'event',
            'eventCategory': eventCategory,
            'eventAction': eventAction,
            'eventLabel': eventName,
            'eventValue': eventValue,
            'nonInteraction': eventNonInteraction,
        });
    }
}
