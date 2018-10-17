// app.js
var express = require('express');
var app = express();
var bodyParser= require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());

app.use(express.static('client/public'));

app.post('/', (req, res) => {
	// console.log('got this post body', typeof req.body.myTextArea);
	var body = JSON.parse(req.body.myTextArea);
	// console.log('parsed dat body and got dis', body);
	body = flattenJson(body);
	body = body.slice(0, body.length - 2);
	console.log('flattened dat JSON and god dis>>>>>\n', body);
	res.send(body);
});

var port = 3000;

var flattenJson = (object, isNotRoot) => {
	var myFlatJson = '';
	if(!isNotRoot) {
		for(var key in object) {
			if(key !== 'children') {
				myFlatJson += key + ',';				
			} else {
				myFlatJson = myFlatJson.slice(0, myFlatJson.length - 1);
			}
		}
		myFlatJson += '\n';
	}
	for (var key in object) {
		if (key !== 'children') {
			myFlatJson += object[key] + ',';
		} else {
			myFlatJson = myFlatJson.slice(0, myFlatJson.length - 1);
			myFlatJson += '\n'
			for(var i = 0; i < object['children'].length; i++) {
				myFlatJson += flattenJson(object['children'][i], true);
			}
		}
	}
	return myFlatJson;
};

		//<form method="POST">
		//	<input type="textarea" name="myTextArea"/>
		//	<input type="submit" value="Submit" />
		//</form>

app.listen(port, () => console.log('listening on ', port, '! -----------'));


// The server must flatten the JSON hierarchy, mapping each item/object 
// in the JSON to a single line of CSV report (see included sample output), 
// where the keys of the JSON objects will be the columns of the CSV report.

// You may assume the JSON data has a regular structure and hierarchy 
// (see included sample file). In other words, all sibling records at 
// a particular level of the hierarchy will have the same set of properties, 
// but child objects might not contain the same properties. In all cases, every 
// property you encounter must be present in the final CSV output.

// You may also assume that child records in the JSON will always be in a property called `children`.

