# About Mail4QA
[Mail4QA](https://mail4qa.com/) is a service designed for receiving emails at temporary addresses that self-destruct after 24 hours. It stands as one of the most advanced throwaway email services, enabling you to dodge spam and maintain your online safety effectively.

## Installation
```shell
npm i mail4qa
```

## Configuration
To get started, update the placeholders in the configuration object with your Mail4QA API credentials, which you can obtain from [here](https://console.mail4qa.com/inbox/).

> Don't have a Mail4QA Account yet? Create your own account [here](https://mail4qa.com) to obtain your API key and API secret.

Next, require the `mail4qa` package and pass the configuration object.

```javascript
const mail4qa = require("mail4qa");
mail4qa.setApiKey("<Mail4QA APIkey>");
```

## Usage
Retrieve inbox data using Mail4QA's API as follows:

```javascript
mail4qa.getEmails({email:"username@mail4qa.com"}, (err, result) => {
   console.log(err);
   console.log(result);
});
```

> For comprehensive details on API parameters, request bodies, and output formats, please refer to the Mail4QA [documentation](https://mail4qa.com/docs/).

### Advance Functions:

```javascript
mail4qaLib.setApiKey(apiKey); // (Required) to set Mail4QA APIKey
mail4qaLib.setPagesize(mailCount); // (Optional) to set Number of emails in single request
console.log(mail4qaLib.getApiKey()); //Check ApiKey is set Or Not
const callback = (err,results)=>{
    console.log(err)
    console.log(JSON.stringify(results));
}
mail4qaLib.getEmails({email:email}, callback); // first page of mailbox
mail4qaLib.getEmails({email:email,pageNumber:pageNumber}, callback); // pageNumber value as page number
mail4qaLib.getEmailById(mid,callback); // Fetch Email Body By email Id
mail4qaLib.setEmailAsRead(mid,callback); // Mark as read By email Id
mail4qaLib.setEmailAsUnread(mid,callback); // Mark as unread By email Id
mail4qaLib.deleteEmail(mid,callback);  // Delete email by Id

mail4qaLib.httpInject({
    to:"username@mail4qa.com",
    from:"fromemail@example.com",
    subject:"test subject",
    message:"test message"
},callback);

```

Feel free to explore Mail4QA's capabilities and keep your online activities secure and spam-free.