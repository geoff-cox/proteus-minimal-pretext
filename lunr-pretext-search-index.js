var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "root-1-2-2",
  "level": "1",
  "url": "root-1-2-2.html",
  "type": "Chapter",
  "number": "1",
  "title": "PROTEUS Newton’s Method Reading Questions",
  "body": "PROTEUS Newton's Method Reading Questions   Understanding Newton's Update Formula   Let be a function of and let be some -value. Match each expression on the left with its geometric meaning, on the right.      A point on the graph of .     Slope of the tangent line passing through .     Equation of the tangent line passing through .     First step in finding the -intercept of a line ( setting ).     The (solved) -intercept of the tangent line.     First Approximation in Newton's Method.       Detecting a Bad Initial Guess   Starting with an initial guess, , suppose you compute the next value, , in Newton's Method using the update formula: Which of the following might be an indication that you have a bad initial guess?     When computing , you get a value very close to zero.  Yes, a very small (i.e., denominator in the formula) usually leads to the next approximation being very far from the root.    The value of is very far from .  Yes, this is a bad sign since it indicates that tangent line passes through a point near a peak or valley of .    When computing in the formula, you get a value near zero.  Since is not in the formula for , it shouldn't bepart of the calculation.    When computing in the formula, you get a value near zero.  No, this is actually a good sign since is near the root and Newton's method will likely converge.    The value of is very close to .  No, this is a good sign since the only way this could happen is if is near zero, which means is near the root and Newton's method will likely converge.      Where Newton's Method Fits   Select all situations where Newton's Method would be a reasonable tool.     Approximating the solution to .  Correct—this equation cannot be solved algebraically but Newton's Method can approximate the solution.    Finding the exact solution to .  Not needed—this equation has an exact solution, so Newton's Method is unnecessary.    Programming a calculator or computer to approximate roots efficiently.  Correct—Newton's Method is fast and widely used in computational root finding.    Estimating the slope of a tangent line at a point.  No—Newton's Method uses tangent slopes, but its goal is to find roots, not slopes.      Daniel Question   Given the function in the interval , match the behavior of (left) with the corresponding interval (right).      concave up     concave down     increasing     decreasing       PROTEUS EXERCISE   There are two methods used by police to enforce speed limits on highways:   Radar, in which an officer uses a roadside radar gun to measure the speed of a vehicle    Aircraft patrol, which uses regularly-spaced markings on the highway, and measurement from an aircraft of the time it takes a vehicle to travel between markings.     Explain, using the [REF] how these two methods are related. In particular, if aircraft patrol can only measure average speed, how can an officer be certain that a driver was speeding?     "
},
{
  "id": "APEX-PROTEUS-newton-1-v1",
  "level": "2",
  "url": "root-1-2-2.html#APEX-PROTEUS-newton-1-v1",
  "type": "Checkpoint",
  "number": "1",
  "title": "Understanding Newton’s Update Formula.",
  "body": " Understanding Newton's Update Formula   Let be a function of and let be some -value. Match each expression on the left with its geometric meaning, on the right.      A point on the graph of .     Slope of the tangent line passing through .     Equation of the tangent line passing through .     First step in finding the -intercept of a line ( setting ).     The (solved) -intercept of the tangent line.     First Approximation in Newton's Method.    "
},
{
  "id": "APEX-PROTEUS-newton-2-v1",
  "level": "2",
  "url": "root-1-2-2.html#APEX-PROTEUS-newton-2-v1",
  "type": "Checkpoint",
  "number": "2",
  "title": "Detecting a “Bad” Initial Guess.",
  "body": " Detecting a Bad Initial Guess   Starting with an initial guess, , suppose you compute the next value, , in Newton's Method using the update formula: Which of the following might be an indication that you have a bad initial guess?     When computing , you get a value very close to zero.  Yes, a very small (i.e., denominator in the formula) usually leads to the next approximation being very far from the root.    The value of is very far from .  Yes, this is a bad sign since it indicates that tangent line passes through a point near a peak or valley of .    When computing in the formula, you get a value near zero.  Since is not in the formula for , it shouldn't bepart of the calculation.    When computing in the formula, you get a value near zero.  No, this is actually a good sign since is near the root and Newton's method will likely converge.    The value of is very close to .  No, this is a good sign since the only way this could happen is if is near zero, which means is near the root and Newton's method will likely converge.    "
},
{
  "id": "APEX-PROTEUS-newton-3-v1",
  "level": "2",
  "url": "root-1-2-2.html#APEX-PROTEUS-newton-3-v1",
  "type": "Checkpoint",
  "number": "3",
  "title": "Where Newton’s Method Fits.",
  "body": " Where Newton's Method Fits   Select all situations where Newton's Method would be a reasonable tool.     Approximating the solution to .  Correct—this equation cannot be solved algebraically but Newton's Method can approximate the solution.    Finding the exact solution to .  Not needed—this equation has an exact solution, so Newton's Method is unnecessary.    Programming a calculator or computer to approximate roots efficiently.  Correct—Newton's Method is fast and widely used in computational root finding.    Estimating the slope of a tangent line at a point.  No—Newton's Method uses tangent slopes, but its goal is to find roots, not slopes.    "
},
{
  "id": "chkpt-daniel-question",
  "level": "2",
  "url": "root-1-2-2.html#chkpt-daniel-question",
  "type": "Checkpoint",
  "number": "4",
  "title": "Daniel Question.",
  "body": " Daniel Question   Given the function in the interval , match the behavior of (left) with the corresponding interval (right).      concave up     concave down     increasing     decreasing     "
},
{
  "id": "APEX-PROTEUS-graph-MVT-1-v1",
  "level": "2",
  "url": "root-1-2-2.html#APEX-PROTEUS-graph-MVT-1-v1",
  "type": "Checkpoint",
  "number": "5",
  "title": "PROTEUS EXERCISE.",
  "body": " PROTEUS EXERCISE   There are two methods used by police to enforce speed limits on highways:   Radar, in which an officer uses a roadside radar gun to measure the speed of a vehicle    Aircraft patrol, which uses regularly-spaced markings on the highway, and measurement from an aircraft of the time it takes a vehicle to travel between markings.     Explain, using the [REF] how these two methods are related. In particular, if aircraft patrol can only measure average speed, how can an officer be certain that a driver was speeding?    "
},
{
  "id": "root-1-2-3",
  "level": "1",
  "url": "root-1-2-3.html",
  "type": "Chapter",
  "number": "2",
  "title": "PROTEUS Differentials Reading Questions",
  "body": "PROTEUS Differentials Reading Questions  📍Location: After the Tangent Line Approximation of sin(1.1)   Why Tangent Lines Work   Which statement best describes how a tangent line, , approximates at the point of tangency ?     closely resembles the curve near .  Correct—the tangent line shares the same instantaneous rate of change, so it hugs the curve nearby.    closely resembles the graph of for any .  Not true—tangent lines only approximate well near a given point (i.e., locally), not globally.    exactly matches the curve near .  Not true—tangent lines only approximate well near a given point.    is the most accurate approximation of near .  Not correct—the error grows as you move away from the tangent point.     📍Location: After the Definition of Linearization   Linearization vs. Actual Change   Match each symbol to its meaning in the context of linearization.  Assume is some value of .       The true change in when changes     The linear (approximate) change in     A chosen small change in     The slope of the tangent line at     📍Location: Misconception Check (True\/False)   Differential Notation   The symbol in differential notation is literally a fraction of two separate quantities, and .    False — is one symbol for the derivative, not an actual fraction. The resemblance to a fraction is helpful but can be misleading.    📍Location: Interactive Formula Completion (Dynamic Fill-in)   Complete the Linearization Formula   Fill in the blanks to complete the formula for the linear approximation of at .   + ( - )               "
},
{
  "id": "chkpt-diff-tangent-approx",
  "level": "2",
  "url": "root-1-2-3.html#chkpt-diff-tangent-approx",
  "type": "Checkpoint",
  "number": "6",
  "title": "Why Tangent Lines Work.",
  "body": " Why Tangent Lines Work   Which statement best describes how a tangent line, , approximates at the point of tangency ?     closely resembles the curve near .  Correct—the tangent line shares the same instantaneous rate of change, so it hugs the curve nearby.    closely resembles the graph of for any .  Not true—tangent lines only approximate well near a given point (i.e., locally), not globally.    exactly matches the curve near .  Not true—tangent lines only approximate well near a given point.    is the most accurate approximation of near .  Not correct—the error grows as you move away from the tangent point.    "
},
{
  "id": "chkpt-diff-linearization",
  "level": "2",
  "url": "root-1-2-3.html#chkpt-diff-linearization",
  "type": "Checkpoint",
  "number": "7",
  "title": "Linearization vs. Actual Change.",
  "body": " Linearization vs. Actual Change   Match each symbol to its meaning in the context of linearization.  Assume is some value of .       The true change in when changes     The linear (approximate) change in     A chosen small change in     The slope of the tangent line at    "
},
{
  "id": "chkpt-diff-misconception",
  "level": "2",
  "url": "root-1-2-3.html#chkpt-diff-misconception",
  "type": "Checkpoint",
  "number": "8",
  "title": "Differential Notation.",
  "body": " Differential Notation   The symbol in differential notation is literally a fraction of two separate quantities, and .    False — is one symbol for the derivative, not an actual fraction. The resemblance to a fraction is helpful but can be misleading.   "
},
{
  "id": "chkpt-diff-fill-in",
  "level": "2",
  "url": "root-1-2-3.html#chkpt-diff-fill-in",
  "type": "Checkpoint",
  "number": "9",
  "title": "Complete the Linearization Formula.",
  "body": " Complete the Linearization Formula   Fill in the blanks to complete the formula for the linear approximation of at .   + ( - )              "
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
