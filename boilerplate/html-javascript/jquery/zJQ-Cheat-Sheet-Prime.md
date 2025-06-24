# jQuery Essentials Cheat Sheet

## Event-Driven Programming: The Three Types of Events!

1. Start constructing the DOM.
    - JS code in `client.js` runs as it is loaded!
2. The DOM is ready! (AKA: It's done being constructed.)
3. A user interacting with your web app:
    - User clicking a button.
    - User mousing over an element.
    - User typing.
    - User scroll.
    - etc...

## jQuery: The Greatest Hits

### Selectors:

`$('li')`: Select an element (or elements) using a basic CSS selector.

`$('#some-id')`: Select an element by `id`.

`$('.some-class')`: Select an element (or elements) by `class`.

`$('main p')`: Select an element (or elements) using a complex CSS selector.

---

### DOM Traversal:

`.children()`: Select all *direct* children of an element (or elements).

`.parent()`: Select the parent of an element (or elements).

`.siblings()`: Select the siblings of an element (or elements).

`.closest(css-selector-parameter)`: "Searches" upward through the DOM tree and selects first matching element.

`.find(css-selector-parameter)`: "Searches" downward through the DOM tree and selects *all* matching elements.

---

### Filtering a Selection:

`.first()`: Filters a selection to the *first* matching element.

`.last()`: Filters a selection to the *last* matching element.

`.even()`: Filters a selection to only the elements with *even* index values.

`.odd()`: Filters a selection to only the elements with *odd* index values.

---

### CSS Manipulation:

`.addClass(class-name-parameter)`: Adds a CSS class to selected element (or elements).

`.removeClass(class-name-parameter)`: Removes a CSS class from selected element (or elements).

`.toggleClass(class-name-parameter)`: Toggles a CSS class on selected element (or elements).

---

### Getters and Setters:

`.text()`: Gets the text content of a selected element (or elements).

`.text(string-parameter)`: Sets the text content of a selected element (or elements).

`.val()`: Gets the value of a selected `<input>` element (or elements).

`.val(value-parameter)`: Sets the value of a selected `<input>` element (or elements).

---

### Manipulating DOM Structure:

`.append()`: Adds an element to the end of a selected element's (or elements') children.

`.prepend()`: Adds an element to the start of a selected element's (or elements') children.

`.remove()`: Deletes the selected element (or elements), including any descendants.

`.empty()`: Deletes all descendants of a selected element (or elements).

---

## Helpful jQuery Concepts:


### `$(this)`:
`$(this)`, in the context of an event handler's callback function, will select the element on which the event was triggered. You want "the thing" that was clicked? `$(this)` is how you do it. (Wakka wakka.) Super powerful tool, but becomes especially nifty when used with Event Delegation. So:

---

### Event Delegation:
*JavaScript can only add event listeners to elements that exist on the DOM when a page loads.*

If you want to listen for clicks on an element that was created by jQuery, you need to create an event listener on *an element that exists at page load*. Then, pass another CSS selector as an additional argument to your `.on()` method that will handle the click.

Example:
HTML:
```html
<body>
  <!-- Nothing in here on page load! -->
  <!-- But jQuery is gonna append a button. -->
</body>
```
JS that will fail to handle clicks on the button we make:
```js
$(document).ready(soReady)

function soReady() {
  // At the point when the document is ready and this click handler is created,
  // there are no elements on the DOM whose class is 'made-by-jquery'.
  $('.made-by-jquery').on('click', function() { 
    console.log('hi there'); 
  });
  // This button gets added AFTER the above code tries to wire up an event handler.
  $('body').prepend('<button class="made-by-jquery">Click Me</button>');
}
```
JS that will work:
```js
$(document).ready(soReady)

function soReady() {
  // This works, because <body> exists when the document is ready.
  // Our event listener is created on an element that exists,
  // and it will only run our function when a "click" that happens
  // inside <body> occurs on an element whose class is '.made-by-jquery'.
  // Yay we did it! :)
  $('body').on('click', '.made-by-jquery', function() { 
    console.log('hi there'); 
  });

  $('body').prepend('<button class="made-by-jquery">Click Me</button>');
}$
```

This works because *by default* events "bubble" upward through the DOM. This is also a very common concept to be asked about in technical interviews.

Further reading:
https://www.sitepoint.com/event-bubbling-javascript/