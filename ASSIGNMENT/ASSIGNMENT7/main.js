const http = require("http");
const fsPromises = require("fs/promises");
const url = require("url");

const data = require("./data.json");

// Function to read and serve HTML files
async function serveHtmlFile(filePath, replacements = {}) {
    try {
        let fileContent = await fsPromises.readFile(filePath, "utf-8");
        for (const [key, value] of Object.entries(replacements)) {
            fileContent = fileContent.replace(key, value);
        }
        return fileContent;
    } catch (error) {
        console.error(`Error reading file ${filePath}:`, error);
        return "<h2>Error loading page</h2>";
    }
}

// Function to generate product cards HTML
function generateProductCards(data) {
    return data.map(product => `
        <div class="product-card">
            <h3>${product.title}</h3>
            <img src="${product.thumbnail}" alt="product-image" height="200">
            <p>${product.description}</p>
            <a href="/view?id=${product.id}" target="_blank">More</a>
        </div>
    `).join('');
}

// Request handler function
async function requestHandler(req, res) {
    const { query, pathname } = url.parse(req.url, true);
    
    res.writeHead(200, { "Content-Type": "text/html" });

    switch (pathname) {
        case "/": {
            const homepageContent = await serveHtmlFile("./pages/homepage.html");
            res.end(homepageContent);
            break;
        }
        case "/products": {
            const productsContent = await serveHtmlFile("./pages/products.html", {
                "$PRODUCTS$": generateProductCards(data)
            });
            res.end(productsContent);
            break;
        }
        case "/view": {
            const product = data.find(p => p.id == query.id);
            if (product) {
                res.end(`
                    <div>
                        <h2>${product.title}</h2>
                        <img src="${product.thumbnail}" alt="product-image">
                        <h4>${product.price}</h4>
                        <p>${product.description}</p>
                    </div>
                `);
            } else {
                res.end("<h2>Product not found</h2>");
            }
            break;
        }
        default: {
            res.end("<h2>Oops! Page not found...</h2>");
        }
    }
}

// Create and start the server
const server = http.createServer(requestHandler);

server.listen(2000, () => {
    console.log("--------- Server Started ----------");
});
