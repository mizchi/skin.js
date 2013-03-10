mocha.setup('bdd');
var expect = chai.expect;

var goblinVal = {
  name: 'goblin',
  hp: 100,
  mp: 20
};

describe('Skin', function(){
  describe('with fields', function(){
    var goblin = document.querySelector('#goblin');
    it('create instance', function(){
      var skin = new Skin(goblin);
      expect(skin).to.be.an.instanceof(Skin);
    });
    it('create instance with default value', function(){
      var mizchi = {name: 'mizchi', hp: 3, mp: 1000};
      var skin = new Skin(goblin, {defaults: mizchi});
      var vals = goblin.querySelectorAll('[data-value]');

      for(var i = 0, l = vals.length; i < l; i++){
        var key = vals[i].getAttribute('data-value');
        expect(vals[i].innerText).to.equal(''+mizchi[key]);
      }
    });
    it('change value', function(){
      var skin = new Skin(goblin);
      skin.set(goblinVal);
      var vals = goblin.querySelectorAll('[data-value]');

      for(var i = 0, l = vals.length; i < l; i++){
        var key = vals[i].getAttribute('data-value');
        expect(vals[i].innerText).to.equal(''+goblinVal[key]);
      }
    });
  });
  describe('without fields', function(){
    var goblin = document.querySelector('#goblin_without_field');
    var tmpl = document.querySelector('#goblin_template').innerText;
    it('throw error when creating instance without template', function(){
      expect(function(){
        new Skin(goblin);
      } ).to.throw('there is not field');
    });
    it('create instance', function(){
      var skin = new Skin(goblin, tmpl);
      skin.set(goblinVal);
      var vals = goblin.querySelectorAll('[data-value]');

      for(var i = 0, l = vals.length; i < l; i++){
        var key = vals[i].getAttribute('data-value');
        expect(vals[i].innerText).to.equal(''+goblinVal[key]);
      }
    });
    it('create instance with default value', function(){
      var mizchi = {name: 'mizchi', hp: 3, mp: 1000};
      var skin = new Skin(goblin, {defaults: mizchi});
      var vals = goblin.querySelectorAll('[data-value]');

      for(var i = 0, l = vals.length; i < l; i++){
        var key = vals[i].getAttribute('data-value');
        expect(vals[i].innerText).to.equal(''+mizchi[key]);
      }
    });
    it('change value', function(){
      var skin = new Skin(goblin);
      skin.set(goblinVal);
      var vals = goblin.querySelectorAll('[data-value]');

      for(var i = 0, l = vals.length; i < l; i++){
        var key = vals[i].getAttribute('data-value');
        expect(vals[i].innerText).to.equal(''+goblinVal[key]);
      }
    });
  });
  
  describe('with fields for custom target', function(){
    var goblin = document.querySelector('#maskgoblin');
    it('throw error when create instance without template nor custom target', function(){
      expect(function(){
        var skin = new Skin(goblin);
      }).to.throw();
    });
    it('create instance with default value', function(){
      var mizchi = {name: 'mizchi', hp: 3, mp: 1000};
      var skin = new Skin(goblin, {defaults: mizchi, target: 'skin-value'});
      var vals = goblin.querySelectorAll('[data-skin-value]');

      for(var i = 0, l = vals.length; i < l; i++){
        var key = vals[i].getAttribute('data-skin-value');
        expect(vals[i].innerText).to.equal(''+mizchi[key]);
      }
    });
    it('change value', function(){
      var skin = new Skin(goblin, {target: 'skin-value'});
      skin.set(goblinVal);
      var vals = goblin.querySelectorAll('[data-skin-value]');

      for(var i = 0, l = vals.length; i < l; i++){
        var key = vals[i].getAttribute('data-skin-value');
        expect(vals[i].innerText).to.equal(''+goblinVal[key]);
      }
    });
  });
  describe('without fields for custom target', function(){
    var goblin = document.querySelector('#maskgoblin_without_field');
    var tmpl = document.querySelector('#goblin_template_custom_target').innerText;
    it('throw error when creating instance without template nor custom target', function(){
      expect(function(){
        new Skin(goblin);
      } ).to.throw('there is not field');
    });
    it('throw error when creating instance without template but with custom target ', function(){
      expect(function(){
        new Skin(goblin, {target: 'skin-value'});
      } ).to.throw('there is not field');
    });
    it('create instance with template and custom target', function(){
      var skin = new Skin(goblin, {tmpl: tmpl, target: 'skin-value'});
      
      skin.set(goblinVal);
      var vals = goblin.querySelectorAll('[data-value]');

      for(var i = 0, l = vals.length; i < l; i++){
        var key = vals[i].getAttribute('data-value');
        expect(vals[i].innerText).to.equal(''+goblinVal[key]);
      }
    });
    it('create instance with default value', function(){
      var mizchi = {name: 'mizchi', hp: 3, mp: 1000};
      var skin = new Skin(goblin, {defaults: mizchi, target: 'skin-value'});
      var vals = goblin.querySelectorAll('[data-skin-value]');

      for(var i = 0, l = vals.length; i < l; i++){
        var key = vals[i].getAttribute('data-skin-value');
        expect(vals[i].innerText).to.equal(''+mizchi[key]);
      }
    });
    it('change value', function(){
      var skin = new Skin(goblin, {target: 'skin-value'});
      skin.set(goblinVal);
      var vals = goblin.querySelectorAll('[data-skin-value]');

      for(var i = 0, l = vals.length; i < l; i++){
        var key = vals[i].getAttribute('data-skin-value');
        expect(vals[i].innerText).to.equal(''+goblinVal[key]);
      }
    });
  });
  
});

mocha.run();

