# Tip Jar



## Contents

- [Tip Jar](#submission-or-project-name)
  - [Contents](#contents)
  - [Short description](#short-description)
    - [What's the problem?](#whats-the-problem)
    - [How can technology help?](#how-can-technology-help)
    - [The idea](#the-idea)
  - [Demo video](#demo-video)
  - [The architecture](#the-architecture)
  - [Long description](#long-description)
  - [Project roadmap](#project-roadmap)
  - [Getting started](#getting-started)
  - [Live demo](#live-demo)
  - [Built with](#built-with)
  - [Authors](#authors)
  - [Acknowledgments](#acknowledgments)

## Short description
Tip Jar is a revolutionary mobile application that rewards everyday consumers with tips for recycling and reusing packaging and food-service plastics.

### What's the problem?
Most of the global plastics waste goes into incineration (25%) and landfills (40%), meaning that these materials are lost forever as a resource, despite plastics’ potential for reuse and recycling. Research shows that currently only 16 percent of plastics waste is reprocessed to make new plastics. the plastic recycling sector remains very fragmented and relatively immature.

Meanwhile, over 20 percent of plastic packaging companies have reportedly committed to using recycled plastic and have targets that need to be met by 2025. However, the demand for recycled plastic far outweighs the supply: the compounded annual growth rate of recycled plastic required is 35 percent. There's demand for recycled plastic, but where's the supply?


### How can technology help?

In order to improve plastic recovery rates, improvements in current collection and sorting technology as well as improvements in poor consumer recycling behavior are required.

### The idea

To meet the demand of recycled plastic, supply must adapt. It must become localized, transparent, valued and an efficient material recovery process. And it must do it quickly. Tip Jar not only improves the sorting process through local drop-off locations, but also rewards everyday consumers for recycling and reusing packaging and food-service plastics.


## Demo video

[![Watch the video](https://github.com/Call-for-Code/Liquid-Prep/blob/master/images/readme/IBM-interview-video-image.png)](https://youtu.be/vOgCOoy_Bx0)

## The architecture

![Video transcription/translation app](./images/Architecture.png)

Tip Jar User
1. The user navigates to the Tip Jar mobile application.
2. The user scans the Tip Jar QR code available at checkout (on the payment screen) or on the receipt.
3. The QR code runs the list of barcodes from the receipt against the Tip Jar registry to identify which products are registered with Tip Jar.
4. When finished with the product, the user scans the product barcode which outputs recycling instructions (Ex. EMPTY & REPLACE CAP) and instructs the user to place the product in 1 of 6 color-coded Golden bins (Ex. Green).
5. When one or more Golden bins are full (Ex. Green), user identifies Green Golden bin drop-off locations near them.
6. At the Golden bin drop-off location:
  6a. User first navigates to the Green Golden bin (Some locations offer more than one colored Golden bin).
  6b. The user then scans their Green Golden bin QR code.
  6c. And finally, the user scans one product's barcode from their Green Golden bin to collect tips in their Tip Jar.

Tip Jar Golden Bin Administrator
1. The user navigates to the Tip Jar mobile application.
2. The user scans the Tip Jar QR code available at checkout (on the payment screen) or on the receipt.
3. The QR code runs the list of barcodes from the receipt against the Tip Jar registry to identify which products are registered with Tip Jar.




## Long description

[More detail is available here](./docs/description.md)

## Project roadmap

The project currently does the following things.
Tip Jar Mobile App for User:
- Scans the Tip Jar QR Code on the user's receipt that contains the receipt product barcodes, a Receipt ID, and Location of Purchase.  
- Runs a query against the Db2 Tip Jar Registry to identify product barcodes registered with Tip Jar.
- Calls the Barcode Lookup API for product names & images.
- Scans product barcode (once user is finished with product) and outputs recycling instructions and identifies Golden Bin user discards product in.
- Receives tips from Administrator application after "One Item Check" at Golden Bin Dropoff Location.

Tip Jar Mobile App for Administrator:
- Scans Golden Bin QR code from Mobile app.
- Runs a query against the Db2 [Green] Golden Bin database for that user to identify the list of products discarded in bin.
- Requires one item's barcode to be scanned from the Green Golden Bin for verification ("One Item Check").
- Distributes tips to user.

See below for our proposed schedule on next steps after Call for Code 2021 submission.

![Roadmap](./images/roadmap.jpg)

## Getting started

In this section you add the instructions to run your project on your local machine for development and testing purposes. You can also add instructions on how to deploy the project in production.

- [sample-tip-jar](./sample-react-tip-jar/)
- [sample-golden-bin-admin](./sample-react-golden-bin-admin)
- [sample-node-red-flow](./node-red-flow)

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

- Jessica Journeycake
  IBM Certified L1 Architect,
  AI Applications

## Acknowledgments

- Based on the Call for Code 2021 template.
