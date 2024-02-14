---
title: Definition Meme
description: Definition.
permalink: memes/{{ page.fileSlug | slug }}.html
override:tags: ["meme"]
---

[μίμημα](https://de.wikipedia.org/wiki/Mem) -  Diverse Meme und 
zitierfähige Links zu den Beschreibungen. Dazu zählen auch &hellip;
 - [Aphorismen](https://de.wikipedia.org/wiki/Aphorismus), 
 - [Bonmots](https://de.wikipedia.org/wiki/Bonmot), 
 - [Gnomen](https://de.wikipedia.org/wiki/Gnome_(Dichtung)), 
 - [Sentenzen](https://de.wikipedia.org/wiki/Sentenz), 
 - [Sinnsprüche](https://de.wikipedia.org/wiki/Sinnspruch) und 
 - [Sprichwörter](https://de.wikipedia.org/wiki/Sprichwort). 

## hier vertreten ...

<ul>
{% for meme in collections.memes | sort(false, false, "data.title") %}
<li><a href="{{ meme.url | url }}">{{ meme.data.title }}</a> &rArr; <code>{{ meme.data.description }}</code></li>
{% endfor %}
</ul>
