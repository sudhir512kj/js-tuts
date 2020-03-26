/*
https://medium.com/@hohanga/measuring-navigation-time-with-the-javascript-navigation-api-1bffa7eacc93
*/

// These are read only properties

// example to measure page load time
const perfEntries = performance.getEntriesByType("navigation");
const [p] = perfEntries;
const pageLoadTime = p.loadEventEnd - p.loadEventStart;
console.log(pageLoadTime);

// to measure how long it takes the DOM of a document to load
const domLoadTime = p.domContentLoadedEventEnd - p.domContentLoadedEventStart;
console.log(domLoadTime);

// alternate of above
console.log(p.domComplete);

// measuring unloading time
const domUnloadTime = p.unloadEventEnd - p.unloadEventStart;
console.log(domUnloadTime);

// get number of redirects
console.log(p.redirectCount);

// navigation type, eg. navigate, reload, back_forward, prerender, etc
console.log(p.type);

// serialize PerformanceNavigationTiming object into JSON object
console.log(p.toJSON());
