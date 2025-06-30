var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "root-1-1-2",
  "level": "1",
  "url": "root-1-1-2.html",
  "type": "Chapter",
  "number": "1",
  "title": "Proteus Matching Questions",
  "body": "Proteus Matching Questions  The function satisfies the differential equation , which is characteristic of exponential decay.  "
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
