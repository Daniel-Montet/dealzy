let internalUrls = [],externalUrls = [];

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ internalUrl: internalUrls, externalUrl: externalUrls });
    console.log(`Default state initialized:\nInternal Urls ---->${internalUrls}\nExternal Urls ---->${externalUrls}`);
});