// on webpage loaded
$(document).ready(function () {
   // count p.name elements and update the html with num of functions created
   $("#totalFunctionNum").html($("p.name").length);
});

// on click of "Run" button
$("button.inline-action").click(function () {
   // get the name of the function
   var functionName = $(this)
      .parent("div.actions")
      .prevAll("p")
      .children("b")
      .html();
   // grab all input values and save as an array
   var inputArr = [];
   $(this)
      .prevAll("input")
      .each(function () {
         inputArr.push($(this).val());
      });
   // reverse the array (because we traversed up the DOM in reverse)
   var reversedInputArr = inputArr.reverse();
   // remove empty inputs
   var filteredInputArr = reversedInputArr.filter(function (item) {
      return item !== "";
   });
   // convert each input to a reasonable data type
   var typedInputArr = filteredInputArr.map(function (item) {
      return convertDataType(item.trim());
   });
   // populate the result, throw an error if failed
   try {
      var result = window[functionName](...typedInputArr);
      $(this).parent("div.actions").nextAll("div.alert-danger").hide();
      $(this)
         .parent("div.actions")
         .nextAll("div.alert-primary")
         .hide()
         .text(result)
         .slideDown("fast");
   } catch {
      var result = "Invalid input. Please check inputs and try again.";
      $(this).parent("div.actions").nextAll("div.alert-primary").hide();
      $(this)
         .parent("div.actions")
         .nextAll("div.alert-danger")
         .text(result)
         .slideDown("fast");
   }
});

// on click of function name
$("p.name").click(function () {
   var functionName = $(this).children().html();
   var codeSnippet = window[functionName].toString();
   // populate the <code> html
   $(this).next("pre").children("code").text(codeSnippet);
   // slide toggle the <pre> html
   $(this).next().slideToggle();
});
