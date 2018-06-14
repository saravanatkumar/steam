/**
 * LanguagesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  

  /**
   * `LanguagesController.create()`
   */
  async create(req, res){
    try {
      let params = req.allParams();
      if (!params.name) {
        return res.badRequest({err: 'name is required field'});
      }
      if (!params.language_code) {
        return res.badRequest({err: 'language_code is required field'});
      }
      const results = await Languages.create({
        name: params.name,
        language_code: params.language_code
      });
      return res.ok(results);
    }
    catch (err) {
      return res.serverError(err);
    }

  },

  /**
   * `LanguagesController.find()`
   */
  find :async function(req, res) {
    //new languages object will be stored in results array
    //do not use callbacks here
    const results = await Languages.find(); 
    console.log(results);
    return res.ok(results);
    },

  /**
   * `LanguagesController.findOne()`
   */
  findOne: async function (req, res) {
    return res.json({
      todo: 'findOne() is not implemented yet!'
    });
  },

  /**
   * `LanguagesController.update()`
   */
  update: async function (req, res) {
    return res.json({
      todo: 'update() is not implemented yet!'
    });
  },

  /**
   * `LanguagesController.delete()`
   */
  delete: async function (req, res) {
    return res.json({
      todo: 'delete() is not implemented yet!'
    });
  }


};

