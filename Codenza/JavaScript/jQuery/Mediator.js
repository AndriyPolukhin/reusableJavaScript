// Mediator Design Pattern

var Participant = function (name) {
    this.name = name;
    this.chatroom = null;
};

Participant.prototype = {
    send: function (message, to) {
        this.chatroom.send(message, this, to);
    },
    receive: function (message, from) {
        console.log(from.name + " to " + this.name + ": " + message);
    }
};

var Chatroom = function () {
    var participants = {};

    return {
        register: function (participant) {
            participants[participant.name] = participant;
            participant.chatroom = this;
        },

        send: function (message, from, to) {
            if (to) {
                // single message
                to.receive(message, from);
            } else {
                // broadcast message
                for (key in participants) {
                    if (participants[key] !== from) {
                        participants[key].receive(message, from);
                    }
                }
            }
        }
    };
};


var andriy = new Participant("Andriy");
var anastasia = new Participant("Anastasia");
var olga = new Participant("Olga");
var sai = new Participant("Sai");
var michael = new Participant("Michael");

var chatroom = new Chatroom();
chatroom.register(andriy);
chatroom.register(anastasia);
chatroom.register(olga);
chatroom.register(sai);
chatroom.register(michael);

anastasia.send("How's it going?", andriy);
andriy.send("Still thinking about that day that I met you", anastasia);
olga.send("Hey Bro I think you should get more involved", andriy);
sai.send("I'll earn money form you and book the flight tickets, go on your vacation with her", andriy);
michael.send("Hey I'm healthy and fine, thanks!", andriy);
