chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: 'open-in-freedium',
        title: "Open in Freedium",
        contexts: ["selection"]
    });
});

handler = function (data) {
    const linkUrl = data.linkUrl;
    if (!linkUrl || !linkUrl.startsWith('https')) {
        return;
    }
    chrome.tabs.create({
        url: `https://freedium.cfd/${linkUrl}`,
        active: false
    });
};

chrome.contextMenus.onClicked.addListener(handler);
