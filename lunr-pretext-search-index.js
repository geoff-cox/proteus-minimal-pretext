var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "root-1-2-2",
  "level": "1",
  "url": "root-1-2-2.html",
  "type": "Chapter",
  "number": "1",
  "title": "Chain-Rule Matching Questions",
  "body": "Chain-Rule Matching Questions  Matching Problem Title   Matching Question Statement    General Feedback (displays when \"Check Me\" is clicked).     Premise 1  Response 1    Premise 2  Response 2    Premise 3  Premise 4  Response 3    Premise Distractor 1  Premise Distractor 2    Response Distractor 1     What's Missing in the Chain Rule?   Drag the missing parts (on the left) needed to complete the derivatives (on the right).          One derivative may require multiple parts (the order doesn't matter).         Some parts may not be needed and should remain in left panel.                                                    "
},
{
  "id": "chain-rule-matching-01",
  "level": "2",
  "url": "root-1-2-2.html#chain-rule-matching-01",
  "type": "Checkpoint",
  "number": "1.0.1",
  "title": "Matching Problem Title.",
  "body": "Matching Problem Title   Matching Question Statement    General Feedback (displays when \"Check Me\" is clicked).     Premise 1  Response 1    Premise 2  Response 2    Premise 3  Premise 4  Response 3    Premise Distractor 1  Premise Distractor 2    Response Distractor 1    "
},
{
  "id": "chain-rule-matching-02",
  "level": "2",
  "url": "root-1-2-2.html#chain-rule-matching-02",
  "type": "Checkpoint",
  "number": "1.0.2",
  "title": "What’s Missing in the Chain Rule?",
  "body": "What's Missing in the Chain Rule?   Drag the missing parts (on the left) needed to complete the derivatives (on the right).          One derivative may require multiple parts (the order doesn't matter).         Some parts may not be needed and should remain in left panel.                                                   "
},
{
  "id": "root-1-2-3",
  "level": "1",
  "url": "root-1-2-3.html",
  "type": "Chapter",
  "number": "2",
  "title": "Related-Rates Matching Questions",
  "body": "Related-Rates Matching Questions  Converting Words Into Math   Match the mathematical expressions on the left to the corresponding statements about changing quantities in a saltwater tank on the right.  All quantities are functions of time, (min), defined as follows:    Volume of water in a tank (m ) at time,     Height of water in a tank (m) at time,     Concentration of salt in a tank (kg\/m ) at time,            Some mathematical expressions are not given in any of the statements and more than one can go to the same statement.     Don't forget to look at the units!     Don't assume the information in different statements are connected.        Be sure to distinguish between values (like or ) and rates of change (like ). Units and context help decide what a statement implies.          .             .         .              .         .              "
},
{
  "id": "related-rates-knowns-matching-01",
  "level": "2",
  "url": "root-1-2-3.html#related-rates-knowns-matching-01",
  "type": "Checkpoint",
  "number": "2.0.1",
  "title": "Converting Words Into Math.",
  "body": "Converting Words Into Math   Match the mathematical expressions on the left to the corresponding statements about changing quantities in a saltwater tank on the right.  All quantities are functions of time, (min), defined as follows:    Volume of water in a tank (m ) at time,     Height of water in a tank (m) at time,     Concentration of salt in a tank (kg\/m ) at time,            Some mathematical expressions are not given in any of the statements and more than one can go to the same statement.     Don't forget to look at the units!     Don't assume the information in different statements are connected.        Be sure to distinguish between values (like or ) and rates of change (like ). Units and context help decide what a statement implies.          .             .         .              .         .             "
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
