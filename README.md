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

# 3 Cookiehub consent and Matomo

This package automatically handles the cookie consent logic of Matomo in combination with Cookiehub.
All you need to do is correctly import the Cookiehub Script and Matomo script.
* IMPORTANT: Add `_paq.push(['requireConsent']);` to Matomo script for this to work.

On a later stage, a custom cookie message might be implemented with this package and Cookiehub support will be dropped.

## 4 Git

[Github](https://github.com/popoplanter/tracking)
