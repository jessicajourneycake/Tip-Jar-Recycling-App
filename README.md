# Tip Jar



## Contents

- [Tip Jar](#submission-or-project-name)
  - [Contents](#contents)
  - [Short Description](#short-description)
    - [What's the Problem?](#whats-the-problem)
    - [How can Technology Help?](#how-can-technology-help)
    - [The Idea](#the-idea)
  - [Demo video](#demo-video)
  - [The Architecture](#the-architecture)
  - [Long Description](#long-description)
  - [Project Roadmap](#project-roadmap)
  - [Getting Started](#getting-started)
  - [Live Demo](#live-demo)
  - [Built with](#built-with)
  - [Authors](#authors)
 

## Short description
Tip Jar is a revolutionary mobile application that rewards everyday consumers with tips for recycling and reusing packaging and food-service plastics.

### What's the problem?
Most of the global plastics waste goes into incineration (25%) and landfills (40%), meaning that these materials are lost forever as a resource, despite plastics’ potential for reuse and recycling. Research shows that currently only 16 percent of plastics waste is reprocessed to make new plastics. One of the root causes being the plastic recycling sector remains very fragmented and relatively immature. 

Meanwhile, over 20 percent of plastic packaging companies have reportedly committed to using recycled plastic and have targets that need to be met by 2025. However, the demand for recycled plastic far outweighs the supply: the compounded annual growth rate of recycled plastic required is 35 percent. There's demand for recycled plastic, but where's the supply?


### How can technology help?

In order to improve plastic recovery rates, improvements in current collection and sorting technology as well as improvements in poor consumer recycling behavior are required. Furthermore, one centralized app that combines all recycling/reusable packaging would make recycling and reusing plastic packaging more convenient to the consumer.  

### The idea

Tip Jar monitors all recyclables/reusables registered with Tip Jar allows for consumer goods companies to opt in to pay consumers tips for them to sort their recyclables/reusables at home and bring to local drop-off locations. At the expense of a smaller tip, consumers can also discard their recyclables via curbside pickup. Additionally, Tip Jar provides a centralized platform for all recycling/reusable packaging programs (Nutella reusable jar, Starbucks reusable coffee cups,..) making it a convenient, and at the same time rewardable, experience for the consumer. 

## Demo video

[![Watch the video](https://github.com/Call-for-Code/Liquid-Prep/blob/master/images/readme/IBM-interview-video-image.png)](https://youtu.be/vOgCOoy_Bx0)

## The architecture

![Video transcription/translation app](https://i.ibb.co/h7txkh6/Architecture.png)



## Long description

[More detail is available here](./docs/DESCRIPTION.md)

## Project roadmap

The project currently does the following things.

Tip Jar User ("Guest User")
1. The user navigates to the Tip Jar mobile application.
2. The user scans the Tip Jar QR code available at checkout (on the payment screen) or on the receipt.
3. The QR code runs the list of barcodes from the receipt against the Tip Jar registry to identify which products are registered with Tip Jar.
4. When finished with the product, the user scans the product barcode which outputs recycling instructions (Ex. EMPTY & REPLACE CAP) and instructs the user to place the product in 1 of 6 color-coded Golden Bins (Ex. Green).
5. When one or more Golden Bins are full (Ex. Green), (Option 1) user identifies Green Golden bin drop-off locations near them or (Option 2) they select
Curbside Pickup for their Green Golden Bin within the Tip Jar app.
6. At the Golden bin drop-off location:
  6a. User first navigates to the Green Golden Bin (Some locations offer more than one Golden bin color).
  6b. The user then scans their Green Golden Bin QR code.
  6c. And finally, the user scans one product's barcode from their Green Golden Bin to collect tips in their Tip Jar.

Tip Jar Golden Bin Administrator ("Golden Bin Administrator")
1. The administrator navigates to the Tip Jar iPad application.
2. The administrator selects 1 of 6 color-coded Golden Bins to setup on site (An iPad and large trash bin are required for setup). The 6 Golden Bin options are color-coded based on Consumer Goods Company (Coca Cola, Unilever, Proctor & Gamble, Kraft Heinz, & Nestle), with the exception of the Yellow To-Go Golden Bin used for discarding reusable To-Go Food Containers and To-Go Coffee Cups.

See below for the proposed schedule on next steps after Call for Code 2021 submission.

![Roadmap](./images/roadmap.jpg)

## Getting started

In this section you add the instructions to run your project on your local machine for development and testing purposes. You can also add instructions on how to deploy the project in production.

- [sample-tip-jar](./sample-tip-jar/)
- [sample-golden-bin-admin](./sample-golden-bin-admin)


## Live demo

You can find a running system to test at [callforcode.mybluemix.net](http://callforcode.mybluemix.net/).

## Built with

- [IBM Cloudant](https://cloud.ibm.com/catalog?search=cloudant#search_results) - The NoSQL database used
- [IBM Cloud Functions](https://cloud.ibm.com/catalog?search=cloud%20functions#search_results) - The compute platform for handing logic
- [IBM API Connect](https://cloud.ibm.com/catalog?search=api%20connect#search_results) - The web framework used
- [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
- [Maven](https://maven.apache.org/) - Dependency management
- [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds


## Authors

Jessica Journeycake, IBM Certified L1 Architect
