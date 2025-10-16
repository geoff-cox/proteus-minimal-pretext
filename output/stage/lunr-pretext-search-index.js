var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "root-1-2-2",
  "level": "1",
  "url": "root-1-2-2.html",
  "type": "Chapter",
  "number": "1",
  "title": "PROTEUS Newton’s Method Reading Questions",
  "body": "PROTEUS Newton's Method Reading Questions  📍Location: Perhap as a conceptual question at the end of the section.   Newton vs. Bisection   Briefly explain one way Newton's Method improves on the Bisection Method, and one reason why the Bisection Method might still be preferred in some situations.     📍Location: After the First Figure (tangent-line visualization)   From Tangent Line to Iteration Formula   Match each geometric idea with the corresponding part in Newton's Method.   This question reinforces how the tangent line picture becomes the iterative formula.    Pick a point on the -axis  Initial Guess:    Draw a tangent line at     Locate the point where the tangent line meets the -axis, say     Find the -value of the point where the tangent hits the -axis      📍Location: After the First Figure (tangent-line visualization)   Spot the Key Step   Click on the part of the formula for Newton's Method that represents the “correction” to the current guess:                        The fraction is the adjustment step — it represents how far along the tangent line we move from to find .    📍Location: After the Worked Example (cube root polynomial)   The Role of the Initial Guess   Which of the following is the best reason why Newton's Method succeeded even with the initial guess not being very close to the root of ?     Because Newton's Method always works no matter where you start.  Not true—sometimes it diverges. The success here was not guaranteed.    Because the tangent lines in this case still led toward the root despite a rough initial guess.  Correct—Newton's Method is often robust to imperfect starting points.    Because the derivative was zero at .  Incorrect—the derivative was not zero; a zero derivative would actually make Newton's Method fail.     📍Location: After the Calculator\/ANS Key Discussion   Stopping Rule   Which stopping condition is typically used in Newton's Method when using technology?     When successive approximations agree to the desired number of decimal places.  Correct—decimal agreement ensures accuracy to that many places.    When the derivative becomes zero.  Not correct—a zero derivative may cause failure, not a stopping point.    After exactly 10 iterations, regardless of accuracy.  Iteration count alone does not guarantee accuracy.     📍Location: In the Convergence\/Fails Section (cube root example)   When Newton's Method Fails   Select all situations where Newton's Method may fail to converge.     When for some approximation.  Correct—division by zero breaks the formula.    When the initial guess is always greater than the true root.  Not necessarily—being greater or less isn't the key issue, the behavior of the tangent lines is.    When tangent lines push approximations farther away from the root (as in ).  Correct—here each step doubled the distance from the root.    When the function is continuous and differentiable everywhere.  No—continuity and differentiability are necessary, not failure conditions.     📍Location: ?   Where Newton's Method Fits   Select all situations where Newton's Method would be a reasonable tool.     Approximating the solution to .  Correct—this equation cannot be solved algebraically but Newton's Method can approximate the solution.    Finding the exact solution to .  Not needed—this equation has an exact solution, so Newton's Method is unnecessary.    Programming a calculator or computer to approximate roots efficiently.  Correct—Newton's Method is fast and widely used in computational root finding.    Estimating the slope of a tangent line at a point.  No—Newton's Method uses tangent slopes, but its goal is to find roots, not slopes.      From Tangent Line to Iteration Formula   Given the function in the interval , match the behavior of (left) with the corresponding interval (right).      concave up     concave down     increasing     decreasing       PROTEUS EXERCISE   There are two methods used by police to enforce speed limits on highways:   Radar, in which an officer uses a roadside radar gun to measure the speed of a vehicle    Aircraft patrol, which uses regularly-spaced markings on the highway, and measurement from an aircraft of the time it takes a vehicle to travel between markings.     Explain, using the [REF] how these two methods are related. In particular, if aircraft patrol can only measure average speed, how can an officer be certain that a driver was speeding?     "
},
{
  "id": "chkpt-newton-history",
  "level": "2",
  "url": "root-1-2-2.html#chkpt-newton-history",
  "type": "Checkpoint",
  "number": "1",
  "title": "Newton vs. Bisection.",
  "body": " Newton vs. Bisection   Briefly explain one way Newton's Method improves on the Bisection Method, and one reason why the Bisection Method might still be preferred in some situations.    "
},
{
  "id": "chkpt-newton-geo-to-algebra",
  "level": "2",
  "url": "root-1-2-2.html#chkpt-newton-geo-to-algebra",
  "type": "Checkpoint",
  "number": "2",
  "title": "From Tangent Line to Iteration Formula.",
  "body": " From Tangent Line to Iteration Formula   Match each geometric idea with the corresponding part in Newton's Method.   This question reinforces how the tangent line picture becomes the iterative formula.    Pick a point on the -axis  Initial Guess:    Draw a tangent line at     Locate the point where the tangent line meets the -axis, say     Find the -value of the point where the tangent hits the -axis     "
},
{
  "id": "chkpt-newton-clickable-visual",
  "level": "2",
  "url": "root-1-2-2.html#chkpt-newton-clickable-visual",
  "type": "Checkpoint",
  "number": "3",
  "title": "Spot the Key Step.",
  "body": " Spot the Key Step   Click on the part of the formula for Newton's Method that represents the “correction” to the current guess:                        The fraction is the adjustment step — it represents how far along the tangent line we move from to find .   "
},
{
  "id": "chkpt-newton-initial-guess",
  "level": "2",
  "url": "root-1-2-2.html#chkpt-newton-initial-guess",
  "type": "Checkpoint",
  "number": "4",
  "title": "The Role of the Initial Guess.",
  "body": " The Role of the Initial Guess   Which of the following is the best reason why Newton's Method succeeded even with the initial guess not being very close to the root of ?     Because Newton's Method always works no matter where you start.  Not true—sometimes it diverges. The success here was not guaranteed.    Because the tangent lines in this case still led toward the root despite a rough initial guess.  Correct—Newton's Method is often robust to imperfect starting points.    Because the derivative was zero at .  Incorrect—the derivative was not zero; a zero derivative would actually make Newton's Method fail.    "
},
{
  "id": "chkpt-newton-stopping",
  "level": "2",
  "url": "root-1-2-2.html#chkpt-newton-stopping",
  "type": "Checkpoint",
  "number": "5",
  "title": "Stopping Rule.",
  "body": " Stopping Rule   Which stopping condition is typically used in Newton's Method when using technology?     When successive approximations agree to the desired number of decimal places.  Correct—decimal agreement ensures accuracy to that many places.    When the derivative becomes zero.  Not correct—a zero derivative may cause failure, not a stopping point.    After exactly 10 iterations, regardless of accuracy.  Iteration count alone does not guarantee accuracy.    "
},
{
  "id": "chkpt-newton-failure",
  "level": "2",
  "url": "root-1-2-2.html#chkpt-newton-failure",
  "type": "Checkpoint",
  "number": "6",
  "title": "When Newton’s Method Fails.",
  "body": " When Newton's Method Fails   Select all situations where Newton's Method may fail to converge.     When for some approximation.  Correct—division by zero breaks the formula.    When the initial guess is always greater than the true root.  Not necessarily—being greater or less isn't the key issue, the behavior of the tangent lines is.    When tangent lines push approximations farther away from the root (as in ).  Correct—here each step doubled the distance from the root.    When the function is continuous and differentiable everywhere.  No—continuity and differentiability are necessary, not failure conditions.    "
},
{
  "id": "chkpt-newton-applications",
  "level": "2",
  "url": "root-1-2-2.html#chkpt-newton-applications",
  "type": "Checkpoint",
  "number": "7",
  "title": "Where Newton’s Method Fits.",
  "body": " Where Newton's Method Fits   Select all situations where Newton's Method would be a reasonable tool.     Approximating the solution to .  Correct—this equation cannot be solved algebraically but Newton's Method can approximate the solution.    Finding the exact solution to .  Not needed—this equation has an exact solution, so Newton's Method is unnecessary.    Programming a calculator or computer to approximate roots efficiently.  Correct—Newton's Method is fast and widely used in computational root finding.    Estimating the slope of a tangent line at a point.  No—Newton's Method uses tangent slopes, but its goal is to find roots, not slopes.    "
},
{
  "id": "chkpt-daniel-question",
  "level": "2",
  "url": "root-1-2-2.html#chkpt-daniel-question",
  "type": "Checkpoint",
  "number": "8",
  "title": "From Tangent Line to Iteration Formula.",
  "body": " From Tangent Line to Iteration Formula   Given the function in the interval , match the behavior of (left) with the corresponding interval (right).      concave up     concave down     increasing     decreasing     "
},
{
  "id": "APEX-PROTEUS-graph-MVT-1-v1",
  "level": "2",
  "url": "root-1-2-2.html#APEX-PROTEUS-graph-MVT-1-v1",
  "type": "Checkpoint",
  "number": "9",
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
  "body": "PROTEUS Differentials Reading Questions  📍Location: After the Tangent Line Approximation of sin(1.1)   Why Tangent Lines Work   Why does the tangent line give a good approximation of near the point of tangency?     Because tangent lines exactly match the graph of everywhere.  Not true—tangent lines only approximate well locally, not globally.    Because the slope of the tangent matches the slope of the curve at that point.  Correct—the tangent line shares the same instantaneous rate of change, so it hugs the curve nearby.    Because tangent lines minimize the error for all values of .  Not correct—the error grows as you move away from the tangent point.     📍Location: After the Definition of Linearization   Linearization vs. Actual Change   Match each symbol to its meaning in the context of linearization.   Assume is some value of .    This reinforces the distinction between approximate and actual changes.      The true change in when changes     The linear (approximate) change in     A chosen small change in     The slope of the tangent line at     📍Location: After the First Worked Example (f(x)=x², approximating f(3.1))   Quality of Approximation   Which statement best describes why was well approximated by the tangent line?     The change in was small, so the tangent line stayed close to the curve.  Correct—small increments in make linearization effective.    The tangent and secant lines are equal between & .  Not exactly—though slopes are close, the tangent is defined at a single point.    Tangent line approximations are always exact for quadratic functions.  Incorrect—for quadratics, tangent lines approximate well locally, but not globally.     📍Location: After the Error Propagation Example (ball bearing mass)   Error Propagation   Select all statements that correctly describe how differentials help with error analysis.     They estimate how a small error in input produces an error in output.  Correct—that is their main use in measurement error contexts.    They guarantee the error will always be smaller than the true error.  Not necessarily—they approximate but don't bound the error.    They eliminate measurement error entirely.  No—differentials only help estimate error, not remove it.     📍Location: Misconception Check (True\/False)   Differential Notation   The symbol in differential notation is literally a fraction of two separate quantities, and .    False — is one symbol for the derivative, not an actual fraction. The resemblance to a fraction is helpful but can be misleading.    📍Location: Interactive Formula Completion (Dynamic Fill-in)   Complete the Linearization Formula   Fill in the blanks to complete the formula for the linear approximation of at .    + ( - )               "
},
{
  "id": "chkpt-diff-tangent-approx",
  "level": "2",
  "url": "root-1-2-3.html#chkpt-diff-tangent-approx",
  "type": "Checkpoint",
  "number": "10",
  "title": "Why Tangent Lines Work.",
  "body": " Why Tangent Lines Work   Why does the tangent line give a good approximation of near the point of tangency?     Because tangent lines exactly match the graph of everywhere.  Not true—tangent lines only approximate well locally, not globally.    Because the slope of the tangent matches the slope of the curve at that point.  Correct—the tangent line shares the same instantaneous rate of change, so it hugs the curve nearby.    Because tangent lines minimize the error for all values of .  Not correct—the error grows as you move away from the tangent point.    "
},
{
  "id": "chkpt-diff-linearization",
  "level": "2",
  "url": "root-1-2-3.html#chkpt-diff-linearization",
  "type": "Checkpoint",
  "number": "11",
  "title": "Linearization vs. Actual Change.",
  "body": " Linearization vs. Actual Change   Match each symbol to its meaning in the context of linearization.   Assume is some value of .    This reinforces the distinction between approximate and actual changes.      The true change in when changes     The linear (approximate) change in     A chosen small change in     The slope of the tangent line at    "
},
{
  "id": "chkpt-diff-approx-quality",
  "level": "2",
  "url": "root-1-2-3.html#chkpt-diff-approx-quality",
  "type": "Checkpoint",
  "number": "12",
  "title": "Quality of Approximation.",
  "body": " Quality of Approximation   Which statement best describes why was well approximated by the tangent line?     The change in was small, so the tangent line stayed close to the curve.  Correct—small increments in make linearization effective.    The tangent and secant lines are equal between & .  Not exactly—though slopes are close, the tangent is defined at a single point.    Tangent line approximations are always exact for quadratic functions.  Incorrect—for quadratics, tangent lines approximate well locally, but not globally.    "
},
{
  "id": "chkpt-diff-error",
  "level": "2",
  "url": "root-1-2-3.html#chkpt-diff-error",
  "type": "Checkpoint",
  "number": "13",
  "title": "Error Propagation.",
  "body": " Error Propagation   Select all statements that correctly describe how differentials help with error analysis.     They estimate how a small error in input produces an error in output.  Correct—that is their main use in measurement error contexts.    They guarantee the error will always be smaller than the true error.  Not necessarily—they approximate but don't bound the error.    They eliminate measurement error entirely.  No—differentials only help estimate error, not remove it.    "
},
{
  "id": "chkpt-diff-misconception",
  "level": "2",
  "url": "root-1-2-3.html#chkpt-diff-misconception",
  "type": "Checkpoint",
  "number": "14",
  "title": "Differential Notation.",
  "body": " Differential Notation   The symbol in differential notation is literally a fraction of two separate quantities, and .    False — is one symbol for the derivative, not an actual fraction. The resemblance to a fraction is helpful but can be misleading.   "
},
{
  "id": "chkpt-diff-fill-in",
  "level": "2",
  "url": "root-1-2-3.html#chkpt-diff-fill-in",
  "type": "Checkpoint",
  "number": "15",
  "title": "Complete the Linearization Formula.",
  "body": " Complete the Linearization Formula   Fill in the blanks to complete the formula for the linear approximation of at .    + ( - )              "
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
