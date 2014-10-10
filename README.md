# CSS PRINT DOCUMENTATION

CSS PRINT is a simple framework for help you build pages ready for printing.

###CREDITS

Developers:
    Julio Betta <juliobetta@gmail.com> <br>
    Rodolfo Barreto <rodolfobarretoweb@gmail.com>

###GRID

In body tag you have to describe how you print your document. In this version of css print, we will support a4 pages. So, lets go to exemples.

    <body data-mode="a4-portrait">
        All content here
    </body>

    OR

    <body data-mode="a4-landscape">
        All contente here
    </body>

Note: Always have portrait mode and landscape mode. Independent of the document size.
That configurate serves to have a preview of the document.

-------------------------------------------------------------------------------

.page - Every page must be within the page class. 

**Note: If you need multiple pages, you have to add the ``page`` class to the element.**

    <div class='page'>
        All contents of the first page here
    </div>

    <div class='page'>
        All contents of the second page here
    </div>

-------------------------------------------------------------------------------

.row - Define rows of the columns like bootstrap style

    <div class='row'>
        <div class="col-1"></div>
    </div>

###BASE

That file have rules about simples tags like: tables, links and two special case.

.border - Add border in all element

.border-right - Add border in right of the element

.border-left - Add border in left of the element

.border-bottom - Add border in the bottom of the element

.border-top - Add border in the top of the element

-------------------------------------------------------------------------------

.no-print - Hide the content 

###FONTS

.font-* - Define the size of font. The sizes ranging from 10 to 26

    Ex: <p class="font-10">Text</p>

-------------------------------------------------------------------------------

.text-left - Float text to left

.text-right - Float text to right

.text-center - Float text to center

-------------------------------------------------------------------------------

.font-serif - Apply serif style of the text

