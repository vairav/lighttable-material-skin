### LightTable Material Skin

I've been using LightTable for quite sometime and love it.  But the only thing that kept nagging me was that the I couldn't find any themes that I likes (pretty much Material themes these days).  So after searching for hours, I finally realized that I need to build one myself.

This is still very rough and a WIP.  I'm still pushing the code here because it has become really difficult for me to track the changes.

Please DO NOT use this skin as things will break in your LightTable and you've been warned.

I'll add a few screenshots in the next couple of days to track the progress and for some eye candy.



#### Configuration Information and random findings
LightTable.app/Contents/Resources/app/core/css/themes/mytheme.css

Then in the default.behaviors file I added...

(:lt.objs.style/provide-theme "mytheme" "/core/css/themes/mytheme.css")

Finally, in the user.behaviors file, I added this to the :editors vector...

(:lt.objs.style/set-theme "mytheme")

LightTable/core/css/themes/

:app [(:lt.objs.style/set-skin "light")]

;; The editor tag is applied to all editors
:editor [:lt.objs.editor/no-wrap
          (:lt.objs.style/set-theme "coderay")
          (:lt.objs.style/font-settings "Consolas" 10 1.2)]
          
          
