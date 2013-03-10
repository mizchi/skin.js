# class Skin
# examples
#   new Skin document.createElement('div')
#   new Skin '#user'
#   new Skin document.querySelector('#monster'), document.querySelector('#monster_template').innerText
#   class MySkin extends Skin

class Skin
  constructor: (@el, opt) ->
    if typeof opt is 'string'
      @tmpl = opt
      opt = {}
    else if opt?
      @tmpl = if opt.tmpl? then opt.tmpl else null
    else
      opt = {}

    @target = if opt.target? then opt.target else 'value'
    @defaults = if opt.defaults? then opt.defaults else {}

    # initialize inner element
    unless @el instanceof HTMLElement
      @el = document.querySelector arguments[0]
      throw 'element not found' unless @el
    # when given tmpl, use it.
    if @tmpl? then @el.innerHTML = @tmpl

    @target = "data-#{@target}"
    @targetWithBracket = "[#{@target}]"
    @valueMap = {} # key, [vo...]

    fields = @el.querySelectorAll @targetWithBracket
    if not fields? or fields.length is 0
      throw 'there is not field'

    for el in fields
      name = el.getAttribute @target
      vo = new Skin.ValueObject el
      unless @valueMap[name]? then @valueMap[name] = []
      @valueMap[name].push vo

    # if defaults value is set
    if @defaults?
      this.set @defaults

  set: (key, val)->
    if arguments[0] instanceof Object
      for key, val of arguments[0]
        @set key, val
      return
    for vo in @get(key)
      vo.set val

  get: (key)-> @valueMap[key]

  inject: (key, fn) ->
    for vo in @get(key)
      fn(vo.el)

# simple dom access class
class Skin.ValueObject
  constructor: (@el) ->
  set: (value) -> @el.innerText = value

if typeof define == 'function' and typeof define.amd is 'object' and define.amd
  define -> Skin
else
  window.Skin = Skin
