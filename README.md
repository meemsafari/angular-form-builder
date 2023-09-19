# Angular Form Builder

Angular Form Builder is a web application that allows users to create custom forms with various types of fields, such as
text, description, number, date, and select. Each form can have a name and access level, and each field comes with
features like required, max, min, and maxlength. The resulting forms are fully functional and apply all specified
options and features, respecting access levels.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Features](#features)

## Prerequisites

Before you can use Angular Form Builder, ensure that you have the following prerequisites installed:

- Node.js (Version > 18)
- npm (Node Package Manager)

## Installation

To get started with Angular Form Builder, follow these steps:

1. Clone the project repository:

   ```bash
   git clone https://github.com/meemsafari/angular-form-builder.git

2. Navigate to the project directory:

   ```bash
   cd angular-form-builder

3. Install project dependencies:

   ```bash
   npm install

## Configuration

Before running the application, you may need to configure certain settings.

### Angular Version:

This project uses Angular 16.2.0. Ensure that you have the correct Angular version installed.

### Additional Dependencies:

The project relies on several libraries:

- ngx-toastr (Version 17.0.2)
- bootstrap (Version 5.3.2)
- uuid (Version 9.0.1)

### Development Mode:

To run the project in development mode, use the following command: ng serve

## Features

- Create custom forms with various field types.
- Configure field properties like required, max, min, and maxlength.
- Set form names and access levels.
- Display and interact with the created forms, applying all options and features.
