---
layout: post
title: The Romance of Software Maintenance
author: Jorrit H. Poelen
date: 2026-09-03
excerpt: "Since its inception in 2013, Global Biotic Interactions uses open source software to help facilitate discovery of, and access to, existing species interaction datasets. In the summer of 2026, core components of GloBI's data integration workflows and data access services (e.g., Java, Neo4j, Lucene, and Jetty) were quietly upgraded to newer versions as part of software maintenance." 
status: unlisted
---

[![CC0](/assets/cc-zero.svg)](https://creativecommons.org/public-domain/cc0/)


In Stewart Brand's 1994 book "How Buildings Learn: What Happens to Buildings After They're Built" <a href="#1">[1]</a>, he discusses how building design as well as maintenance ethos impacts the ability for buildings to survive. Episode five of six, "The Romance of Maintenance" of the associated 1997 BBC TV Series, emphasizes the unglamorous, yet important, role of building maintenance.

<div id="figure1" class="figure figure-globi right">
  <a href="https://youtu.be/j_dozoqw4To?t=417"><img src="/assets/how-buildings-learn-maintenance-person-still.png" alt=""/></a>
    <div class="figcaption"><em>Figure 1.</em> Still From "How Buildings Learn - Stewart Brand - 5 of 6 - “The Romance of Maintenance”" around 6m57s while interviewing a maintenance engineer. Accessed on 2026-09-03. <a href="#2">[2]</a> .</div>
</div>
 
> "A building is like a living thing \[...\] and it needs maintaining. If it is done a little bit and often it'll be great, but if it is left for thirty years and then someone panics \[...\] it may be cheaper to knock it down and rebuild it."

Much like houses, software needs constant maintenance to sustain their continued use. And, in this blog post, I'll discuss some aspects of the "Romance of Software Maintenance" in that ... there is none. 

From its inception in 2013, the aim of Global Biotic Interactions (GloBI) was to discover and explore existing species interaction data while keeping the operating costs down and facilitate maintenance and improvement. Some guiding principles are: (1) Reduce costs by reusing, and building on, open source software that runs on commodity hardware. (2) Increase maintainability by automating tests that check functionality of GloBI software tools. And, (3) enable reproducibility by versioning datasets and automating workflows using versioned software.

Most times, maintenance and improvements are relatively small and incremental: perhaps similar to a new splash of paint, cleaning a window or patching a hole in a wall. Sometimes, more elaborate work is needed to ensure continued functioning: a new roof, adding a bedroom or fixing the foundation.

In the summer of 2026, some month long effort took place to swap out the existing technical foundation of GloBI and put a freshly poured digital foundation in its place. This renovation was designed such that no one would notice - no features added, no features dropped, no disruption in service. This renovation was made possible by the careful planning and design of hundreds, possibly thousands of software engineers that maintain the software that GloBI uses, including, but not limited to: the Java Virtual Machine, Neo4j graph database, Apache's Lucene search index, Eclipse's Jetty web server and many other open source libraries from companies like Neo4j, and the Apache Software and Eclipse Foundations as well as many other organizations and companies that help sustain the open source software ecosystem. 

In August 2026, after many years of using trusty, stable versions of core software components such as Java8, Neo4j v3.5, Lucene v5.5 and Jetty v9.4, the stars were aligning to upgrade to more recent, equally mature, versions: Java8, first released in 2014, was reaching "end of life" in September 2026 with Java21 being marked as the most recent LTS (Long Term Support) version. Similarly, Neo4j v5.26 LTS has been available since end of 2024, and Jetty v12.1 appeared a stable and widely adopted version of the long running standards-based web server.  

<div id="figure2" class="figure figure-globi left">
  <a href="https://github.com/globalbioticinteractions/globalbioticinteractions/issues/1184"><img src="/assets/git-commit-log-2026-09-03.png" alt=""/></a>
    <div class="figcaption"><em>Figure 2.</em> Screenshot of Git Commit Log during period of GloBI renovations as documented in <a href="https://github.com/globalbioticinteractions/globalbioticinteractions/issues/1184">https://github.com/globalbioticinteractions/globalbioticinteractions/issues/1184</a>. Accessed on 2026-09-03.</div>
</div>

After making the decision to move forward on GloBI's tech renovation, many frustrating hours were spent on upgrading existing code to align with these newer third party software versions, all while keeping the existing functionality in place. Figure 2. provided a little peek into the days and days spent updating code, running test, updating code, running test, and start again all while listening to ["Upgrade U"](https://en.wikipedia.org/wiki/Upgrade_U) by Beyoncé on repeat.

And, GloBI and other projects can re-use this incredible work at no cost thanks to their open source licenses and open accessiblity. This is no small feat, especially considering that the open source movement was started not so long ago in the late 1990s and is now widely adopted across industry, academia and independents.

This summer's renovation seems to support the claim that GloBI's design, underlying technologies and associated vibrant open source software communities continue to facilitate discovery of species interaction data at a relatively mundane cost even in a rapidly changing technology landscape. 

The question now is: who's going to pay for GloBI's recent tech renovation that no one asked for? I'd like to believe that the renovation will pay for itself in its continued use. Only time will tell...  

## References 

<a name="1"></a>[1] Brand, Stuart (1994) How Buildings Learn: What Happens After They're Built. Viking Press. ISBN 978-0-670-83515-7.

<a name="2"></a>[2] Brand, Stuart (1997) How Buildings Learn. TV Series. British Broadcasting Coorporation (BBC). Accessed on 2026-09-03 at [https://youtu.be/j_dozoqw4To](https://youtu.be/j_dozoqw4To).


