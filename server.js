const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "build")));

app.get("*", (req, res) => {
	res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

const PORT = 3010;

app.listen(PORT, () => {
	console.log(`Servidor rodando na porta ${PORT}`);
});