root = window ? exports

# simple dom wrapped class
class ValueObject
  constructor: (@el) ->
  set: (value) -> @el.innerText = value

# class Skinny
# examples
#   new Skinny document.createElement('div')
#   new Skinny '#user'
#   new Skinny document.querySelector('#monster'), document.querySelector('#monster_template').innerText
#   class MySkin extends Skinny
class root.Skinny
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
      vo = new ValueObject el
      unless @valueMap[name]?
        @valueMap[name] = [vo]
      else
        @valueMap[name].push vo

  set: (key, val)->
    if arguments[0] instanceof Object
      for key, val of arguments[0]
        @set key, val
      return
    for vo in @valueMap[key]
      vo.set val
