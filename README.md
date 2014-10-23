# CSS PRINT DOCUMENTATION

CSS PRINT is a simple framework to help you create pages ready for printing.

###CREDITS

Developers:
* Julio Betta <juliobetta@gmail.com>
* Rodolfo Barreto <rodolfobarretoweb@gmail.com>

###GRID

In body tag you have to describe how you print your document. In this version of css print, we will support a4 pages only. So, lets go to the examples.

    <body data-mode="a4-portrait">
        All content here
    </body>

    OR

    <body data-mode="a4-landscape">
        All contente here
    </body>

Note: Always use `*-portrait` or `*-landscape` mode, regardless of the document size. This will allow to preview the page before printing.

-------------------------------------------------------------------------------

`.page` - Every page must be within the page class.

**Note: If you need multiple pages, you have to add the ``page`` class to the element.**

    <div class='page'>
        All contents of the first page here
    </div>

    <div class='page'>
        All contents of the second page here
    </div>

-------------------------------------------------------------------------------

`.row` - Define rows of the columns, like in twitter bootstrap.

    <div class='row'>
        <div class="col-1"></div>
    </div>

###BASE

This file contains rules about simple tags, such as tables, links and two special cases.

`.border` - Adds border in all element

`.border-right` - Adds border in right of the element

`.border-left` - Adds border in left of the element

`.border-bottom` - Adds border in the bottom of the element

`.border-top` - Adds border in the top of the element

-------------------------------------------------------------------------------

`.no-print` - Hides content from print

###FONTS

`.font-*` - Defines the font size, ranging from 10 to 26.

    Ex: <p class="font-10">Text</p>

-------------------------------------------------------------------------------

`.text-left` - Aligns text to left

`.text-right` - Aligns text to right

`.text-center` - Aligns text to center

-------------------------------------------------------------------------------

`.font-serif` - Applies serif to font face
