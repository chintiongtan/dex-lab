---
theme: default
transition: fade-out
---

# Solving Deployment Friction with Multi-Zone Micro-Frontends

A simple and scalable approach with Next.js

---
transition: slide-up
---

# Today's Deployment Flow

<ul>
  <li v-click>Weekly scheduled release</li>
  <li v-click>Code from multiple teams</li>
  <li v-click>Shared ownership over a single monolith</li>
</ul>

---
transition: slide-up
---

# What's Not Working Well?

* ❗ **Coordination overhead**
  * *Teams blocked by each other*

* 🐛 **Fault isolation**
  * *Hard to pinpoint and roll back issues*

* 🕒 **Slow iteration**
  * *Features wait days to go live*

* ❓ **Unclear ownership**
  * *Bugs shared across teams*

---
transition: slide-up
---

# What Good Looks Like?

* ✅ Teams deploy independently
* ✅ Isolated failures
* ✅ Fast release cycles
* ✅ Clear ownership and responsibility

---
transition: slide-up
---

# What Are Micro-Frontends?

* A frontend architecture pattern where each team owns a portion of the UI
* Inspired by microservices but for the browser
* Teams can build, test and deploy independently

---
transition: slide-up
---

# Multi-Zone Support in Next.js

* Each zone = a separate Next.js app
* Combined under a parent / root app via reverse proxy or rewrites

---
layout: cover
transition: slide-up
---

# Demo

---
transition: slide-up
---

# How Multi-Zones Help

<table>
  <thead>
    <tr>
      <th>Problem</th>
      <th>Solution</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td v-click>🚨 Release bottlenecks</td>
      <td v-click>✅ Each team deploys independently</td>
    </tr>
    <tr>
      <td v-click>🚨 Shared blast radius</td>
      <td v-click>✅ Faults isolated to zones</td>
    </tr>
    <tr>
      <td v-click>🚨 Slow iteration</td>
      <td v-click>✅ Faster feedback loops</td>
    </tr>
    <tr>
      <td v-click>🚨 Ownership confusion</td>
      <td v-click>✅ Team owns their zone end-to-end</td>
    </tr>
  </tbody>
</table>

---
transition: slide-up
---

# Trade-offs to be Aware of

<table>
  <thead>
    <tr>
      <th>✅ Pros</th>
      <th>⚠️ ️Cons</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>🔁 Independent deployments</td>
      <td>🔗 Cross-zone coordination (e.g., auth, layout)</td>
    </tr>
    <tr>
      <td>🚧 Fault isolation</td>
      <td>🎨 Shared design system complexity</td>
    </tr>
    <tr>
      <td>👥 Team autonomy</td>
      <td>🧰 Duplication risk (utils, configs)</td>
    </tr>
    <tr>
      <td>⚡ Faster iteration</td>
      <td>⚙️ Increased infra/DevOps overhead</td>
    </tr>
    <tr>
      <td>🔍 Improved observability & accountability</td>
      <td>🧭 Needs clear governance</td>
    </tr>
    <tr>
      <td>🧩 Simple integration with Next.js rewrites</td>
      <td></td>
    </tr>
  </tbody>
</table>

---
layout: cover
transition: slide-up
---

# Let's Talk
