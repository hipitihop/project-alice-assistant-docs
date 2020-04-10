(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{266:function(t,s,a){"use strict";a.r(s);var e=a(29),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"skill-talk-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#skill-talk-file"}},[t._v("#")]),t._v(" Skill Talk file")]),t._v(" "),a("p",[t._v("Inside a skill directory, there is a "),a("code",[t._v("talks")]),t._v(" sub directory containing "),a("code",[t._v(".json")]),t._v(" files. The files are named after the language code they contain. These files are used by Alice to respond to your requests and should by all mean contain at least 2 different ways of answering, optimal would be 5 ways so she doesn't answer always the same.")]),t._v(" "),a("p",[t._v("We have different ways of defining those text strings. First of all, this is a "),a("code",[t._v("json")]),t._v(" object. The "),a("code",[t._v("keys")]),t._v(" "),a("strong",[t._v("are never to be translated")]),t._v("!")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Pro tip")]),t._v(" "),a("p",[t._v("If you are using an IDE able to handle json schema, it is highly recommended to use our "),a("a",{attrs:{href:"https://raw.githubusercontent.com/project-alice-assistant/ProjectAliceSkillKit/master/ProjectAliceSK/validate/src/schemas/talk-schema.json",target:"_blank",rel:"noopener noreferrer"}},[t._v("Talk file Schema"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"structure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#structure"}},[t._v("#")]),t._v(" Structure")]),t._v(" "),a("h3",{attrs:{id:"example-1-a-list-of-strings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-1-a-list-of-strings"}},[t._v("#")]),t._v(" Example 1 - A list of strings")]),t._v(" "),a("p",[t._v("Let's take this example:")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"busy"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Sorry, but I\'m busy at the moment, please wait"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Wait a second, I\'m busy at the moment"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Please wait, I\'m kindda busy right now"')]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("In this example, the "),a("code",[t._v("key")]),t._v(" is "),a("code",[t._v("busy")]),t._v(" and that "),a("code",[t._v("key")]),t._v(" is used by skills to retrieve the text to be spoken and contains a list of 3 different strings, 3 different ways for Alice to choose from when answering. The choice is random, you cannot influence it, but it feels more natural if Alice doesn't always answer the same for the same question. This example is the very basic way of defining answers for a skill and is not the preferred way for skills.")]),t._v(" "),a("h3",{attrs:{id:"example-2-a-dictionary-of-strings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-2-a-dictionary-of-strings"}},[t._v("#")]),t._v(" Example 2 - A dictionary of strings")]),t._v(" "),a("p",[t._v("Let's take a look at another example:")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"confirmAddition"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"default"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Ok, I have added this device"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"I added this new device"')]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("In this example the "),a("code",[t._v("key")]),t._v(" is "),a("code",[t._v("confirmAddition")]),t._v(" but defines a dictionary this time. This dictionary is only defining the "),a("code",[t._v("default")]),t._v(" way of answering and is not respectful of users that might have the option "),a("code",[t._v("use short answers")]),t._v(" or "),a("code",[t._v("night mode")]),t._v(" enabled. In this case, a random "),a("code",[t._v("default")]),t._v(" string will be picked by Alice to answer. To respect the "),a("code",[t._v("use short answers")]),t._v(" or "),a("code",[t._v("night mode")]),t._v(" users, we can define the same as the following:")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"confirmAddition"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"default"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Ok, I have added this device"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"I added this new device"')]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"short"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Ok!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Done!"')]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("In the case a user prefers a short answer or has turned on "),a("code",[t._v("night mode")]),t._v(", Alice will pick a random answer from the "),a("code",[t._v("short")]),t._v(" list. Otherwise she will randomly pick from the "),a("code",[t._v("default")]),t._v(" list.")]),t._v(" "),a("h2",{attrs:{id:"variables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#variables"}},[t._v("#")]),t._v(" Variables")]),t._v(" "),a("p",[t._v("The time you will need variables in your answers will come very fast. Imagine answering for the weather, you cannot make 100 strings declaration for each possible temperatures! Two solutions exist")]),t._v(" "),a("h3",{attrs:{id:"unindexed-variables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unindexed-variables"}},[t._v("#")]),t._v(" Unindexed variables")]),t._v(" "),a("p",[t._v("This is ok to use in case your string only contains one variable but should be avoided in case of more, simply because some languages maybe have to inverse the position of the variable")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"langSwitch"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"default"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Ok, let\'s talk in {} then!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Sure, I can talk in {}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"No problem, I\'m switching to {}"')]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"short"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Ok"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Yep"')]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("As you can see, default strings all have a "),a("code",[t._v("{}")]),t._v(" weirdness... Well, this is your variable! Alice will replace that by the content you tell her. In this example, you could ask her to speak in finnish and she'd answer, randomly, with "),a("code",[t._v("Ok, let's talk in finnish then!")])]),t._v(" "),a("h3",{attrs:{id:"indexed-variables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#indexed-variables"}},[t._v("#")]),t._v(" Indexed variables")]),t._v(" "),a("p",[t._v("This is better as we define what goes where, as sometimes languages don't use the same order. Or sometimes a different way of saying inverts the order of the variables.")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"noDevice"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"default"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Sorry, no {0} in room {1}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"I can't, room {1} doesn't have any {0}\"")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("By reading this you notice that our curly braces now contain a number. They are the same variable as before but are indexed. If you take the first example, it could translate to "),a("code",[t._v("Sorry, no satellite in room kitchen")]),t._v(" and the second would translate to "),a("code",[t._v("I can't, room kitchen doesn't have any satellite")])])])}),[],!1,null,null,null);s.default=n.exports}}]);