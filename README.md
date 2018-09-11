# Downbot

Downbot is an experiment, basically it is a node.js code that will be running in a Raspberry PI, this code will watch for syslog messages received by a router, and then will read this message to check if it's related to a new PPPoE authentication, which means my last authentication has been down, so it will tweet a message (basically to complain to a internet provider)

It was done in one afternoon, so it will be here just for checking in the future or so you can implement your own.
This code isn't meant to you plug and play in to your raspberry, it has some pretty static checkings to my own case.

Hardwares:
 - MI-3 using Padavan broadcasting syslog events
 - Raspberry PI running this piece of code watching port 2209

That's it, if you have some better ideas please let me know.
