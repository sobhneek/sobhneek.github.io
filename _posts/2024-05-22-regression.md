---
title: 'Regression in Python (Still under construction)'
date: 2024-09-17
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

Linear regression is a statistical method used to model the relationship between a dependent variable and one or more independent variables. This tutorial will guide you through performing some basic linear regression using the open source Python package <a href="https://pingouin-stats.org/build/html/index.html" target="_blank">Pingouin &#x1F427;.</a> 

In this tutorial, we will cover:

1. The type of data needed for regression
2. Performing simple linear regression
3. How to interpret the results


<a href="https://google.ca" class="btn btn-custom-primary" target="_blank" role="button" style="text-decoration: none;">
  <i class="bi bi-file-earmark-arrow-down-fill"></i> Download the data & Jupyter notebook for this tutorial
</a>

<div style="margin-bottom: 10px;"></div>



## Type of Data Needed for Regression

For regression analysis, we need at least two variables:

1. **Independent Variable(s) (X)**: The *predictor* variable(s) or the variable(s) used to predict the dependent variable.
2. **Dependent Variable (Y)**: The *outcome* or the variable we are trying to predict.




<h2 style="margin-top: 0; padding-top: 0;">Importing Our Data & Packages</h2>

```python
import pandas as pd
import pingouin as pg

data = pd.read_csv("regression.csv")
```


The data that we will be using is ...
Let's take a look at it.

```python
data.head()
```

Simple linear regression involves one independent variable and one dependent variable. We aim to find the best-fitting line through the data points.

Performing Simple Linear Regression

Using the pingouin package, we can perform a simple linear regression as follows:





Defining our independent and dependent variables

```python
x = data["Experience"] # Dependent variable
y = data["Time"] # Independent Variable
```

Regression

```python
reg = pg.linear_regression(x,y)
reg.round(2) # Rounding to the tenth to make the results more readable
```

