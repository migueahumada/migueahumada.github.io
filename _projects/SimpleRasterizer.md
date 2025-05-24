---
layout: page
title: Simple Rasterizer
description: Simple rasterizer with custom audio engine.
img: https://images.unsplash.com/photo-1636471339182-8584b963a73a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
importance: 1
category: work
related_publications: false
---

This project is a simple software rasterizer implementation that showcases the fundamentals of rendering 3D graphics without relying on a full GPU pipeline. It uses <a href="https://learn.microsoft.com/en-us/windows/win32/direct3d11/d3d11-graphics-reference">DirectX 11</a> for window/context creation, <a href="https://github.com/libsdl-org/SDL">SDL3</a> for input and cross-platform handling, and a custom audio engine built on top of <a href="https://learn.microsoft.com/en-us/windows/win32/xaudio2/xaudio2-introduction">XAudio2</a> to provide real-time sound playback. 

**In development**
 
 <h2 style="color: #2698ba;"> Result </h2>

<div class="container">
  <div class="row">
    <div class="col-sm col-12">
        {% include video.liquid path="https://www.youtube.com/embed/6Y1THBIa4yM?si=7TXBvFPHMwTA73pq" class="img-fluid rounded z-depth-1" %}
    </div>
  </div>
</div>
<br>

You can find the code in my repo <a href="https://github.com/migueahumada/SimpleRasterizer">here</a>!  



---
