
$(function() {

    // Populate using an object literal

    // WTF.init({

    //     heading: [
    //         "It's a fucking",
    //         "Check this shit out, a fucking"
    //     ],
    //     response: [
    //         "Already fucking seen one",
    //         "Give me a-fucking-nother one",
    //         "Don't really give a fuck"
    //     ],
    //     template: [
    //         "Big @color @animal",
    //         "Silly @animal with @color fur"
    //     ],
    //     animal: [
    //         "dog",
    //         "cat",
    //         "rabbit"
    //     ],
    //     color: [
    //         "red",
    //         "blue",
    //         "green",
    //         "yellow"
    //     ]
    // });

    // Populate using a JSON file
    // WTF.init( 'sample.json' );

    // Populate using a Google spreadsheet ID (you must publish it first!)
    // @see https://support.google.com/drive/answer/37579?hl=en
    function getParameterByName(name, url) {
      if (!url) url = window.location.href;
      name = name.replace(/[\[\]]/g, '\\$&');
      var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
          results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return '';
      return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }
    var key = getParameterByName("key");

    WTF.init(key);

});
