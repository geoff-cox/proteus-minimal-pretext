var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "root-1-2-2",
  "level": "1",
  "url": "root-1-2-2.html",
  "type": "Chapter",
  "number": "1",
  "title": "Proteus Matching Questions",
  "body": "Proteus Matching Questions  What's Missing in the Chain Rule?   Drag the parts missing in each chain rule derivative below.        Directions: Drag one or more , on the left, onto a single , on the right. One may be used for multiple boxes on the same . It is possible that some may not be used.         👇   👇                                                  Converting Words Into Math   Match the mathematical expressions on the left to the corresponding statements about changing quantities in a saltwater tank on the right.  All quantities are functions of time, (min), defined as follows:    Volume of water in a tank (m ) at time,     Concentration of salt in a tank (kg\/m ) at time,           Directions: Drag one or more , on the left, onto a single , on the right. It is possible that some may not be used.         👇   👇     Be sure to distinguish between values (like or ) and rates of change (like ). Units and context help decide what a statement implies.        After 1 minute, the tank contains 0.7 m of water.          After 3 minutes, the tank contains 1.2 m of water, but drains at 0.7 m \/min.       The salt concentration at t = 3 is 0.1 kg\/m           Initially, the tank has no salt. After 1 minute, salt is added, increasing the concentration by 0.02 kg\/m per minute.       At t=1, the tank is filling by 0.1 m \/min.             Matching Problem Template   Matching Question Statement    General Feedback (displays when \"Check Me\" is clicked).     Premise 1  Response 1    Premise 2  Response 2    Premise 3  Premise 4  Response 3    Premise Distractor 1  Premise Distractor 2    Response Distractor 1     "
},
{
  "id": "chain-rule-matching",
  "level": "2",
  "url": "root-1-2-2.html#chain-rule-matching",
  "type": "Checkpoint",
  "number": "1.0.1",
  "title": "What’s Missing in the Chain Rule?",
  "body": "What's Missing in the Chain Rule?   Drag the parts missing in each chain rule derivative below.        Directions: Drag one or more , on the left, onto a single , on the right. One may be used for multiple boxes on the same . It is possible that some may not be used.         👇   👇                                                 "
},
{
  "id": "related-rates-matching",
  "level": "2",
  "url": "root-1-2-2.html#related-rates-matching",
  "type": "Checkpoint",
  "number": "1.0.2",
  "title": "Converting Words Into Math.",
  "body": "Converting Words Into Math   Match the mathematical expressions on the left to the corresponding statements about changing quantities in a saltwater tank on the right.  All quantities are functions of time, (min), defined as follows:    Volume of water in a tank (m ) at time,     Concentration of salt in a tank (kg\/m ) at time,           Directions: Drag one or more , on the left, onto a single , on the right. It is possible that some may not be used.         👇   👇     Be sure to distinguish between values (like or ) and rates of change (like ). Units and context help decide what a statement implies.        After 1 minute, the tank contains 0.7 m of water.          After 3 minutes, the tank contains 1.2 m of water, but drains at 0.7 m \/min.       The salt concentration at t = 3 is 0.1 kg\/m           Initially, the tank has no salt. After 1 minute, salt is added, increasing the concentration by 0.02 kg\/m per minute.       At t=1, the tank is filling by 0.1 m \/min.            "
},
{
  "id": "chain-rule-matching-template",
  "level": "2",
  "url": "root-1-2-2.html#chain-rule-matching-template",
  "type": "Checkpoint",
  "number": "1.0.3",
  "title": "Matching Problem Template.",
  "body": "Matching Problem Template   Matching Question Statement    General Feedback (displays when \"Check Me\" is clicked).     Premise 1  Response 1    Premise 2  Response 2    Premise 3  Premise 4  Response 3    Premise Distractor 1  Premise Distractor 2    Response Distractor 1    "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
