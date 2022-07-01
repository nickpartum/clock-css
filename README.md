Css Clock
========
Clocks developed using CSS and HTML.

JS using for render elements & set arrows start position

With JS
--------

- Step 1
Install packages.
``npm install`` or ``yarn install``

- Step 2 
Build project.
``npm build``

###You can create indicators without JS.
- Step 1
```
<div class="clock">
    <div class="clock__second"></div>
    <div class="clock__minute"></div>
    <div class="clock__hour"></div>
    <div class="clock__center"></div>
    <div class="clock__indicators">
        <!-- <section class="clock__indicator"></section>-->
        <!-- Put 30 'section' elements with class name 'clock__indicator' in container-->
        <!-- with class name 'clock__indicators'.-->
    </div>
</div>
```
- Step 2

Add script which set start position for arrows
```
<script>
    clock.setCurrentClockTime()
</script>
```