---
title: 'Machine Learning'
date: '2020-01-25T00:00:00.000Z'
author: 'André Kovac'
description: 'General concepts and useful links concerning machine learning'
category: 'data'
tags: ['data-science', 'machine-learning']
---

## General concepts

### Neural Network

Last layer is usually called `L`.

### Activation function

* The rectifier is a popular activation function - the positive part of its argument.
> A unit employing the rectifier is also called a rectified linear unit (ReLU)

### Accuracy / recall tradeoff

**Accuracy/Precision**: Correct vs. total amount of test cases (only works reliably for data sets where classes are well balanced).

    True Positives / (True Positives + False Positives)

    Own words: They really positive ones among the ones you believe are positive.

**Recall**: Ability of a model to find all the relevant cases within a dataset:

    True Positives / (True Positives + False Negatives)

    Own words: They ones successfully found to be positive ones among all the really positive ones (i.e. the ones who should have been found as positive).

    **Note**: False negative: You think it's positive although it's not, i.e. falsly say its negative, e.g. telling someone they don't have cancer although they actually do.

    Can easily be achieved by just labeling all as positive. --> Also need precision.

**F_1 score**: Harmonic mean of recall and precision

    **Formula**: 2 * (precision * recall) / (precision + recall)

    **Note**: Harmonic mean punishes extreme differences between precision and recall

Compare everything in a confusion matrix.

### Classification

**Exclusive** vs. **non-exclusive** classes.

Use *one-hot-encoding* to encode output layer.

#### Activation functions

How to filter the output value of a neuron before passing it on.

1. Non-exclusive classes

    Use `Sigmoid` activation function

2. Exclusive classes

    * Use `Softmax` activation function to ensure that sum of all classes equals 1.
    * This way you can choose the value with highest probability.

### Gradient descent

* Cost/Loss functions

    * Regression problems: **Quadratic cost**
    * Classification problems: **Cross entropy** - model predicts a probablity distribution over all classes.

* Optimized **learning rate**

    * Adaptive gradient descent
    * Optimizer: Adam: A Method for Stochastic Optimization

### Backpropagation

1. How sensitive is cost function to changes in weight matrix `w`?
2. Take partial derivative of cost function with respect to weight `w`.
3. Apply chain-rule to get `dC/dw = dC/da * da/dz * dz/dw`.
4. Compute `dC/db` to also compute how much a change in the bias impacts the cost.


## Terms

* **Hadamard Product**: Element-by-element multiplication of two vectors
* **Noise profile** of generated inputs

## Resources

A nice machine learning graphic:

![Machine Learning Graphic](./machine-learning-graphic.jpg)

### Good reads

* [A booklet on machine learning systems design with exercises](https://github.com/chiphuyen/machine-learning-systems-design)
* [The Data Engineering Cookbook - by Andreas Kraetz](https://github.com/andkret/Cookbook)
* [Millions of accessible data sets](https://blog.google/products/search/discovering-millions-datasets-web/)
* [The 100 page machine learning book](https://github.com/aburkov/theMLbook)
* [Deep Learning for Natural Language Processing](https://www.slideshare.net/sawjd/deep-learning-for-natural-language-processing-by-roopal-garg)