var additionalData = 
[
	{
		"mode": "box",
		"title": "It worked!",
		"content": "yey",
		"tags": ["james bond"]
	}
];

(function()
{
	decoupleTiles();

	var i = tileData.length;

	tileData = tileData.concat(additionalData);

	for (; i < tileData.length; i++)
	{
		addTile(tileData[i]);
	}

	coupleTiles();
})();