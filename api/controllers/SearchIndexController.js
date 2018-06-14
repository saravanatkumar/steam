/**
 * SearchIndexController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
var ElasticSearchSerivce = require('../services/ElasticSearchService.js');

var elasticsearch = require('elasticsearch');
var elasticClient = new elasticsearch.Client({
  	host: 'localhost:9200',
  	log: 'trace'
});

module.exports = {
  

  addDocuments:  function(req, res) {
    
    sails.models.Content.find().exec(function(err, contents) {
      console.log(contents);
    });
 

  },

  /**
   * `SearchIndexController.create()`
   */
  create: async function (req, res) {

    
    //Step 1 : Intiate Index along with Mapping + settings
    let indexName = sails.config.custom.SEARCH_FINDER_INDEX_NAME+new Date().getTime();
    let params = sails.config.custom.SEARCH_FINDER_SETTINGS_MAPPING;
    const searchIndexCreation = await elasticClient.indices.create({
                                        index: indexName,
                                        body : params
                                      }).then(function (resp) {
                                        return message = {"success":true,"error":"", "result":resp};
                                      }, function (err) {
                                        console.log(err.message);
                                        return message = {"success":false,"error":err.message, "result":""};
                                      });
                              
    console.log("process created");
    
    //Step 2 : Document Creation 
    // get all active records from content
    


                                          

    //Step 2 : update alias Name
    if(searchIndexCreation.success) {
        console.log("updateing allias");
        const updateAlias = await elasticClient.indices.putAlias({
          index: indexName,
          name : "search_finder_v1"
        }).then(function (resp) {
          return message= {"success":true,"error":"", "result":resp};
        }, function (err) {
          console.log(err.message);
          return message = {"success":false,"error":err.message, "result":""};
        });
        
        return res.json(message);

    } else {
      return res.json(searchIndexCreation);
    }  
    
  }, 
};

