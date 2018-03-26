# SPX
This is a simple piece of code that adds size (width and height) and positioning (top, left, bottom, right) math expressions to HTML. With SPX you can get some element's properties to calculate and apply a position or size to another element. To put SPX to work, simple include jQuery in your html and then include SPX script.

## Sintax
```html
<div id="someElement" style="width:100px;height:100px;background-color:blue;">
<a class="anotherElement" style="position:fixed;top:100px;left:300px;width:20px;height:20px;background-color:red;">
<!-- the DIV below will be two times bigger than div#someElement and will be placed below a.anotherElement !-->
<div
     data-spx-height="h(div#someElement)*2"
     data-spx-width="w(div#someElement)*2"
     data-spx-top="b(a.someElement)"
     data-spx-left="l(a.someElement)"
     style="position:fixed;background-color:green;">
</div>
```
### What can I explain about it all?
1. You can get any property of some element by writing the first letter of the property name in lower case followed by any CSS selector in brakets
2. The properties you can get are only those six:
    * h = element's height
    * w = element's width
    * t = element's offset top
    * l = element's offset left
    * b = element's calculated bottom
    * b = element's calculated right
3. The properties you can set are only those six:
    * data-spx-height = element's height
    * data-spx-width = element's width
    * data-spx-top = element's offset top
    * data-spx-left = element's offset left
    * data-spx-bottom = element's calculated bottom
    * data-spx-right = element's calculated right
4. You can write any expression with any amount of math operators, constants and element's properties
5. There are aswell to other constants you can use in your math expressions: 
    * H = window height
    * W = window width

# Now you can enjoy the power of expressivity making your life easier through the help of SPX :)
## Don't forget to share this good news with the world!


