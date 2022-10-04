/**
 * Tracking service.
 */
export default class TrackerMatomo {
    dataLayerPush(data) {
        /* eslint-disable */
        window._mtm = window._mtm || [];
        window._mtm.push(data);
        /* eslint-enable */
    }

    /* eslint-disable */
    sendEvent(
        eventCategory = '',
        eventAction = '',
        eventName = '',
        eventValue = '',
        eventNonInteraction = ''
    ) {
        const _paq = window._paq || [];

        _paq.push([
            'trackEvent',
            eventCategory,
            eventAction,
            eventName,
            eventValue,
        ]);
    }
    /* eslint-enable */
}
