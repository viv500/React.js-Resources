// In traditional (non-React) websites, every time a user navigates to a new page, 
// the browser makes a request to the server, which responds with a new HTML file. 
// This results in a full-page reload, which can be slow and inefficient. 

// React initially follows the same process—it makes an initial request to the server for an HTML file. 
// However, along with the HTML, the server also sends the compiled JavaScript files for the React app. 

// Once React is loaded, React Router takes control of navigation. 
// Instead of making new requests to the server for each page change, 
// React Router intercepts these requests and dynamically updates the content on the screen. 

// This prevents unnecessary page reloads and allows the application to function as a 
// Single Page Application (SPA), providing a smoother and faster user experience.
