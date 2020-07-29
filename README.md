# Overview

`pdxfence` is a single-purpose website used to calculate and display the fines that the city of Portland has levied against the federal government for “The Fence.” More background information is in the index.html.

# License

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br />This work is copyright © 2020 [Brian Enigma](https://brianenigma.com) and is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.

# Finding a T-0

Part of making this counter accurate is knowing the exact date and time at which the cease-and-desist was issued. This gives us an orign time from which we can start accumulating fees. This was done with a bit of guesswork on my part. I first heard of the fines through a set of tweets from [Commissioner Eudaly](https://twitter.com/ChloeEudalyPDX):

<https://twitter.com/ChloeEudalyPDX/status/1288163839037456385>

> 10:26 AM · Jul 28, 2020
> On Thursday, I directed [@PBOTinfo](https://twitter.com/PBOTinfo) to enforce on the federal occupiers for erecting a fence in our public right of way. PBOT filed a cease and desist demand on behalf of the City—we have not received a response.

<https://twitter.com/ChloeEudalyPDX/status/1288163840186703872>

> 10:26 AM · Jul 28, 2020
> We are assessing the maximum fine of $500 for every 15 minutes the fence obstructs our street, & we are investigating other legal remedies. Typically, we would send a maintenance crew or contractor to remove such an obstruction, but I will not send workers into harm's way.

<https://twitter.com/ChloeEudalyPDX/status/1288163841310769153>

> 10:26 AM · Jul 28, 2020
> Yes, I am afraid to direct workers to do their job and enforce our laws against the federal government—I hope that gives everyone reading this pause. 
> 
> As of yesterday, the federal government owes us $192,000 and counting. We intend to collect.

With a bit of math: `$192,000 / $500 dollars per 15-minues / 4 (15-minute chunks per hour) / 24 (hours in a day)` you end up with 4 days of fines. But four days since when? “As of yesterday,” which is a fairly broad 24-hour period.

Another data point we have is [a PBOT news release about the barrier covering the bike lane](https://content.govdelivery.com/accounts/ORPORTLAND/bulletins/296f26a), which points to [a cease and desist letter](https://www.portland.gov/sites/default/files/2020-07/pbot-director-warner-to-gsa-region-10-administrator-atwood-2020-07-23.pdf?utm_medium=email&utm_source=govdelivery), dated July 23rd. But again, no specific time from which we can start counting our 15-minute increments.

~~Based on the above, I am arbitrarily picking noon on the 23rd as the origin time. If anyone has a more accurate and official origin time, please contact me at `brian@netninja.com`.~~

I have since been directed to [a posted notice](notice.jpg) in [a Reddit post](https://www.reddit.com/r/Portland/comments/hxdg73/portland_bureau_of_transportation_declares_the/) that points to T-0 being 2020-07-23 at 1:12PM.

# Calculating The Fee

$500 per 15 minutes divides out to 56.666&#x305;¢ per second. From there, it's just calculating the delta from T-0 until now and multiplying that by 56¢.

# Pull Requests

I welcome pull requests.

# Contributors

- [@MisterSowers](https://twitter.com/mistersowers/status/1288300495598018561) : Inspiration.
- [Brian Enigma](https://netninja.com) : Basic site design and coding.
- [Christine Rose](https://christinerose.wordpress.com) : Wordsmithing.
