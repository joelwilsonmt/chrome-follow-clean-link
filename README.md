# chrome-follow-clean-link
Chrome Extension for removing URL parameters from links

Enables a context menu option to "Open clean link in new tab"
or listens for keyboard shortcut `metaKey + altKey + Click` on a link to open the link in a new tab and remove URL parameters

The extension first loads the page, then reloads the page without UTM parameters. Thus, tracking information is still captured, but further navigation within that tab is not tracked by UTMs.

To install:

Easy: Download `follow-clean-link.zip` and unzip it, open [chrome://extensions](chrome://extensions), enable Developer mode, and the unzipped folder to the page

In case I haven't built before pushing:
- clone repository
- run `npm run build`, and copy `/dist` folder to [chrome://extensions](chrome://extensions) page
