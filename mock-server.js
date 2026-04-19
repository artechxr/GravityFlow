const http = require('http');

let baseNodes = [
  { id: 'gate_A', name: 'Gate A', isGreenZone: false },
  { id: 'gate_B', name: 'Gate B', isGreenZone: false },
  { id: 'concourse_1', name: 'Main Concourse 1', isGreenZone: false },
  { id: 'concourse_2', name: 'Main Concourse 2', isGreenZone: false },
  { id: 'green_zone_north', name: 'Green Zone North', isGreenZone: true },
  { id: 'green_zone_south', name: 'Green Zone South', isGreenZone: true },
];

const updateScores = () => {
    return baseNodes.map(node => {
        let score = node.isGreenZone ? Math.floor(Math.random() * 30) : Math.floor(Math.random() * 100);
        return {
            ...node,
            congestion_score: score
        }
    });
};

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');

    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }

    if (req.url === '/api/crowd' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ nodes: updateScores() }));
        return;
    }

    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
});

const PORT = 3002;
server.listen(PORT, () => {
    console.log(`Live crowd simulation running on port ${PORT}...`);
});
