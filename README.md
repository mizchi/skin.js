# Skin.js

Skin.js is simple and primitive DOM Wrapper, focusing on DOM updating under high FPS environment.

Code is too small but it will give you idiomatic style.

## CONCEPT

NO MORE BIG TEMPLATE on client, like on server. It is too slow.

I want to divide template and use high responsive HTMLElement cache.

## Skin gives you...

- Simple Template
- High Perforamance DOM Access via HTMLElement cache

## Example


```html
<script src='skin.js'></script>

<div id='goblin'></div>
<script type="text/template" id='status_template'>
<div class='monster'>
  <span data-value='name'></span>
  <span data-value='hp'></span>
  <span data-value='mp'></span>
</div>
</script>
```

```javascript
window.onload = function(){
  var root = document.querySelector('#goblin');
  var html = document.querySelector('#status_template').innerText;
  var goblin_skin = new Skin(root, html);
  //set
  goblin_skin.set({
    name: 'goblin',
    hp: 100,
    mp: 20
  });
  //inject
  goblin_skin.inject('mp', function(el){
    el.innerHTML = 30;
  });
}
```

'data-value' attribute is set by Skin#set.
It is combined with hash object under root.


## Skin does NOT have...

- Iterative value apply (I don't want to intercept libraries somthing)
- escape html (you should do by your way)
- EventHandler
- EventDispather
- And Other Architect Elements

I write it for Backbone helper.  (but no dependencies)
ListView will be implelemented via Backbone.Collection and Backbone.View.


## Support

- IE8+
- Firefox
- Chrome

It will work when you can use 'querySelector'.
