---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: true
summary: ""
slug: "{{ .Name | urlize }}"
cover: ""
---
