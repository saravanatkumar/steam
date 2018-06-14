/**
 * Content.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

  datastore: 'default',
  tableName : 'contents',
  primaryKey: 'id',
  attributes: {
      id: {
          type: 'number',
          columnName: 'id',
          autoIncrement: true
      },
      title: {
        type: 'string',
        columnName: 'ititled'
      },
      original_title:{
        type: 'string',
        columnName: 'original_title'
      },
      content_type: {
        type: 'string',
        columnName: 'content_type',
        isIn: ['movie', 'show'],
        required: true
      },
      short_description : {
        type: 'string',
        columnName: 'short_description'
      },
      long_description : {
        type: 'string',
        columnName: 'long_description'
      },
      global_launch : {
        type: 'string',
        columnName: 'global_launch'
      },
      slug : {
        type: 'string',
        columnName: 'slug'
      },
      release_date :{
        type: 'string',
        columnName: 'release_date',
        columnType: 'datetime'
      },
      release_year: {
        type: 'number',
        columnName: 'release_year'
      },
     
      age_certification : {
        type: 'number',
        columnName: 'age_certification'
      },
      runtime_in_minutes : {
        type: 'number',
        columnName: 'runtime_in_minutes'
      },
      status : {
        type: 'string',
        columnName: 'status',
        isIn: ['draft', 'publish', 'inactive'],
        default : 'draft'
      },

      created_at : { type: 'string', columnType: 'datetime'},

      updated_at : { type: 'string', columnType: 'datetime'},


    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

    original_language_id : {
      type: 'number',
      columnName: 'original_language_id',
      model: 'Languages',
    }

  }

  },

};

