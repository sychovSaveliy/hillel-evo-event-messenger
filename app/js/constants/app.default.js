let mock ={
protocol: "http",
  host: "localhost",
  port: "5006",
};

let server ={
protocol: "http",
  host: "ec2-34-242-245-90.eu-west-1.compute.amazonaws.com",
  port: "8080",
};

app.constant('$default', server);
