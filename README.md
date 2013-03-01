# Skinny

Skinny is simple and primitive DOM Wrapper, focusing on DOM updating under high FPS environment.

This library is concept driven for MINIMAL TEMPLATE, not SERVER SIDE LIKE ONE BIG TEMPLATE.

Code is too small but it will give you idiomatic style.


## Skinny gives you...

- Simple Template
- High Perforamance DOM Access via HTMLElement cache


## Example

```html
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
  var goblin_skin = new Skinny(root, html);
  goblin_skin.set({
    name: 'goblin'
    hp: 100
    mp: 20
  });
}
```

'data-value' attribute is set by Skinny#set.
It is combined with hash object under root.


## Skinny does NOT have...

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
