---
title: 'Regression in Python'
date: 2024-05-22
permalink: /posts/2024-05-22-regression
---
<style>
  .btn-custom-primary {
    background-color: #02B9E1 !important;
    color: white !important;
  }

  .btn-group a {
    text-decoration: none !important;
  }
  .btn-group .dropdown-menu {
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 5rem;
    font-size:14px;
  }
</style>

Linear regression is a statistical method used to model the relationship between a dependent variable and one or more independent variables. This tutorial will guide you through performing some basic linear regression using the open source Python package <a href="https://pingouin-stats.org/build/html/index.html" target="_blank">Pingouin &#x1F427;</a> 

<a href="https://google.ca" class="btn btn-custom-primary" target="_blank" role="button" style="text-decoration: none;">
  <i class="bi bi-file-earmark-arrow-down-fill"></i> Download the data & Jupyter notebook
</a>

<div style="margin-bottom: 10px;"></div>
---
## Importing Our Data & Packages

``` python
import pandas as pd
import pinguoin as pg

data = pd.read_csv("Regression.csv")
```

The data that we will be using is ...
Let's take a look at it.

```python
data.head()
```

<div class="code-container">
<pre><code>data.head()</code></pre>
<button onclick="copyCode(this)" style="position: absolute; top: 0; right: 0;">Copy</button>
</div>
