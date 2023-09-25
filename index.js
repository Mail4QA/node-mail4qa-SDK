const axios = require("axios");
const apiURL = "https://api.mail4qa.com/";
const mail4qaLib = {
  pagesize: 20,
  setApiKey:(apikey)=>{
    mail4qaLib.apiKey = apikey;
  },
  getApiKey:()=>{
    return mail4qaLib.apiKey;
  },
  setPagesize:(size=20)=>{
    mail4qaLib.pagesize = size;
  },
  getPagesize:()=>{
    return mail4qaLib.pagesize;
  },
  requestClient: (requestConfig, callback) => {
    requestConfig.headers = {
      "x-apikey": mail4qaLib.getApiKey(),
    }
    requestConfig.method= requestConfig.method?requestConfig.method.toLowerCase():"get";
    let queryString = "?";
    if(requestConfig.query){
      for (const key in requestConfig.query) {
        queryString += key +"="+encodeURIComponent(requestConfig.query[key])+"&";
      }
      delete requestConfig.query;
    }
    requestConfig.url= apiURL+requestConfig.url+queryString.slice(0, -1);
    if(requestConfig.method == "post" && requestConfig.data){
      requestConfig.headers["Content-Type"] = "application/json";
    }
    axios
      .request(requestConfig)
      .then((response) => {
        return response.data;
      })
      .then((results) => {
        callback(false, results);
      })
      .catch((error) => {
        callback(true,error);
      });
  },
  getEmails : (args, callback) => {
    mail4qaLib.requestClient(
      {
        url: `emails/inbox`,
        query: {
          email : args.email,
          pagesize : mail4qaLib.getPagesize(),
          cursor : args.pageNumber?args.pageNumber:0
        },
      },
      callback
    );
  },
  getEmailById : (id, callback) => {
    mail4qaLib.requestClient(
      {
        url: `emails/inbox`,
        query: {
          mid : id
        },
      },
      callback
    );
  },
  setEmailAsRead : (id, callback) => {
    mail4qaLib.requestClient(
      {
        method: "post",
        url: `emails/inbox/read`,
        query: {
          mid : id
        },
      },
      callback
    );
  },
  setEmailAsUnread : (id, callback) => {
    mail4qaLib.requestClient(
      {
        method: "post",
        url: `emails/inbox/unread`,
        query: {
          mid : id
        },
      },
      callback
    );
  },
  deleteEmail : (id, callback) => {
    mail4qaLib.requestClient(
      {
        method: "delete",
        url: `emails/inbox/delete`,
        query: {
          mid : id
        },
      },
      callback
    );
  },
  httpInject : (args, callback) => {
    mail4qaLib.requestClient(
      {
        method: "post",
        url: `emails/httpinject`,
        data: {
          to : args.to,
          from : args.from,
          subject : args.subject,
          message : args.message
        },
      },
      callback
    );
  }

};

module.exports = mail4qaLib;