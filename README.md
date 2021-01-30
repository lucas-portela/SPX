# SPX
This is a simple piece of code that adds size (width and height) and positioning (top, left, bottom, right) math expressions to HTML. With SPX you can get some element's properties to calculate and apply a position or size to another element. To get SPX working, simple include jQuery in your HTML and then include SPX script.

## Examples
```html
<div id="someElement" style="width:100px;height:100px;background-color:blue;">
<a class="anotherElement" style="position:fixed;top:100px;left:300px;width:20px;height:20px;background-color:red;">
<!-- the DIV below will be two times bigger than div#someElement and will be placed below a.anotherElement !-->
<div
       data-spx-height="h(div#someElement)*2"
       data-spx-width="w(div#someElement)*2"
       data-spx-top="b(a.anotherElement)"
       data-spx-left="l(a.anotherElement)"
       style="position:fixed;background-color:green;">
</div>
       
```
### Syntax:
`data-spx-<element-property-to-set>="<expression>"
1. You can set six properties using this html attributes:
    * data-spx-height = sets element's height
    * data-spx-width = sets element's width
    * data-spx-top = sets element's css top
    * data-spx-left = sets element's css left
    * data-spx-bottom = sets element's css bottom
    * data-spx-right = sets element's css right
    
1. You can get those properties from other elements to use inside your expressions:
    * h = element's height
    * w = element's width
    * t = element's offset top
    * l = element's offset left
    * b = element's calculated bottom (offset_top + height) 
    * b = element's calculated right (offset_left + width)
   
       e.g., div with two times the height of #someElement:
       `<div data-spx-height="h(div#someElement)*2"></div>`
    
4. You can use all javascript math operators inside your expressions;
5. You can use those constants in your expressions:
    * H = window height
    * W = window width

# Now you can enjoy nigh unlimited expressivity and make your life easier through SPX :)


