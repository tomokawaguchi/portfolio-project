# Portfolio Project

![portfolio snapshot](https://github.com/tomokawaguchi/portfolio-project/blob/main/images/portfolio-snapshot.png?raw=true)


This is a portfolio website project where the site is developed with HTML, SCSS and vanilla JavaScript. This is a simple 2 pages site: Home page(index.html) and Works(works.html).

## Home Page

On the Home page, you can navigate through to various panels including About, Featured works and Contact panels from the main navigation. Upon scroll the website, there are subtle animation added.

On the works panel, the featured three works are presented where the respect project details are available on the modal.

## Works Page

This page is accessible via a cta button on the works panel on the Home page. This page displays all of the past works/projects available. The project details including the live site links, github repository link, featured image, description and site snapshots are available on the modal upon click on the respective thumbnail image.

## Other

#### **Works / Project data**

In order to avoid populating the contents manually, I have stored the project details and texts in the data.js file where the data is organised in the form of object.

I have used a similar logic to map the project data for both works panel on the homepage and works page list.

#### **Modal / Popup**

Although I have considered utilising the existing libraries to achieve modal functionality, I have decided to built it by myself for practicing and improving my vanilla JavaScript skill. I have also added some animation to smooth open/close.
