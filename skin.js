// Generated by CoffeeScript 1.4.0
(function() {
  var Skin;

  Skin = (function() {

    function Skin(el, opt) {
      var fields, name, vo, _i, _len;
      this.el = el;
      if (typeof opt === 'string') {
        this.tmpl = opt;
        opt = {};
      } else if (opt != null) {
        this.tmpl = opt.tmpl != null ? opt.tmpl : null;
      } else {
        opt = {};
      }
      this.target = opt.target != null ? opt.target : 'value';
      this["default"] = opt["default"] != null ? opt["default"] : {};
      if (!(this.el instanceof HTMLElement)) {
        this.el = document.querySelector(arguments[0]);
        if (!this.el) {
          throw 'element not found';
        }
      }
      if (this.tmpl != null) {
        this.el.innerHTML = this.tmpl;
      }
      this.target = "data-" + this.target;
      this.targetWithBracket = "[" + this.target + "]";
      this.valueMap = {};
      fields = this.el.querySelectorAll(this.targetWithBracket);
      if (!(fields != null) || fields.length === 0) {
        throw 'there is not field';
      }
      for (_i = 0, _len = fields.length; _i < _len; _i++) {
        el = fields[_i];
        name = el.getAttribute(this.target);
        vo = new Skin.ValueObject(el);
        if (this.valueMap[name] == null) {
          this.valueMap[name] = [];
        }
        this.valueMap[name].push(vo);
      }
      if (this["default"] != null) {
        this.set(this["default"]);
      }
    }

    Skin.prototype.set = function(key, val) {
      var vo, _i, _len, _ref, _ref1, _results;
      if (arguments[0] instanceof Object) {
        _ref = arguments[0];
        for (key in _ref) {
          val = _ref[key];
          this.set(key, val);
        }
        return;
      }
      _ref1 = this.get(key);
      _results = [];
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        vo = _ref1[_i];
        _results.push(vo.set(val));
      }
      return _results;
    };

    Skin.prototype.get = function(key) {
      return this.valueMap[key];
    };

    Skin.prototype.inject = function(key, fn) {
      var vo, _i, _len, _ref, _results;
      _ref = this.get(key);
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        vo = _ref[_i];
        _results.push(fn(vo.el));
      }
      return _results;
    };

    return Skin;

  })();

  Skin.ValueObject = (function() {

    function ValueObject(el) {
      this.el = el;
    }

    ValueObject.prototype.set = function(value) {
      return this.el.innerText = value;
    };

    return ValueObject;

  })();

  if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
    define(function() {
      return Skin;
    });
  } else {
    window.Skin = Skin;
  }

}).call(this);
