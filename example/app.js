const mail4qa = require("./../index");

const mid = "xxxxxxxxxxxxxxxxxxxxxxxx";
const apiKey = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx";
const email = "rohan@mail4qa.com";
const pageNumber = 1;
const mailCount = 20;

mail4qa.setApiKey(apiKey); // (Required) to set Mail4QA APIKey
mail4qa.setPagesize(mailCount); // (Optional) to set Number of emails in single request
console.log(mail4qa.getApiKey()); //Check ApiKey is set Or Not
const callback = (err,results)=>{
    console.log(err)
    console.log(JSON.stringify(results));
}
mail4qa.getEmails({email:email}, callback); // first page of mailbox
mail4qa.getEmails({email:email,pageNumber:pageNumber}, callback); // pass cursor value as page number
mail4qa.getEmailById(mid,callback); // Fetch Email Body By email Id
mail4qa.setEmailAsRead(mid,callback); // Mark as read By email Id
mail4qa.setEmailAsUnread(mid,callback); // Mark as unread By email Id
mail4qa.deleteEmail(mid,callback);  // Delete email by Id

mail4qa.httpInject({
    to:"rohan@mail4qa.com",
    from:"rohan@mail4qa.com",
    subject:"test subject",
    message:"test message"
},callback);

