# class Skin
# examples
#   new Skin document.createElement('div')
#   new Skin '#user'
#   new Skin document.querySelector('#monster'), document.querySelector('#monster_template').innerText
#   class MySkin extends Skin

class Skin
  constructor: (@el, html = null) ->
    # initialize inner element
    unless @el instanceof HTMLElement
      @el = document.querySelector arguments[0]
      throw 'element not found' unless @el
    # when given html, use it.
    if html? then @el.innerHTML = html

    @valueMap = {} # key, [vo...]

    for el in @el.querySelectorAll '[data-value]'
      name = el.getAttribute 'data-value'
      vo = new Skin.ValueObject el
      unless @valueMap[name]? then @valueMap[name] = []
      @valueMap[name].push vo

  set: (key, val)->
    if arguments[0] instanceof Object
      for key, val of arguments[0]
        @set key, val
      return
    for vo in @valueMap[key]
      vo.set val

# simple dom access class
class Skin.ValueObject
  constructor: (@el) ->
  set: (value) -> @el.innerText = value

if typeof define == 'function' and typeof define.amd is 'object' and define.amd
  define -> Skin
else
  window.Skin = Skin
