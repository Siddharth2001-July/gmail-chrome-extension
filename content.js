var composingTemplate = "Hi, this works\n";

function change(){
  // Will store the text in text feild in database
  composingTemplate = "Will fetch from Database";
  // For now setting it to default
  composingTemplate = "Hi, this works\n";
}

//  Calling API
InboxSDK.load(2, "sdk_gmailappext_9b2f21bd26").then((sdk) => {
  // Registering Composing Properties
  sdk.Compose.registerComposeViewHandler((ComposeView) =>{
    ComposeView.insertTextIntoBodyAtCursor(composingTemplate);
  });
  // Opening Composing page 
  sdk.Compose.openNewComposeView(() => {
    console.log("Composing Mail...");
  });
});