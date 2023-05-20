# Massiveart Tracking Package 

## 1 Import

Add the Tracking to your `main.js`:

Add Tracking.

`import tracker from 'massiveart-tracking';`

Add the specific tracking type. Valid types are `tracker-googler` and `tracker-matomo`.

`import MatomoTracker from 'massiveart-tracking/tracker-matomo';`

Finally, Add the type to the tracker instance.

`tracker.add(new MatomoTracker());`

You can also add multiple types, the data will be sent to all types simultaneously.

# 2 Usage

Use the predefined functions:

For Datalayer pushes: `tracker.dataLayerPush(data);`

For sending normal events: `tracker.sendEvent(data);`

### Example

In your navigation.js:

Import tracker to use the functions:

`import tracker from 'massiveart-tracking';`

Use the functions:

`tracker.sendEvent('Navigation', 'click', 'Parent page | child page');`

`Or a correctly formatted Datalayer object with tracker.dataLayerPush(data);`

# 3 Cookiehub consent
## 3.1 Cookiehub consent and Matomo

This package automatically handles the cookie consent logic of Matomo in combination with Cookiehub.
All you need to do is correctly import the Cookiehub Script and Matomo script.
* IMPORTANT: Add `_paq.push(['requireCookieConsent']);` to your Matomo script for this to work.

For more information, see the [Matomo documentation for consent](https://developer.matomo.org/guides/tracking-consent).

## 3.2 Cookiehub consent and Facebook (fbq)

This package automatically handles the cookie constent logic of the Facebook pixel (in consent mode) in combination with Cookiehub.
All you need to do is correctly import the Cookiehub Script and Facebook script.
* IMPORTANT: Add `fbq('consent', 'revoke');` to your Facebook script for this to work.

For more information, see the [Cookiehub guide on how to implement facebook in consent mode](https://support.cookiehub.com/article/78-facebook-pixel-consent-mode).

## 3.3 Cookiehub Consent and other third party scripts (eg. Hotjar).

If your project uses any other scripts that need to be blocked, until consent is given by Cookiehub, add the `data-consent="analytics"` data attribute to the script.
For more information, see the [Cookiehub guide to handle scripts and iframes](https://support.cookiehub.com/article/156-adjust-script-and-iframe-tags-to-delay-load).

## 4 Github

[Github](https://github.com/popoplanter/tracking)
