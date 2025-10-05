var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "root-1-1-2",
  "level": "1",
  "url": "root-1-1-2.html",
  "type": "Chapter",
  "number": "1",
  "title": "PROTEUS Newton’s Method Reading Questions",
  "body": "PROTEUS Newton's Method Reading Questions    Why Newton's Method?   Why do we need approximation methods like Newton’s Method instead of algebraic solutions for equations such as ?     Because the algebra is too messy but still possible with enough effort.  No—some equations cannot be solved in closed form with standard functions, not just because of messy algebra.    Because many equations have no algebraic solution in terms of familiar functions.  Exactly—Newton’s Method provides approximate solutions when algebraic ones don’t exist.    Because computers are unable to handle exact solutions.  Not true—computers can handle exact symbolic work in some cases, but the limitation lies in mathematics itself.      Newton vs. Bisection   Briefly explain one way Newton’s Method improves on the Bisection Method, and one reason why the Bisection Method might still be preferred in some situations.       From Tangent Line to Iteration Formula   Match each geometric idea with its algebraic expression in Newton’s Method.   This question reinforces how the tangent line picture becomes the iterative formula.    Draw tangent line at  Equation:    Find where tangent meets x-axis  Solve for    Update approximation  Formula:      Spot the Key Step   Click on the part of the formula for Newton’s Method that represents the “correction” to the current guess:            The fraction is the adjustment step — it represents how far along the tangent line we move from to find .      The Role of the Initial Guess   Which of the following is the best reason why Newton’s Method succeeded even with the initial guess not being very close to the root of ?     Because Newton’s Method always works no matter where you start.  Not true—sometimes it diverges. The success here was not guaranteed.    Because the tangent lines in this case still led toward the root despite a rough initial guess.  Correct—Newton’s Method is often robust to imperfect starting points.    Because the derivative was zero at .  Incorrect—the derivative was not zero; a zero derivative would actually make Newton’s Method fail.      Newton’s Method Steps   Match each step in the algorithm with its purpose.    This checks if you can map the procedure to its goals.     Choose an initial guess  Provide a starting point for the iterations    Compute  Generate a new approximation    Check decimal agreement of successive values  Determine whether to stop the process       Stopping Rule   Which stopping condition is typically used in Newton’s Method when using technology?     When successive approximations agree to the desired number of decimal places.  Correct—decimal agreement ensures accuracy to that many places.    When the derivative becomes zero.  Not correct—a zero derivative may cause failure, not a stopping point.    After exactly 10 iterations, regardless of accuracy.  Iteration count alone does not guarantee accuracy.       When Newton’s Method Fails   Select all situations where Newton’s Method may fail to converge.     When for some approximation.  Correct—division by zero breaks the formula.    When the initial guess is always greater than the true root.  Not necessarily—being greater or less isn’t the key issue, the behavior of the tangent lines is.    When tangent lines push approximations farther away from the root (as in ).  Correct—here each step doubled the distance from the root.    When the function is continuous and differentiable everywhere.  No—continuity and differentiability are necessary, not failure conditions.      Convergence of Newton’s Method   If Newton’s Method produces well-defined approximations for several steps, it always converges to the actual root.    False — Newton’s Method can generate valid iterations that move away from the root (e.g., ). Convergence is not guaranteed.      Strengths and Weaknesses of Newton’s Method   In a few sentences, summarize one major strength and one major weakness of Newton’s Method.      Where Newton’s Method Fits   Select all situations where Newton’s Method would be a reasonable tool.     Approximating the solution to .  Correct—this equation cannot be solved algebraically but Newton’s Method can approximate the solution.    Finding the exact solution to .  Not needed—this equation has an exact solution, so Newton’s Method is unnecessary.    Programming a calculator or computer to approximate roots efficiently.  Correct—Newton’s Method is fast and widely used in computational root finding.    Estimating the slope of a tangent line at a point.  No—Newton’s Method uses tangent slopes, but its goal is to find roots, not slopes.      Newton’s Method Intuition   In your own words, explain how tangent lines help us “zoom in” on a root more quickly than simple guess-and-check.     "
},
{
  "id": "chkpt-newton-why-needed",
  "level": "2",
  "url": "root-1-1-2.html#chkpt-newton-why-needed",
  "type": "Checkpoint",
  "number": "1.0.1",
  "title": "Why Newton’s Method?",
  "body": " Why Newton's Method?   Why do we need approximation methods like Newton’s Method instead of algebraic solutions for equations such as ?     Because the algebra is too messy but still possible with enough effort.  No—some equations cannot be solved in closed form with standard functions, not just because of messy algebra.    Because many equations have no algebraic solution in terms of familiar functions.  Exactly—Newton’s Method provides approximate solutions when algebraic ones don’t exist.    Because computers are unable to handle exact solutions.  Not true—computers can handle exact symbolic work in some cases, but the limitation lies in mathematics itself.    "
},
{
  "id": "chkpt-newton-history",
  "level": "2",
  "url": "root-1-1-2.html#chkpt-newton-history",
  "type": "Checkpoint",
  "number": "1.0.2",
  "title": "Newton vs. Bisection.",
  "body": " Newton vs. Bisection   Briefly explain one way Newton’s Method improves on the Bisection Method, and one reason why the Bisection Method might still be preferred in some situations.    "
},
{
  "id": "chkpt-newton-geo-to-algebra",
  "level": "2",
  "url": "root-1-1-2.html#chkpt-newton-geo-to-algebra",
  "type": "Checkpoint",
  "number": "1.0.3",
  "title": "From Tangent Line to Iteration Formula.",
  "body": " From Tangent Line to Iteration Formula   Match each geometric idea with its algebraic expression in Newton’s Method.   This question reinforces how the tangent line picture becomes the iterative formula.    Draw tangent line at  Equation:    Find where tangent meets x-axis  Solve for    Update approximation  Formula:    "
},
{
  "id": "chkpt-newton-clickable-visual",
  "level": "2",
  "url": "root-1-1-2.html#chkpt-newton-clickable-visual",
  "type": "Checkpoint",
  "number": "1.0.4",
  "title": "Spot the Key Step.",
  "body": " Spot the Key Step   Click on the part of the formula for Newton’s Method that represents the “correction” to the current guess:            The fraction is the adjustment step — it represents how far along the tangent line we move from to find .   "
},
{
  "id": "chkpt-newton-initial-guess",
  "level": "2",
  "url": "root-1-1-2.html#chkpt-newton-initial-guess",
  "type": "Checkpoint",
  "number": "1.0.5",
  "title": "The Role of the Initial Guess.",
  "body": " The Role of the Initial Guess   Which of the following is the best reason why Newton’s Method succeeded even with the initial guess not being very close to the root of ?     Because Newton’s Method always works no matter where you start.  Not true—sometimes it diverges. The success here was not guaranteed.    Because the tangent lines in this case still led toward the root despite a rough initial guess.  Correct—Newton’s Method is often robust to imperfect starting points.    Because the derivative was zero at .  Incorrect—the derivative was not zero; a zero derivative would actually make Newton’s Method fail.    "
},
{
  "id": "chkpt-newton-algorithm-steps",
  "level": "2",
  "url": "root-1-1-2.html#chkpt-newton-algorithm-steps",
  "type": "Checkpoint",
  "number": "1.0.6",
  "title": "Newton’s Method Steps.",
  "body": " Newton’s Method Steps   Match each step in the algorithm with its purpose.    This checks if you can map the procedure to its goals.     Choose an initial guess  Provide a starting point for the iterations    Compute  Generate a new approximation    Check decimal agreement of successive values  Determine whether to stop the process    "
},
{
  "id": "chkpt-newton-stopping",
  "level": "2",
  "url": "root-1-1-2.html#chkpt-newton-stopping",
  "type": "Checkpoint",
  "number": "1.0.7",
  "title": "Stopping Rule.",
  "body": " Stopping Rule   Which stopping condition is typically used in Newton’s Method when using technology?     When successive approximations agree to the desired number of decimal places.  Correct—decimal agreement ensures accuracy to that many places.    When the derivative becomes zero.  Not correct—a zero derivative may cause failure, not a stopping point.    After exactly 10 iterations, regardless of accuracy.  Iteration count alone does not guarantee accuracy.    "
},
{
  "id": "chkpt-newton-failure",
  "level": "2",
  "url": "root-1-1-2.html#chkpt-newton-failure",
  "type": "Checkpoint",
  "number": "1.0.8",
  "title": "When Newton’s Method Fails.",
  "body": " When Newton’s Method Fails   Select all situations where Newton’s Method may fail to converge.     When for some approximation.  Correct—division by zero breaks the formula.    When the initial guess is always greater than the true root.  Not necessarily—being greater or less isn’t the key issue, the behavior of the tangent lines is.    When tangent lines push approximations farther away from the root (as in ).  Correct—here each step doubled the distance from the root.    When the function is continuous and differentiable everywhere.  No—continuity and differentiability are necessary, not failure conditions.    "
},
{
  "id": "chkpt-newton-true-false",
  "level": "2",
  "url": "root-1-1-2.html#chkpt-newton-true-false",
  "type": "Checkpoint",
  "number": "1.0.9",
  "title": "Convergence of Newton’s Method.",
  "body": " Convergence of Newton’s Method   If Newton’s Method produces well-defined approximations for several steps, it always converges to the actual root.    False — Newton’s Method can generate valid iterations that move away from the root (e.g., ). Convergence is not guaranteed.   "
},
{
  "id": "chkpt-newton-reflection",
  "level": "2",
  "url": "root-1-1-2.html#chkpt-newton-reflection",
  "type": "Checkpoint",
  "number": "1.0.10",
  "title": "Strengths and Weaknesses of Newton’s Method.",
  "body": " Strengths and Weaknesses of Newton’s Method   In a few sentences, summarize one major strength and one major weakness of Newton’s Method.    "
},
{
  "id": "chkpt-newton-applications",
  "level": "2",
  "url": "root-1-1-2.html#chkpt-newton-applications",
  "type": "Checkpoint",
  "number": "1.0.11",
  "title": "Where Newton’s Method Fits.",
  "body": " Where Newton’s Method Fits   Select all situations where Newton’s Method would be a reasonable tool.     Approximating the solution to .  Correct—this equation cannot be solved algebraically but Newton’s Method can approximate the solution.    Finding the exact solution to .  Not needed—this equation has an exact solution, so Newton’s Method is unnecessary.    Programming a calculator or computer to approximate roots efficiently.  Correct—Newton’s Method is fast and widely used in computational root finding.    Estimating the slope of a tangent line at a point.  No—Newton’s Method uses tangent slopes, but its goal is to find roots, not slopes.    "
},
{
  "id": "chkpt-newton-intuition",
  "level": "2",
  "url": "root-1-1-2.html#chkpt-newton-intuition",
  "type": "Checkpoint",
  "number": "1.0.12",
  "title": "Newton’s Method Intuition.",
  "body": " Newton’s Method Intuition   In your own words, explain how tangent lines help us “zoom in” on a root more quickly than simple guess-and-check.    "
},
{
  "id": "root-1-1-3",
  "level": "1",
  "url": "root-1-1-3.html",
  "type": "Chapter",
  "number": "2",
  "title": "PROTEUS Differentials Reading Questions",
  "body": "PROTEUS Differentials Reading Questions    Why Tangent Lines Work   Why does the tangent line give a good approximation of near the point of tangency?     Because tangent lines exactly match the graph of everywhere.  Not true—tangent lines only approximate well locally, not globally.    Because the slope of the tangent matches the slope of the curve at that point.  Correct—the tangent line shares the same instantaneous rate of change, so it hugs the curve nearby.    Because tangent lines minimize the error for all values of .  Not correct—the error grows as you move away from the tangent point.       Linearization vs. Actual Change   Match each symbol to its meaning in the context of linearization.   This reinforces the distinction between approximate and actual changes.     The true change in when changes     The linear (approximate) change in     A chosen small change in     The slope of the tangent line at       Quality of Approximation   Which statement best describes why was well approximated by the tangent line?     The change in was small, so the tangent line stayed close to the curve.  Correct—small increments in make linearization effective.    The tangent line has the same slope as the secant line between (3,9) and (3.1,f(3.1)).  Not exactly—though slopes are close, the tangent is defined at a single point.    Tangent line approximations are always exact for quadratic functions.  Incorrect—for quadratics, tangent lines approximate well locally, but not globally.       True or False: dx and Δx   The notation is taken to mean an arbitrary small change in , which we often set equal to .    Yes—this is one of the few cases where and are identified.      Error Propagation   Select all statements that correctly describe how differentials help with error analysis.     Differentials estimate how a small error in input produces an error in output.  Correct—that is their main use in measurement error contexts.    Differentials guarantee the error will always be smaller than the true error.  Not necessarily—they approximate but don’t bound the error.    Relative error compares the estimated error to the actual size of the measurement.  Correct—relative error gives context for how significant the error is.    Using differentials eliminates measurement error entirely.  No—differentials only help estimate error, not remove it.       Reflect on Differentials   In a short response, describe one practical use of differentials and why linear approximations are valuable in real-world contexts.       Misconceptions about Differentials   The symbol in differential notation is literally a fraction of two separate quantities, and .    False — is one symbol for the derivative, not an actual fraction. The resemblance to a fraction is helpful but can be misleading.      When Differentials Matter   Which situation best illustrates the value of using differentials instead of exact calculations?     Finding the exact value of on a calculator.  No need for an approximation here — exact computation is trivial.    Estimating how a small error in measuring a radius affects the volume of a sphere.  Correct — differentials estimate how small input changes propagate to outputs.    Calculating exactly.  This is exact and doesn’t need linear approximation.    Solving algebraically.  This is an algebra problem, not a context for differentials.       What Does Each Symbol Mean?   Match each differential symbol with its best interpretation.    Distinguishing between Δ and d notations helps prevent common mistakes.      The exact change in     An approximate change in based on the tangent line     An arbitrarily small chosen change in     The derivative of with respect to       Complete the Linearization Formula   Fill in the blanks to complete the formula for the linear approximation of at .    + ( - )                 Δy vs. dy in Practice   Imagine you measure the diameter of a steel rod with a small error. Explain in your own words why using is often more useful than computing the exact .       Applications of Differentials   Which of the following are common uses of differentials? Select all that apply.     Estimating values of functions near a known point.  Correct — that’s linearization in action.    Finding the exact slope of a secant line between two points.  No — differentials are tied to tangent lines, not secants.    Approximating propagated error in physical measurements.  Correct — error analysis is a practical strength of differentials.    Connecting derivative notation to integral notation ( ).  Correct — differentials appear in integral notation and must be understood.     "
},
{
  "id": "chkpt-diff-tangent-approx",
  "level": "2",
  "url": "root-1-1-3.html#chkpt-diff-tangent-approx",
  "type": "Checkpoint",
  "number": "2.0.1",
  "title": "Why Tangent Lines Work.",
  "body": " Why Tangent Lines Work   Why does the tangent line give a good approximation of near the point of tangency?     Because tangent lines exactly match the graph of everywhere.  Not true—tangent lines only approximate well locally, not globally.    Because the slope of the tangent matches the slope of the curve at that point.  Correct—the tangent line shares the same instantaneous rate of change, so it hugs the curve nearby.    Because tangent lines minimize the error for all values of .  Not correct—the error grows as you move away from the tangent point.    "
},
{
  "id": "chkpt-diff-linearization",
  "level": "2",
  "url": "root-1-1-3.html#chkpt-diff-linearization",
  "type": "Checkpoint",
  "number": "2.0.2",
  "title": "Linearization vs. Actual Change.",
  "body": " Linearization vs. Actual Change   Match each symbol to its meaning in the context of linearization.   This reinforces the distinction between approximate and actual changes.     The true change in when changes     The linear (approximate) change in     A chosen small change in     The slope of the tangent line at    "
},
{
  "id": "chkpt-diff-approx-quality",
  "level": "2",
  "url": "root-1-1-3.html#chkpt-diff-approx-quality",
  "type": "Checkpoint",
  "number": "2.0.3",
  "title": "Quality of Approximation.",
  "body": " Quality of Approximation   Which statement best describes why was well approximated by the tangent line?     The change in was small, so the tangent line stayed close to the curve.  Correct—small increments in make linearization effective.    The tangent line has the same slope as the secant line between (3,9) and (3.1,f(3.1)).  Not exactly—though slopes are close, the tangent is defined at a single point.    Tangent line approximations are always exact for quadratic functions.  Incorrect—for quadratics, tangent lines approximate well locally, but not globally.    "
},
{
  "id": "chkpt-diff-true-false",
  "level": "2",
  "url": "root-1-1-3.html#chkpt-diff-true-false",
  "type": "Checkpoint",
  "number": "2.0.4",
  "title": "True or False: dx and Δx.",
  "body": " True or False: dx and Δx   The notation is taken to mean an arbitrary small change in , which we often set equal to .    Yes—this is one of the few cases where and are identified.   "
},
{
  "id": "chkpt-diff-error",
  "level": "2",
  "url": "root-1-1-3.html#chkpt-diff-error",
  "type": "Checkpoint",
  "number": "2.0.5",
  "title": "Error Propagation.",
  "body": " Error Propagation   Select all statements that correctly describe how differentials help with error analysis.     Differentials estimate how a small error in input produces an error in output.  Correct—that is their main use in measurement error contexts.    Differentials guarantee the error will always be smaller than the true error.  Not necessarily—they approximate but don’t bound the error.    Relative error compares the estimated error to the actual size of the measurement.  Correct—relative error gives context for how significant the error is.    Using differentials eliminates measurement error entirely.  No—differentials only help estimate error, not remove it.    "
},
{
  "id": "chkpt-diff-reflection",
  "level": "2",
  "url": "root-1-1-3.html#chkpt-diff-reflection",
  "type": "Checkpoint",
  "number": "2.0.6",
  "title": "Reflect on Differentials.",
  "body": " Reflect on Differentials   In a short response, describe one practical use of differentials and why linear approximations are valuable in real-world contexts.    "
},
{
  "id": "chkpt-diff-misconception",
  "level": "2",
  "url": "root-1-1-3.html#chkpt-diff-misconception",
  "type": "Checkpoint",
  "number": "2.0.7",
  "title": "Misconceptions about Differentials.",
  "body": " Misconceptions about Differentials   The symbol in differential notation is literally a fraction of two separate quantities, and .    False — is one symbol for the derivative, not an actual fraction. The resemblance to a fraction is helpful but can be misleading.   "
},
{
  "id": "chkpt-diff-real-world",
  "level": "2",
  "url": "root-1-1-3.html#chkpt-diff-real-world",
  "type": "Checkpoint",
  "number": "2.0.8",
  "title": "When Differentials Matter.",
  "body": " When Differentials Matter   Which situation best illustrates the value of using differentials instead of exact calculations?     Finding the exact value of on a calculator.  No need for an approximation here — exact computation is trivial.    Estimating how a small error in measuring a radius affects the volume of a sphere.  Correct — differentials estimate how small input changes propagate to outputs.    Calculating exactly.  This is exact and doesn’t need linear approximation.    Solving algebraically.  This is an algebra problem, not a context for differentials.    "
},
{
  "id": "chkpt-diff-symbols",
  "level": "2",
  "url": "root-1-1-3.html#chkpt-diff-symbols",
  "type": "Checkpoint",
  "number": "2.0.9",
  "title": "What Does Each Symbol Mean?",
  "body": " What Does Each Symbol Mean?   Match each differential symbol with its best interpretation.    Distinguishing between Δ and d notations helps prevent common mistakes.      The exact change in     An approximate change in based on the tangent line     An arbitrarily small chosen change in     The derivative of with respect to    "
},
{
  "id": "chkpt-diff-fill-in",
  "level": "2",
  "url": "root-1-1-3.html#chkpt-diff-fill-in",
  "type": "Checkpoint",
  "number": "2.0.10",
  "title": "Complete the Linearization Formula.",
  "body": " Complete the Linearization Formula   Fill in the blanks to complete the formula for the linear approximation of at .    + ( - )              "
},
{
  "id": "chkpt-diff-short-answer",
  "level": "2",
  "url": "root-1-1-3.html#chkpt-diff-short-answer",
  "type": "Checkpoint",
  "number": "2.0.11",
  "title": "Δy vs. dy in Practice.",
  "body": " Δy vs. dy in Practice   Imagine you measure the diameter of a steel rod with a small error. Explain in your own words why using is often more useful than computing the exact .    "
},
{
  "id": "chkpt-diff-apps",
  "level": "2",
  "url": "root-1-1-3.html#chkpt-diff-apps",
  "type": "Checkpoint",
  "number": "2.0.12",
  "title": "Applications of Differentials.",
  "body": " Applications of Differentials   Which of the following are common uses of differentials? Select all that apply.     Estimating values of functions near a known point.  Correct — that’s linearization in action.    Finding the exact slope of a secant line between two points.  No — differentials are tied to tangent lines, not secants.    Approximating propagated error in physical measurements.  Correct — error analysis is a practical strength of differentials.    Connecting derivative notation to integral notation ( ).  Correct — differentials appear in integral notation and must be understood.    "
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
