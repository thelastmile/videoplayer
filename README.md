#The Last Mile Video Player

This is a super-simple video player that is designed to run directly off of the file system. *No server required!*

###Steps to Use

1.  Clone the repo.
1.  In the `index.html` file, modify the `title` tag for your page.
1.  In the `js/data.js` file, modify the `JSON` object with your content.
  * `pageTitle:` - a string that will be displayed in the header of the video player.
  * `tutorials:` - a property that refers to an array of objects. Each object holds the information for an individual set of videos.
  * `tutorialName:` - a string that will be displayed in the top-level nav section. This is typically the name of the lesson that will span several videos. It could also be the name of an event or other source of several otherwise unrelated videos.
  * `navItems` - a property that refers to an array of objects. These objects hold the specific information for each video in a group. Each object contains three properties, `vidId`, `chName`, and `chText`.
    * `vidId` - a string that holds the path to the video. *NOTE* The video player is hardcoded to look for files with an `.mp4` extension **only**. This is a design choice, since the player is built for use in a local environment where the user has complete control over content, and there is no need to support multiple file types. **Make sure that your video content is encoded as MP4!**
    * `chName` - a string with the top-line title for a nav button. Typically the same as the `tutorialName`.
    * `chText` - a string with the sub-title for a nav button. Typically the name of the lesson in this specific video.
1.  **Suggestion** - duplicate the stubbed code provided prior to modifying.
  * To add additional *groups* of videos, copy the entire `tutorialName` object as many times as required. Make sure to include the enclosing curly braces, and add required commas between new objects.
  * To add additional *individual* videos, copy an entire object containing `vidId`, `chName`, and `chText`, making sure to include the enclosing curly braces, and to add the required commas between new objects.

###You should not need to edit any other files for normal use.

###Troubleshooting
If you have any issues:

1.  *Video not playing?* - Verify that your path to the video content is correct.
1.  *Page not loading correctly?* - Verify that your [JSON](http://json.org/) is well-formed.
