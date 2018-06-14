/**
 * Custom configuration
 * (sails.config.custom)
 *
 * One-off settings specific to your application.
 *
 * For more information on custom configuration, visit:
 * https://sailsjs.com/config/custom
 */

module.exports.custom = {

  /***************************************************************************
  *                                                                          *
  * Any other custom config this Sails app should use during development.    *
  *                                                                          *
  ***************************************************************************/
  // mailgunDomain: 'transactional-mail.example.com',
  // mailgunSecret: 'key-testkeyb183848139913858e8abd9a3',
  // stripeSecret: 'sk_test_Zzd814nldl91104qor5911gjald',
  // …
SEARCH_FINDER_INDEX_ALIAS_NAME : "searchfinder_content",
SEARCH_FINDER_INDEX_NAME : "searchfinder_",
SEARCH_FINDER_SETTINGS_MAPPING :{ "settings" : {
  "index" : {
  "analysis":{  
   "filter":{  
    "my_synonym_filter":{  
     "type":"synonym",
     "synonyms":[  
      "default",
      "cinema => movie",
      "serials => show",               
      "redmi a1 => mi a1"
     ]
    },
    "permutations":{  
     "max_shingle_size":"5",
     "min_shingle_size":"2",
     "type":"shingle"
    },
    "autocomplete":{  
     "type":"edge_ngram",
     "min_gram":"1",
     "max_gram":"20"
    },
    "delimiter":{  
     "catenate_all":"true",
     "type":"word_delimiter",
     "catenate_numbers":"true",
     "preserve_original":"true",
     "catenate_words":"true"
    }
   },
   "analyzer":{  
    "autosuggest":{  
     "filter":[  
      "lowercase",
      "permutations",
      "delimiter",
      "autocomplete"
     ],
     "type":"custom",
     "tokenizer":"standard"
    },
    "my_synonyms":{  
     "filter":[  
      "lowercase",
      "my_synonym_filter"
     ],
     "tokenizer":"standard"
    },
    "default":{  
     "type":"standard"
    }
   }
}	
}
},
"mappings" : {
  "content" : {"properties":{"content_id":{"type":"long"},"createdAt":{"type":"date"},"updatedAt":{"type":"date"},"is_published":{"type":"boolean"},"name":{"type":"string","fields":{"canonical_name":{"type":"string","analyzer":"autosuggest","search_analyzer":"default"},"defualt_name":{"type":"string"}}},"synonyms":{"type":"string","fields":{"canonical_name":{"type":"string","analyzer":"autosuggest","search_analyzer":"default"},"defualt_name":{"type":"string"}}},"title":{"type":"string","fields":{"canonical_name":{"type":"string","analyzer":"autosuggest","search_analyzer":"default"},"defualt_name":{"type":"string"}}},"originalTitle":{"type":"string","index":"not_analyzed","store":true},"releaseDate":{"type":"date"},"releaseYear":{"type":"float","store":true},"imdbRating":{"type":"string","index":"not_analyzed","store":true},"tmtdRating":{"type":"string","index":"not_analyzed","store":true},"runTime":{"type":"integer","store":true},"posterImage":{"type":"string","index":"not_analyzed","store":true},"backdropImage":{"properties":{"imageUrl":{"type":"long"}}},"shortDescription":{"type":"string","index":"not_analyzed","store":true},"longDescription":{"type":"string","index":"not_analyzed","store":true},"contentType":{"type":"string","store":true},"originalLanguage":{"type":"string","store":true},"ageCertification":{"type":"string","store":true},"clips":{"properties":{"clipType":{"type":"string","index":"not_analyzed"},"provider":{"type":"string","index":"not_analyzed"},"title":{"type":"string","index":"not_analyzed"},"sourceCode":{"type":"string","index":"not_analyzed"},"sourceUrl":{"type":"string","index":"not_analyzed"}}},"imageGallery":{"properties":{"title":{"type":"string","index":"not_analyzed"},"sourceUrl":{"type":"string","index":"not_analyzed"}}},"scoring":{"properties":{"provider":{"type":"string","index":"not_analyzed"},"value":{"type":"float","index":"not_analyzed"}}},"casting":{"properties":{"role":{"type":"string","index":"not_analyzed"},"characterName":{"type":"string","index":"not_analyzed"},"peopleId":{"type":"string","index":"not_analyzed"},"peopleName":{"type":"string","index":"not_analyzed"}}},"offers":{"properties":{"monetizationType":{"type":"string","index":"not_analyzed"},"providerId":{"type":"string","index":"not_analyzed"},"retailPrice":{"type":"string","index":"not_analyzed"},"currency":{"type":"float","index":"not_analyzed"},"presentationType":{"type":"string","index":"not_analyzed"},"createdAt":{"type":"date","index":"not_analyzed"}}},"languagesAvailable":{"properties":{"languageId":{"type":"string","index":"not_analyzed"},"languageName":{"type":"string","index":"not_analyzed"}}},"seasons":{"properties":{"seasonNumber":{"type":"integer","index":"not_analyzed"},"seasonId":{"type":"integer","index":"not_analyzed"},"title":{"type":"string","index":"not_analyzed"},"posterImage":{"type":"string","index":"not_analyzed"},"fullPath":{"type":"string","index":"not_analyzed"}}},"latestSeasonNumber":{"type":"integer","index":"not_analyzed","store":true},"GAViews7Day":{"type":"integer","store":true},"GAViews30Day":{"type":"integer","store":true},"GAViews90Day":{"type":"integer","store":true}}}
  }
}
};
