var elasticsearch = require('elasticsearch');
var elasticClient = new elasticsearch.Client({
  	host: 'localhost:9200',
  	log: 'trace'
});

module.exports = {

	ping ()  {	
		elasticClient.ping({
		  	requestTimeout: 30000,
		}, function (error) {
			 if (error) {
				 console.log(error);
				 var message = {"success":false,"error":error, "result":""};
				return message;
			 } else {
				console.log("suvves");
				var message = {"success":false,"error":"", "result":"Ping Sucess"};
				return message;
			 }
		});
	},

 

	// 1. Create index
	initIndex:async function( indexName, params){		
		
	    elasticClient.indices.create({
			index: indexName,
			body : params
		  }).then(function (resp) {
			return message = {"success":false,"error":"", "result":resp};
		  }, function (err) {
			console.log(err.message);
			return message = {"success":false,"error":err.message, "result":""};
		  });
	},
	 
	// 2. Check if index exists
	indexExists: function(req, res, indexName){
	    elasticClient.indices.exists({
	        index: indexName
	    }).then(function (resp) {
	        // console.log(resp);
	        res.status(200);
	        return res.json(resp)
	    }, function (err) {
	        // console.log(err.message);
	        res.status(500)
	        return res.json(err)
	    });
	},

	// 3.  Preparing index and its mapping
	initMapping: function(req, res, indexName, docType, payload){

	    elasticClient.indices.putMapping({
	        index: indexName,
	        type: docType,
	        body: payload
	    }).then(function (resp) {
			console.log(resp);
			var message = {"success":false,"error":"", "result":resp};
			return message;
	    }, function (err) {
			console.log(err);
			var message = {"success":false,"error":err.message, "result":""};
			return message;
	        
	    });
	},

	// 3 B.  Preparing index and its mapping
	initSettings: function(req, res, indexName,  payload){

	    elasticClient.indices.putSettings({
	        index: indexName,
	        body: payload
	    }).then(function (resp) {
			console.log(resp);
			var message = {"success":false,"error":"", "result":resp};
			return message;
	    }, function (err) {
			console.log(err);
			var message = {"success":false,"error":err.message, "result":""};
			return message;
	        
	    });
	},


	// 4. Add/Update a document
	addDocument: function(req, res, indexName, _id, docType, payload){
	    elasticClient.index({
	        index: indexName,
	        type: docType,
	        id: _id,
	        body: payload
	    }).then(function (resp) {
	        // console.log(resp);
	        res.status(200);
	        return res.json(resp)
	    }, function (err) {
	        // console.log(err.message);
	        res.status(500)
	        return res.json(err)
	    });
	},



	// 5. Update a document
	updateDocument: function(req, res, index, _id, docType, payload){
		elasticClient.update({
		  index: index,
		  type: docType,
		  id: _id,
		  body: payload
		}, function (err, resp) {
		  	if(err) return res.json(err);
		  	return res.json(resp);
		})
	},

	// 6. Search
	search: function(req, res, indexName, docType, payload){
		elasticClient.search({
	        index: indexName,
	        type: docType,
	        body: payload
	    }).then(function (resp) {
	        console.log(resp);
	        return res.json(resp)
	    }, function (err) {
	        console.log(err.message);
	        return res.json(err.message)
	    });
	},


	/*
	 *	[xxxxxxxxxxxxxxxxx=-----  DANGER AREA [RESTRICTED USE] -----=xxxxxxxxxxxxxxxxxxxxx]
	 */

	 // Delete a document from an index
	deleteDocument: function(req, res, index, _id, docType){
		elasticClient.delete({
		    index: index,
			type: docType,
			id: _id,
		}, function(err, resp) {
		    if (err) return res.json(err);
		    return res.json(resp);
		});
	},

	// Delete all
	deleteAll: function(req, res){
		elasticClient.indices.delete({
		    index: '_all'
		}, function(err, resp) {

		    if (err) {
		        console.error(err.message);
		    } else {
		        console.log('Indexes have been deleted!', resp);
		        return res.json(resp)
		    }
		});
	},

	// [xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx]
};